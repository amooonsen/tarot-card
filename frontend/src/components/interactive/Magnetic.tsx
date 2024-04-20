import { useRef, useState } from 'react'
import { motion } from 'framer-motion';

type Props = { children: React.ReactNode }

export default function Magnetic({ children }: Props) {
  // ref에 타입 선언 하지 않으면 never 에러 발생
  // useRef()의 경우, 괄호 안에 아무 값도 제공되지 않으면 TypeScript는 반환되는 
  // ref 객체의 current 속성이 어떤 타입인지 결정할 수 없다. 
  // 따라서, current의 타입을 undefined로 추론할 수도 있고, 
  // 명시적인 타입 선언이 없을 경우 never로 추론될 수 있다.
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    }
};

const reset = () => {
    setPosition({ x: 0, y: 0 });
};

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 350, damping: 5, mass: 0.5 }}
    >
      {children}
    </motion.div>
  )
}