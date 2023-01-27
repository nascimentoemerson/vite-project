import { FormEvent, useState } from "react";
import { StyledForm, StyledLoginForm, StyledButton, StyledButtonLogin } from "./styles";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { api } from "../../../utils/api/api";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../celules/loading/loading";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const userData = await api.login(loginPayload);
    setLoading(false);

    if (!userData) {
      setError(true);
      return;
    }
    navigate("/classroom");
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StyledLoginForm>
          <h2>Bem-vindo</h2>
          <StyledForm onSubmit={handleSubmit} error={error}>
            <input placeholder="Digite Seu E-mail" name="email" required />
            <div>
              <input
                placeholder="Digite Sua Senha"
                type={showPassword ? "text" : "password"}
                name="password"
                required
              />
              <button type="button" onClick={handleShowPassword}>
                {showPassword ? (
                  <BsEyeFill size={25} />
                ) : (
                  <BsEyeSlashFill size={25} />
                )}
              </button>
            </div>
              <StyledButtonLogin id="btn" type="submit">Login</StyledButtonLogin>
          </StyledForm>
          <StyledButton
            onClick={() => {
              navigate("/register");
            }}
          >
            Not have Account?
          </StyledButton>
        </StyledLoginForm>
      )}
    </>
  );
}