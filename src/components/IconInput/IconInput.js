import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    iconSize: 16,
    iconMargin: 8,
    fontSize: 14,
  },
  large: {
    iconSize: 24,
    iconMargin: 12,
    fontSize: 18,
  },
};

const Wrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.label`
  color: ${COLORS.gray700};

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  width: var(--size);
  height: var(--size);

  margin-top: auto;
  margin-bottom: auto;
`;

const NativeInput = styled.input`
  width: var(--width, 100%);

  color: ${COLORS.gray700};

  border: none;

  font-weight: 700;

  border-bottom: 1px solid ${COLORS.black};

  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: var(--padding-left);

  font-size: var(--font-size);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:hover + ${IconWrapper} {
    color: ${COLORS.black};
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const id = `${Date.now()}-${Math.random()}`;

  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`No size ${size} found`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <NativeInput
        id={id}
        placeholder={placeholder}
        style={{
          '--width': width + 'px',
          '--font-size': `${styles.fontSize / 16}rem`,
          '--padding-left': `${(styles.iconSize + styles.iconMargin) / 16}rem`,
        }}
      />
      <IconWrapper
        htmlFor={id}
        style={{
          '--size': styles.iconSize + 'px',
        }}
      >
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
    </Wrapper>
  );
};

export default IconInput;
