import styled from "styled-components"

export const StyledButton = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  flex:none;
  padding: ${props => props.size === "small" ? "5px 10px" : "10px 20px"};
  font-size: ${props => props.size === "small" ? "15px" : "16px"};
  background-color: #0063FF;
  color: #fefefe
  border: 1px solid #0063FF;
  border-radius: 4px;
  transition: all 0.25s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #0063FF;
    background-color: #fefefe
  }

  &:focus {

  }

  &:active {

  }
`

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: "red";
`
