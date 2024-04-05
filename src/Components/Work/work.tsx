import "./work.css";

function Work() {
  return (
    <>
<div id="work">
<div className="heading">
  <h1>How it Works</h1>
</div>
<div className="work_content">
  <div className="work_content_box">
  <div className="content_work">
    <h3>Gameplay Details </h3>
    <p>Each game allows bets of 0.1, 0.2, or 0.3 ETH. Engage in thrilling gameplay sessions where 2 to 4 players can join and bet according to the game's minimum amount. A nominal 20% commission fee from the total pot contributes to sustaining our platform, while the remaining amount is swiftly credited to the victorious player's wallet. </p>
  </div>
  </div>


  <div className="work_content_box">
  <div className="content_work">
    <h3>Deposit and Withdrawal </h3>
    <p>At Betchain, transactions happen seamlessly with ETH. You have the flexibility to use any DEX, CEX, or compatible wallets to deposit or withdraw ETH into your Betchain wallet. Your unique Betchain wallet is automatically created upon your first login using your email or social media account. These credentials grant you access every time you wish to play, ensuring a smooth and personalized gaming experience. </p>
  </div>
  </div>

  <div className="work_content_box">
   <div className="content_work">
   <h3>Gas Fee Sponsorship </h3>
    <p>Despite using ETH as our primary currency, we cover the gas fees for transactions within Betchain. Once your winnings are credited to your wallet, withdrawing funds to any other wallet is hassle-free, with no additional gas fees to worry about. Enjoy the convenience of transferring your earnings without the burden of transaction costs. </p>
   </div>
   <div className="work_count">
    <h1>5% <br /> Buy Tax</h1>
    <h1>5% <br /> Sell Tax</h1>
   </div>
  </div>

</div>
</div>
    </>
  );
}
export default Work;
