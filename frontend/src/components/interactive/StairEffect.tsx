"use client"

import { motion } from "framer-motion"
import { height, mountAnim } from "@/constants/menus"
export default function StairEffect() {
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


