import { resolve } from "node:dns";


// function buscarNome(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Juan");
//         }, 4000);
//     });
// }

// async function executar() {
//     console.log("Início do programa...");
//     const nome = await buscarNome();
//     console.log(nome);
//     console.log("Fim do programa.")
// }

// executar();

//console.log(typeof Promise);

//npx tsx caminho do arquivo(escolhe a pasta a ser executada )


function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function buscarUsuario(id: number): Promise<string> {
    await delay(5000); 
    return `Usuário #${id}`;
}

console.log("Inicío do programa...");
const nome = await buscarUsuario(42);
console.log(nome);