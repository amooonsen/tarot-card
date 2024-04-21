import React, { useEffect, useState, useRef, MutableRefObject } from 'react';
import { motion, useMotionValue, useSpring, animate, transform } from 'framer-motion';

type TransformProps = {
  rotate: string;
  scaleX: number;
  scaleY: number;
}

type Poistion = {
  x: number;
  y: number;
}

type Props = {
  stickyElement: MutableRefObject<HTMLDivElement>
}

export default function StickyCursor({ stickyElement }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef(null);
  const cursorSize = isHovered ? 60 : 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };
  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1)
  };
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const rotate = (distance: Poistion) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 })
  }

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, height, width } = stickyElement.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      const distance = { x: clientX - center.x, y: clientY - center.y }

      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);
      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);

      rotate(distance)

    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => setIsHovered(true);
  const manageMouseLeave = () => {
    setIsHovered(false);
    animate(cursor.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1, type: "spring" });
  };

  const template = ({ rotate, scaleX, scaleY }: TransformProps) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
  }

  useEffect(() => {
    const currentElement = stickyElement.current;

    window.addEventListener('mousemove', manageMouseMove);
    currentElement.addEventListener('mouseenter', manageMouseOver);
    currentElement.addEventListener('mouseleave', manageMouseLeave);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      currentElement.removeEventListener('mouseenter', manageMouseOver);
      currentElement.removeEventListener('mouseleave', manageMouseLeave);
    };
  }, [isHovered]);

  return (
    <motion.div
      id='stickyCursor'
      transformTemplate={template}
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

  );
}
