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

  const resetHomePath = (title: string) => {
    console.log(title)
    return title === 'Home' ? '/' : title.toLowerCase()
  }

  const handleMenuClick = (title: string) => {
    const url = resetHomePath(title);

    closeMenu();

    setTimeout(() => {
      router.push(url);
    }, 300)
  };

  return (
    // custom.scss
    <div 
    data-lenis-prevent
    className="all-menu">
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
                onClick={() => handleMenuClick(el.title)}
                className="el"
                key={index}
                variants={rotateX}
                {...mountAnim}
                custom={index}
              >
                <p>
                  {el.title}
                </p>
              </motion.div>
            )
          })
        }
      </div>
    </div>
  )
}


