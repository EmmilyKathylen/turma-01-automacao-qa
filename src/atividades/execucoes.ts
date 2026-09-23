
export type ExecucaoTeste = {id: number; titulo: string; status: "passou" | "falhou"; duracao: number;};

export const execucoes: ExecucaoTeste[] = [
{
    id: 1,
    titulo: "Login com dados válidos",
    status: "passou",
    duracao: 1200,
  },
  {
    id: 2,
    titulo: "Login com senha inválida",
    status: "passou",
    duracao: 900,
  },
  {
    id: 3,
    titulo: "Cadastro de usuário",
    status: "falhou",
    duracao: 1500,
  },
  {
    id: 4,
    titulo: "Busca de produto",
    status: "passou",
    duracao: 800,
  },
  {
    id: 5,
    titulo: "Logout do sistema",
    status: "passou",
    duracao: 600,
  },
];

export const titulos = execucoes.map((execucao) => execucao.titulo);

export const testesAprovados = execucoes.filter(
  (execucao) => execucao.status === "passou"
);

export const tempoTotal = execucoes.reduce(
  (total, execucao) => total + execucao.duracao,
  0
);

// Simula uma espera de 100ms, como se fosse uma requisição para uma API.
// O await faz a função esperar essa operação terminar antes de continuar.
export async function buscarExecucaoPorId(id: number): Promise<ExecucaoTeste> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  
   // Procura no array uma execução que tenha o ID informado.
    const execucao = execucoes.find((execucao) => execucao.id === id);

// Se nenhuma execução for encontrada, lança um erro.
  if (!execucao) {
    throw new Error(`Execução com id ${id} não encontrada`);
  }

  return execucao;
}