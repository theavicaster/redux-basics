import { BUY_CAKE } from './cakeTypes';

// notice the default number for the payload
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
