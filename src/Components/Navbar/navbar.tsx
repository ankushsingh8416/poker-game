import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="javascript:;">
            <img src="./images/logo.jpeg" alt="" />
          </a>
        </div>
        <div className="link">
          <ul>
            <b className="contract">Contract address</b> 
            <p>000000SDFRtyuyt345</p>
            <div className="copy">
              <span><i className="fa-regular fa-copy"></i></span>
            </div>
          </ul>
        </div>
        <div className="social_media">
          <ul>
            <li>
              <a href="javascript:;"><i className="fa-brands fa-x-twitter"></i></a>
            </li>
            <li>
              <a href="javascript:;"><i className="fa fa-paper-plane"></i></a>
            </li>
            <li>
              <a href="javascript:;"><i className="fa-solid fa-chart-simple"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
