import { useCallback, useState } from 'react';
import { Dialog } from '../Dialog';
import { Button } from '../Button';
import { Title } from '../Title';
import { Input } from '../Input';
import { Container } from './styles';

export function NewCategoryDialog() {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [])
  
  const onSubmit = useCallback(() => {
    handleClose()
  }, [handleClose])

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nova Categoria</Button>}
    >
      <Container>
        <Title
          title="Nova Categoria"
          subtitle="Crie uma nova categoria para suas transações!"
        />

        <form>
          <div>
            <Input label="Nome" placeholder="Nova Categoria" />
            <Input label="Cor" type="color" />
          </div>
          <footer>
            <Button onClick={handleClose} variant="outline" type="button">
              Cancelar
            </Button>
            <Button onClick={onSubmit} type="button">Criar Categoria</Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
