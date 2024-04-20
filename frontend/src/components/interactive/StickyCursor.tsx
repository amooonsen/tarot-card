'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue as motionVaue, useSpring as springEffect, animate, transform } from 'framer-motion';

export default function StickyCurosr({ stickyElement }) {
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef(null);
  const cursorSize = isHovered ? 60 : 15;

// 마우스 위치와 스케일을 관리하는 객체 정의
const mouse = {
  x: motionVaue(0), // 마우스 x좌표
  y: motionVaue(0)  // 마우스 y좌표
}
const scale = {
  x: motionVaue(1), // 스케일 x값
  y: motionVaue(1)  // 스케일 y값
}

// 스무딩 효과를 위한 옵션
const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
const smoothMouse = {
  x: springEffect(mouse.x, smoothOptions), // x축 스무딩 적용
  y: springEffect(mouse.y, smoothOptions)  // y축 스무딩 적용
}

/**
 * 마우스 움직임을 관리합니다.
 * @param {MouseEvent} e - 마우스 이벤트
 */
const manageMouseMove = (e:MouseEvent) => {
  const { clientX, clientY } = e;
  const { left, top, height, width } = stickyElement.current.getBoundingClientRect()

  // stickyElement의 중간 위치값
  const center = { x: left + width / 2, y: top + height / 2 }

  if (isHovered) {
    // 마우스 포인터와 custom cursor의 중심과의 거리
    const distance = { x: clientX - center.x, y: clientY - center.y }

    // 거리에 따라 스트레치합니다.
    const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
    const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3])
    const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8])
    scale.x.set(newScaleX);
    scale.y.set(newScaleY);

    // 마우스를 stickyElement의 중심에 위치시키고, 마우스 포인터 쪽으로 약간 이동
    mouse.x.set((center.x - cursorSize / 2) + (distance.x * 0.1));
    mouse.y.set((center.y - cursorSize / 2) + (distance.y * 0.1));
  } else {
    // custom cursor를 stickyElement의 중심으로 이동
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }

  const manageMouseOver = (e: MouseEvent) => setIsHovered(true)
  const manageMouseLeave = (e: MouseEvent) => {
    setIsHovered(false)
    animate(cursor.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 }, { type: "spring" })
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    stickyElement.current.addEventListener("mouseenter", manageMouseOver)
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave)
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      stickyElement.current.removeEventListener("mouseenter", manageMouseOver)
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave)
      window.removeEventListener("mousemove", manageMouseMove)
    }
  }, [isHovered])

  return (
    <>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize
        }}
        ref={cursor}
        className='fixed w-[15px] h-[15px] bg-white rounded-full pointer-events-none'>
      </motion.div>
    </>
  )
}