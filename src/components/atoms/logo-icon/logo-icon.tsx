type LocoIconProps = {
  size: {
    width: number;
    height: number;
  };
};

function LogoIcon({size: { width, height }}: LocoIconProps) {
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
