import "../styles/style.css";
import api from '../api';
import {useNavigate } from 'react-router-dom';
import {zodResolver} from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {z} from "zod";

const schema = z.object({
    username: z.string()
        .min(1, "O nome de usuário é obrigatório")
        .regex(/^\S+$/, "O nome de usuário não pode conter espaços"),
    nome: z.string().min(1, "O nome é obrigatório"),
    email: z.string().email("Email inválido").min(1, "O email é obrigatório"),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    cargo: z.string().min(1, "O cargo é obrigatório"),
});

type FormFields = z.infer<typeof schema>;

function FormaCadastroUsuarios() {

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();


    const submitToUsuarios: SubmitHandler<FormFields> = async (data) => {
        api
            .post('api/usuarios/create/', {
                username: data.username,
                nome_completo: data.nome,
                email: data.email,
                password: data.senha,
                role: data.cargo
            })
            .then((response) => {
                if (response.status === 201) {
                    alert('Usuário cadastrado com sucesso!');
                    navigate(-1);
                } else {
                    alert('Erro ao cadastrar Usuário. Tente novamente.');
                }
            })
            .catch((error) => {
                console.error('Erro ao cadastrar computador:', error);
            });
    }

    return (
        <>
            <form className="form" id="user-form" onSubmit={handleSubmit(submitToUsuarios)}>
                <div className="form-row">
                    <div className="full-width">
                        <label>Nome De Usuário*</label>
                        <input
                            type="text"
                            id="full-name"
                            placeholder="Este é nome que será usado para login e será visível no site"
                            {...register("username")}
                        />
                        {errors.username && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.username.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="full-width">
                        <label>Nome Completo*</label>
                        <input
                            type="text"
                            id="full-name"
                            placeholder="Digite seu nome completo"
                            {...register("nome")}
                        />
                        {errors.nome && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.nome.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="full-width">
                        <label>Email*</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            {...register("email")}
                        />
                        {errors.email && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.email.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="full-width">
                        <label>Cargo*</label>
                        <select
                            id="cargo"
                            {...register("cargo")}
                        >
                            <option value="">Selecione o cargo</option>
                            <option value="admin">Administrador</option>
                            <option value="tecnico">Tecnico</option>
                        </select>
                        {errors.cargo && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.cargo.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Senha*</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            {...register("senha")}
                        />
                        {errors.senha && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.senha.message}</div>
                        )}
                    </div>
                </div>
                <button disabled={isSubmitting} type="submit">
                    {isSubmitting ? <i className="fa-solid fa-spinner fa-spin"></i> : "CADASTRAR USUÁRIO"}
                </button>
            </form>
        </>
    );
}

export default FormaCadastroUsuarios;