'use client';
import { Body, LineMask } from './styles';
import { useInView, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const MaskText = ({ phrases, tag }: { phrases: string[]; tag: string }) => {
  const animate = {
    initial: {
      y: '100%',
    },
    open: (i: number) => ({
      y: '0%',
      transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: '-10%' });
  return (
    <Body ref={body}>
      {phrases.map((phrase, index) => {
        return (
          <LineMask key={index}>
            {tag === 'h1' ? (
              <motion.h1
                variants={animate}
                initial="initial"
                animate={isInView ? 'open' : ''}
                custom={index}
              >
                {phrase}
              </motion.h1>
            ) : (
              <motion.p
                variants={animate}
                initial="initial"
                animate={isInView ? 'open' : ''}
                custom={index}
              >
                {phrase}
              </motion.p>
            )}
          </LineMask>
        );
      })}
    </Body>
  );
};

export default MaskText;
