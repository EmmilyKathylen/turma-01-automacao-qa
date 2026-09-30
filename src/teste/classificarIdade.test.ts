import { expect, test, describe, it } from 'vitest'

function classificarIdade(idade: number): string {
    if (idade < 0) {
        throw new Error("Idade inválida");
    }

    if (idade <= 12) {
        return "Criança";
    }

    if (idade <= 17) {
        return "Adolescente";
    }

    if (idade <= 59) {
        return "Adulto";
    }

    return "Idoso";
};


describe("Testes para a função classificarIdade", () => {

test("Verificar idade negativa", () => {
        expect(() => classificarIdade(-1)).toThrow("Idade inválida");
    });

test("Validar classificação de idade", () => {
        expect(classificarIdade(10)).toBe("Criança");
    });

test("Validar classificação de idade adolescente", () => {
        expect(classificarIdade(15)).toEqual("Adolescente");
    });

test("Validar classificação de várias idades", () => {
    const idades = [12, 17, 59, 60];

        const resultados = idades.map(idade => classificarIdade(idade));

    expect(resultados).toHaveLength(4);
    });

    test('Validar classificação adulta', () => {
        const resultado = classificarIdade(30);

        expect(resultado).toContain("Adulto");
    });
});


