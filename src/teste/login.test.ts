import { expect, test, describe } from 'vitest'

function login(username: string, password: string): boolean {
    return username === 'emmily' && password === '1234';
}

test('Permitir fazer login com credenciais válidas', () => {
    const efetuandoLogin = login('emmily', '1234')
    expect(efetuandoLogin).toBe(true)
});


describe('Negar login com credenciais inválidas', () => {

    test('Negar login com senha incorreta', () => {
        const efetuandoLogin = login('emmily', '4321')
        expect(efetuandoLogin).toBe(false)
    });

    test('Negar login com usuário incorreto', () => {
        const efetuandoLogin = login('ana', '1234')
        expect(efetuandoLogin).toBe(false)
    });

    test('Negar login com usuário e senha incorreta', () => {
        const efetuandoLogin = login('ana', '4321')
        expect(efetuandoLogin).toBe(false)
    });

    test('Negar login com campos vazios', () => {
        const efetuandoLogin = login(' ', ' ')
        expect(efetuandoLogin).toBe(false)
    });

})
