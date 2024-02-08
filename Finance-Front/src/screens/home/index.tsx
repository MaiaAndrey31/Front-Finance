import { InputMask } from '@react-input/mask';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';
import { Logo } from '../../Components/Logo';
import { Title } from '../../Components/Title';
import {
  Aside,
  Balance,
  ChartAction,
  ChartContainer,
  ChartContent,
  Filters,
  Header,
  InputGroup,
  Main,
  SearchTransaction,
  Section,
} from './styles';
import { ButtonIcon } from '../../Components/Button-icon';
import { Card } from '../../Components/Card';
import { Transaction } from '../../Components/Transaction';

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <Button>Nova Transação</Button>
          <Button>Nova Categoria</Button>
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subtitle="Receitas e despessas no periodo" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Inicio"
                placeholder="dd/mm/aaaa"
              />
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Fim"
                placeholder="dd/mm/aaaa"
              />
              <ButtonIcon />
            </InputGroup>
          </Filters>
          <Balance>
            <Card title={'Saldo'} amount={1000000} />
            <Card title={'Receitas'} amount={1000000} variant="incomes" />
            <Card title={'Despesas'} amount={1000000} variant="expenses" />
          </Balance>
          <ChartContainer>
            <header>
              <Title
                title="Gastos"
                subtitle="Despesas por categoria no período"
              />
            </header>
            <ChartContent></ChartContent>
          </ChartContainer>
          <ChartContainer>
            <header>
              <Title
                title="Evolução Financeira"
                subtitle="Saldo, Receitas e Gastos no ano"
              />
              <ChartAction>
                <InputMask
                  component={Input}
                  mask="aaaa"
                  replacement={{ a: /\d/ }}
                  variant="black"
                  label="Ano"
                  placeholder="aaaa"
                />
                <ButtonIcon />
              </ChartAction>
            </header>
            <ChartContent></ChartContent>
          </ChartContainer>
        </Section>
        <Aside>
          <header>
            <Title
              title="Transações"
              subtitle="Receitas e Despesas no período"
            />
            <SearchTransaction>
            <Input variant="black" placeholder="Procurar transação" />
            <ButtonIcon />
            </SearchTransaction>
            <Transaction id={1} amount={20000} date="02/11/2023" category={{title: 'Alimentação', color: '#ff44aa'}}
            title='Mercado'  />
          </header>
        </Aside>
      </Main>
    </>
  );
}
