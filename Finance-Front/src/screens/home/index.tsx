import { Button } from "../../Components/Button";
import { Logo } from "../../Components/Logo";
import { Header } from "./styles";

export function Home() {
    return (
        <Header>
            <Logo />
            <div>
                <Button variant="outline">Nova Transação</Button>
                <Button>Nova Categoria</Button>
            </div>
        </Header>
    )
}