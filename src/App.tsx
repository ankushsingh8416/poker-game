import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/navbar";
import Poker from "./Components/PokerTon/poker";
import Prize from "./Components/Prize/prize";
import Games from "./Components/Games/games";
import Footer from "./Components/Footer/footer";
import Faq from "./Components/FAQ/faq";
import Tokenomcis from "./Components/Tokenomcis/tokenomcis";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Prize />
      <Games />
      <Poker />
      <Tokenomcis />
      {/* <Advantage /> */}
      <Faq />
      <Footer />
    </>
  );
}

export default App;
