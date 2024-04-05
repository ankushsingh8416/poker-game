import "./prize.css";

function Prize() {
  return (
    <>
      <div id="prize">
        <div className="prize_heading">
          <h1>
          About Betchain 
          </h1>
        </div>
        <div id="prize__countdown">
          <img
            src="./images/silver_crown.png"
            alt=""
          />
          <img
            src="./images/gold_crown.png"
            alt=""
          />
          <img
            src="./images/bronze_crown.png"
            alt=""
          />

          <div className="misson_box">
            <h1>Mission Statement</h1>
            <p>At Betchain, our mission is to redefine the gaming experience by seamlessly merging the excitement of casino games with the innovation of cryptocurrency. We strive to provide a secure, transparent, and entertaining platform where players can immerse themselves in a world of thrilling games on Telegram while enjoying the convenience of ETH payouts. Our commitment lies in delivering a fair, responsible, and rewarding gaming environment for every user. </p>
          </div>


          <div className="misson_box">
            <h1>Vision</h1>
            <p>Our vision at Betchain is to lead the evolution of online gaming by pioneering the integration of crypto-powered entertainment on Telegram. We aspire to be the go-to platform that sets new standards in gaming excellence, ensuring a diverse range of captivating games, transparent operations, and unparalleled user satisfaction. We aim to continually innovate, leveraging blockchain technology to empower users globally, creating an inclusive gaming community where excitement meets integrity</p>
          </div>


        </div>
      </div>
    </>
  );
}
export default Prize;
