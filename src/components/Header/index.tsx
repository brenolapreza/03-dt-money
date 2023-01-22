import * as Dialog from "@radix-ui/react-dialog";
import logoImg from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent className="content">
        <img src={logoImg} />

        <Dialog.Root>
          <Dialog.Trigger>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
