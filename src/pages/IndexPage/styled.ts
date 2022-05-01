import styled from 'styled-components'


export const PopupWrapper = styled.div`
  max-width: 300px;
  text-align: start;

  margin-bottom: 20px;
`

export const PopupLabel = styled.p`
  margin: 0 auto 20px;
`

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top: 10vh;
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
`
export const Input = styled.input<{hasError?: boolean}>`
  width: 80px;
  height: 30px;
  margin-bottom: 10px;
  box-sizing: border-box;
  text-align: center;

  border-color: ${props => props.hasError && 'red'}
`
export const Square = styled.div<{ isOverlined?: boolean }>`
  width: 50px;
  height: 50px;

  text-decoration: ${props => props.isOverlined && 'overline'};
  border: 1px solid black;
`

export const ContentWrapper = styled.div`
  display: grid;
  /* flex-direction: row; */
  grid-template-columns: repeat(2, 1fr);
  /* align-items: center; */
  justify-content: space-between;
`

export const Button = styled.button`
  margin-top: 20px;
  border: 1px solid transparent;
  background-color: #f6f6f6;
  display: block;

  border-radius: 7px;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;

  :hover {
    border: 1px solid #add0ad;
    color: #191c20;
  }
`

export const Span = styled.span`
  max-width: 228px;
  margin-top: 5px;
  box-sizing: border-box;
  white-space: break-spaces;
  display: inline-block;
  color: red;
  font-size: 12px;
`
