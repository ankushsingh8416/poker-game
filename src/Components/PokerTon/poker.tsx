import "./poker.css";

function Poker() {
  return (
    <>
      <div id="poker">
      

        <div className="poker-card">
          <div className="poker_card_heading">
            <h1>HOW IT WORKS</h1>
          </div>
          <div className="poker-cards">
            <div className="poker_card-box">
              <div className="poker_icon">
                <img
                  src="./images/icon1.png"
                  alt=""
                />

              </div>
              <h2 className="poker_content">
                Gameplay Details
              </h2>
              <p>
                Each game allows bets of 0.1, 0.2, or 0.3 ETH. Engage in thrilling gameplay sessions where 2 to 4 players can join and bet according to the game's minimum amount. A nominal 20% commission fee from the total pot contributes to sustaining our platform, while the remaining amount is swiftly credited to the victorious player's wallet.
              </p>
            </div>

            <div className="poker_card-box">
              <div className="poker_icon">
                <img
                  src="./images/icon4.png"
                  alt=""
                />

              </div>
              <h2 className="poker_content">
                Deposit and Withdrawal
              </h2>
              <p>
                At Betchain, transactions happen seamlessly with ETH. You have the flexibility to use any DEX, CEX, or compatible wallets to deposit or withdraw ETH into your Betchain wallet. Your unique Betchain wallet is automatically created upon your first login using your email or social media account. These credentials grant you access every time you wish to play, ensuring a smooth and personalized gaming experience.
              </p>
            </div>

          

            <div className="poker_card-box">
              <div className="poker_icon">
                <img
                  src="./images/icon2.png"
                  alt=""
                />

              </div>
              <h2 className="poker_content">
                Gas Fee Sponsorship
              </h2>
              <p>
                Despite using ETH as our primary currency, we cover the gas fees for transactions within Betchain. Once your winnings are credited to your wallet, withdrawing funds to any other wallet is hassle-free, with no additional gas fees to worry about. Enjoy the convenience of transferring your earnings without the burden of transaction costs.
              </p>
            </div>
          </div>
        </div>
            <div className="download">
          <div className="icon">
            <svg
              className="floating mx-auto"
              width="100"
              height="100"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.4"
                cx="58.5131"
                cy="62.2158"
                r="37.8354"
                fill="url('#paint0_linear_1_4133')"
              ></circle>
              <circle
                opacity="0.4"
                cx="59.8952"
                cy="59.8016"
                r="46.9846"
                transform="rotate(17.8435 59.8952 59.8016)"
                stroke="url('#paint1_linear_1_4133')"
                stroke-width="1.08101"
              ></circle>
              <g filter="url('#filter0_i_1_4133')">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M57.9733 32.2358C73.173 32.2358 85.5391 44.6019 85.5391 59.8016C85.5391 75.0014 73.173 87.3674 57.9733 87.3674C42.7723 87.3674 30.4075 75.0026 30.4075 59.8016C30.4079 44.6019 42.7735 32.2358 57.9733 32.2358ZM64.8625 58.3618C64.1174 57.6166 62.9106 57.6166 62.1653 58.3618L59.8815 60.6461V42.6915C59.8815 41.6384 59.0272 40.7841 57.9741 40.7841C56.9205 40.7841 56.0667 41.637 56.0667 42.6915V60.6461L53.7828 58.3618C53.0377 57.6166 51.8309 57.6171 51.0856 58.3618C50.3409 59.1056 50.3419 60.3129 51.0856 61.0576L56.6254 66.5982C56.9831 66.9563 57.4682 67.1579 57.9749 67.1579C58.4808 67.1579 58.9654 66.9558 59.323 66.5982L64.8636 61.0576C65.6055 60.3133 65.6059 59.1061 64.8625 58.3618ZM41.5326 71.6728C41.5326 72.7259 42.3864 73.5802 43.44 73.5802H72.507C73.5605 73.5802 74.4144 72.7259 74.4144 71.6728V67.1949C74.4144 66.1413 73.5615 65.2875 72.507 65.2875C71.4524 65.2875 70.5996 66.1403 70.5996 67.1949V69.7663H45.3479V67.1949C45.3479 66.1418 44.4941 65.2875 43.4405 65.2875C42.3869 65.2875 41.5331 66.1403 41.5331 67.1949L41.5326 71.6728Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M57.9733 32.2358C73.173 32.2358 85.5391 44.6019 85.5391 59.8016C85.5391 75.0014 73.173 87.3674 57.9733 87.3674C42.7723 87.3674 30.4075 75.0026 30.4075 59.8016C30.4079 44.6019 42.7735 32.2358 57.9733 32.2358ZM64.8625 58.3618C64.1174 57.6166 62.9106 57.6166 62.1653 58.3618L59.8815 60.6461V42.6915C59.8815 41.6384 59.0272 40.7841 57.9741 40.7841C56.9205 40.7841 56.0667 41.637 56.0667 42.6915V60.6461L53.7828 58.3618C53.0377 57.6166 51.8309 57.6171 51.0856 58.3618C50.3409 59.1056 50.3419 60.3129 51.0856 61.0576L56.6254 66.5982C56.9831 66.9563 57.4682 67.1579 57.9749 67.1579C58.4808 67.1579 58.9654 66.9558 59.323 66.5982L64.8636 61.0576C65.6055 60.3133 65.6059 59.1061 64.8625 58.3618ZM41.5326 71.6728C41.5326 72.7259 42.3864 73.5802 43.44 73.5802H72.507C73.5605 73.5802 74.4144 72.7259 74.4144 71.6728V67.1949C74.4144 66.1413 73.5615 65.2875 72.507 65.2875C71.4524 65.2875 70.5996 66.1403 70.5996 67.1949V69.7663H45.3479V67.1949C45.3479 66.1418 44.4941 65.2875 43.4405 65.2875C42.3869 65.2875 41.5331 66.1403 41.5331 67.1949L41.5326 71.6728Z"
                  fill="url('#paint2_linear_1_4133')"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_i_1_4133"
                  x="30.4072"
                  y="32.2358"
                  width="55.1318"
                  height="59.4556"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="4.32405"></feOffset>
                  <feGaussianBlur stdDeviation="2.16202"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.937255 0 0 0 0 0.733333 0 0 0 1 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_1_4133"
                  ></feBlend>
                </filter>
                <linearGradient
                  id="paint0_linear_1_4133"
                  x1="58.5131"
                  y1="31.9475"
                  x2="55.8106"
                  y2="153.021"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1B80FE" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="#00EFBB"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_4133"
                  x1="59.8952"
                  y1="12.2765"
                  x2="59.8952"
                  y2="107.327"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1B80FE" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="#00EFBB"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1_4133"
                  x1="67.0034"
                  y1="34.9291"
                  x2="49.8507"
                  y2="84.5603"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00EFBB"></stop>
                  <stop offset="1" stop-color="#1B80FE"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h1>5%</h1>
            <p>Buy Tax</p>
          </div>
          <div className="icon">
            <svg
              width="100"
              height="100"
              viewBox="0 0 121 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.4"
                cx="59.2534"
                cy="59.8015"
                r="37.8354"
                fill="url('#paint0_linear_1_4135')"
              ></circle>
              <circle
                opacity="0.4"
                cx="60.6373"
                cy="59.8016"
                r="46.9846"
                transform="rotate(17.8435 60.6373 59.8016)"
                stroke="url('#paint1_linear_1_4135')"
                stroke-width="1.08101"
              ></circle>
              <g filter="url('#filter0_i_1_4135')">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M71.3878 60.5597C71.3878 66.9864 66.1776 72.1962 59.7511 72.1962C53.3245 72.1962 48.1143 66.9864 48.1143 60.5597C48.1143 54.1326 53.3245 48.9226 59.7511 48.9226C66.1776 48.9226 71.3878 54.1324 71.3878 60.5597Z"
                  fill="url('#paint2_linear_1_4135')"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M71.3878 60.5597C71.3878 66.9864 66.1776 72.1962 59.7511 72.1962C53.3245 72.1962 48.1143 66.9864 48.1143 60.5597C48.1143 54.1326 53.3245 48.9226 59.7511 48.9226C66.1776 48.9226 71.3878 54.1324 71.3878 60.5597Z"
                  fill="#615B5B"
                  fill-opacity="0.2"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M88.8429 63.4686C88.8429 68.2885 85.3696 72.1962 81.0847 72.1962C76.8005 72.1962 73.3271 68.2885 73.3271 63.4686C73.3271 58.6486 76.8005 54.741 81.0847 54.741C85.3696 54.741 88.8429 58.6486 88.8429 63.4686Z"
                  fill="url('#paint3_linear_1_4135')"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M88.8429 63.4686C88.8429 68.2885 85.3696 72.1962 81.0847 72.1962C76.8005 72.1962 73.3271 68.2885 73.3271 63.4686C73.3271 58.6486 76.8005 54.741 81.0847 54.741C85.3696 54.741 88.8429 58.6486 88.8429 63.4686Z"
                  fill="#615B5B"
                  fill-opacity="0.2"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M46.1739 63.4686C46.1739 68.2885 42.7006 72.1962 38.4163 72.1962C34.1315 72.1962 30.6582 68.2885 30.6582 63.4686C30.6582 58.6486 34.1315 54.741 38.4163 54.741C42.7006 54.741 46.1739 58.6486 46.1739 63.4686Z"
                  fill="url('#paint4_linear_1_4135')"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M46.1739 63.4686C46.1739 68.2885 42.7006 72.1962 38.4163 72.1962C34.1315 72.1962 30.6582 68.2885 30.6582 63.4686C30.6582 58.6486 34.1315 54.741 38.4163 54.741C42.7006 54.741 46.1739 58.6486 46.1739 63.4686Z"
                  fill="#615B5B"
                  fill-opacity="0.2"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M80.1362 95.4696H91.1824C91.5908 95.4696 91.9833 95.3094 92.2715 95.0232C92.5608 94.7379 92.7228 94.3497 92.7228 93.9456V84.8023C92.7228 78.9112 87.8959 74.1355 81.9412 74.1355H75.7807C75.6079 74.1355 75.4372 74.1401 75.2676 74.1477C78.3989 76.6621 80.4013 80.5006 80.4013 84.8023V93.9455C80.4013 94.47 80.31 94.9849 80.1362 95.4696Z"
                  fill="url('#paint5_linear_1_4135')"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M80.1362 95.4696H91.1824C91.5908 95.4696 91.9833 95.3094 92.2715 95.0232C92.5608 94.7379 92.7228 94.3497 92.7228 93.9456V84.8023C92.7228 78.9112 87.8959 74.1355 81.9412 74.1355H75.7807C75.6079 74.1355 75.4372 74.1401 75.2676 74.1477C78.3989 76.6621 80.4013 80.5006 80.4013 84.8023V93.9455C80.4013 94.47 80.31 94.9849 80.1362 95.4696Z"
                  fill="#615B5B"
                  fill-opacity="0.2"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M77.2082 84.8023V93.9456C77.2082 94.3497 77.0419 94.7379 76.7433 95.0232C76.4469 95.3094 76.042 95.4696 75.6218 95.4696H43.8843C43.4641 95.4696 43.0592 95.3094 42.7627 95.0232C42.4642 94.7379 42.2979 94.3497 42.2979 93.9456V84.8023C42.2979 78.9112 47.2708 74.1355 53.4053 74.1355H66.1002C72.2347 74.1355 77.2077 78.9112 77.2077 84.8023H77.2082Z"
                  fill="url('#paint6_linear_1_4135')"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M77.2082 84.8023V93.9456C77.2082 94.3497 77.0419 94.7379 76.7433 95.0232C76.4469 95.3094 76.042 95.4696 75.6218 95.4696H43.8843C43.4641 95.4696 43.0592 95.3094 42.7627 95.0232C42.4642 94.7379 42.2979 94.3497 42.2979 93.9456V84.8023C42.2979 78.9112 47.2708 74.1355 53.4053 74.1355H66.1002C72.2347 74.1355 77.2077 78.9112 77.2077 84.8023H77.2082Z"
                  fill="#615B5B"
                  fill-opacity="0.2"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44.2364 74.1477C44.0667 74.1401 43.896 74.1355 43.7233 74.1355H37.5628C31.6082 74.1355 26.7812 78.9112 26.7812 84.8023V93.9456C26.7812 94.3497 26.9432 94.7379 27.2325 95.0232C27.5208 95.3094 27.9132 95.4696 28.3216 95.4696H39.3678C39.194 94.9849 39.1027 94.4701 39.1027 93.9456V84.8023C39.1027 80.5005 41.1051 76.6621 44.2364 74.1477Z"
                  fill="url('#paint7_linear_1_4135')"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44.2364 74.1477C44.0667 74.1401 43.896 74.1355 43.7233 74.1355H37.5628C31.6082 74.1355 26.7812 78.9112 26.7812 84.8023V93.9456C26.7812 94.3497 26.9432 94.7379 27.2325 95.0232C27.5208 95.3094 27.9132 95.4696 28.3216 95.4696H39.3678C39.194 94.9849 39.1027 94.4701 39.1027 93.9456V84.8023C39.1027 80.5005 41.1051 76.6621 44.2364 74.1477Z"
                  fill="#615B5B"
                  fill-opacity="0.2"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_i_1_4135"
                  x="26.7812"
                  y="48.9226"
                  width="65.9414"
                  height="50.8712"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="4.32405"></feOffset>
                  <feGaussianBlur stdDeviation="2.16202"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.937255 0 0 0 0 0.733333 0 0 0 1 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_1_4135"
                  ></feBlend>
                </filter>
                <linearGradient
                  id="paint0_linear_1_4135"
                  x1="59.2534"
                  y1="29.5331"
                  x2="56.5508"
                  y2="150.606"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1B80FE" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="#00EFBB"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_4135"
                  x1="60.6373"
                  y1="12.2765"
                  x2="60.6373"
                  y2="107.327"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1B80FE" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="#00EFBB"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1_4135"
                  x1="55.939"
                  y1="50.0595"
                  x2="63.18"
                  y2="71.0112"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00EFBB"></stop>
                  <stop offset="1" stop-color="#1B80FE"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1_4135"
                  x1="78.5437"
                  y1="55.5937"
                  x2="84.4848"
                  y2="70.8743"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00EFBB"></stop>
                  <stop offset="1" stop-color="#1B80FE"></stop>
                </linearGradient>
                <linearGradient
                  id="paint4_linear_1_4135"
                  x1="35.8747"
                  y1="55.5937"
                  x2="41.8159"
                  y2="70.8743"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00EFBB"></stop>
                  <stop offset="1" stop-color="#1B80FE"></stop>
                </linearGradient>
                <linearGradient
                  id="paint5_linear_1_4135"
                  x1="81.1362"
                  y1="75.1777"
                  x2="88.8426"
                  y2="93.422"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00EFBB"></stop>
                  <stop offset="1" stop-color="#1B80FE"></stop>
                </linearGradient>
                <linearGradient
                  id="paint6_linear_1_4135"
                  x1="54.035"
                  y1="75.1777"
                  x2="58.3819"
                  y2="95.7592"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00EFBB"></stop>
                  <stop offset="1" stop-color="#1B80FE"></stop>
                </linearGradient>
                <linearGradient
                  id="paint7_linear_1_4135"
                  x1="32.6498"
                  y1="75.1777"
                  x2="40.3563"
                  y2="93.422"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00EFBB"></stop>
                  <stop offset="1" stop-color="#1B80FE"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h1>5%</h1>
            <p>Sell Tax</p>

          </div>
        </div> 


      </div>
    </>
  );
}

export default Poker;
