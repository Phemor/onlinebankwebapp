export function InstagramSvg({ width, height, link }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      height={height}
      onClick={() => {
        window.location.href = link;
      }}
    >
      <path
        fill="#f48fb1"
        d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z"
      />
      <path
        fill="none"
        stroke="#18193f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3"
      />
      <path
        fill="none"
        stroke="#18193f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6"
      />
      <path
        fill="none"
        stroke="#18193f"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z"
      />
      <path
        fill="#18193f"
        d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z"
      />
    </svg>
  );
}

export function WhatsappSvg({ width, height, link }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      height={height}
      onClick={() => {
        window.location.href = link;
      }}
    >
      <circle cx="28" cy="28" r="17" fill="#a5d6a7" />
      <path
        fill="none"
        stroke="#18193f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M39.982,14.675	C36.773,9.186,30.817,5.499,24,5.499c-10.217,0-18.5,8.283-18.5,18.5c0,0.7,0.039,1.39,0.115,2.07"
      />
      <path
        fill="none"
        stroke="#18193f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M7.84,32.993l-2.301,8.238	c-0.21,0.75,0.481,1.442,1.232,1.232l8.242-2.3c2.662,1.483,5.724,2.336,8.987,2.336c10.217,0,18.5-8.283,18.5-18.5	c0-0.427-0.014-0.85-0.043-1.269"
      />
      <path
        fill="#18193f"
        d="M33.357,30.651c-0.398,1.116-2.348,2.191-3.224,2.269c-0.876,0.08-1.697,0.396-5.731-1.194	c-4.855-1.914-7.92-6.891-8.158-7.208c-0.239-0.32-1.95-2.589-1.95-4.939s1.234-3.506,1.672-3.982	C16.405,15.119,16.922,15,17.241,15c0.318,0,0.637,0,0.915,0.011c0.341,0.013,0.718,0.031,1.075,0.825	c0.425,0.945,1.353,3.307,1.472,3.546s0.199,0.519,0.04,0.836c-0.159,0.318-0.239,0.517-0.476,0.796	c-0.239,0.279-0.501,0.622-0.716,0.836c-0.239,0.237-0.488,0.498-0.21,0.974c0.279,0.478,1.236,2.042,2.656,3.307	c1.826,1.627,3.362,2.13,3.841,2.371c0.478,0.239,0.756,0.199,1.035-0.121c0.279-0.318,1.194-1.393,1.512-1.871	s0.637-0.398,1.075-0.239c0.438,0.159,2.786,1.315,3.263,1.554c0.478,0.239,0.796,0.358,0.915,0.557	C33.755,28.579,33.755,29.535,33.357,30.651z"
      />
    </svg>
  );
}

export function FacebookSvg({ width, height, extraStyles, link }) {
  return (
    <svg
      height={height}
      width={width}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512.001 512.001"
      xmlSpace="preserve"
      className={extraStyles}
      onClick={() => {
        window.location.href = link;
      }}
    >
      <circle className="fill-[#1D81CE]" cx="256.001" cy="256" r="247.916" />
      <path
        className="fill-[#126DB1]"
        d="M256.001,8.084c-10.96,0-21.752,0.72-32.337,2.099C345.304,26.029,439.243,130.04,439.243,256
      s-93.939,229.971-215.579,245.817c10.585,1.379,21.377,2.099,32.337,2.099c136.921,0,247.916-110.996,247.916-247.916
      S392.921,8.084,256.001,8.084z"
      />
      <path
        className="fill-[#FCFCFC]"
        d="M169.769,256.089v10.785H94.316v75.501h75.453v146.358c23.658,8.784,49.019,14.05,75.453,15.182
      v-161.54H363.79v-75.501H245.222v-10.785c0-41.698,33.781-64.715,75.453-64.715h43.116v-75.501h-43.116
      C243.285,115.874,169.769,178.65,169.769,256.089z"
      />
      <path d="M437.02,74.981C388.668,26.628,324.38,0,256.001,0C188.021,0,123.05,26.912,74.981,74.981
      C26.629,123.333,0.001,187.62,0.001,256c0,53.306,16.227,104.399,46.926,147.757c30.02,42.398,71.526,74.321,120.03,92.318
      c3.258,1.209,7.025,0.223,9.267-2.703c1.111-1.452,1.63-3.274,1.63-5.102V342.232c0-4.465-3.62-8.084-8.084-8.084h-67.368v-59.284
      h67.368c4.465,0,8.084-3.62,8.084-8.084V256c0-70.34,66.739-132.042,142.821-132.042h35.032v59.284h-35.032
      c-22.814,0-43.559,6.567-58.413,18.489c-16.436,13.192-25.124,31.958-25.124,54.269v10.779c0,4.465,3.62,8.084,8.084,8.084h31.872
      c4.465,0,8.084-3.62,8.084-8.084l0,0c0-4.465-3.62-8.084-8.084-8.084h-23.788V256c0-41.768,36.291-56.589,67.368-56.589h43.116
      c4.465,0,8.084-3.62,8.084-8.084v-75.453c0-4.465-3.62-8.084-8.084-8.084h-43.116c-39.518,0-79.573,15.72-109.895,43.129
      c-31.659,28.619-49.095,65.937-49.095,105.082v2.695H94.316c-4.465,0-8.084,3.62-8.084,8.084v75.453c0,4.465,3.62,8.084,8.084,8.084
      h67.368v126.248C74.182,439.076,16.169,351.887,16.169,256c0-132.244,107.588-239.832,239.83-239.832
      c132.098,0,239.833,107.734,239.833,239.833c0,132.243-107.588,239.83-239.832,239.83c-0.885,0-1.782-0.005-2.695-0.017V350.316
      H363.79c4.465,0,8.084-3.62,8.084-8.084v-75.453c0-4.465-3.62-8.084-8.084-8.084h-47.317c-4.465,0-8.084,3.62-8.084,8.084l0,0
      c0,4.465,3.62,8.084,8.084,8.084h39.233v59.284H245.222c-4.465,0-8.084,3.62-8.084,8.084v161.437c0,4.325,3.408,7.891,7.729,8.077
      c4.005,0.171,7.648,0.255,11.135,0.255c68.379,0,132.667-26.628,181.019-74.98c48.069-48.07,74.981-113.04,74.981-181.021
      C512.001,187.62,485.372,123.333,437.02,74.981z" />
    </svg>
  );
}
