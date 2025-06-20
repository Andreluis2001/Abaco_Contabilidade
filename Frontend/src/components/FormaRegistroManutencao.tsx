import "../styles/style.css";
import {zodResolver} from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {z} from "zod";

const schema = z.object({
    tipo: z.string().min(1, "O tipo é obrigatório"),
    data: z.string().date("A data de realização da manutenção é obrigatória"),
    descricao: z.string({ required_error: "A descrição da manutenção é obrigatória" }).max(500, "A descrição não pode exceder 500 caracteres"),
});

type FormFields = z.infer<typeof schema>;

function FormaRegistroManutencao() {

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    return (
        <>
            <form className="form" id="equipment-form" >
                <div className="form-row">
                    <div>
                        <label>Tipo*</label>
                        <input
                            type="text"
                            id="tipo"
                            {...register("tipo")}
                        />
                        {errors.tipo && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.tipo.message}</div>
                        )}
                    </div>
                    <div>
                        <label>Data de Manutenção*</label>
                        <input
                            type="date"
                            id="data"
                            {...register("data")}
                        />
                        {errors.data && (
                            <div className="error-message" style={{ color: "red", fontSize: "0.85em" }}>{errors.data.message}</div>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="full-width">
                        <label>Observações</label>
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
            </form>
        </>
    );
}

export default FormaRegistroManutencao;