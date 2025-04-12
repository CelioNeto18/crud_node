import { Router } from 'express';

import * as AlunoController from '../controllers/AlunoController';
import * as DisciplinaController from '../controllers/DisciplinaController'
import * as AlunoDisciplinaController from '../controllers/AlunoDisciplinaController'


const router = Router();

//rotas aluno
router.get('/listarTodosAlunos', AlunoController.listarAlunos);//feito
router.post('/cadastrarAluno', AlunoController.cadastrarAluno);//feito
router.put('/atualizarAluno/:alunoId', AlunoController.atualizarAluno);//feito
router.delete('/deletarAluno/:alunoId', AlunoController.deletarAluno);//feito

//rotas disciplina
router.get('/listarTodasDisciplinas', DisciplinaController.listarDisciplinas);//feito
router.post('/cadastrarDisciplina', DisciplinaController.cadastrarDisciplina);//feito
router.put('/atualizarDisciplina/:disciplinaId', DisciplinaController.atualizarDisciplina);//feito
router.delete('/deletarDisciplina/:disciplinaId', DisciplinaController.deletarDisciplina);//feito

router.post("/vincularAlunoADisciplina", AlunoDisciplinaController.vincularAlunoADisciplina);//feito
router.get("/listarDisciplinasDoAluno/:alunoId", AlunoDisciplinaController.listarDisciplinasDoAluno);//feito

export default router;  

