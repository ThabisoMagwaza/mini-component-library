/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: '8px',
    borderRadius: '4px',
  },
  medium: {
    height: '12px',
    borderRadius: '4px',
  },
  large: {
    height: '24px',
    borderRadius: '8px',
    padding: '4px',
  },
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};

  height: var(--height);
  padding: var(--padding, 0);
  border-radius: var(--border-radius);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`;

const Bar = styled.div`
  width: ${(props) => props.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  if (typeof value !== 'number' || value < 0 || value > 100) {
    throw new Error(`Invalid value: ${value}`);
  }

  const style = SIZES[size];

  if (!style) {
    throw new Error(`Invalid size: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      style={{
        '--height': style.height,
        '--border-radius': style.borderRadius,
        '--padding': style.padding,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
