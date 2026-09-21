import { expect, test } from 'vitest'

interface User {
    nome: string;
    idade: number;
}

function creatUser(nome: string, idade: number): User {
    return {nome, idade}
}


test('Criar um usuário com nome e idade', () => {
    const user = creatUser('Emmily', 24)

    expect(user).toEqual({nome: 'Emmily', idade: 30})
    expect(user.nome).toBe('Emmily')
});

