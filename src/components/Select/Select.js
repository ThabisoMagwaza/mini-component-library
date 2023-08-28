import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;

  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Presentation = styled.div`
  color: ${COLORS.gray700};

  background: ${COLORS.transparentGray15};
  padding: 12px 16px;

  padding-right: 52px;

  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;

  margin-top: auto;
  margin-bottom: auto;

  width: 24px;
  height: 24px;

  pointer-events: none;
`;

const Select = ({ value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Presentation>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
      </Presentation>
    </Wrapper>
  );
};

export default Select;
