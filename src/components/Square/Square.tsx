import React, { FC } from 'react'

import * as SC from './styled'


export enum Size { "S" , "X" , "M" , "L" }

export enum Ended {Top = "Top", Left = "Left", Right = "Right", Bottom = "Bottom", None = "None"}
// export const EndedObj = {
//   top:
// }

type Props = {
  content?: string
    isOverlined?: boolean
    isChecked?: boolean
    ended?: {
      S?: Ended,
      X?: Ended,
      M?: Ended,
      L?: Ended
    }
}
const Square:FC<Props> = ({content, isOverlined = false, isChecked = false, ended}) => {
  // console.log(isChecked)
  
  return (
    <SC.Square isOverlined={isOverlined} isChecked={isChecked}>
      {ended && ended.S && <SC.S ended={ended.S}/>}
      {ended && ended.X && <SC.X ended={ended.X}/>}
      {ended && ended.M && <SC.M ended={ended.M}/>}
      {ended && ended.L && <SC.L ended={ended.L}/>}
      {/* <SC.S/>
      <SC.X/>
      <SC.M/>
      <SC.L/> */}
      <p>{content}</p>
    </SC.Square>
  )
}

export default Square
