import hero from './hero/*.png';
import pizza from './*.png';

export const pizzaFrames: { [key: string]: Array<string> } = {
  hero: Object.values(hero),
  pizza: Object.values(pizza),
};
