import '../styles/style.css';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from "zod";

const schema = z.object({
    modelo: z.string().min(1, "Modelo é obrigatório"),
    aquisicao: z.string().min(1, "Data de Aquisição é obrigatória"),
    garantia: z.string().optional(),
    local: z.string().min(1, "Local é obrigatório"),
    status: z.string().optional(),
    processador: z.string().optional(),
    ram: z.string().optional(),
    hd: z.string().optional(),
    ssd: z.string().optional(),
    fonte: z.string().optional(),
    placaMae: z.string().optional(),
    placaVideo: z.string().optional(),
    descricao: z.string().optional(),
});

type FormFields = z.infer<typeof schema>;

type Props = {
    computador?: any
};

function EditarComputadorComponent({ computador }: Props) {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        defaultValues: {
            modelo: computador?.modelo || "",
            aquisicao: computador?.data_de_aquisicao ? computador.data_de_aquisicao.substring(0, 10) : "",
            garantia: computador?.data_da_garantia ? computador.data_da_garantia.substring(0, 10) : "",
            local: computador?.localizacao || "",
            status: computador?.computador_status || "",
            processador: computador?.modelo_processador || "",
            ram: computador?.memoria_ram || "",
            hd: computador?.modelo_hd || "",
            ssd: computador?.modelo_ssd || "",
            fonte: computador?.modelo_fonte || "",
            placaMae: computador?.modelo_placa_mae || "",
            placaVideo: computador?.modelo_placa_video || "",
            descricao: computador?.descricao || "",
        }
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await api
            .patch(`api/computadores/${computador.numero_de_patrimonio}/`, {
                modelo: data.modelo,
                data_de_aquisicao: data.aquisicao,
                data_da_garantia: data.garantia,
                localizacao: data.local,
                computador_status: data.status,
                modelo_processador: data.processador,
                memoria_ram: data.ram,
                modelo_hd: data.hd,
                modelo_ssd: data.ssd,
                modelo_fonte: data.fonte,
                modelo_placa_mae: data.placaMae,
                modelo_placa_video: data.placaVideo,
                descricao: data.descricao
            })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Erro ao atualizar equipamento');
                }
                alert('Equipamento atualizado com sucesso!');
                navigate('/lista/equipamentos');
            })
            .catch(error => {
                console.error('Erro ao atualizar equipamento:', error);
            });
    };

    return (
        <>
            <form className="form" id="equipment-edit-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <div>
                        <label>Equipamento*</label>
                        <input type="text" value="Computador" disabled />
                    </div>
                    <div>
                        <label>Número de Patrimônio*</label>
                        <input type="text" value={computador.numero_de_patrimonio} disabled />
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
                </div>
                <div className="form-row">
                    <div>
                        <label>Status</label>
                        <input
                            type="text"
                            {...register("status")}
                        />
                        {errors.status && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.status.message}</div>
                        )}
                    </div>
                </div>
                <div
                    className="form-row"
                    id="computador-campos"
                >
                    <div>
                        <label>Processador</label>
                        <input
                            type="text"
                            {...register("processador")}
                        />
                        {errors.processador && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.processador.message}</div>
                        )}
                    </div>
                    <div>
                        <label>Memória RAM</label>
                        <input
                            type="text"
                            {...register("ram")}
                        />
                        {errors.ram && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.ram.message}</div>
                        )}
                    </div>
                    <div>
                        <label>HD</label>
                        <input
                            type="text"
                            {...register("hd")}
                        />
                        {errors.hd && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.hd.message}</div>
                        )}
                    </div>
                    <div>
                        <label>SSD</label>
                        <input
                            type="text"
                            {...register("ssd")}
                        />
                        {errors.ssd && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.ssd.message}</div>
                        )}
                    </div>
                    <div>
                        <label>Fonte</label>
                        <input
                            type="text"
                            {...register("fonte")}
                        />
                        {errors.fonte && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.fonte.message}</div>
                        )}
                    </div>
                    <div>
                        <label>Placa Mãe</label>
                        <input
                            type="text"
                            {...register("placaMae")}
                        />
                        {errors.placaMae && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.placaMae.message}</div>
                        )}
                    </div>
                    <div>
                        <label>Placa de Vídeo</label>
                        <input
                            type="text"
                            {...register("placaVideo")}
                        />
                        {errors.placaVideo && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.placaVideo.message}</div>
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

export default EditarComputadorComponent;