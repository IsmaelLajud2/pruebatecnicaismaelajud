import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

const HomeSvg = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <path fill="#D0C0FF" d="M5.5 9h3v5.25h-3V9Z" />
    <path
      fill="#D0C0FF"
      d="M13.315 6.135 7.533.225a.75.75 0 0 0-1.065 0L.685 6.143A1.5 1.5 0 0 0 .25 7.215V13.5A1.5 1.5 0 0 0 1.668 15H4V8.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75V15h2.333a1.5 1.5 0 0 0 1.417-1.5V7.215c0-.403-.155-.79-.435-1.08Z"
    />
  </svg>
)
export default HomeSvg
