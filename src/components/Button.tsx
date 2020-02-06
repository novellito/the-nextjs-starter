import styled from 'styled-components';

const ButtonWrapper = styled.button`
  color: teal;
  font-size: 2em;
`;

interface ButtonProps {
  text: string;
  click: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = (props: ButtonProps) => {
  return <ButtonWrapper onClick={props.click}>{props.text}</ButtonWrapper>;
};

export default Button;
