import React, { FC, useEffect, useState } from 'react'

import Square from '../Square'
import { Ended } from '../Square/Square'

import * as SC from './styled'


type Props = {
  currentCount: string
  fieldValues: any
}
const KarnoCardsField: FC<Props> = ({ currentCount, fieldValues }) => {

  const hasConnection = (vert1: string, vert2: string, endedOption: Ended) => {
    if (vert1 === '1' && vert2 === '1') {
      return endedOption
    } else {
      return undefined
    }
  }

  return (
    <>
    <SC.KarnoCardsField>
      <SC.ColumnWrapper>
        <Square />
        <Square content={'X1'} />
        <Square isOverlined content={'X1'} />
      </SC.ColumnWrapper>

      <SC.ColumnWrapper>
        <Square content={'X2'} />
        <Square
          isChecked={currentCount === '3' ? fieldValues[`fieldBy3-8`] === '1' : fieldValues['fieldBy2-4'] === '1'}
          ended={currentCount === '3' ?{
            L: hasConnection(
              fieldValues[`fieldBy3-8`],
              fieldValues[`fieldBy3-7`],
              Ended.Right
            ),
            S: hasConnection(
              fieldValues[`fieldBy3-8`],
              fieldValues[`fieldBy3-6`],
              Ended.Left
            ),
            M: hasConnection(
              fieldValues[`fieldBy3-8`],
              fieldValues[`fieldBy3-4`],
              Ended.Top
            )
          }
         : 
        {
          L: hasConnection(
            fieldValues[`fieldBy2-4`],
            fieldValues[`fieldBy2-2`],
            Ended.Top
          ),
          S: hasConnection(
            fieldValues[`fieldBy2-4`],
            fieldValues[`fieldBy2-3`],
            Ended.Left
          )
        }}
        />
        <Square
          ended={currentCount === '3' ?{
            L: hasConnection(
              fieldValues[`fieldBy3-2`],
              fieldValues[`fieldBy3-4`],
              Ended.Left
            ),
            M: hasConnection(
              fieldValues[`fieldBy3-8`],
              fieldValues[`fieldBy3-4`],
              Ended.Bottom
            ),
            S: hasConnection(
              fieldValues[`fieldBy3-3`],
              fieldValues[`fieldBy3-4`],
              Ended.Right
            )
          }
        : {
          L: hasConnection(
            fieldValues[`fieldBy2-4`],
            fieldValues[`fieldBy2-2`],
            Ended.Bottom
          ),
          M: hasConnection(
            fieldValues[`fieldBy2-2`],
            fieldValues[`fieldBy2-1`],
            Ended.Left
          )
        }}
          isChecked={currentCount === '3' ? fieldValues[`fieldBy3-4`] === '1' :fieldValues['fieldBy2-2'] === '1'}
        />
      </SC.ColumnWrapper>

      <SC.ColumnWrapper>
        <Square isOverlined content={'X2'} />
        <Square
          ended={currentCount === '3' ?{
            M: hasConnection(
              fieldValues[`fieldBy3-2`],
              fieldValues[`fieldBy3-6`],
              Ended.Top
            ),
            L: hasConnection(
              fieldValues[`fieldBy3-5`],
              fieldValues[`fieldBy3-6`],
              Ended.Left
            ),
            S: hasConnection(
              fieldValues[`fieldBy3-8`],
              fieldValues[`fieldBy3-6`],
              Ended.Right
            )
          } : {
            S: hasConnection(
              fieldValues[`fieldBy2-4`],
              fieldValues[`fieldBy2-3`],
              Ended.Right
            ),
            X: hasConnection(
              fieldValues[`fieldBy2-1`],
              fieldValues[`fieldBy2-3`],
              Ended.Top
            )
          }}
          isChecked={currentCount === '3' ? fieldValues[`fieldBy3-6`] === '1': fieldValues['fieldBy2-3'] === '1'}
        />
        <Square
          ended={currentCount === '3' ?{
            L: hasConnection(
              fieldValues[`fieldBy3-2`],
              fieldValues[`fieldBy3-4`],
              Ended.Right
            ),
            M: hasConnection(
              fieldValues[`fieldBy3-2`],
              fieldValues[`fieldBy3-6`],
              Ended.Bottom
            ),
            X: hasConnection(
              fieldValues[`fieldBy3-2`],
              fieldValues[`fieldBy3-1`],
              Ended.Left
            )
          } : {
            M: hasConnection(
              fieldValues[`fieldBy2-2`],
              fieldValues[`fieldBy2-1`],
              Ended.Right
            ),
            X: hasConnection(
              fieldValues[`fieldBy2-1`],
              fieldValues[`fieldBy2-3`],
              Ended.Bottom
            )
          }}
          isChecked={currentCount === '3' ? fieldValues[`fieldBy3-2`] === '1' : fieldValues['fieldBy2-1'] === '1' }
        />
      </SC.ColumnWrapper>

      {currentCount === '3' && (
        <>
          <SC.ColumnWrapper>
            <Square isOverlined content={'X2'} />
            <Square
              ended={{
                S: hasConnection(
                  fieldValues[`fieldBy3-5`],
                  fieldValues[`fieldBy3-1`],
                  Ended.Top
                ),
                X: hasConnection(
                  fieldValues[`fieldBy3-5`],
                  fieldValues[`fieldBy3-7`],
                  Ended.Left
                ),
                L: hasConnection(
                  fieldValues[`fieldBy3-5`],
                  fieldValues[`fieldBy3-6`],
                  Ended.Right
                )
              }}
              isChecked={fieldValues[`fieldBy3-5`] === '1'}
            />
            <Square
              ended={{
                X: hasConnection(
                  fieldValues[`fieldBy3-2`],
                  fieldValues[`fieldBy3-1`],
                  Ended.Right
                ),
                S: hasConnection(
                  fieldValues[`fieldBy3-5`],
                  fieldValues[`fieldBy3-1`],
                  Ended.Bottom
                ),
                L: hasConnection(
                  fieldValues[`fieldBy3-3`],
                  fieldValues[`fieldBy3-1`],
                  Ended.Left
                )
              }}
              isChecked={fieldValues[`fieldBy3-1`] === '1'}
            />
          </SC.ColumnWrapper>

          <SC.ColumnWrapper>
            <Square content="X2" />
            <Square
              ended={{
                L: hasConnection(
                  fieldValues[`fieldBy3-8`],
                  fieldValues[`fieldBy3-7`],
                  Ended.Left
                ),
                X: hasConnection(
                  fieldValues[`fieldBy3-5`],
                  fieldValues[`fieldBy3-7`],
                  Ended.Right
                ),
                M: hasConnection(
                  fieldValues[`fieldBy3-3`],
                  fieldValues[`fieldBy3-7`],
                  Ended.Top
                )
              }}
              isChecked={fieldValues[`fieldBy3-7`] === '1'}
            />
            <Square
              ended={{
                S: hasConnection(
                  fieldValues[`fieldBy3-3`],
                  fieldValues[`fieldBy3-4`],
                  Ended.Left
                ),
                L: hasConnection(
                  fieldValues[`fieldBy3-3`],
                  fieldValues[`fieldBy3-1`],
                  Ended.Right
                ),
                M: hasConnection(
                  fieldValues[`fieldBy3-3`],
                  fieldValues[`fieldBy3-7`],
                  Ended.Bottom
                )
              }}
              isChecked={fieldValues[`fieldBy3-3`] === '1'}
            />
          </SC.ColumnWrapper>
        </>
      )}
    </SC.KarnoCardsField>
      {currentCount === '3' && <SC.AdditionalFieldsWrapper>
        <SC.AdditionalField>X3</SC.AdditionalField>
        <SC.AdditionalField isOverlined>X3</SC.AdditionalField>
        </SC.AdditionalFieldsWrapper>}
      </>
  )
}

export default KarnoCardsField
