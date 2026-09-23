import { describe, expect, test } from "vitest";

import { execucoes, titulos, testesAprovados, tempoTotal, buscarExecucaoPorId, } from "../atividades/execucoes.js";

describe("Execuções de teste", () => {

    test("Deve possuir 5 execuções", () => {
        expect(execucoes.length).toBe(5);
    });

    test("Deve retornar os títulos das execuções", () => {
        expect(titulos.length).toBe(5);
        expect(titulos[0]).toBe("Login com dados válidos");
    });

    test("Deve retornar 4 testes aprovados", () => { 
        expect(testesAprovados.length).toBe(4); }); 
    
    test("Deve calcular o tempo total das execuções", () => { 
        expect(tempoTotal).toBe(5000); }); 
        
    test("Deve buscar uma execução existente pelo id", async () => { 
        
        const resultado = await buscarExecucaoPorId(1); 
        expect(resultado.id).toBe(1); expect(resultado.titulo).toBe("Login com dados válidos"); 
        expect(resultado.status).toBe("passou"); }); 
        
    test("Deve lançar erro quando o id não existir", async () => { 
        await expect( buscarExecucaoPorId(99) ).rejects.toThrow( "Execução com id 99 não encontrada" ); });

})