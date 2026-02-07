import { keyframes, css } from "styled-components";

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInUpAnimation = css`
  animation: ${fadeInUp} 0.5s ease forwards;
`;

export const fadeInAnimation = css`
  animation: ${fadeIn} 0.4s ease forwards;
`;

export const staggerDelay = (index: number) => css`
  animation-delay: ${index * 0.1}s;
`;
