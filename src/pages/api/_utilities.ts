import { nanoid } from 'nanoid';

// At 1000 IDs / hour, will take ~17 years before 1% probability of collision https://zelark.github.io/nano-id-cc/
export const generateUniqueID = (): string => nanoid(10);
