import styled, { css } from 'styled-components'

import { Ended } from './Square'


export const Square = styled.div<{isOverlined: boolean, isChecked: boolean}>`
  width: 51px;
  height: 51px;
  position: relative;
  overflow: hidden;

  text-decoration: ${props => props.isOverlined && 'overline'};
  background-color: ${props => props.isChecked && '#bcb7b9'};
  outline: 1px solid black;
  padding: 1px;
`
const OutlinedSpan = styled.span<{ended?: Ended}>`
  position: absolute;
`
export const S = styled(OutlinedSpan)`
  position: absolute;
  top: 2px;
  left: 2px;
    
  
  width: 47px;
  height: 47px;
  border: 1px solid #0037ff;
  /* background-color: blue; */
  z-index: 1;

  ${props => props.ended === Ended.Top &&
  css`
    height: 100%;
  `}

  ${props => props.ended === Ended.Bottom &&
  css`
    top: -4px;
    height: 100%;
  `}

  ${props => props.ended === Ended.Left &&
  css`
    width: 100%;
  `}

  ${props => props.ended === Ended.Right &&
  css`
    left: -4px;
    width: 100%;
  `}


`

export const X = styled(OutlinedSpan)`
  position: absolute;

  top: 5px;
  left: 5px;
    
  width: 39px;
  height: 39px;
  border: 1px solid #ff003b;
  /* background-color: red; */
  z-index: 2;

  ${props => props.ended === Ended.Top &&
  css`
    height: 100%;
  `}

  ${props => props.ended === Ended.Bottom &&
  css`
    top: -5px;
    height: 100%;
  `}

  ${props => props.ended === Ended.Left &&
  css`
    width: 100%;
  `}

  ${props => props.ended === Ended.Right &&
  css`
    left: -5px;
    width: 100%;
  `}
`

export const M = styled(OutlinedSpan)`
  position: absolute;

  top: 8px;
  left: 8px;
    
  width: 33px;
  height: 33px;
  border: 1px solid #fbff00;

  z-index: 3;


  ${props => props.ended === Ended.Top &&
  css`
    height: 100%;
  `}

  ${props => props.ended === Ended.Bottom &&
  css`
    top: -8px;
    height: 100%;
  `}

  ${props => props.ended === Ended.Left &&
  css`
    width: 100%;
  `}

  ${props => props.ended === Ended.Right &&
  css`
    left: -8px;
    width: 100%;
  `}
  `
export const L = styled(OutlinedSpan)`
  position: absolute;

  top: 11px;
  left: 11px;
    
  width: 27px;
  height: 27px;
  border: 1px solid #00ff09;
  /* background-color: green; */

  z-index: 4;

  ${props => props.ended === Ended.Top &&
  css`
    height: 100%;
  `}

  ${props => props.ended === Ended.Bottom &&
  css`
    top: -11px;
    height: 100%;
  `}

  ${props => props.ended === Ended.Left &&
  css`
    width: 100%;
  `}

  ${props => props.ended === Ended.Right &&
  css`
    left: -11px;
    width: 100%;
  `}
  `

export const SquareContent = styled.p`
  text-align: center;
`