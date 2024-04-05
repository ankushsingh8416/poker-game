import "./footer.css";

function Footer() {
  return (
    <>
      <section id="footer">
        <div className="left__content">
          <p>Contact@betchain.app</p>
          {/* <ul id="social">
            <li>
              <a href="https://t.me/BetChainApp " target="_blank">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/betchainapp?t=oUTa5Gh0Rg1XGAXTUw7Q9A&s=09" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul> */}
        </div>
        <div className="center__content">
          <ul>
            <h2>
              <b>Socials</b>
            </h2>
            <li>
              <a
                href="https://x.com/betchainapp?t=oUTa5Gh0Rg1XGAXTUw7Q9A&s=09"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <a href="https://t.me/BetChainApp " target="_blank">
                Telegram
              </a>
            </li>
            {/* <li>
              <a href="javascript:;">Blog</a>
            </li> */}
          </ul>

          <ul>
            <h2>
              <b>Resources</b>
            </h2>
            <li>
              <a href="javascript:;">Docs</a>
            </li>
            <li>
              <a href="javascript:;">Chart</a>
            </li>
            {/* <li>
              <a href="javascript:;">FAQ</a>
            </li> */}
          </ul>
        </div>
        <div className="right__content">
          <div id="newsletter">
            <a href="javascript:;" target="_blank">
              Join Community
            </a>
          </div>
        </div>
      </section>
      <div className="last__footer">
        <p>© Copyright 2023 betchain. All Rights Reserved</p>
      </div>
    </>
  );
}
export default Footer;
