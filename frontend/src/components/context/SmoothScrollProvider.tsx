"use client"

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

// 함수 컴포넌트 반환 타입을 React.ReactElement로 명시
const SmoothScrollProvider: React.FC = (): React.ReactElement => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 1024) {
      const lenis = new Lenis();
  
      // Declare raf as a function expression assigned to a variable
      const raf = (time: number): void => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
  
      requestAnimationFrame(raf);
  
      return (): void => {
        lenis.destroy();
        // Cancel the last requested frame
        const frameId = requestAnimationFrame(raf);
        cancelAnimationFrame(frameId);
      };
    }
  }, []);
  

  return <></>
}

export default SmoothScrollProvider;
