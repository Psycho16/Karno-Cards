import styled from "styled-components"


export const PopupWrapper = styled.div`
  max-width: 300px;
  text-align: start;
`

export const PopupLabel = styled.p`
  margin: 0 auto 20px;
`

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10vh;
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;

`
export const Input = styled.input`
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
  box-sizing: border-box;
`
export const Square = styled.div<{isOverlined?: boolean}>`
  width: 50px;
  height: 50px;

  text-decoration: ${props => props.isOverlined && 'overline'};
  border: 1px solid black;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  /* align-items: center; */
  justify-content: space-between;
`