import styled from 'styled-components'


export const KarnoCardsField = styled.div`
  display: flex;
  flex-direction: row;
`

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const AdditionalFieldsWrapper = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-left: 48px;
  width: calc(265px - 51px);
`
export const AdditionalField = styled.div<{isOverlined?: boolean}>`
    text-decoration: ${props => props.isOverlined && 'overline'};
    width: fill-available;
    text-align: center;
    padding-top: 6px;

    border-bottom: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;

    :first-child {
      border-left: 1px solid black;
      border-right: 0;
    }


`