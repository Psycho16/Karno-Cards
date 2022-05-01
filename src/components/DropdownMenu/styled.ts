import styled from 'styled-components'


const getWidth = (size: 'big' | 'small') => {
  if (size === 'big') return '360px'
  if (size === 'small') return '235px'
}

export const DropdownMenuRoot = styled.div<{ size: 'big' | 'small' }>`
  width: ${({ size }) => getWidth(size)};
  height: auto;

  -webkit-tap-highlight-color: transparent;
`

export const Label = styled.p`
  margin-bottom: 12px;
  font-size: 15px;
`

export const Wrap = styled.div<{ disabled: boolean }>`
  width: 100%;
  height: 26px;
  padding: 14px 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #F6F6F6;
  border: 2px solid transparent;
  border-radius:7px;

  font-size: 20px;
  color: #9E9E9E;

  position: relative;

  transition: border 0.2s ease, color 0.2s ease;

  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};

  :hover {
    border-color: #ADD0AD;
    color: #191C20;
  }

  :focus-visible {
    outline: 2px dashed #01BA01;
    outline-offset: 3px;
  }

  ${({ disabled }) => {
    if (disabled)
      return `
        opacity: 0.5;

        &:hover {
          border-color: transparent;
        }

        &:focus {
          outline: none;
          border-color: transparent;
        }
      `
  }}
`
export const Title = styled.div`
  max-width: 100%;
`

export const Icon = styled.div<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-90deg)' : 'rotate(90deg)')};

  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    stroke: #191C20;
    width: 40px;
    height: 40px;
  }
`

export const SelectList = styled.ul<{ size: 'big' | 'small' }>`
  width: 100%;
  position: absolute;
  left: 0;
  top: 64px;

  max-height: 220px;

  overflow-y: auto;
  overflow-x: hidden;

  padding: 14px 11px;
  margin: 0;

  background-color: #FFFFFF;

  border-radius: 7px;

  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.11);

  z-index: 100;

  cursor: default;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #CCCCCC;
    border: solid 12px transparent;
    border-radius: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #F6F6F6;
    border: solid 12px transparent;
    border-radius: 7px;
  }
`

export const ListItemWrap = styled.li`
  list-style-type: none;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

export const ListItem = styled.button<{ isSelected: boolean }>`
  width: 100%;
  height: 38px;
  padding: 3px 17px;
  text-align: left;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: none;
  border-radius: 7px;

  background-color: ${({ isSelected }) => (isSelected ? `#daffda` : 'transparent')};

  transition: background-color 0.2s ease;

  font-size: 24px;
  line-height: 32px;

  cursor: pointer;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & svg {
    fill: #01BA01;

    path {
      fill: #01BA01;
    }
  }

  &:hover {
    background-color:#F6F6F6;
  }

  &:active {
    background-color: #daffda;
  }

  & div {
    max-width: ${({ isSelected }) => (isSelected ? `230px` : '282px')};
  }
`
export const ListItemTitle = styled.div`
  
`

export const ListItemIcon = styled.div`
  max-width: 20px;
  max-height: 14px;

  svg,
  span {
    max-width: 20px;
    max-height: 14px;
  }
`
