export const paths = {
  home: {
    path: "M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22",
    viewbox: "0 0 24 24",
  },
  homeActive: {
    path: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",
    viewbox: "0 0 24 24",
  },
  wordsActive: {
    path: "M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z",
    viewbox: "0 0 24 24",
  },
  words: {
    path: "M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z",
    viewbox: "0 0 24 24",
  },
  bin: {
    path: "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z",
    viewbox: "0 0 24 24",
  },
  arrow: {
    path: "M17,12L12,17V14H8V10H12V7L17,12M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12Z",
    viewbox: "0 0 24 24",
  },
  pencil: {
    path: "M18.5,1.15C17.97,1.15 17.46,1.34 17.07,1.73L11.26,7.55L16.91,13.2L22.73,7.39C23.5,6.61 23.5,5.35 22.73,4.56L19.89,1.73C19.5,1.34 19,1.15 18.5,1.15M10.3,8.5L4.34,14.46C3.56,15.24 3.56,16.5 4.36,17.31C3.14,18.54 1.9,19.77 0.67,21H6.33L7.19,20.14C7.97,20.9 9.22,20.89 10,20.12L15.95,14.16",
    viewbox: "0 0 24 24",
  },
  cancel: {
    path: "M16.5 8C14 8 12 10 12 12.5S14 17 16.5 17 21 15 21 12.5 19 8 16.5 8M16.5 15.5C14.8 15.5 13.5 14.2 13.5 12.5C13.5 11.9 13.7 11.4 13.9 11L18 15.1C17.6 15.3 17.1 15.5 16.5 15.5M19.1 14L15 9.9C15.4 9.6 15.9 9.5 16.5 9.5C18.2 9.5 19.5 10.8 19.5 12.5C19.5 13.1 19.3 13.6 19.1 14M12.1 7.7L10.6 6.2L13.9 2.9C14.5 2.3 15.4 2.3 16 2.9L18.2 5C18.6 5.4 18.7 5.8 18.6 6.3C18 6.1 17.3 6 16.6 6C14.8 6 13.3 6.7 12.1 7.7M10.5 14.9L9 16.3C8.4 16.9 7.5 16.9 6.9 16.3L6.2 17H2L4.8 14.2C4.2 13.6 4.2 12.7 4.8 12.1L9.5 7.4L11.1 9C10.4 10 10 11.2 10 12.5C10 13.3 10.2 14.1 10.5 14.9Z",
    viewbox: "0 0 24 24",
  },
};

export default function SVGIcon({
  variant,
  width,
  transform,
  color = "currentColor",
}) {
  return (
    <svg
      viewBox={paths[variant].viewbox}
      width={width}
      fill={color}
      aria-label={variant}
    >
      <title>{variant}</title>
      <path d={paths[variant].path} />
    </svg>
  );
}
