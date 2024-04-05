import "./about.css";

function About() {
  return (
    <>
      <div id="About">
       <div className="About-card">
          <div className="About_card_heading">
            <h1>WELCOME TO BETCHAIN</h1>
            <h2>Play. Win. Earn ETH. Gaming revolutionized on Telegram with Betchain </h2>
            <p>
            Welcome to Betchain, where gaming meets the future. Play and win thrilling casino games seamlessly on Telegram, enjoying the excitement at your fingertips. With payouts in ETH, your victories transcend boundaries. Experience the convenience of our platform where, despite using ETH, the gas fees for transactions are fully covered by Betchain. Join us for an immersive gaming experience where crypto meets entertainment! 
            </p>
          </div>
        </div>
       <div className="head_btn">
       <div className="white_btn">
          <a href="./Betchain.pdf" target="_blank">Whitepaper</a>
        </div>
        <div className="About_btn">
          <a href="https://t.me/BetChainApp" target="_blank">PLAY NOW</a>
        </div>

       </div>


      </div>
    </>
  );
}

export default About;
