import { PlayerIDs } from '@deities/athena/map/Player.tsx';
import { css, keyframes } from '@emotion/css';
import getColor from './getColor.tsx';

const colors = PlayerIDs.slice(2);
const rainbow = keyframes`
  0%, 100% { color: ${getColor(1)}; }

  ${colors.map(
    (color, index) =>
      `${Math.floor(((index + 1) / (colors.length + 1)) * 100)}% { color: ${getColor(color)} }`,
  )}
`;

export const BackgroundRainbowAnimation = keyframes`
  0%, 100% {
    background-color: ${getColor(1)};
  }

  ${colors.map(
    (color, index) =>
      `${Math.floor(((index + 1) / (colors.length + 1)) * 100)}% { background-color: ${getColor(color)} }`,
  )};
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export default css`
  color: ${getColor(1)};
  animation:
    ${rainbow} ${colors.length * 3}s infinite,
    ${pulse} 1.5s infinite;
`;

export const RainbowStyle = css`
  color: ${getColor(1)};
  animation: ${rainbow} ${colors.length * 3}s infinite;
`;

export const SquarePulseStyle = css`
  animation: ${pulse} 1.5s infinite;
`;

export const PulseStyle = css`
  animation: ${keyframes`
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scaleX(1.05) scaleY(1.02);
    }
    `} 1.5s infinite;
`;
