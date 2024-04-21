"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"
import { globalMenus, rotateX, mountAnim, slideLeft } from "@/constants/menus"

type Props = {
  closeMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AllMenu({ closeMenu }: Props) {
  useEffect(() => {
    console.log(closeMenu)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    // custom.scss
    <div className="all-menu">
      <div
        className="svg-wrapper"
        onClick={() => closeMenu}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>
      <div className="all-menu-contents">
        {
          globalMenus.map((el, index) => {
            return (
              <motion.div
                onClick={() => closeMenu}
                className="el"
                key={index}
                variants={rotateX}
                {...mountAnim}
                custom={index}
              >
                <Link href={el.title.toLowerCase()}>{el.title}</Link>
              </motion.div>
            )
          })
        }
      </div>
    </div>
  )
}


