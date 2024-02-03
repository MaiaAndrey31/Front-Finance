import { Button } from "../../Components/Button";
import { Logo } from "../../Components/Logo";
import { Title } from "../../Components/Title";
import { Filters, Header, Main, Section } from "./styles";

export function Home() {
    return (
        <><Header>
            <Logo />
            <div>
                <Button>Nova Transação</Button>
                <Button>Nova Categoria</Button>
            </div>
        </Header>
        <Main>
            <Section>
                <Filters>
                    <Title title="Saldo" subtitle="Receitas e despessas no periodo"/>
                </Filters>
            </Section>
        </Main>
            </>
    )
}