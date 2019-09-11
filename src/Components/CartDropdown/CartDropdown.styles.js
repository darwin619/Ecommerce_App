import styled from "styled-components";
import CustomButton from '../CustomButton/CustomButton';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const CartEmptyMessage = styled.span`
  text-align: center;
`

export const CustomButtonContainer = styled(CustomButton)`
  margin-top: auto;
`