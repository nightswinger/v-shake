const random = (value: number) => {
  return value !== 0 ? Math.floor(Math.random() * value) - (value * 0.5) : 0
};

const generator = ({
  h = 5,
  v = 5,
  r = 0,
  precision = 0.1,
} = {}): Keyframe[] => {
  const interval = (precision > 0 && precision < 1) ? 100 * precision : 10;
  let step = interval * 0.01;

  let keyframes: Keyframe[] = [];
  while (step < 100) {
    const x = random(h);
    const y = random(v);
    const rotate = random(r);

    const kf = {
      transform: `translate(${x}px,${y}px) rotate(${rotate}deg)`,
      offset: step / 100
    };
    keyframes.push(kf);
    step += interval;
  }

  return keyframes;
};

export const generateKeyframes = (type: string) => {
  switch (type) {
    case 'little':
      return generator({ h: 3, v: 3, r: 2 });
    case 'hard':
      return generator({ h: 15, v: 15, r: 7 });
    case 'horizontal':
      return generator({ h: 10, v: 0, r: 0 });
    case 'vertical':
      return generator({ h: 0, v: 10, r: 0 });
    case 'rotate':
      return generator({ h: 0, v: 0, r: 12 });
    default:
      return generator({ h: 7, v: 7, r: 3 });
  }
};
