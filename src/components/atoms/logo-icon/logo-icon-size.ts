type TLogoIconSizeDict = {
  [key in 'small' | 'medium']: [number, number];
};

type TLogoIconSize = keyof TLogoIconSizeDict;

const LOGO_ICON_SIZE: TLogoIconSizeDict = {
  small: [64, 33],
  medium: [81, 41],
};

export default LOGO_ICON_SIZE;
export type { TLogoIconSize };
