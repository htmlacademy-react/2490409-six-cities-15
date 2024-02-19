import MainScreen from '../../pages/main/main.tsx';

type AppProps = {
  rentOfferCount: number;
};

function App({rentOfferCount}: AppProps): JSX.Element {
  return (
    <MainScreen rentOfferCount={rentOfferCount} />
  );
}

export default App;
