"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"
import { globalMenus, rotateX, mountAnim, slideLeft } from "@/constants/menus"
import { useRouter } from "next/navigation"

type Props = {
  closeMenu: () => void;
}

export default function AllMenu({ closeMenu }: Props) {
  const router = useRouter()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleMenuClick = (url: string) => {
    closeMenu();
    setTimeout(() => {
      router.push(url);
    }, 500); 
  };

  const resetHomePath = (title: string) => {
    return title === 'Home' ? '/' : title.toLowerCase()
  }

  return (
    // custom.scss
    <div className="all-menu">
      <div className="svg-wrapper">
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => closeMenu()}
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
                onClick={() => handleMenuClick(el.title.toLowerCase())}
                className="el"
                key={index}
                variants={rotateX}
                {...mountAnim}
                custom={index}
              >
                <Link
                  href={resetHomePath(el.title)}>{el.title}</Link>
              </motion.div>
            )
          })
        }
      </div>
    </div>
  )
}


