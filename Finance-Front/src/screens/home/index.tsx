import { InputMask } from "@react-input/mask";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Logo } from "../../Components/Logo";
import { Title } from "../../Components/Title";
import { Balance, Filters, Header, InputGroup, Main, Section } from "./styles";
import { ButtonIcon } from "../../Components/Button-icon";
import { Card } from "../../Components/Card";

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
                    <InputGroup>
                    <InputMask 
                    component={Input}
                    mask='dd/mm/yyyy'
                    replacement={{d: /\d/,m:/\d/,y:/\d/}}
                    variant="dark"
                    label="Inicio" 
                    placeholder="dd/mm/yyyy"               
                    />
                        <InputMask 
                    component={Input}
                    mask='dd/mm/yyyy'
                    replacement={{d: /\d/,m:/\d/,y:/\d/}}
                    variant="dark"
                    label="Fim" 
                    placeholder="dd/mm/yyyy"                 
                    />
                    <ButtonIcon />
                    </InputGroup>
                </Filters>
                <Balance>
                    <Card title={"Saldo"} amount={0} />
                    <Card title={"Receitas"} amount={0} variant="incomes" />
                    <Card title={"Despesas"} amount={0} variant="expenses"/>
                </Balance>
            </Section>
        </Main>
            </>
    )
}