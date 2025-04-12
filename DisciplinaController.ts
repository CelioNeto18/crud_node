import { Request, Response } from "express";
import { Disciplina } from "../models/Disciplina";

// 🔹 Listar disciplinas
export const listarDisciplinas = async (req: Request, res: Response) => {
    const disciplinas = await Disciplina.findAll();
    return res.json(disciplinas);
}

// 🔹 Cadastrar disciplina
export const cadastrarDisciplina = async (req: Request, res: Response) => {
    const { nome } = req.body;

    if (nome) {
        let disciplinaExistente = await Disciplina.findOne({ where: { nome } });
        if (!disciplinaExistente) {
            let novaDisciplina = await Disciplina.create({ nome });

            res.status(201);
            return res.json({
                message: "Disciplina cadastrada com sucesso.",
                novaDisciplina
            });
        } else {
            return res.status(400).json({ error: "Nome da disciplina já existe." });
        }
    }

    return res.status(400).json({ error: "Nome da disciplina não enviado." });
};

export const atualizarDisciplina = async (req: Request, res: Response) => {
    try {
        const { disciplinaId } = req.params;
        const dadosAtualizados = req.body;

        const disciplina = await Disciplina.findByPk(disciplinaId);
        if (!disciplina) {
            return res.status(404).json({ error: "Aluno nao encontrado."  })        
        }

        await disciplina.update(dadosAtualizados, {fields: Object.keys(dadosAtualizados)});

        return res.status(200).json({message:"Disciplina atualizada", disciplina});
        
    } catch (error) {
        res.status(500).json({message:"erro ao atualizar disciplina", error})
    }
}

export const deletarDisciplina = async (req: Request, res: Response) => {
    const { disciplinaId } = req.params;
    let disciplina = await Disciplina.findByPk(disciplinaId);

    if (disciplina) {
        await disciplina.destroy();
        return res.json({message: "disciplina deletado"});
    }

    return res.status(404).json({error: "disciplina nao encontrada"});
};