'use client';

import { useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCurosr from "../interactive/StickyCursor";

type Props = {
  children: React.ReactNode
}

export default function ClientProvider({ children }: Props) {
  const stickyElement = useRef(null)
  return (
    <>
      <Header ref={stickyElement}/>
      {children}
      <Footer />
      <StickyCurosr stickyElement={stickyElement}/>
    </>
  )
}