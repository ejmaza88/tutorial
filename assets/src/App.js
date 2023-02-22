import './App.css';
import HeaderComp from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <HeaderComp />
      <Sidebar />
      <main id="main" className="main">

      </main>
      <Footer />
    </div>
  );
}

export default App;
