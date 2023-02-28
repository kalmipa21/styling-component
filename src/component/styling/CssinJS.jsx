import Styled from "styled-components";

const Button = Styled.button`
    padding: 8px 1rem;
    border-radius: 10px;
    border: none;
    background: green;

    &:hover{
        background: rgb(126, 3, 241);
        cursor: pointer;
    }
`;
const CssinJS = () => {
  return (
    <div>
      <Button>Style CSS in JS</Button>
    </div>
  );
};
export default CssinJS;
