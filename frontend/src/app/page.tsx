import Intro from "@/components/main/Intro";
import MainCardScroll from "@/components/main/MainCardScroll";
import MainDescription from "@/components/main/MainDescription";
import MainParallex from "@/components/main/MainParallex";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Intro/>
      <MainDescription/>
      <MainParallex/>
      <MainCardScroll/>
    </main>
  );
}
