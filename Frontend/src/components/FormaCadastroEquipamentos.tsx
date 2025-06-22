import "../styles/style.css";
import api from '../api';
import {useNavigate } from 'react-router-dom';
import {zodResolver} from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {z} from "zod";

const schema = z.object({
    equipamento: z.string().min(1, "Equipamento é obrigatório"),
    modelo: z.string().min(1, "Modelo é obrigatório"),
    patrimonio: z.string().min(1, "Número de Patrimônio é obrigatório"),
    aquisicao: z.string().date("Data de Aquisição é obrigatória"),
    garantia: z.string().date().optional(),
    local: z.string().min(1, "Local é obrigatório"),
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

function FormaCadastroEquipamentos() {

    const {register, handleSubmit, watch, formState: {errors, isSubmitting}} = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();

    const equipamento = watch("equipamento");

    const submitToComputadores: SubmitHandler<FormFields> = async (data) => {
        api
            .post('api/computadores/', {
                numero_de_patrimonio: data.patrimonio,
                modelo: data.modelo,
                data_de_aquisicao: data.aquisicao,
                localizacao: data.local,
                data_da_garantia: data.garantia,
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
                if (response.status === 201) {
                    alert('Computador cadastrado com sucesso!');
                    navigate('/lista/equipamentos');
                } else {
                    alert('Erro ao cadastrar Computador. Tente novamente.');
                }
            })
            .catch((error) => {
                console.error('Erro ao cadastrar computador:', error);
            });
    }

    const submitToEquipamentos: SubmitHandler<FormFields> = async (data) => {
        api
            .post('api/equipamentos/', {
                numero_de_patrimonio: data.patrimonio,
                equipamento: data.equipamento,
                modelo: data.modelo,
                data_de_aquisicao: data.aquisicao,
                localizacao: data.local,
                data_da_garantia: data.garantia,
                descricao: data.descricao
            })
            .then((response) => {
                if (response.status === 201) {
                    alert("Equipamento cadastrado com sucesso!");
                    navigate('/lista/equipamentos');
                } else {
                    alert('Erro ao cadastrar equipamento. Tente novamente.');
                }
            })
            .catch((error) => {
                console.error('Erro ao cadastrar computador:', error);
            });
    }

    return (
        <>
            <form className="form" id="equipment-form" onSubmit={equipamento === 'Computador' ? handleSubmit(submitToComputadores) : handleSubmit(submitToEquipamentos)}>
                <div className="form-row">
                    <div>
                        <label>Equipamento*</label>
                        <select 
                            id="equipamento"
                            {...register("equipamento")}
                        >
                            <option value="Computador">Computador</option>
                            <option value="Impressora">Impressora</option>
                            <option value="Monitor">Monitor</option>
                            <option value="Projetor">Projetor</option>
                            <option value="Scanner">Scanner</option>
                            <option value="Roteador">Roteador</option>
                        </select>
                    </div>
                    {errors.equipamento && (
                        <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.equipamento.message}</div>
                    )}
                </div>
                <div className="form-row">
                    <div>
                        <label>Modelo*</label>
                        <input
                            type="text"
                            id="modelo"
                            {...register("modelo")}
                        />
                        {errors.modelo && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.modelo.message}</div>
                        )}
                    </div>
                    <div>
                        <label>Número de Patrimônio*</label>
                        <input
                            type="text"
                            id="patrimonio"
                            {...register("patrimonio")}
                        />
                        {errors.patrimonio && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.patrimonio.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Data da Aquisição*</label>
                        <input
                            type="date"
                            id="aquisicao"
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
                            id="garantia"
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
                            id="local"
                            {...register("local")}
                        />
                        {errors.local && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.local.message}</div>
                        )}
                    </div>
                </div>

                <div
                    className="form-row"
                    id="computador-campos"
                    style={{ display: equipamento === 'Computador' ? 'flex' : 'none' }}
                >
                    <div>
                        <label>Processador</label>
                        <input
                            type="text"
                            id="processador"
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
                            id="ram"
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
                            id="hd"
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
                            id="ssd"
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
                            id="fonte"
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
                            id="placa-mae"
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
                            id="placa-video"
                            {...register("placaVideo")}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="full-width">
                        <label>Observações</label>
                        <textarea
                            id="descricao"
                            placeholder="Informe a observação caso tenha."
                            {...register("descricao")}
                        ></textarea>
                        {errors.descricao && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.descricao.message}</div>
                        )}
                    </div>
                </div>

                <button disabled={isSubmitting} type="submit">
                    {isSubmitting ? <i className="fa-solid fa-spinner fa-spin"></i> : "Cadastrar Equipamento"}
                </button>
            </form>
        </>
    );
}

export default FormaCadastroEquipamentos;