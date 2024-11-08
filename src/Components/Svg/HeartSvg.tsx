import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
const HeartSvg = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.5 18.375a.875.875 0 0 1-.621-.254L3.08 11.314a4.602 4.602 0 0 1 0-6.475 4.585 4.585 0 0 1 6.475 0l.945.945.945-.945a4.585 4.585 0 0 1 6.475 0 4.602 4.602 0 0 1 0 6.475L11.12 18.12a.875.875 0 0 1-.621.254Z"
    />
  </svg>
)
export default HeartSvg
