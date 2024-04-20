'use client';
import { useEffect } from 'react';
import { motion, useMotionValue as motionVaue, useSpring as springEffect } from 'framer-motion';

export default function StickyCurosr({ stickyElement }) {

  const cursorSize = 15;
  const mouse = {
    x: motionVaue(0),
    y: motionVaue(0)
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    x: springEffect(mouse.x, smoothOptions),
    y: springEffect(mouse.y, smoothOptions)
  }

  const manageMouseMove = e => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
    }
  }, [])

  return (
    <div>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className='fixed w-[15px] h-[15px] bg-black rounded-full pointer-events-none'>
      </motion.div>
    </div>
  )
}