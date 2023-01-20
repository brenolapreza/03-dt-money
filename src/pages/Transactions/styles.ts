import styled from "styled-components";

export const TransactionsContainer = styled.main`
  margin: 6.4rem auto 0;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.8rem;
  margin-top: 2.4rem;
  td {
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 2rem 3.2rem;
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}
export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;
