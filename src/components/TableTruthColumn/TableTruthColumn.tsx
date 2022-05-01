import React, { FC } from 'react'

import * as SC from './styled'


type Props = {
  currentIndex: number
  values: number[]
}
const TableTruthColumn: FC<Props> = ({ currentIndex, values }) => {
  return (
    <SC.TableTruthColumn>
      <div className={'table-title'}>X{currentIndex}</div>
      {values.map((value, index) => (
        <SC.TableElement key={value + index * 2}>{value}</SC.TableElement>
      ))}
    </SC.TableTruthColumn>
  )
}

export default TableTruthColumn
