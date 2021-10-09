import React from 'react';
import styled, {css} from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const iconSize = {
  small: 17,
  large: 24
}

const sizeVars = {
  small: {
    '--font-size': '14px',
    '--padding': '4px 4px 4px 26px',
    '--border': '1px solid'
  },
  large: {
    '--font-size': '18px',
    '--padding': '9px 25px 9px 40px',
    '--border': '2px solid'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  return (
      <InputContainer style={{
        ...sizeVars[size],
        '--width': `${width}px`
      }}>
        <Input
            placeholder={placeholder}
        />
        <InputIcon size={iconSize[size]} id={icon} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </InputContainer>
  );
};

const InputIcon = styled(Icon)(() => css`
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-55%);
  pointer-events: none;
`);

const Input = styled.input`
  border: none;
  border-bottom: var(--border);
  padding: var(--padding);
  outline-offset: 2px;
  color: inherit;
  font-size: inherit;
  width: 100%;
  font-weight: bold;
  
  &::placeholder {
    color: var(--color-gray-500);
  }
`

const InputContainer = styled.div(() => css`
  --color-gray-500: ${COLORS.gray500};
  --color-gray-700: ${COLORS.gray700};
  --color-black: ${COLORS.black};
  
  position: relative;
  color: var(--color-gray-700);
  font-size: var(--font-size);
  width: var(--width);
  transition: color 0.25s;
 
  &:hover {
    color: var(--color-black);
  }
`);

export default IconInput;
