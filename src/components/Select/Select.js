import React from 'react';
import styled, {css} from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);
    const [isFocused, setIsFocused] = React.useState(false);

    return (
        <SelectContainer isFocused={isFocused}>
            <SelectElement
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={value} onChange={onChange}
            >
                {children}
            </SelectElement>
            <Content>{displayedValue}</Content>
            <SelectIcon id='chevron-down'/>
        </SelectContainer>
    );
};

const SelectIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  pointer-events: none;
`

const Content = styled.div`
  pointer-events: none;
`

const SelectContainer = styled.div(({ isFocused }) => css`
  --text-color-gray: ${COLORS.gray700};
  --text-color-black: #000;
  --outline-color: ${COLORS.primary};
  
  position: relative;
  display: inline-flex;
  align-items: center;
  background: rgba(128, 128, 128, 0.15);
  border-radius: 8px;
  border: none;
  padding: 12px 52px 12px 16px;
  overflow: hidden;
  color: var(--text-color-gray);
  transition: color 0.25s;
  outline-offset: 2px;
  
  ${isFocused && css`
    outline: 2px solid var(--outline-color);
  `}
  
  &:hover {
    color: var(--text-color-black);
  }
`)

const SelectElement = styled.select(() => css`
  opacity: 0;
  position: absolute;
  inset: 0;
  appearance: none;
  background: rgba(128, 128, 128, 0.15);
  border-radius: 8px;
  border: none;
  padding: 12px 52px 12px 16px;
  cursor: pointer;
`)

export default Select;
