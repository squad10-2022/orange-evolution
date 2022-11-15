import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { BoxCadastreContainer } from "./styles";

const BoxCadastre = () => {
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(dadosUsuario) {
    axios.post("http://localhost:3001/users", {...dadosUsuario}).then((res) => {
    alert(res.data.message);
    }).catch((erro) => {
      alert(erro)
    })
  }

  return (
    <BoxCadastreContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="wrapperCadastre">
          <a className="phraseCadastre">Cadastre-se</a>
          <div className="alignCadastre">
            <label for="nome"> Nome</label>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, ref, value } }) => (
                <input
                  type="text"
                  value={value}
                  ref={ref}
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <label for="nome"> E-mail</label>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, ref, value } }) => (
                <input
                  type="email"
                  value={value}
                  ref={ref}
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <label for="nome"> Senha</label>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, ref, value } }) => (
                <input
                  type="password"
                  value={value}
                  ref={ref}
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
            <label for="nome"> Confirmar Senha</label>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, ref, value } }) => (
                <input
                  type="password"
                  value={value}
                  ref={ref}
                  onChange={(e) => onChange(e.target.value)}
                />
              )}
            />
          </div>
          <button type="submit">CADASTRAR</button>
          <a className="cadastreText">Já tem conta? Entre aqui</a>
        </div>
      </form>
    </BoxCadastreContainer>
  );
};

export default BoxCadastre;
