'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './parallax.module.scss'
import Image from 'next/image';

// framer
import { useTransform, useScroll, MotionValue, motion } from 'framer-motion';
// constants
import { tarotCards } from '@/constants/tarots';
// types
import { CardInfo } from '@/types/TypeCommon';

// assets
import MainVisual from '../../../public/images/main_visual02.jpg'

export default function Home() {

  const parallexContents = useRef(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { height } = dimension
  const { scrollYProgress } = useScroll({
    target: parallexContents,
    offset: ['start end', 'end start']
  })

  const parallexY01 = useTransform(scrollYProgress, [0, 1], [10, height * 1.3])
  const parallexY02 = useTransform(scrollYProgress, [0, 1], [10, height * 1.65])
  const parallexY03 = useTransform(scrollYProgress, [0, 1], [0, height * 0.7])
  const parallexY04 = useTransform(scrollYProgress, [0, 1], [20, height * 1.1])

  useEffect(() => {
    const resize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", resize)
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <section className='w-full'>
      <div className={styles.spacer}></div>
      <div ref={parallexContents} className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Column
            y={parallexY01}
            images={[tarotCards[3], tarotCards[1], tarotCards[11]]} />
          <Column
            y={parallexY02}
          images={[tarotCards[0], tarotCards[18], tarotCards[9]]} />
          <Column
            y={parallexY03}
          images={[tarotCards[6], tarotCards[5], tarotCards[2]]} />
          <Column
            y={parallexY04}
          images={[tarotCards[14], tarotCards[2], tarotCards[2]]} />
        </div>
      </div>
      <div className={styles.spacer}>
      <Image
        className='object-cover grayscale scale-50'
        src={MainVisual}
        alt='main-background'
        fill
        aria-hidden
        placeholder='blur'
        loading="lazy"
        />
      </div>
    </section>
  )
}

const Column = ({ images, y }: {images: CardInfo[], y:MotionValue<number>}) => {
  return (
    <motion.div
      className={styles.column}
      style={{ y }}
    >
      {
        images.map((image: CardInfo, i:number) => {
          return <div key={i} className={styles.imageContainer}>
            <Image
              src={`/images/${image.srcName}`}
              alt={`/images/${image.name}`}
              fill
              loading='lazy'
            />
          </div>
        })
      }
    </motion.div>
  )
}