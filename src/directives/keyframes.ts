interface TKeyFrames {
  [key: string]: any;
}

const keyframes: TKeyFrames = {
  default: [
    { transform: 'translate(1px, 1px) rotate(0deg)', offset: 0 },
    { transform: 'translate(-1px, -2px) rotate(-1deg)', offset: 0.1 },
    { transform: 'translate(-3px, 0px) rotate(1deg)', offset: 0.2 },
    { transform: 'translate(3px, 2px) rotate(0deg)', offset: 0.3 },
    { transform: 'translate(1px, -1px) rotate(1deg)', offset: 0.4 },
    { transform: 'translate(-1px, 2px) rotate(-1deg)', offset: 0.5 },
    { transform: 'translate(-3px, 1px) rotate(0deg)', offset: 0.6 },
    { transform: 'translate(3px, 1px) rotate(-1deg)', offset: 0.7 },
    { transform: 'translate(-1px, -1px) rotate(1deg)', offset: 0.8 },
    { transform: 'translate(1px, 2px) rotate(0deg)', offset: 0.9 },
    { transform: 'translate(1px, -2px) rotate(-1deg)', offset: 1 }
  ],
  horizontal: [
    { transform: 'translate(1px, 0px)', offset: 0 },
    { transform: 'translate(-1px, 0px)', offset: 0.1 },
    { transform: 'translate(-3px, 0px)', offset: 0.2 },
    { transform: 'translate(3px, 0px)', offset: 0.3 },
    { transform: 'translate(1px, 0px)', offset: 0.4 },
    { transform: 'translate(-1px, 0px)', offset: 0.5 },
    { transform: 'translate(-3px, 0px)', offset: 0.6 },
    { transform: 'translate(3px, 0px)', offset: 0.7 },
    { transform: 'translate(-1px, 0px)', offset: 0.8 },
    { transform: 'translate(1px, 0px)', offset: 0.9 },
    { transform: 'translate(1px, 0px)', offset: 1 }
  ],
  vertical: [
    { transform: 'translateY(1px)', offset: 0 },
    { transform: 'translateY(-1px)', offset: 0.1 },
    { transform: 'translateY(-3px)', offset: 0.2 },
    { transform: 'translateY(3px)', offset: 0.3 },
    { transform: 'translateY(1px)', offset: 0.4 },
    { transform: 'translateY(-1px)', offset: 0.5 },
    { transform: 'translateY(-3px)', offset: 0.6 },
    { transform: 'translateY(3px)', offset: 0.7 },
    { transform: 'translateY(-1px)', offset: 0.8 },
    { transform: 'translateY(1px)', offset: 0.9 },
    { transform: 'translateY(1px)', offset: 1 }
  ]
};

export default keyframes;
