import styled, { css } from 'styled-components'

import { SquareBorders, Ended } from './Square2'




export const Square = styled.div<{ isOverlined: boolean; isChecked: boolean }>`
  width: 51px;
  height: 51px;
  position: relative;
  overflow: hidden;

  text-decoration: ${props => props.isOverlined && 'overline'};
  background-color: ${props => props.isChecked && '#bcb7b9'};
  outline: 1px solid black;
  padding: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const OutlinedSpan = styled.span<{
  ended?: SquareBorders
  fullWidth?: boolean
  fullHeight?: boolean
}>`
  position: absolute;
  width: ${props => props.fullWidth && '100%'};
  height: ${props => props.fullHeight && '100%'};
`
export const S = styled(OutlinedSpan)`
  top: 2px;
  left: 2px;

  width: 47px;
  height: 47px;
  /* border: 1px solid #0037ff; */
  z-index: 1;

  ${props =>
    props.ended?.includes(Ended.Top) &&
    css`
      border-top: 1px solid #0037ff;
    `}

  ${props =>
    props.ended?.includes(Ended.Bottom) &&
    css`
      border-bottom: 1px solid #0037ff;
    `}

  ${props =>
    props.ended?.includes(Ended.Left) &&
    css`
      border-left: 1px solid #0037ff;
    `}

  ${props =>
    props.ended?.includes(Ended.Right) &&
    css`
      border-right: 1px solid #0037ff;
    `}

    ${props =>
    props.ended?.includes(Ended.Right) && props.ended?.includes(Ended.Bottom) &&
    css`
      width: 100%;
      height: 100%;

      top: -2px;
      left: -2px;
    `}

    ${props =>
    props.ended?.includes(Ended.Right) && props.ended?.includes(Ended.Top) &&
    css`
      width: 100%;
      height: 100%;

      top: 2px;
      left: -2px;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) && props.ended?.includes(Ended.Bottom) &&
    css`
      width: 100%;
      height: 100%;

      top: -2px;
      left: 2px;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) && props.ended?.includes(Ended.Top) &&
    css`
      width: 100%;
      height: 100%;

      top: 2px;
      left: 2px;
    `}

  ${props =>
    props.ended?.includes(Ended.Left) &&
    props.ended?.includes(Ended.Right) &&
    props.ended?.includes(Ended.Top) &&
    css`
      top: 2px;
      left: auto;
      width: 47px;
      height: 100%;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) &&
    props.ended?.includes(Ended.Right) &&
    props.ended?.includes(Ended.Bottom) &&
    css`
      top: -2px;
      left: auto;
      width: 47px;
      height: 100%;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) &&
    props.ended?.includes(Ended.Top) &&
    props.ended?.includes(Ended.Bottom) &&
    css`
      left: 2px;
      top: auto;
      height: 47px;
      width: 100%;
    `}

    ${props =>
    props.ended?.includes(Ended.Right) &&
    props.ended?.includes(Ended.Top) &&
    props.ended?.includes(Ended.Bottom) &&
    css`
      left: -2px;
      top: auto;
      height: 47px;
      width: 100%;
    `}
`

export const X = styled(OutlinedSpan)`
  /* position: absolute; */

  top: 5px;
  left: 5px;

  width: 39px;
  height: 39px;
  z-index: 3;

  ${props =>
    props.ended?.includes(Ended.Top) &&
    css`
      border-top: 1px solid #ff003b;
    `}

  ${props =>
    props.ended?.includes(Ended.Bottom) &&
    css`
      border-bottom: 1px solid #ff003b;
    `}

  ${props =>
    props.ended?.includes(Ended.Left) &&
    css`
      border-left: 1px solid #ff003b;
    `}

  ${props =>
    props.ended?.includes(Ended.Right) &&
    css`
      border-right: 1px solid #ff003b;
    `}

    ${props =>
    props.ended?.includes(Ended.Right) && props.ended?.includes(Ended.Bottom) &&
    css`
      width: 100%;
      height: 100%;

      top: -5px;
      left: -5px;
    `}

    ${props =>
    props.ended?.includes(Ended.Right) && props.ended?.includes(Ended.Top) &&
    css`
      width: 100%;
      height: 100%;

      top: 5px;
      left: -5px;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) && props.ended?.includes(Ended.Bottom) &&
    css`
      width: 100%;
      height: 100%;

      top: -5px;
      left: 5px;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) && props.ended?.includes(Ended.Top) &&
    css`
      width: 100%;
      height: 100%;

      top: 5px;
      left: 5px;
    `}

  ${props =>
    props.ended?.includes(Ended.Left) &&
    props.ended?.includes(Ended.Right) &&
    props.ended?.includes(Ended.Top) &&
    css`
      top: 5px;
      left: auto;
      width: 39px;
      height: 100%;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) &&
    props.ended?.includes(Ended.Right) &&
    props.ended?.includes(Ended.Bottom) &&
    css`
      top: -5px;
      left: auto;
      width: 39px;
      height: 100%;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) &&
    props.ended?.includes(Ended.Top) &&
    props.ended?.includes(Ended.Bottom) &&
    css`
      left: 5px;
      top: auto;
      height: 39px;
      width: 100%;
    `}

    ${props =>
    props.ended?.includes(Ended.Right) &&
    props.ended?.includes(Ended.Top) &&
    props.ended?.includes(Ended.Bottom) &&
    css`
      left: -5px;
      top: auto;
      height: 39px;
      width: 100%;
    `}
