import './screens/LoginScreen/LoginScreen';
import DronezetaRoutes from './screens/Routes';
import Header from './screens/components/header/Header';
import Footer from './screens/components/footer/FooterHome';
import { ApiProvider } from './screens/components/ApiContext/ApiProvider';

function App() {
  return (
    <>
      <div className="app">
        <ApiProvider>
          <Header />
            <DronezetaRoutes />
          <Footer />
        </ApiProvider>
      </div>
    </>
  );
}

export default App;
