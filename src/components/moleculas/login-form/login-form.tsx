import { FormEvent, useState } from "react";
import { StyledForm, StyledLoginForm } from "./styles";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

export function LoginForm() {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    function handleShowPassword() {
        setShowPassword(!showPassword)
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const loginPayload = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        };

        console.log(loginPayload)

    }
    return (
        <StyledLoginForm>
            <h2>Login</h2>
            <StyledForm onSubmit={handleSubmit}>
                <input placeholder="Seu email" name="email" required />
                <div>
                    <input placeholder="Sua senha" type={showPassword ? "text" : "password"} name="password" required />
                    <button onClick={handleShowPassword}>
                        {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                    </button>
                </div>
                <button type='submit'>Login</button>
            </StyledForm>
        </StyledLoginForm>
    )
}