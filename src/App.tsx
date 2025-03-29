import "./App.css";
import Banner from "./components/banner";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/navbar";
import Landing from "./pages/Landing/landing";
import Pricing from "./pages/pricing";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Pricing />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
