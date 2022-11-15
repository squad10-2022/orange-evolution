import React from "react";
import { BoxLoginContainer } from "./styles";
import { useForm } from "react-hook-form";
import api from "../../services/api"
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useUser } from "../../hooks/UserContext"
import { Link } from "react-router-dom"

const BoxLogin = () => {
  const { putUserData, userData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um email válido").required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatória"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async clientData => {
    const { data } = await api.post("sessions", {
      email: clientData.email,
      password: clientData.password
    })

    putUserData(data)
  };

  return (
    <BoxLoginContainer>
      <div>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="wrapperLogin">
            <a className="phraseLogin">Faça login na sua conta para começar!</a>

            <input {...register("email")} type="email" placeholder="  E-mail"></input>
            <p>{errors.email?.message}</p>

            <input {...register("password")} type="password" placeholder="  Senha"></input>
            <p>{errors.password?.message}</p>

            <a className="forgotPassword">Esqueceu sua senha?</a>

            <button type="submit">ENTRAR</button>
            <a className="cadastreText">Não tem conta?</a>
            <Link to="/Cadastre" className="cadastreText"> Cadastre-se aqui</Link>
          </div>
        </form>
      </div>
    </BoxLoginContainer>
  );
};

export default BoxLogin;
