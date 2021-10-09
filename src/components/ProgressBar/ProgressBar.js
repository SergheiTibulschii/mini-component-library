/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizeMapper = {
  small: {
    '--size-sm': '12px',
    '--rounded': '4px',
    '--padding': '2px'
  },
  medium: {
    '--size-sm': '16px',
    '--rounded': '4px',
    '--padding': '2px'
  },
  large: {
    '--size-sm': '24px',
    '--rounded': '8px',
    '--padding': '4px'
  }
}

const maxValue = 100;
const minValue = 0;
const ProgressBar = ({ value, size }) => {
  return <Container style={sizeMapper[size]}>
    <VisuallyHidden>
      Progress bar {value}
    </VisuallyHidden>
    <Progress value={ value ? Math.max(value <= maxValue ? value : maxValue, minValue) : minValue} />
  </Container>;
};

const Container = styled.div`
  --color-primary: ${COLORS.primary};
  height: var(--size-sm);
  border-radius: var(--rounded);
  padding: var(--padding);
  
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background: rgba(128, 128, 128, 0.15);
  
  max-width: 370px;
`

const Progress = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    transform: translateX(calc(-100% + ${props => props.value}%));
    transition: transform 0.25s;
    background: var(--color-primary);
  }
`

export default ProgressBar;
