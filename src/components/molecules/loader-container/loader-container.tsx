import Loader from '../../atoms/loader/loader.tsx';

function LoaderContainer() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
      <Loader />
    </div>
  );
}

export default LoaderContainer;
