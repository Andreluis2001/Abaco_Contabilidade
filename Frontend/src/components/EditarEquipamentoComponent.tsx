import '../styles/style.css';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from "zod";

const schema = z.object({
    equipamento: z.string().min(1, "Equipamento é obrigatório"),
    modelo: z.string().min(1, "Modelo é obrigatório"),
    aquisicao: z.string().min(1, "Data de Aquisição é obrigatória"),
    garantia: z.string().optional(),
    local: z.string().min(1, "Local é obrigatório"),
    descricao: z.string().optional(),
    status: z.string().optional(),
});

type FormFields = z.infer<typeof schema>;

type Props = {
    equipamentoData?: any
};

function EditarEquipamentoComponent({ equipamentoData }: Props) {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        defaultValues: {
            equipamento: equipamentoData?.equipamento || "",
            modelo: equipamentoData?.modelo || "",
            aquisicao: equipamentoData?.data_de_aquisicao ? equipamentoData.data_de_aquisicao.substring(0, 10) : "",
            garantia: equipamentoData?.data_da_garantia ? equipamentoData.data_da_garantia.substring(0, 10) : "",
            local: equipamentoData?.localizacao || "",
            descricao: equipamentoData?.descricao || "",
            status: equipamentoData?.equipamento_status || "",
        }
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await api
            .patch(`api/equipamentos/${equipamentoData.numero_de_patrimonio}/`, {
                equipamento: data.equipamento,
                modelo: data.modelo,
                data_de_aquisicao: data.aquisicao,
                data_da_garantia: data.garantia,
                equipamento_status: data.status,
                localizacao: data.local,
                descricao: data.descricao
            })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Erro ao atualizar equipamento');
                }
                alert('Equipamento atualizado com sucesso!');
                navigate(-1);
            })
            .catch(error => {
                console.error('Erro ao atualizar equipamento:', error);
            });
    };

    if (!equipamentoData) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <form className="form" id="equipment-edit-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <div>
                        <label>Equipamento*</label>
                        <input
                            type="text"
                            {...register("equipamento")}
                            disabled
                        />
                    </div>
                    <div>
                        <label>Número de Patrimônio*</label>
                        <input type="text" value={equipamentoData.numero_de_patrimonio} disabled />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Modelo*</label>
                        <input
                            type="text"
                            {...register("modelo")}
                        />
                        {errors.modelo && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.modelo.message}</div>
                        )}
                    </div>
                    <div>
                        <label>Data da Aquisição*</label>
                        <input
                            type="date"
                            {...register("aquisicao")}
                        />
                        {errors.aquisicao && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.aquisicao.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Data da Garantia</label>
                        <input
                            type="date"
                            {...register("garantia")}
                        />
                        {errors.garantia && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.garantia.message}</div>
                        )}
                    </div>
                    <div>
                        <label>Local*</label>
                        <input
                            type="text"
                            {...register("local")}
                        />
                        {errors.local && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.local.message}</div>
                        )}
                    </div>
                    <div>
                        <label>Status*</label>
                        <select {...register("status")}>
                            <option value="">Selecione o status</option>
                            <option value="Ativo">Ativo</option>
                            <option value="Manutencao">Manutencao</option>
                            <option value="Desativado">Desativado</option>
                        </select>
                        {errors.status && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.status.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="full-width">
                        <label>Observações</label>
                        <textarea
                            {...register("descricao")}
                        />
                        {errors.descricao && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.descricao.message}</div>
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

export default EditarEquipamentoComponent;