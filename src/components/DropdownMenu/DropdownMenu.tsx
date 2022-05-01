/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useRef, useState } from 'react'

import useOutsideClick from "../../hooks/common/useOutsideClick"
import { ReactComponent as CheckIcon } from "../../assets/icons/arrow.svg"

import * as SC from './styled'


type DropdownFilter = {
  id: string,
  value: string
}

type Props = {
  size?: 'big' | 'small'
  label?: string
  className?: string
  disabled?: boolean
  items: DropdownFilter[]
  selectedItem: DropdownFilter
  setItem: (item: DropdownFilter) => void
}

const DropdownMenu: FC<Props> = (props) => {
  const { className, label, disabled = false, items, size = 'small', selectedItem, setItem } = props
  const popupRef = useRef(null)
  const [isOpen, setOpen] = useState(false)

  useOutsideClick(popupRef, () => {
    setOpen(false)
  })
  const toggleOpenMenu = (): void => setOpen(!isOpen)

  const onClick = (item: DropdownFilter): void => {
    setItem(item)
    setFocus(rootRef)
  }

  const rootRef = useRef<HTMLDivElement>(null)

  const setFocus = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.focus()
    }
  }

  return (
    <SC.DropdownMenuRoot className={className} size={size} ref={popupRef}>
      <SC.Label as="label">{label}</SC.Label>
      <SC.Wrap
        tabIndex={disabled ? -1 : 0}
        role={disabled ? undefined : 'button'}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={disabled ? undefined : toggleOpenMenu}
        disabled={disabled}
        ref={rootRef}
      >
        <SC.Title>{selectedItem.value}</SC.Title>
        <SC.Icon isOpen={isOpen}>{React.createElement(CheckIcon)}</SC.Icon>
        {isOpen && (
          <SC.SelectList size={size} role={'listbox'}>
            {items.map(item => (
              <SC.ListItemWrap key={item.id}>
                <SC.ListItem
                  onClick={() => onClick(item)}
                  isSelected={item.id === selectedItem.id}
                  aria-selected={item.id === selectedItem.id}
                  role={'option'}
                >
                  <SC.ListItemTitle title={item.value}>{item.value}</SC.ListItemTitle>
                </SC.ListItem>
              </SC.ListItemWrap>
            ))}
          </SC.SelectList>
        )}
      </SC.Wrap>
    </SC.DropdownMenuRoot>
  )
}

export default DropdownMenu
