import About from "../About/about";
import Slider from "../Slider/Slider";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <Slider />
      </header>
      <div id="polygon">
        <svg
          id="curvy-svg"
          className="desktop"
          width="100%"
          height="100%"
          viewBox="0 0 1440 188"
        >
          <path
            fill="none"
            d="M-27.2207 20.2441C-12.8221 41.9037 17.7936 72.7034 64.6605 98.982C122.068 131.171 203.858 156.576 310.094 150.09C551.303 135.366 694.242 -46.3453 1074.78 98.982C1344.98 202.17 1455 91.4742 1485.78 111.553"
            stroke="url(#paint0_linear_551_1787)"
            stroke-opacity="0.22"
            stroke-width="70"
          ></path>
          <path
            fill="none"
            id="curve2"
            d="M-28.2207 56.2441C-13.8221 77.9037 16.7936 108.703 63.6605 134.982C121.068 167.171 202.858 192.576 309.094 186.09C550.303 171.366 693.242 -10.3453 1073.78 134.982C1343.98 238.17 1454 127.474 1484.78 147.553"
            stroke="url(#paint1_linear_551_1787)"
            stroke-opacity="0.45"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_551_1787"
              x1="16.384"
              y1="72.445"
              x2="1261.58"
              y2="152.437"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1B9C80"></stop>
              <stop offset="0.3125" stop-color="#5f259f"></stop>
              <stop offset="0.661458" stop-color="#150e29"></stop>
              <stop offset="1" stop-color="#1758A9"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_551_1787"
              x1="15.8167"
              y1="93.8897"
              x2="1264.72"
              y2="225.375"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1B9C80"></stop>
              <stop offset="0.3125" stop-color="#5f259f"></stop>
              <stop offset="0.661458" stop-color="#150e29"></stop>
              <stop offset="1" stop-color="#1758A9"></stop>
            </linearGradient>
          </defs>
          <text fill="#fff" className="" dy="-12%">
            <textPath href="#curve2" startOffset="-11%">
              <tspan font-weight="bold">$2 milion.+</tspan> Winnings
              <animate
                attributeName="startOffset"
                from="-11%"
                to="110%"
                begin="0s"
                dur="16s"
                repeatCount="indefinite"
              ></animate>
            </textPath>
          </text>
          <text fill="#fff" className="" dy="-12%">
            <textPath href="#curve2" startOffset="-11%">
              <tspan font-weight="bold">10+</tspan> Tournaments
              <animate
                attributeName="startOffset"
                from="-11%"
                to="110%"
                begin="4s"
                dur="16s"
                repeatCount="indefinite"
              ></animate>
            </textPath>
          </text>
          <text fill="#fff" className="" dy="-12%">
            <textPath href="#curve2" startOffset="-11%">
              <tspan font-weight="bold">20+</tspan> Tournaments
              <animate
                attributeName="startOffset"
                from="-11%"
                to="110%"
                begin="8s"
                dur="16s"
                repeatCount="indefinite"
              ></animate>
            </textPath>
          </text>
          <text fill="#fff" className="" dy="-12%">
            <textPath href="#curve2" startOffset="-11%">
              <tspan font-weight="bold">1864</tspan> Live Players
              <animate
                attributeName="startOffset"
                from="-11%"
                to="110%"
                begin="12s"
                dur="16s"
                repeatCount="indefinite"
              ></animate>
            </textPath>
          </text>
          <text fill="#fff" className="" dy="-12%">
            <textPath href="#curve2" startOffset="-11%">
              <tspan font-weight="bold">Your Text 1</tspan> Additional Info
              <animate
                attributeName="startOffset"
                from="-11%"
                to="110%"
                begin="16s"
                dur="16s"
                repeatCount="indefinite"
              ></animate>
            </textPath>
          </text>

          <text fill="#fff" className="" dy="-12%">
            <textPath href="#curve2" startOffset="-30%">
              <tspan font-weight="bold">Your Text 2</tspan> More Details
              <animate
                attributeName="startOffset"
                from="-30%"
                to="110%"
                begin="20s"
                dur="16s"
                repeatCount="indefinite"
              ></animate>
            </textPath>
          </text>
        </svg>
        {/* ===================== Mobile Phone ========================= */}
        <svg
          className="mobile"
          id="curvy-svg-2"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
        >
          <path
            fill="none"
            stroke="url(#a)"
            stroke-opacity=".22"
            stroke-width="45"
            d="M-23 26.055c4.623 7.446 14.453 18.034 29.5 27.067 18.432 11.065 44.692 19.798 78.8 17.57 77.445-5.063 133.713-75.468 238.383-35.433C407.419 67.285 448.118 89.097 458 96"
          ></path>
          <path
            id="curve3"
            fill="none"
            stroke="url(#b)"
            stroke-opacity=".45"
            d="M-24 49.055c4.623 7.446 14.453 18.034 29.5 27.067 18.432 11.065 44.692 19.798 78.8 17.57 77.445-5.063 133.713-75.468 238.383-35.433C406.419 90.285 447.118 112.097 457 119"
          ></path>
          <defs>
            <linearGradient
              id="a"
              x1="-9"
              x2="391"
              y1="44"
              y2="68"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1B9C80"></stop>
              <stop offset=".313" stop-color="#5f259f"></stop>
              <stop offset=".661" stop-color="#150e29"></stop>
              <stop offset="1" stop-color="#1758A9"></stop>
            </linearGradient>
            <linearGradient
              id="b"
              x1="-10"
              x2="390"
              y1="67"
              y2="91"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1B9C80"></stop>
              <stop offset=".313" stop-color="#5f259f"></stop>
              <stop offset=".661" stop-color="#150e29"></stop>
              <stop offset="1" stop-color="#1758A9"></stop>
            </linearGradient>
          </defs>
          <text fill="white" className="" dy="-12%">
            <textPath href="#curve3" startOffset="-25%">
              <tspan font-weight="bold">3.08 Cr.+</tspan> Winnings{" "}
              <animate
                attributeName="startOffset"
                from="-25%"
                to="110%"
                begin="0s"
                dur="12s"
                repeatCount="indefinite"
              ></animate>
            </textPath>
          </text>
          <text fill="white" className="" dy="-12%">
            <textPath href="#curve3" startOffset="-25%">
              <tspan font-weight="bold">15+</tspan> Daily Freerolls
              <animate
                attributeName="startOffset"
                from="-25%"
                to="110%"
                begin="3s"
                dur="12s"
                repeatCount="indefinite"
              ></animate>
            </textPath>
          </text>
          <text fill="white" className="" dy="-12%">
            <textPath href="#curve3" startOffset="-25%">
              <tspan font-weight="bold">28+</tspan> Tournaments
              <animate
                attributeName="startOffset"
                from="-25%"
                to="110%"
                begin="6s"
                dur="12s"
                repeatCount="indefinite"
              ></animate>
            </textPath>
          </text>
          <text fill="white" className="" dy="-12%">
            <textPath href="#curve3" startOffset="-25%">
              <tspan font-weight="bold">1266</tspan> Live Players{" "}
              <animate
                attributeName="startOffset"
                from="-25%"
                to="110%"
                begin="9s"
                dur="12s"
                repeatCount="indefinite"
              ></animate>
            </textPath>
          </text>
        </svg>
      </div>
      <About />
    </>
  );
}

export default Header;
