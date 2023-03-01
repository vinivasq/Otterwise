import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";


const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate()
  console.log(useAuth());

  if (!auth.user) {
    return <p>Não está logado</p>;
  }

  return (
    <div>
      <p>
        Bem vindo {auth.user.name}! <button onClick={() => {
          auth.logout(() => navigate("/"))
        }}>Sair</button>
      </p>
    </div>
  );
};

export default AuthStatus;
