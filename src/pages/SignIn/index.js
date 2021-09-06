import { useLocation, useHistory, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Title from "../../components/Title";
import Background from "../../components/Background";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Form, Row } from "../../components/Auth";

export default function SignIn() {
  const location = useLocation();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const close = { autoClose: 2000 };

  const body = {
    email,
    password,
  };

  function login(e) {
    e.preventDefault();
    setLoading(true);
    const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, body);
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

  return (
    <Background>
      <Title />
      <Form onSubmit={login}>
        <fieldset disabled={`${loading ? "disabled" : "" }`}>
          <span>
            <h1>Faça o seu login</h1>
          </span>
          <Input id="E-mail" type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <Input
            label="Senha"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" disabled={loading} location={location}>
          Entrar
          </Button>
        </fieldset>
      </Form>
      <Row>
        <Link to="/sign-up">Não tem uma conta? Cadastre-se!</Link>
      </Row>
    </Background>
  );
}
