'use client';

import { useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCursor from "../interactive/StickyCursor";
import useDeviceSettings from "@/hooks/useDeviceSettings";

type Props = {
  children: React.ReactNode
}

export default function ClientProvider({ children }: Props) {
  const stickyElement = useRef(null)
  const { isLargeEnough, isMobile } = useDeviceSettings();
  return (
    <>
      <Header ref={stickyElement} />
      {children}
      <Footer />
      {isLargeEnough && !isMobile && <StickyCursor stickyElement={stickyElement} />}
    </>
  )
}