import React from 'react'
import { DeepMap, FieldError, useForm } from 'react-hook-form'

import ContentContainer from '../../components/ContentContainer'
import DropdownMenu from '../../components/DropdownMenu'
import TableTruthColumn from '../../components/TableTruthColumn/TableTruthColumn'
import KarnoCardsField from '../../components/KarnoCardsField'
import Square, { Ended } from '../../components/Square/Square'
import Square2 from '../../components/Square2'
import KarnoCardsFieldSmall from '../../components/KarnoCardsSmall/KarnoCardsField/KarnoCardsFieldSmall'

import * as SC from './styled'


type KeysString<T> = {
  [key: string]: T
}
const defaultValues: KeysString<any> = {
  2: {
    1: [0, 0, 1, 1],
    2: [0, 1, 0, 1]
  },
  3: {
    1: [0, 0, 0, 0, 1, 1, 1, 1],
    2: [0, 0, 1, 1, 0, 0, 1, 1],
    3: [0, 1, 0, 1, 0, 1, 0, 1]
  }
}
const defaultArr: KeysString<number[]> = {
  2: [1, 2],
  3: [1, 2, 3]
}

const inputsCount: KeysString<number> = {
  2: 4,
  3: 8
}
const IndexPage = () => {
  const [currentCount, setCurrentCount] = React.useState<{
    id: string
    value: string
  }>({ id: '2', value: '2' })

  const [formData, setFormData] = React.useState({})

  const { register, handleSubmit } = useForm()

  const CustomSetCurrentCount = (item: { id: string; value: string }) => {
    setCurrentCount(item)
  }
  const onSubmit = (formData: any) => {
    setFormData(formData)
  }

  // const onError = (errors: DeepMap<any, FieldError>) => {
  //   // eslint-disable-next-line no-console
  //   console.error(errors)
  // }

  const useFunctionInput = () => {
    return {
      required: 'Это обязательное поле',
      min: {
        value: 0,
        message: 'Минимальное значение должно быть не меньше нуля'
      },
      max: {
        value: 1,
        message: 'Максимальное значение должно быть не больше единицы'
      }
    }
  }

//   const getDNF = (): string => {
//     if (currentCount.id === '3') {
// return ''
//     } else {

// return ''
//     }
//   }

  const functionInputRules = useFunctionInput()

  return (
    <ContentContainer>
      <SC.ContentWrapper>
        <SC.BlockWrapper>
          <SC.PopupWrapper>
            <SC.PopupLabel>Выберите количество переменных</SC.PopupLabel>
            <DropdownMenu
              items={[
                { id: '2', value: '2' },
                { id: '3', value: '3' }
              ]}
              setItem={CustomSetCurrentCount}
              selectedItem={currentCount}
            />
          </SC.PopupWrapper>

          <SC.RowWrapper>
            {defaultArr[currentCount.id].map((item: number) => (
              <TableTruthColumn
                key={item}
                currentIndex={item}
                values={defaultValues[currentCount.id][item]}
              />
            ))}
            <form onSubmit={handleSubmit(onSubmit)}>
              <SC.InputsWrapper>
                <div className={'table-title'}>F(0 или 1)</div>
                {Array(inputsCount[currentCount.id])
                  .fill(0)
                  .map((item, index) => (
                    <SC.Input
                      placeholder="0 или 1"
                      // defaultValue={0}
                      key={Math.random()}
                      {...register(
                        `fieldBy${currentCount.id}-${index + 1}`,
                        functionInputRules
                      )}
                    />
                  ))}
              </SC.InputsWrapper>
              <SC.Button>Нарисовать карту карно</SC.Button>
            </form>
          </SC.RowWrapper>
        </SC.BlockWrapper>

        <SC.BlockWrapper>
          <KarnoCardsField
            currentCount={currentCount.id}
            fieldValues={formData}
          />
        </SC.BlockWrapper>

        <SC.BlockWrapper>
          <KarnoCardsFieldSmall
            currentCount={currentCount.id}
            fieldValues={formData}
          />
        </SC.BlockWrapper>

        <SC.BlockWrapper>
          <h3>Сокращенная ДНФ</h3>
          {/* <h4>f = </h4> */}
        </SC.BlockWrapper>
      </SC.ContentWrapper>
    </ContentContainer>
  )
}

export default IndexPage
