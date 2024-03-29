import { InputMask } from '@react-input/mask';
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
  TransactionGroup,
} from './styles';
import { ButtonIcon } from '../../Components/Button-icon';
import { Card } from '../../Components/Card';
import { Transaction } from '../../Components/Transaction';
import { NewCategoryDialog } from '../../Components/NewCategory';
import { NewTransactionDialog } from '../../Components/NewTransaction';
import { CategoriesChart } from '../../Components/CategoriesPieChart';
import { EvolutionBarChart } from '../../Components/EvolutionBarChart[';

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <NewCategoryDialog />
          <NewTransactionDialog />
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
            <ChartContent>
              <CategoriesChart />
            </ChartContent>
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
            <ChartContent>
              <EvolutionBarChart />
            </ChartContent>
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
            <TransactionGroup>
              <Transaction
                id={1}
                amount={20000}
                date="02/11/2023"
                category={{ title: 'Alimentação', color: '#ff44aa' }}
                title="Mercado"
              />
            </TransactionGroup>
          </header>
        </Aside>
      </Main>
    </>
  );
}
