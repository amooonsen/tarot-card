"use client"

import { motion } from "framer-motion"
import { height, mountAnim, background } from "@/constants/menus"
export default function StairEffect() {
  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[10] flex h-screen transition-all pointer-events-none">
      {
        [...Array(8)].map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={height}
              {...mountAnim}
              custom={7 - index}
              className='w-[12.5vw] h-full bg-[#800020]'
            >
            </motion.div>
          )
        })
      }
      <motion.div
        variants={background}
        {...mountAnim}
        className='w-full h-full absolute bg-[#800020]'>
      </motion.div>

    </div>
  )
}


