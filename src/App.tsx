import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <TransactionsProvider>
          <Transactions />
        </TransactionsProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
