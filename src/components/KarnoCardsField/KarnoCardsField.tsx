import React, { FC, useEffect, useState } from 'react'

import Square from '../Square'
import { Ended } from '../Square/Square'
import Square2, { SquareBorders } from '../Square2/Square2'

import * as SC from './styled'


type SquareType = '2' | '3.1' | '3.2' | '3.3' | '3.4'
type LineType = '2.1' | '2.2' | '3.1' | '3.2'

type BorderTwoVariablesType = {
  'fieldBy2-1': SquareBorders
  'fieldBy2-2': SquareBorders
  'fieldBy2-3': SquareBorders
  'fieldBy2-4': SquareBorders
}

type BorderThreeVariablesType = {
  'fieldBy3-1': SquareBorders
  'fieldBy3-2': SquareBorders
  'fieldBy3-3': SquareBorders
  'fieldBy3-4': SquareBorders
  'fieldBy3-5': SquareBorders
  'fieldBy3-6': SquareBorders
  'fieldBy3-7': SquareBorders
  'fieldBy3-8': SquareBorders
}

type BordersForTwoVariables = {
  S?: BorderTwoVariablesType
  X?: BorderTwoVariablesType
  M?: BorderTwoVariablesType
  L?: BorderTwoVariablesType
}

type BordersForThreeVariables = {
  S?: BorderThreeVariablesType
  X?: BorderThreeVariablesType
  M?: BorderThreeVariablesType
  L?: BorderThreeVariablesType
}

type Props = {
  currentCount: string
  fieldValues: any
}
type TwoVariablesKeys =
  | 'fieldBy2-1'
  | 'fieldBy2-2'
  | 'fieldBy2-3'
  | 'fieldBy2-4'

type ThreeVariablesKeys =
  | 'fieldBy3-1'
  | 'fieldBy3-2'
  | 'fieldBy3-3'
  | 'fieldBy3-4'
  | 'fieldBy3-5'
  | 'fieldBy3-6'
  | 'fieldBy3-7'
  | 'fieldBy3-8'

const getEnded = (
  vert: TwoVariablesKeys,
  twoVariablesSquaresData: BordersForTwoVariables
) => {
  return {
    L: twoVariablesSquaresData.L ? twoVariablesSquaresData.L[vert] : undefined,
    S: twoVariablesSquaresData.S ? twoVariablesSquaresData.S[vert] : undefined,
    X: twoVariablesSquaresData.X ? twoVariablesSquaresData.X[vert] : undefined,
    M: twoVariablesSquaresData.M ? twoVariablesSquaresData.M[vert] : undefined
  }
}

