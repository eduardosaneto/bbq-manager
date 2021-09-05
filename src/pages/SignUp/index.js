import Title from "../../components/Title";
import Background from "../../components/Background";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Form from "../../components/Form";

export default function SignUp() {
  return (
    <Background>
      <Title />
      <Form>
        <span>
          <h1>Realize o seu cadastro</h1>
        </span>
        <Input label="Nome" type="text" placeholder="Nome" />
        <Input label="E-mail" type="email" placeholder="E-mail" />
        <Input label="Senha" type="password" placeholder="Senha" />
        <Input label="Repita sua senha" type="password" placeholder="Repita sua senha" fullWidth />
        <Button type="submit" color="primary" fullWidth>
          Cadastrar
        </Button>
      </Form>
    </Background>
  );
}
