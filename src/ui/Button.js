/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const Button = ({ label, reff, handleChange, handleButtonClick }) => {
  // Component did mount

  useEffect(() => {
    const input = reff.current;
    input.addEventListener('change', handleChange);

    return () => {
      input.removeEventListener('change', handleChange);
    };
  }, [handleChange]);
  return (
    <>
      <Input ref={reff} onChange={handleChange} />
      <StyledButton onClick={handleButtonClick}>{label}</StyledButton>
    </>
  );
};

export default Button;

// Styles

const Input = styled.input.attrs(() => ({
  type: 'file',
}))`
  display: none;
`;

const StyledButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  padding: 12px 24px;
  border: 2px solid var(--primary);
  outline: none;
  border-radius: 50px;
  background-color: transparent;
  font-family: 'Philosopher', sans-serif;
  font-size: ${(props) => props.font || '18px'};
  color: var(--primary);
  text-align: center;
  cursor: pointer;
`;
