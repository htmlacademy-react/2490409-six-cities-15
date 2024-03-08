import { LOGO_ICON_SIZE } from '..';

type LocoIconProps = {
  size: keyof typeof LOGO_ICON_SIZE;
};

function LogoIcon({size}: LocoIconProps) {
  const [width, height] = LOGO_ICON_SIZE[size];

  return (
    <img
      className="footer__logo"
      src="img/logo.svg"
      alt="6 cities logo"
      width={width}
      height={height}
    />
  );
}

export default LogoIcon;
