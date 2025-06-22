import '../styles/style.css';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from "zod";

const schema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
    cargo: z.string().min(1, "Cargo é obrigatório"),
    status: z.string().optional(),
});

type FormFields = z.infer<typeof schema>;

type Props = {
    usuario?: any
};

function EditarUsuarioComponent({ usuario }: Props) {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        defaultValues: {
            nome: usuario?.username || "",
            email: usuario?.email || "",
            cargo: usuario?.role || "",
            status: usuario?.status || "",
        }
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await api
            .patch(`api/usuarios/${usuario.id}/`, {
                username: data.nome,
                email: data.email,
                role: data.cargo,
                status: data.status,
            })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Erro ao atualizar usuário');
                }
                alert('Usuário atualizado com sucesso!');
                navigate('/lista/usuarios');
            })
            .catch(error => {
                console.error('Erro ao atualizar usuário:', error);
            });
    };

    return (
        <>
            <form className="form" id="usuario-edit-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <div>
                        <label>Nome*</label>
                        <input
                            type="text"
                            {...register("nome")}
                        />
                        {errors.nome && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.nome.message}</div>
                        )}
                    </div>
                    <div>
                        <label>E-mail*</label>
                        <input
                            type="email"
                            {...register("email")}
                        />
                        {errors.email && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.email.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Cargo*</label>
                        <select {...register("cargo")}>
                            <option value="">Selecione o cargo</option>
                            <option value="admin">Admin</option>
                            <option value="tecnico">Técnico</option>
                        </select>
                        {errors.cargo && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.cargo.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Status</label>
                        <select {...register("status")}>
                            <option value="">Selecione o status</option>
                            <option value="Ativo">Ativo</option>
                            <option value="Inativo">Inativo</option>
                        </select>
                        {errors.status && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.status.message}</div>
                        )}
                    </div>
                </div>
                <button disabled={isSubmitting} type="submit">
                    {isSubmitting ? <i className="fa-solid fa-spinner fa-spin"></i> : <><i className="bi bi-pencil-square"></i> Salvar Alterações</>}
                </button>
            </form>
        </>
    );
}

export default EditarUsuarioComponent;