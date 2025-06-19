import { useNavigate } from "react-router-dom";
import api from "../api";
import {z} from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    username: z.string().min(1, "Usuário é obrigatório"),
    password: z.string().min(1, "Senha é obrigatória"),
});

type FormFields = z.infer<typeof schema>;


function LoginForm() {
    
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();

    const handleFormSubmit: SubmitHandler<FormFields> = async (data) => {
        const response = await api.post('api/token/', { username: data.username, password: data.password });
        if (response.status === 200) {
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            navigate('/');
        }
    }

    return (
        <form className="login-form" onSubmit={handleSubmit(handleFormSubmit)}>
            <label className="login-label-input">
                <i className="fa-regular fa-circle-user login-icon-modify" ></i>
                <input 
                    {...register("username")} 
                    type="text" 
                    placeholder="Usuário" 
                    style={{
                        borderColor: errors.username ? "red" : "#ccc",
                        borderWidth: "2px",
                        outline: errors.username ? "1px solid red" : undefined,
                    }}
                />
            </label>
            <label className="login-label-input">
                <i className="fa-solid fa-lock login-icon-modify"></i>
                <input
                    {...register("password")}
                    type="password"
                    placeholder="Senha"
                    style={{
                        borderColor: errors.password ? "red" : "#ccc",
                        borderWidth: "2px",
                        outline: errors.password ? "1px solid red" : undefined,
                    }}
                />
            </label>
            {errors.username && (
                <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.username.message}</div>
            )}
            {errors.password && (
                <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.password.message}</div>
            )}
            <button disabled={isSubmitting} type="submit" className="login-btn login-btn-second" id="btn-entrar">
                {isSubmitting ? <i className="fa-solid fa-spinner fa-spin"></i> : "Entrar"}
            </button>
        </form>
    )
}

export default LoginForm;