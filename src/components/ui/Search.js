import styled from '@emotion/styled';
import { css } from '@emotion/core';

const InputText = styled.input`
  border: 1px solid var(--gray3);
  padding: 1rem;
  min-width: 300px;
`;

const SubmitButton = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url('/static/img/search.png');
  background-repeat: no-repeat;
  position: absolute;
  right: 1rem;
  top: 1px;
  background-color: white;
  border: none;
  text-indent: -99999px;

  &:hover {
    cursor: pointer;
  }
`;

export default function Search() {
  return (
    <form
      css={css`
        position: relative;
      `}
    >
      <InputText 
        type="text"
        placeholder="Search Product"
      />
      <SubmitButton type="submit">Search</SubmitButton>
    </form>
  );
}