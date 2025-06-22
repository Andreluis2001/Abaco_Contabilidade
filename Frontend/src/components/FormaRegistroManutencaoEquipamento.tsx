import "../styles/style.css";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from "zod";
import api from "../api";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    data_de_manutencao: z.string().date("A data de realização da manutenção é obrigatória"),
    motivo: z.string({ required_error: "O motivo da manutenção é obrigatório" }),
    descricao: z.string({ required_error: "A descrição da manutenção é obrigatória" }).max(500, "A descrição não pode exceder 500 caracteres"),
});

type FormFields = z.infer<typeof schema>;

type Props = {
    numero_de_patrimonio: string;
}

function FormaRegistroManutencaoEquipamento({ numero_de_patrimonio }: Props) {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();

    const submitToManutencaoEquipamentos: SubmitHandler<FormFields> = async (data) => {
        api
            .post('api/manutencao/equipamentos/', {
                equipamento: numero_de_patrimonio,
                tipo_manutencao: data.motivo,
                descricao: data.descricao
            })
            .then((response) => {
                if (response.status === 201) {
                    alert('Manutenção cadastrada com sucesso!');
                    navigate(-1);
                } else {
                    alert('Erro ao cadastrar Manutenção. Tente novamente.');
                }
            })
            .catch((error) => {
                console.error('Erro ao cadastrar manutenção:', error);
            });
    };

    return (
        <>
            <form className="form" id="equipment-form" onSubmit={handleSubmit(submitToManutencaoEquipamentos)}>
                <div className="form-row">
                    <div>
                        <label>Data de Manutenção*</label>
                        <input
                            type="date"
                            id="data_de_manutencao"
                            {...register("data_de_manutencao")}
                        />
                        {errors.data_de_manutencao && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.data_de_manutencao.message}</div>
                        )}
                    </div>
                    <div>
                        <label>Motivo da Manutenção</label>
                        <select 
                            id="motivo"
                            {...register("motivo")}
                        >
                            <option value="Preventiva">Preventiva</option>
                            <option value="Corretiva">Corretiva</option>
                            <option value="Atualizacao">Atualização</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="full-width">
                        <label>Descrição</label>
                        <textarea
                            id="descricao"
                            placeholder="Informe a descrição da manutenção"
                            {...register("descricao")}
                        ></textarea>
                        {errors.descricao && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.descricao.message}</div>
                        )}
                    </div>
                </div>
                <br />
                <button disabled={isSubmitting} className="btn btn-success" type="submit">
                    {isSubmitting ? <i className="fa-solid fa-spinner fa-spin"></i> : "Registrar Manutenção"}
                </button>
            </form>
        </>
    );
}

export default FormaRegistroManutencaoEquipamento;