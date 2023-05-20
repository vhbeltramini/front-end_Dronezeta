import './screens/LoginScreen/LoginScreen';
import DronezetaRoutes from './screens/Routes';
import Header from './screens/components/header/MainHeader';
import Footer from './screens/components/footer/FooterHome';
import './App.css'

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="app">
          <Header />
            <div className="content">
              <DronezetaRoutes />
            </div>
          <div className="footer">
            <Footer />  
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
