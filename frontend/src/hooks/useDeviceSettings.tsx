import { useState, useEffect } from 'react';

function useDeviceSettings() {
  const [isLargeEnough, setIsLargeEnough] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 클라이언트 측에서만 실행
    const updateDeviceSettings = () => {
      setIsLargeEnough(window.innerWidth > 786);
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    updateDeviceSettings();
    window.addEventListener('resize', updateDeviceSettings);

    return () => {
      window.removeEventListener('resize', updateDeviceSettings);
    };
  }, []);

  return { isLargeEnough, isMobile };
}

export default useDeviceSettings;
