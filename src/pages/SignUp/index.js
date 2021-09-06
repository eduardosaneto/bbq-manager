import { useLocation, useHistory, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Title from "../../components/Title";
import Background from "../../components/Background";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Form, Row } from "../../components/Auth";

export default function SignUp() {
  const location = useLocation();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const close = { autoClose: 2000 };

  const body = {
    name,
    email,
    password,
    confirmPassword,
  };

  function register(e) {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast.error("As senhas devem ser iguais!", close);
      setLoading(false);
    } else {
      const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, body);
      request.then(response => {
        toast.success("Seu cadastro foi concluído com sucesso", close);
        setLoading(false);
        history.push("/");
      });
      request.catch(error => {
        toast.error("Não foi possível realizar o cadastro. Por favor, preencha os campos corretamente", close);
        setLoading(false);
      });
    }
  }

  return (
    <Background>
      <Title />
      <Form onSubmit={register}>
        <fieldset disabled={`${loading ? "disabled" : ""}`}>
          <span>
            <h1>Realize o seu cadastro</h1>
          </span>
          <Input label="Nome" type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
          <Input id="E-mail" type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <Input
            label="Senha"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            label="Repita sua senha"
            type="password"
            placeholder="Repita sua senha"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <Button type="submit" color="primary" disabled={loading} location={location}>
          Cadastrar
          </Button>
        </fieldset>
      </Form>
      <Row>
        <Link to="/">Já está inscrito? Faça login</Link>
      </Row>
    </Background>
  );
}
