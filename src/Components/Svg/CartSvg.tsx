import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
const CartSvg = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M16.945 4.125a1.75 1.75 0 0 0-1.488-.875h-11.2L3.75 1.273a.875.875 0 0 0-.875-.648h-1.75a.875.875 0 0 0 0 1.75H2.21l2.415 8.977A.875.875 0 0 0 5.5 12h7.875a.875.875 0 0 0 .779-.481l2.87-5.74a1.75 1.75 0 0 0-.079-1.654ZM5.063 16.375a1.312 1.312 0 1 0 0-2.625 1.312 1.312 0 0 0 0 2.625ZM13.813 16.375a1.312 1.312 0 1 0 0-2.625 1.312 1.312 0 0 0 0 2.625Z"
    />
  </svg>
)
export default CartSvg
