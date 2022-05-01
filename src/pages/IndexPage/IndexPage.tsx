import React from 'react'
import { useForm } from 'react-hook-form'

import ContentContainer from '../../components/ContentContainer'
import DropdownMenu from '../../components/DropdownMenu'
import TableTruthColumn from '../../components/TableTruthColumn/TableTruthColumn'
import Square from '../../components/Square'
import KarnoCardsField from '../../components/KarnoCardsField'

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

  const { register, handleSubmit, reset } = useForm()

  const CustomSetCurrentCount = (item: { id: string; value: string }) => {
    setCurrentCount(item)
  }
  const onSubmit = (formData: any) => {
    setFormData(formData)
  }

  return (
    <ContentContainer>
      <SC.ContentWrapper>
      <SC.ColumnWrapper>
        <SC.PopupWrapper>
          <SC.PopupLabel>Введите количество переменных</SC.PopupLabel>
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
                    key={Math.random()}
                    {...register(`fieldBy${currentCount.id}-${index + 1}`, {
                      required: 'er',
                      min: 0,
                      max: 1
                    })}
                  />
                ))}
            </SC.InputsWrapper>
            <button>Нажать</button>
          </form>
        </SC.RowWrapper>
      </SC.ColumnWrapper>

      <SC.ColumnWrapper>
        <KarnoCardsField currentCount={currentCount.id} fieldValues={formData}/>
      </SC.ColumnWrapper>
      </SC.ContentWrapper>
    </ContentContainer>
  )
}

export default IndexPage
