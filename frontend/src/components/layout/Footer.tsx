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
      <div className="h-[250px] bg-black overflow-hidden">
        <motion.div style={{ y }} className="h-full bg-black flex justify-center gap-10 items-center p-10">
          {
            <ul>
              <li className="text-white">푸터컨텐츠</li>
            </ul>
          }
        </motion.div>
      </div>
    </footer>
  )
}
