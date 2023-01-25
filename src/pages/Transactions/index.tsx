import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  TransactionsContext,
  TransactionsProvider,
} from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

import { priceFormatter, dateFormatter } from "../../utils/formatter";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer className="content">
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(
              ({ id, category, createdAt, description, price, type }) => (
                <tr key={String(id)}>
                  <td width="50%">{description}</td>
                  <td>
                    <PriceHighlight variant={type}>
                      {type === "outcome" && "- "}
                      {priceFormatter.format(price)}
                    </PriceHighlight>
                  </td>
                  <td>{category}</td>
                  <td>{dateFormatter.format(new Date(createdAt))}</td>
                </tr>
              )
            )}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
