import "./tokenomcis.css";

function Tokenomcis() {
  return (
    <>
      <div id="tokenomcis">
        <div className="poker_card_heading">
          <h1>TOKENOMICS</h1>
        </div>
        <div className="tokenomcis_box">
          <h4>Contract Address</h4>
          <h1>DSFJKJHSDSFGHJKgzdxfhh07654</h1>
          <div className="toko_data">
            {/* <div>
                <p>Symbol</p>
                <p>$0xGas</p>
            </div>
            <div>
                <p>Decimal</p>
                <p>18</p>
            </div>
            <div>
                <p>Network</p>
                <p>ETHEREUM ERC-20</p>
            </div> */}
            <div>
              <p>Supply</p>
              <p>10 million</p>
            </div>
          </div>
        </div>
        <div className="sell_box">
          <div className="sellBoxes">
            <h1>5%</h1>
            <p>Buy Tax</p>
          </div>
          <div className="sellBoxes">
            <h1>5%</h1>
            <p>Sell Tax</p>
          </div>

        </div>
      </div>
    </>
  );
}
export default Tokenomcis;
