import { Request, Response } from "express";
import { Aluno } from "../models/Aluno";
import { Disciplina } from "../models/Disciplina";

// 🔹 Listar todos os alunos
export const listarAlunos = async (req: Request, res: Response) => {
    const alunos = await Aluno.findAll();
    return res.json(alunos);
};


// 🔹 Cadastrar um novo aluno
export const cadastrarAluno = async (req: Request, res: Response) => {
    const { nome, email, matricula } = req.body;

    // 🔹 Criando o aluno sem verificações adicionais
    let novoAluno = await Aluno.create({ nome, email, matricula });

    res.status(201).json({
        message: "Aluno cadastrado com sucesso.",
        novoAluno
    });
};

export const atualizarAluno = async (req: Request, res: Response) => {
    try {
        const { alunoId } = req.params;
        const dadosAtualizados = req.body;

        const aluno = await Aluno.findByPk(alunoId);
        if (!aluno) {
            return res.status(404).json({ error: "Aluno nao encontrado."  })        
        }

        await aluno.update(dadosAtualizados, {fields: Object.keys(dadosAtualizados)});

        return res.status(200).json({message:"aluno atualizado", aluno});
        
    } catch (error) {
        res.status(500).json({message:"erro ao atualizar aluno", error})
    }
}

export const deletarAluno = async (req: Request, res: Response) => {
    const { alunoId } = req.params;
    let aluno = await Aluno.findByPk(alunoId);

    if (aluno) {
        await aluno.destroy();
        return res.json({message: "aluno deletado"});
    }

    return res.status(404).json({error: "aluno nao encontrado"});
};

