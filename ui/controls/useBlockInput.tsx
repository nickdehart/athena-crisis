import { useEffect } from 'react';
import Input, { InputLayer } from './Input.tsx';

export default function useBlockInput(
  block: InputLayer,
  condition: boolean | undefined = true,
) {
  useEffect(() => {
    if (condition) {
      return Input.block(block);
    }
  }, [block, condition]);
}
