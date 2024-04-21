"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

const mountAnim = { 'initial': 'initial', 'animate': 'enter', 'exit': 'exit' }

const height = {
  initial: {
    height: 0
  },
  enter: (i: number) => ({
    height: "100%",
    transition: { duration: 0.5, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] }
  }),
  exit: (i: number) => ({
    height: 0,
    transition: { duration: 0.3, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] }
  })
}

const background = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 0.5,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
  }
}

type Props = {
  closeMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AllMenu({closeMenu}:Props) {
  useEffect(() => {
    console.log(closeMenu)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[10] flex h-screen transition-all pointer-events-none">
      {
        [...Array(5)].map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={height}
              {...mountAnim}
              custom={4 - index}
              className='w-[20vw] h-full bg-[#673AB7]'
            >
            </motion.div>
          )
        })
      }
      {/* <motion.div
        variants={background}
        {...mountAnim}
        className='w-full h-full absolute bg-white'>
      </motion.div> */}

    </div>
  )
}


