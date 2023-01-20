import { SummaryCard, SummaryContainer } from "./styles";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from "phosphor-react";

export function Summary() {
  return (
    <SummaryContainer className="content">
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f76a68" />
        </header>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyCircleDollar size={32} color="#fff" />
        </header>
      </SummaryCard>
    </SummaryContainer>
  );
}
