import styled from "styled-components";

export const Group = styled.div.attrs({
  className: 'form-group',
})`
  & .form-control {
    &:focus {
      border-color: green;
    }
  }
`;