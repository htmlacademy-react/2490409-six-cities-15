type LogoIconSizeDictType = {
  [key in 'small' | 'medium']: [number, number];
};

type LogoIconSizeType = keyof LogoIconSizeDictType;

const LOGO_ICON_SIZE: LogoIconSizeDictType = {
  small: [64, 33],
  medium: [81, 41],
};

export default LOGO_ICON_SIZE;
export type { LogoIconSizeType };
