import styled from 'styled-components';

const ButtonWrapper = styled.button`
  /* if you want to use styled components :) */
`;

interface ButtonProps {
  text: string;
  click: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <ButtonWrapper
      onClick={props.click}
      className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
    >
      {props.text}
    </ButtonWrapper>
  );
};

export default Button;
