import styled from '@emotion/styled';

export const PhoneForm = styled.form`
  width: 215px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
`;

export const FormInput = styled.input`
  padding: 4px;
  border: none;
  border-radius: 3px;
  outline: none;
  color: #FFF8DC;
  background-color: #2F4F4F;
  font-size: 20px;
  font-family: inherit;
`;

export const FormButton = styled.button`
  padding: 5px 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #A0522D;
  font-weight: 700;
  font-size: 15px;
  color: currentColor;
  &:hover {
    background-color: #8B4513;
  }
`;