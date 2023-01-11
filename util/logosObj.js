const logosObj = {
  svg404: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 7v4a1 1 0 0 0 1 1h3m0-5v10m3-7v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2m0-4V8a1 1 0 0 0-1-1h-2m6 0v4a1 1 0 0 0 1 1h3m0-5v10M3 3l18 18"
    ></path>
  </svg>`,

  svgInternalError: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 36 36"
  ><path
      fill="currentColor"
      d="M22.2 15.3c-2 0-3.7-1.6-3.7-3.7H12V10h6.9c0-.1.1-.2.1-.2l1.2-2.2H12V6h9.2l2.3-4h-14C8.7 2 8 2.7 8 3.5V34h20V15.3h-5.8zM18 30.5c-1.5 0-2.8-1.2-2.8-2.8S16.5 25 18 25s2.8 1.2 2.8 2.8s-1.3 2.7-2.8 2.7zm5-7.9H13V21h10v1.6z"
      class="clr-i-solid--alerted clr-i-solid-path-1--alerted"
    ></path><circle
      cx="18"
      cy="27.8"
      r="1.2"
      fill="currentColor"
      class="clr-i-solid--alerted clr-i-solid-path-2--alerted"
    ></circle><path
      fill="currentColor"
      d="m26.9 1l-5.7 9.9c-.3.6-.1 1.4.5 1.7c.2.1.4.2.6.2h11.4c.7 0 1.3-.6 1.3-1.3c0-.2-.1-.4-.2-.6L29.1 1C28.7.4 28 .2 27.3.5c-.2.2-.3.3-.4.5z"
      class="clr-i-solid--alerted clr-i-solid-path-3--alerted clr-i-alert"
    ></path><path fill="none" d="M0 0h36v36H0z"></path>
  </svg>`,

  svgBars: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="currentColor"
      d="M21 15.61L19.59 17l-5.01-5l5.01-5L21 8.39L17.44 12L21 15.61M3 6h13v2H3V6m0 7v-2h10v2H3m0 5v-2h13v2H3Z"
    ></path>
  </svg>`,

  svgTelegram: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 32 32"
  ><path
      fill="currentColor"
      d="m29.919 6.163l-4.225 19.925c-.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744l-3.106 2.988c-.344.344-.631.631-1.294.631l.463-6.556L24.919 8.72c.519-.462-.113-.719-.806-.256l-14.75 9.288l-6.35-1.988c-1.381-.431-1.406-1.381.288-2.044l24.837-9.569c1.15-.431 2.156.256 1.781 2.013z"
    ></path>
  </svg>`,

  svgGithub: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><g fill="none"><path
        d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
      ></path><path
        fill="currentColor"
        d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581a9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"
      ></path></g>
    </svg>`,

  svgLinkedin: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="currentColor"
      d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
    ></path>
  </svg>`,

  svgSearch: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="currentColor"
      d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v7.81A6.48 6.48 0 0 0 15.5 10A6.5 6.5 0 0 0 9 16.5c0 2.31 1.21 4.35 3.03 5.5H6Z"
    ></path>
  </svg>`,

  svgBooks: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 512 512"
  ><path
      fill="currentColor"
      d="M84 480H28a12 12 0 0 1-12-12V92a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v376a12 12 0 0 1-12 12Zm156-272v-52a12 12 0 0 0-12-12H124a12 12 0 0 0-12 12v52ZM112 416v52a12 12 0 0 0 12 12h104a12 12 0 0 0 12-12v-52Zm0-176h128v144H112zm228 240h-72a12 12 0 0 1-12-12V44a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12v424a12 12 0 0 1-12 12Zm29-379.3l30 367.83a12 12 0 0 0 13.45 10.92l72.16-9a12 12 0 0 0 10.47-12.9L465 91.21a12 12 0 0 0-13.2-10.94l-72.13 7.51A12 12 0 0 0 369 100.7Z"
    ></path>
  </svg>`,

  svgCloseBox: `<svg
    class="close-menu"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="currentColor"
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3.4 14L12 13.4L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4L13.4 12l3.6 3.6l-1.4 1.4Z"
    ></path>
  </svg>`,

  svgMagnifyingBook: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="currentColor"
      d="M11.724 7.447a2.276 2.276 0 1 0 0 4.553a2.276 2.276 0 0 0 0-4.553ZM4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15Zm10.819 7.295a3.724 3.724 0 1 0-1.024 1.024l2.476 2.475l.067.058l.008.006a.724.724 0 0 0 .942-1.093l-2.47-2.47Z"
    ></path>
  </svg>`,

  svgNoBook: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 19a9 9 0 0 1 9 0a8.999 8.999 0 0 1 5.899-1.096M3 6a8.995 8.995 0 0 1 2.114-.884m3.8-.21C9.984 5.076 11.03 5.44 12 6a9 9 0 0 1 9 0M3 6v13m9-13v2m0 4v7m9-13v11M3 3l18 18"
    ></path>
  </svg>`,

  svgWarning: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="currentColor"
      d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8m-1 11v2h2v-2h-2m0-2h2V6h-2v6Z"
    ></path>
  </svg>`,

  svgAddBook: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="currentColor"
      d="M5.5 2A2.5 2.5 0 0 0 3 4.5v15A2.5 2.5 0 0 0 5.5 22h7.31a6.518 6.518 0 0 1-1.078-1.5H5.5a1 1 0 0 1-1-1h6.813a6.5 6.5 0 0 1 8.187-8.187V4.5A2.5 2.5 0 0 0 17 2H5.5ZM7 5h8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm16 12.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0Zm-5 .5l.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.503a.5.5 0 1 1 0 1h-2.502Z"
    ></path>
  </svg>`,

  svgEditBook: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="currentColor"
      d="M19.39 10.74L11 19.13V22H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v6.3c-.22.12-.43.26-.61.44M13 19.96V22h2.04l6.13-6.12l-2.04-2.05L13 19.96m9.85-6.49l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72Z"
    ></path>
  </svg>`,

  svgAddImage: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="currentColor"
      d="M18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2m-4.7 6H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v8.3c-.6-.2-1.3-.3-2-.3c-1.1 0-2.2.3-3.1.9L14.5 12L11 16.5l-2.5-3L5 18h8.1c-.1.3-.1.7-.1 1c0 .7.1 1.4.3 2Z"
    ></path>
  </svg>`,

  svgAdd: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"></path>
  </svg>`,

  svgPapaDelRapDominicano: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="currentColor"
      d="M16.84 2.73c-.39 0-.77.15-1.07.44l-2.12 2.12l5.3 5.31l2.12-2.1c.6-.61.6-1.56 0-2.14L17.9 3.17c-.3-.29-.68-.44-1.06-.44M12.94 6l-8.1 8.11l2.56.28l.18 2.29l2.28.17l.29 2.56l8.1-8.11m-14 3.74L2.5 21.73l6.7-1.79l-.24-2.16l-2.31-.17l-.18-2.32"
    ></path>
  </svg>`,

  svgTriangleWarning: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="currentColor"
      d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2L1 21Z"
    ></path>
  </svg>`,

  svgAuthentication: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    ><path
        fill="currentColor"
        d="M17 3h-3v3h-4V3H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5 5a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m4 8H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1M13 5h-2V1h2v4m3 14H8v-1h8v1m-4 2H8v-1h4v1Z"
      ></path>
    </svg>`,

  svgNewUser: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  ><path
      fill="currentColor"
      d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4Z"
    ></path>
  </svg>`,

  svgResetPassword: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M13 21q-1.85 0-3.462-.688q-1.613-.687-2.838-1.887L8.125 17q.95.925 2.2 1.462Q11.575 19 13 19q2.9 0 4.95-2.05Q20 14.9 20 12q0-2.9-2.05-4.95Q15.9 5 13 5q-2.9 0-4.95 2.05Q6 9.1 6 12v.175l1.825-1.825l1.425 1.4L5 16L.75 11.75l1.425-1.4L4 12.2V12q0-1.875.713-3.513q.712-1.637 1.925-2.85q1.212-1.212 2.85-1.925Q11.125 3 13 3t3.513.712q1.637.713 2.85 1.925q1.212 1.213 1.925 2.85Q22 10.125 22 12q0 3.75-2.625 6.375T13 21Zm-2-5q-.425 0-.712-.288Q10 15.425 10 15v-3q0-.425.288-.713Q10.575 11 11 11v-1q0-.825.588-1.413Q12.175 8 13 8t1.413.587Q15 9.175 15 10v1q.425 0 .713.287q.287.288.287.713v3q0 .425-.287.712Q15.425 16 15 16Zm1-5h2v-1q0-.425-.287-.713Q13.425 9 13 9t-.712.287Q12 9.575 12 10Z"
    ></path>
  </svg>
  `
};

module.exports = logosObj;
