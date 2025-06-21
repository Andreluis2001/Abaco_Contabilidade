import "../styles/style.css";
import {zodResolver} from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {z} from "zod";
import api from "../api";

const schema = z.object({
    data_de_manutencao: z.string().date("A data de realização da manutenção é obrigatória"),
    descricao: z.string({ required_error: "A descrição da manutenção é obrigatória" }).max(500, "A descrição não pode exceder 500 caracteres"),
});

type FormFields = z.infer<typeof schema>;

type Props = {
    tipo: 'computador' | 'equipamento';
    numero_de_patrimonio: string;
}

function FormaRegistroManutencao({tipo, numero_de_patrimonio}: Props) {

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const submitToManutencaoComputadores: SubmitHandler<FormFields> = async (data) => {
        api
            .post('api/manutencao/computadores/', {
                computador: numero_de_patrimonio,
                descricao: data.descricao
            })
            .then((response) => {
                if (response.status === 201) {
                    alert('Manutenção cadastrada com sucesso!');
                } else {
                    alert('Erro ao cadastrar Manutenção. Tente novamente.');
                }
            })
            .catch((error) => {
                console.error('Erro ao cadastrar manutenção:', error);
            });
    };

    const submitToManutencaoEquipamentos: SubmitHandler<FormFields> = async (data) => {
        api
            .post('api/manutencao/equipamentos/', {
                equipamento: numero_de_patrimonio,
                descricao: data.descricao
            })
            .then((response) => {
                if (response.status === 201) {
                    alert('Manutenção de equipamento cadastrada com sucesso!');
                } else {
                    alert('Erro ao cadastrar manutenção de equipamento. Tente novamente.');
                }
            })
            .catch((error) => {
                console.error('Erro ao cadastrar manutenção de equipamento:', error);
            });
    };
            
    return (
        <>
            <form className="form" id="equipment-form" onSubmit={handleSubmit(tipo === 'computador' ? submitToManutencaoComputadores : submitToManutencaoEquipamentos)}>
                <div className="form-row">
                    <div>
                        <label>Data de Manutenção*</label>
                        <input
                            type="date"
                            id="data_de_aquisicao"
                            {...register("data_de_manutencao")}
                        />
                        {errors.data_de_manutencao && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.data_de_manutencao.message}</div>
                        )}
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

export default FormaRegistroManutencao;