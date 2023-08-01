/* @import 'tailwindcss/base'; */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* src/styles.css */
@layer components {
  .exchangeWrite {
    transition:
      opacity 0.3s linear,
      visibility 0.3s linear;
  }
  .plusButton:hover + .exchangeWrite {
    visibility: visible;
    opacity: 1;
  }
  .plusButton:hover span {
    color: black !important;
  }
}
body:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 8;
  z-index: -1;
  border-radius: inherit;
}
html {
  height: 100%;
}
body {
  @apply bg-white max-w-xs min-w-[20rem] h-full shadow-[rgba(0,0,0,0.16)_0px_0px_8px]  border-t border-r border-l mx-auto border-solid border-[#e9e9e9];
  font-family:
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    sans-serif;
  font: inherit;
}
main {
  position: relative;
  width: 320px;
  height: 100%;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background-color: #719cf7;
}