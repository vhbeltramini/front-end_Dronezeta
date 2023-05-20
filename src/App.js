import './screens/LoginScreen/LoginScreen';
import DronezetaRoutes from './screens/Routes';
import Header from './screens/components/header/Header';
import Footer from './screens/components/footer/FooterHome';

function App() {
  return (
    <>
      <div className="app">
        <Header />
          <DronezetaRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
