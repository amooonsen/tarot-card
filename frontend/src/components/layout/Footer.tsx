"use client"

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function Footer() {
  const container = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  })
  const y = useTransform(scrollYProgress, [0, 1], [-225, 0])
  return (
    <footer id='footer' ref={container}>
      <div className="h-[70vh] min-h-[600px] bg-black overflow-hidden">
        <motion.div style={{ y }} className="h-full flex flex-col items-center justify-between p-10 bg-black text-white">
          <div className="flex">
            <div>
              <strong>Copyrights</strong>
              <span>Amooonsen all rights resolved</span>
            </div>
            <div>
              <span>Contact</span>
              <span>newabekar@naver.com</span>
            </div>
            <div>
              <span>Contact</span>
              <span>newabekar@naver.com</span>
            </div>
            <ul className="">
              <li>깃허브</li>
              <li>깃허브</li>
            </ul>
          </div>
          <div className="text-[13vw] whitespace-nowrap">Find Your Destiny</div>
        </motion.div>
      </div>
    </footer>
  )
}
