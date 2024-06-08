import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface FormInputProps {
    id: string;
    name: string;
    placeholder: string;
    type?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    as?: 'input' | 'textarea';
}

// Define the props for the StyledInput component explicitly
interface StyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    focused?: boolean;
}

const StyledInputContainer = styled.div`
  position: relative;
  margin: 20px auto;
  width: 80%; // Default styling for all screen sizes

  @media (max-width: 768px) { 
    width: 100%; 
  }
`;

const StyledInput = styled.input.attrs({}) <StyledInputProps>`
  font-size: 16px;
  padding: 20px 20px 12px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
  &:focus {
    outline: none;
  }
  ${({ focused }) =>
        focused &&
        css`
      border-color: #5264AE;
    `}
`;

const StyledPlaceholder = styled.span<{ focused: boolean }>`
  position: absolute;
  left: 5px;
  top: 20px;
  transition: 0.2s ease all;
  pointer-events: none;
  color: #999;
  font-size: 16px;
  font-weight: normal;
  transform: translateY(${({ focused }) => (focused ? '-16px' : '0')});
   ${({ focused }) =>
        focused &&
        css`
      font-size: 12px; // Reduce font size when focused
    `}
`;

const FormInput: React.FC<FormInputProps> = ({ id, name, placeholder, type = 'text', value, onChange, as = 'input' }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <StyledInputContainer>
            <StyledPlaceholder focused={isFocused}>
                {placeholder}
            </StyledPlaceholder>
            <StyledInput
                type={type}
                id={id}
                name={name}
                placeholder=""
                value={value}
                onChange={(e) => {
                    onChange(e);
                    setIsFocused(e.target.value !== '');
                }}
                required
                className={`w-full p-2 border rounded`}
                focused={isFocused} // Pass the focused prop explicitly
            />
        </StyledInputContainer>
    );
};

export default FormInput;
