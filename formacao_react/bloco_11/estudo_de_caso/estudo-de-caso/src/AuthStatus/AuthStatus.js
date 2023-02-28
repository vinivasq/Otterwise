import React from "react";
import { useAuth } from "../context/auth-context";

const AuthStatus = () => {
  const auth = useAuth();
  console.log(useAuth());

  if (!auth.user) {
    return <p>Não está logado</p>;
  }

  return (
    <div>
      <p>
        Bem vindo {auth.user.name}! <button>Sair</button>
      </p>
    </div>
  );
};

export default AuthStatus;
