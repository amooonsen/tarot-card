"use client"

import { useState, useEffect } from 'react';
import { debounce } from '@/utils/utils';

function useDeviceSettings() {
  const [isLargeEnough, setIsLargeEnough] = useState(window.innerWidth > 786);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsLargeEnough(window.innerWidth > 786);
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }, 300);

    window.addEventListener('resize', handleResize);
    handleResize();  // 초기 실행으로 현재 상태를 설정

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isLargeEnough, isMobile };
}

export default useDeviceSettings;
