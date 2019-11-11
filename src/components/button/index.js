import React from "react"
import { StyledPrimaryButton } from "./style"

const handleButtonWrapping = (Component, props) => {
  const { to, href, size, children } = props;

  const button = (
    <Component>
      {children}
    </Component>
  )

  return button;
}

type Props = {
  children: React$Node,
  to?: string,
  href?: string,
  size?: "small"
}

export const PrimaryButton = (props: Props) =>handleButtonWrapping(StyledPrimaryButton, props)