const getEndedWithThree = (
  vert: ThreeVariablesKeys,
  ThreeVariablesSquresData: BordersForThreeVariables
) =>  {
  return {
    L: ThreeVariablesSquresData.L ? ThreeVariablesSquresData.L[vert] : undefined,
    S: ThreeVariablesSquresData.S ? ThreeVariablesSquresData.S[vert] : undefined,
    X: ThreeVariablesSquresData.X ? ThreeVariablesSquresData.X[vert] : undefined,
    M: ThreeVariablesSquresData.M ? ThreeVariablesSquresData.M[vert] : undefined
  }
}
const KarnoCardsField: FC<Props> = ({ currentCount, fieldValues }) => {
  const hasConnection = (vert1: string, vert2: string, endedOption: Ended) => {
    if (vert1 === '1' && vert2 === '1') {
      return endedOption
    } else {
      return undefined
    }
  }
  const hasFullRectangle = (): boolean => {
    return (
      fieldValues['fieldBy3-1'] === '1' &&
      fieldValues['fieldBy3-2'] === '1' &&
      fieldValues['fieldBy3-3'] === '1' &&
      fieldValues['fieldBy3-4'] === '1' &&
      fieldValues['fieldBy3-5'] === '1' &&
      fieldValues['fieldBy3-6'] === '1' &&
      fieldValues['fieldBy3-7'] === '1' &&
      fieldValues['fieldBy3-8'] === '1'
    )
  }

  const getBordersForThreeValiables = (): BordersForThreeVariables => {
    if (hasFullRectangle()) {
      return {
        S: {
          'fieldBy3-1': [Ended.Bottom], //TODO: добавить fullWidth
          'fieldBy3-2': [Ended.Bottom], //TODO: добавить fullWidth
          'fieldBy3-3': [Ended.Bottom, Ended.Right],
          'fieldBy3-4': [Ended.Bottom, Ended.Left],
          'fieldBy3-5': [Ended.Top], //TODO: добавить fullWidth
          'fieldBy3-6': [Ended.Top], //TODO: добавить fullWidth
          'fieldBy3-7': [Ended.Top, Ended.Right],
          'fieldBy3-8': [Ended.Top, Ended.Left]
        }
      }
    } else {
      const obj = {
        S: {
          'fieldBy3-1': [Ended.None],
          'fieldBy3-2': [Ended.None],
          'fieldBy3-3': [Ended.None],
          'fieldBy3-4': [Ended.None],
          'fieldBy3-5': [Ended.None],
          'fieldBy3-6': [Ended.None],
          'fieldBy3-7': [Ended.None],
          'fieldBy3-8': [Ended.None]
        },
        X: {
          'fieldBy3-1': [Ended.None],
          'fieldBy3-2': [Ended.None],
          'fieldBy3-3': [Ended.None],
          'fieldBy3-4': [Ended.None],
          'fieldBy3-5': [Ended.None],
          'fieldBy3-6': [Ended.None],
          'fieldBy3-7': [Ended.None],
          'fieldBy3-8': [Ended.None]
        },
        M: {
          'fieldBy3-1': [Ended.None],
          'fieldBy3-2': [Ended.None],
          'fieldBy3-3': [Ended.None],
          'fieldBy3-4': [Ended.None],
          'fieldBy3-5': [Ended.None],
          'fieldBy3-6': [Ended.None],
          'fieldBy3-7': [Ended.None],
          'fieldBy3-8': [Ended.None]
        },
        L: {
          'fieldBy3-1': [Ended.None],
          'fieldBy3-2': [Ended.None],
          'fieldBy3-3': [Ended.None],
          'fieldBy3-4': [Ended.None],
          'fieldBy3-5': [Ended.None],
          'fieldBy3-6': [Ended.None],
          'fieldBy3-7': [Ended.None],
          'fieldBy3-8': [Ended.None]
        }
      }

      if (
        fieldValues['fieldBy3-2'] === '1' &&
        fieldValues['fieldBy3-4'] === '1' &&
        fieldValues['fieldBy3-6'] === '1' &&
        fieldValues['fieldBy3-8'] === '1'
      ) {
        obj.L['fieldBy3-2'] = [Ended.Right, Ended.Bottom]
        obj.L['fieldBy3-4'] = [Ended.Left, Ended.Bottom]
        obj.L['fieldBy3-6'] = [Ended.Right, Ended.Top]
        obj.L['fieldBy3-8'] = [Ended.Left, Ended.Top]

        if (
          fieldValues['fieldBy3-7'] === '1' &&
          fieldValues['fieldBy3-3'] === '1'
        ) {
          obj.S['fieldBy3-2'] = [Ended.Right, Ended.Bottom]
          obj.S['fieldBy3-4'] = [Ended.Bottom] //TODO: fullwidth
          obj.S['fieldBy3-6'] = [Ended.Right, Ended.Top]
          obj.S['fieldBy3-8'] = [Ended.Top] //TODO: fullWidth

          obj.S['fieldBy3-7'] = [Ended.Top, Ended.Left]
          obj.S['fieldBy3-3'] = [Ended.Bottom, Ended.Left]
        }
      } else if (
        fieldValues['fieldBy3-1'] === '1' &&
        fieldValues['fieldBy3-2'] === '1' &&
        fieldValues['fieldBy3-5'] === '1' &&
        fieldValues['fieldBy3-6'] === '1'
      ) {
        obj.L['fieldBy3-1'] = [Ended.Bottom, Ended.Right]
        obj.L['fieldBy3-2'] = [Ended.Bottom, Ended.Left]
        obj.L['fieldBy3-5'] = [Ended.Top, Ended.Right]
        obj.L['fieldBy3-6'] = [Ended.Top, Ended.Left]

        if (
          fieldValues['fieldBy3-3'] === '1' &&
          fieldValues['fieldBy3-7'] === '1'
        ) {
          obj.S['fieldBy3-2'] = [Ended.Left, Ended.Bottom]
          obj.S['fieldBy3-1'] = [Ended.Bottom] //TODO: fullwidth
          obj.S['fieldBy3-5'] = [Ended.Top] //TODO: fullWidth
          obj.S['fieldBy3-6'] = [Ended.Left, Ended.Top]

          obj.S['fieldBy3-3'] = [Ended.Bottom, Ended.Right]
          obj.S['fieldBy3-7'] = [Ended.Top, Ended.Right]
        }
      } else if (
        fieldValues['fieldBy3-1'] === '1' &&
        fieldValues['fieldBy3-3'] === '1' &&
        fieldValues['fieldBy3-5'] === '1' &&
        fieldValues['fieldBy3-7'] === '1'
      ) {
        obj.L['fieldBy3-1'] = [Ended.Bottom, Ended.Left]
        obj.L['fieldBy3-3'] = [Ended.Bottom, Ended.Right]
        obj.L['fieldBy3-5'] = [Ended.Top, Ended.Left]
        obj.L['fieldBy3-7'] = [Ended.Top, Ended.Right]

        if (fieldValues['fieldBy3-4'] === '1' &&
        fieldValues['fieldBy3-8'] === '1') {
          obj.S['fieldBy3-1'] = [Ended.Bottom, Ended.Left]
        obj.S['fieldBy3-3'] = [Ended.Bottom] //TODO: fullWidht
        obj.S['fieldBy3-5'] = [Ended.Top, Ended.Left]
        obj.S['fieldBy3-7'] = [Ended.Top] //TODO: fullWidht

        obj.S['fieldBy3-4'] = [Ended.Bottom, Ended.Right]
        obj.S['fieldBy3-8'] = [Ended.Top, Ended.Right]

        }
      } else if (
        fieldValues['fieldBy3-3'] === '1' &&
        fieldValues['fieldBy3-4'] === '1' &&
        fieldValues['fieldBy3-7'] === '1' &&
        fieldValues['fieldBy3-8'] === '1'
      ) {
        obj.L['fieldBy3-3'] = [Ended.Bottom, Ended.Left]
        obj.L['fieldBy3-4'] = [Ended.Bottom, Ended.Right]
        obj.L['fieldBy3-7'] = [Ended.Top, Ended.Left]
        obj.L['fieldBy3-8'] = [Ended.Top, Ended.Right]

        if(
          fieldValues['fieldBy3-1'] === '1' &&
          fieldValues['fieldBy3-5'] === '1'
        ) {
          obj.S['fieldBy3-3'] = [Ended.Bottom]
          obj.S['fieldBy3-4'] = [Ended.Bottom, Ended.Right]
          obj.S['fieldBy3-7'] = [Ended.Top]
          obj.S['fieldBy3-8'] = [Ended.Top, Ended.Right]

          obj.S['fieldBy3-1'] = [Ended.Bottom, Ended.Left]
          obj.S['fieldBy3-5'] = [Ended.Top, Ended.Left]
        }
      }

      return obj
    }
  }

  const getBordersForTwoVariables = (): BordersForTwoVariables => {
    if (
      fieldValues['fieldBy2-1'] === '1' &&
      fieldValues['fieldBy2-2'] === '1' &&
      fieldValues['fieldBy2-3'] === '1' &&
      fieldValues['fieldBy2-4'] === '1'
    ) {
      return {
        S: {
          'fieldBy2-1': [Ended.Bottom, Ended.Right],
          'fieldBy2-2': [Ended.Bottom, Ended.Left],
          'fieldBy2-3': [Ended.Top, Ended.Right],
          'fieldBy2-4': [Ended.Top, Ended.Left]
        }
      }
    } else {
      const obj = {
        S: {
          'fieldBy2-1': [Ended.None],
          'fieldBy2-2': [Ended.None],
          'fieldBy2-3': [Ended.None],
          'fieldBy2-4': [Ended.None]
        },
        X: {
          'fieldBy2-1': [Ended.None],
          'fieldBy2-2': [Ended.None],
          'fieldBy2-3': [Ended.None],
          'fieldBy2-4': [Ended.None]
        },
        M: {
          'fieldBy2-1': [Ended.None],
          'fieldBy2-2': [Ended.None],
          'fieldBy2-3': [Ended.None],
          'fieldBy2-4': [Ended.None]
        },
        L: {
          'fieldBy2-1': [Ended.None],
          'fieldBy2-2': [Ended.None],
          'fieldBy2-3': [Ended.None],
          'fieldBy2-4': [Ended.None]
        }
      }
      if (
        fieldValues[`fieldBy2-4`] === '1' &&
        fieldValues[`fieldBy2-2`] === '1'
      ) {
        obj.L['fieldBy2-4'] = [Ended.Left, Ended.Top, Ended.Right]
        obj.L['fieldBy2-2'] = [Ended.Left, Ended.Bottom, Ended.Right]
      }

      if (
        fieldValues[`fieldBy2-4`] === '1' &&
        fieldValues[`fieldBy2-3`] === '1'
      ) {
        obj.S['fieldBy2-4'] = [Ended.Left, Ended.Top, Ended.Bottom]
        obj.S['fieldBy2-3'] = [Ended.Right, Ended.Bottom, Ended.Top]
      }

      if (
        fieldValues[`fieldBy2-2`] === '1' &&
        fieldValues[`fieldBy2-1`] === '1'
      ) {
        obj.M['fieldBy2-2'] = [Ended.Left, Ended.Top, Ended.Bottom]
        obj.M['fieldBy2-1'] = [Ended.Right, Ended.Bottom, Ended.Top]
      }

      if (
        fieldValues[`fieldBy2-1`] === '1' &&
        fieldValues[`fieldBy2-3`] === '1'
      ) {
        obj.L['fieldBy2-3'] = [Ended.Left, Ended.Top, Ended.Right]
        obj.L['fieldBy2-1'] = [Ended.Left, Ended.Bottom, Ended.Right]
      }

      return obj
    }
  }

  // const getBordersForThreeValiables = (): Border

  const twoVariablesSquaresData = getBordersForTwoVariables()
  const ThreeVariablesSquresData = getBordersForThreeValiables()
  // eslint-disable-next-line no-console
  console.log('test',ThreeVariablesSquresData)

  // eslint-disable-next-line no-console
  return (
    <>
      {currentCount === '3' ? (
        <>
          <SC.KarnoCardsField>
            <SC.ColumnWrapper>
              <Square2 />
              <Square2 content={'X1'} />
              <Square2 isOverlined content={'X1'} />
            </SC.ColumnWrapper>
            <SC.ColumnWrapper>
              <Square2 content={'X2'} />
              <Square2
                isChecked={fieldValues[`fieldBy3-8`] === '1'}
                ended={getEndedWithThree('fieldBy3-8', ThreeVariablesSquresData)}
              />
              <Square2
                ended={getEndedWithThree('fieldBy3-4', ThreeVariablesSquresData)}
                isChecked={fieldValues[`fieldBy3-4`] === '1'}
              />
            </SC.ColumnWrapper>
            <SC.ColumnWrapper>
              <Square isOverlined content={'X2'} />
              <Square2
                ended={getEndedWithThree('fieldBy3-6', ThreeVariablesSquresData)}
                isChecked={fieldValues[`fieldBy3-6`] === '1'}
              />
              <Square2
                ended={getEndedWithThree('fieldBy3-2', ThreeVariablesSquresData)}
                isChecked={fieldValues[`fieldBy3-2`] === '1'}
              />
            </SC.ColumnWrapper>
            <SC.ColumnWrapper>
              <Square2 isOverlined content={'X2'} />
              <Square2
                ended={getEndedWithThree('fieldBy3-5', ThreeVariablesSquresData)}
                isChecked={fieldValues[`fieldBy3-5`] === '1'}
              />
              <Square2
                ended={getEndedWithThree('fieldBy3-1', ThreeVariablesSquresData)}
                isChecked={fieldValues[`fieldBy3-1`] === '1'}
              />
            </SC.ColumnWrapper>
            <SC.ColumnWrapper>
              <Square2 content="X2" />
              <Square2
                ended={getEndedWithThree('fieldBy3-7', ThreeVariablesSquresData)}
                isChecked={fieldValues[`fieldBy3-7`] === '1'}
              />
              <Square2
                ended={getEndedWithThree('fieldBy3-3', ThreeVariablesSquresData)}
                isChecked={fieldValues[`fieldBy3-3`] === '1'}
              />
            </SC.ColumnWrapper>
            )
          </SC.KarnoCardsField>

          <SC.AdditionalFieldsWrapper>
            <SC.AdditionalField>X3</SC.AdditionalField>
            <SC.AdditionalField isOverlined>X3</SC.AdditionalField>
          </SC.AdditionalFieldsWrapper>
        </>
      ) : (
        <SC.KarnoCardsField>
          <SC.ColumnWrapper>
            <Square2 />
            <Square2 content={'X1'} />
            <Square2 isOverlined content={'X1'} />
          </SC.ColumnWrapper>

          <SC.ColumnWrapper>
            <Square2 content={'X2'} />
            <Square2
              isChecked={fieldValues['fieldBy2-4'] === '1'}
              ended={getEnded('fieldBy2-4', twoVariablesSquaresData)}
            />
            <Square2
              ended={getEnded('fieldBy2-2', twoVariablesSquaresData)}
              isChecked={fieldValues['fieldBy2-2'] === '1'}
            />
          </SC.ColumnWrapper>

          <SC.ColumnWrapper>
            <Square2 isOverlined content={'X2'} />
            <Square2
              ended={getEnded('fieldBy2-3', twoVariablesSquaresData)}
              isChecked={fieldValues['fieldBy2-3'] === '1'}
            />
            <Square2
              ended={getEnded('fieldBy2-1', twoVariablesSquaresData)}
              isChecked={fieldValues['fieldBy2-1'] === '1'}
            />
          </SC.ColumnWrapper>
        </SC.KarnoCardsField>
      )}
    </>
  )
}

export default KarnoCardsField
