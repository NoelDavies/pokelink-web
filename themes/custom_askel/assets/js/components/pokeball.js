Vue.component( "Pokeball", {
  template: `<div>
    <img src="./assets/images/pokeball_3_star.png" style="max-width: 100%; top: 50%; position: absolute; left: 0px; transform: translateY(-50%); opacity: 35%;" />
    <svg
      viewBox="0 0 2.1521999 4.0519995"
      style="height: 15px; position: absolute; top: 24px; right: 24px;">

        <path
        transform="matrix(0.004,0,0,-0.004,1.3162,0.03999969)"
        d="m 0,0 c 0,-198 209,-335 209,-533 0,-71 -16,-141 -42,-207 -5,-8 -12,-12 -19,-12 -13,0 -26,11 -23,27 26,61 42,126 42,192 0,104 -95,208 -167,283 l -16,0 0,250 16,0 z"
        id="path68"
        inkscape:connector-curvature="0"
        style="fill: #FEAA0A" />
      <rect
        transform="translate(1.2512,1.9999997)"
        x="-0.064999998"
        y="-2"
        width="0.13"
        height="3.3122001"
        ry="0.039999999"
        id="rect70"
        style="fill: #FEAA0A" />
      <a
        id="a72"
        transform="translate(-94.8335,-6.3453003)">
        <path
          transform="matrix(0.004,0,0,-0.004,94.8335,9.8453)"
          d="m 220,138 c 56,0 109,-29 109,-91 0,-72 -56,-121 -103,-149 -36,-21 -76,-36 -117,-36 -56,0 -109,29 -109,91 0,72 56,121 103,149 36,21 76,36 117,36 z"
          id="path74"
          inkscape:connector-curvature="0"
          style="fill: #FEAA0A" />
      </a>
    </svg>

    <svg
      viewBox="0 0 2.1521999 4.0519995"
      style="height: 15px; position: absolute; left: 24px; bottom: 24px;">

        <path
        transform="matrix(0.004,0,0,-0.004,1.3162,0.03999969)"
        d="m 0,0 c 0,-198 209,-335 209,-533 0,-71 -16,-141 -42,-207 -5,-8 -12,-12 -19,-12 -13,0 -26,11 -23,27 26,61 42,126 42,192 0,104 -95,208 -167,283 l -16,0 0,250 16,0 z"
        id="path68"
        inkscape:connector-curvature="0"
        style="fill: #FEAA0A" />
      <rect
        transform="translate(1.2512,1.9999997)"
        x="-0.064999998"
        y="-2"
        width="0.13"
        height="3.3122001"
        ry="0.039999999"
        id="rect70"
        style="fill: #FEAA0A" />
      <a
        id="a72"
        transform="translate(-94.8335,-6.3453003)">
        <path
          transform="matrix(0.004,0,0,-0.004,94.8335,9.8453)"
          d="m 220,138 c 56,0 109,-29 109,-91 0,-72 -56,-121 -103,-149 -36,-21 -76,-36 -117,-36 -56,0 -109,29 -109,91 0,72 56,121 103,149 36,21 76,36 117,36 z"
          id="path74"
          inkscape:connector-curvature="0"
          style="fill: #FEAA0A" />
      </a>
    </svg>

  </div>`,
  props: {
    topColor: {},
    bottomColor: {}
  }
})
