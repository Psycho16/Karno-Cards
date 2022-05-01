import React, { FC } from 'react'

import * as SC from './styled'


// export enum Size { "S" , "X" , "M" , "L" }

export enum Ended {Top = "Top", Left = "Left", Right = "Right", Bottom = "Bottom", None = "None"}
// // export const EndedObj = {
// //   top:
// // }

type Props = {
  content?: string
  isOverlined?: boolean
  isChecked?: boolean
  ended?: {
    S?: SquareBorders,
    X?: SquareBorders,
    M?: SquareBorders,
    L?: SquareBorders
  }
  fullWidth?: boolean
  fullHeight?: boolean
}
export type SquareBorders = Ended[]

const Square2:FC<Props> = ({ended, content, isOverlined = false, isChecked = false, fullWidth, fullHeight}) => {

  // eslint-disable-next-line no-console
  // console.log('ended',ended)
  
  return (
    <SC.Square isOverlined={isOverlined} isChecked={isChecked}>
      {ended && ended.S && <SC.S ended={ended.S} fullWidth={fullWidth} fullHeight={fullHeight}/>}
      {ended && ended.X && <SC.X ended={ended.X} fullWidth={fullWidth} fullHeight={fullHeight}/>}
      {ended && ended.M && <SC.M ended={ended.M} fullWidth={fullWidth} fullHeight={fullHeight}/>}
      {ended && ended.L && <SC.L ended={ended.L} fullWidth={fullWidth} fullHeight={fullHeight}/>}
      <SC.SquareContent>{content}</SC.SquareContent>
    </SC.Square>
  )
}

export default Square2
