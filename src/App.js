import "./App.css";
import Header from "./components/general/Header";
import "./assets/css/style.css";
import LandingPage from "./components/screens/landingpage/LandingPage";
import Footer from "./components/general/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <>
            {" "}
            <Header />
            <LandingPage />
            <Footer />
        </>
    );
}

export default App;
