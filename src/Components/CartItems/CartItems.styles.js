import styled from 'styled-components';

export const CartItemsContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
`

export const ProductImage = styled.img`
    width: 30%;
`

export const CartItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`

export const ItemName = styled.span`
    font-size: 16px;
`

export const ItemPrice = styled.span`
    font-size: 16px;
`