`

export const M = styled(OutlinedSpan)`
  /* position: absolute; */

  top: 8px;
  left: 8px;

  width: 33px;
  height: 33px;
  /* border: 1px solid #fbff00; */

  z-index: 3;

  ${props =>
    props.ended?.includes(Ended.Top) &&
    css`
      border-top: 1px solid #fbff00;
    `}

  ${props =>
    props.ended?.includes(Ended.Bottom) &&
    css`
      border-bottom: 1px solid #fbff00;
    `}

  ${props =>
    props.ended?.includes(Ended.Left) &&
    css`
      border-left: 1px solid #fbff00;
    `}

  ${props =>
    props.ended?.includes(Ended.Right) &&
    css`
      border-right: 1px solid #fbff00;
    `}

    ${props =>
    props.ended?.includes(Ended.Right) && props.ended?.includes(Ended.Bottom) &&
    css`
      width: 100%;
      height: 100%;

      top: -8px;
      left: -8px;
    `}

    ${props =>
    props.ended?.includes(Ended.Right) && props.ended?.includes(Ended.Top) &&
    css`
      width: 100%;
      height: 100%;

      top: 8px;
      left: -8px;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) && props.ended?.includes(Ended.Bottom) &&
    css`
      width: 100%;
      height: 100%;

      top: -8px;
      left: 8px;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) && props.ended?.includes(Ended.Top) &&
    css`
      width: 100%;
      height: 100%;

      top: 8px;
      left: 8px;
    `}

  ${props =>
    props.ended?.includes(Ended.Left) &&
    props.ended?.includes(Ended.Right) &&
    props.ended?.includes(Ended.Top) &&
    css`
      top: 8px;
      left: auto;
      width: 33px;
      height: 100%;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) &&
    props.ended?.includes(Ended.Right) &&
    props.ended?.includes(Ended.Bottom) &&
    css`
      top: -8px;
      left: auto;
      width: 33px;
      height: 100%;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) &&
    props.ended?.includes(Ended.Top) &&
    props.ended?.includes(Ended.Bottom) &&
    css`
      left: 8px;
      top: auto;
      height: 33px;
      width: 100%;
    `}

    ${props =>
    props.ended?.includes(Ended.Right) &&
    props.ended?.includes(Ended.Top) &&
    props.ended?.includes(Ended.Bottom) &&
    css`
      left: -8px;
      top: auto;
      height: 33px;
      width: 100%;
    `}
    
`
export const L = styled(OutlinedSpan)`

  width: 27px;
  height: 27px;

  /* width: ${props => props.fullWidth && '100%'};
  height: ${props => props.fullHeight && '100%'}; */

  z-index: 4;

  ${props =>
    props.ended?.includes(Ended.Top) &&
    css`
      border-top: 1px solid #00ff09;
    `}

  ${props =>
    props.ended?.includes(Ended.Bottom) &&
    css`
      border-bottom: 1px solid #00ff09;
    `}

  ${props =>
    props.ended?.includes(Ended.Left) &&
    css`
      border-left: 1px solid #00ff09;
    `}

  ${props =>
    props.ended?.includes(Ended.Right) &&
    css`
      border-right: 1px solid #00ff09;
    `}
  
    ${props =>
    props.ended?.includes(Ended.Right) && props.ended?.includes(Ended.Bottom) &&
    css`
      width: 100%;
      height: 100%;

      top: -11px;
      left: -11px;
    `}

    ${props =>
    props.ended?.includes(Ended.Right) && props.ended?.includes(Ended.Top) &&
    css`
      width: 100%;
      height: 100%;

      top: 11px;
      left: -11px;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) && props.ended?.includes(Ended.Bottom) &&
    css`
      width: 100%;
      height: 100%;

      top: -11px;
      left: 11px;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) && props.ended?.includes(Ended.Top) &&
    css`
      width: 100%;
      height: 100%;

      top: 11px;
      left: 11px;
    `}

  ${props =>
    props.ended?.includes(Ended.Left) &&
    props.ended?.includes(Ended.Right) &&
    props.ended?.includes(Ended.Top) &&
    css`
      top: 11px;
      left: auto;
      width: 27px;
      height: 100%;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) &&
    props.ended?.includes(Ended.Right) &&
    props.ended?.includes(Ended.Bottom) &&
    css`
      top: -11px;
      left: auto;
      width: 27px;
      height: 100%;
    `}

    ${props =>
    props.ended?.includes(Ended.Left) &&
    props.ended?.includes(Ended.Top) &&
    props.ended?.includes(Ended.Bottom) &&
    css`
      left: 11px;
      top: auto;
      height: 27px;
      width: 100%;
    `}

    ${props =>
    props.ended?.includes(Ended.Right) &&
    props.ended?.includes(Ended.Top) &&
    props.ended?.includes(Ended.Bottom) &&
    css`
      left: -11px;
      top: auto;
      height: 27px;
      width: 100%;
    `}
`

export const SquareContent = styled.p`
  text-align: center;
`
