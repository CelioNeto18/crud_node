CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    matricula VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE disciplinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE aluno_disciplinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    alunoId INT NOT NULL,
    disciplinaId INT NOT NULL,
    FOREIGN KEY (alunoId) REFERENCES alunos(id) ON DELETE CASCADE,
    FOREIGN KEY (disciplinaId) REFERENCES disciplinas(id) ON DELETE CASCADE
);