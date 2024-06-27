import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div style={{ marginTop: '20px' }}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
