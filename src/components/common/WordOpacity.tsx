'use client';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface WordOpacityProps {
  paragraph: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const WordOpacity: React.FC<WordOpacityProps> = ({ paragraph }) => {
  const container = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.8'],
  });

  const words = paragraph.split(' ');

  return (
    <span ref={container}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </span>
  );
};

export default WordOpacity;

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity: opacity }}>{children} </motion.span>;
};
