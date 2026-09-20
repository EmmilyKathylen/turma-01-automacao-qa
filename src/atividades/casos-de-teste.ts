console.log("O arquivo está sendo executado!");


type CasoDeTeste = {id:number; titulo:string; descricao:string; automatizado:boolean};

function criarCasosDeTeste(id:number, titulo:string, descricao:string, automatizado:boolean) {
        return{id, titulo, descricao, automatizado}
}

function descrever(caso: CasoDeTeste): string {
        return `Id: ${caso.id} - Titulo: ${caso.titulo} - Descrição${caso.descricao} - Automatizado${caso.automatizado}`;
}

function marcarAutomatizado(caso: CasoDeTeste): CasoDeTeste {
    caso.automatizado = true;
    return caso;
}


const casoComErro = criarCasosDeTeste ("3", "Login com dados válidos", "Verificar se o usuário consegue realizar login com dados válidos", false);


const primeiroCasoDeTeste = criarCasosDeTeste(1,"Login com dados válidos","Verificar se o usuário consegue realizar login com dados válidos.",false);


console.log(descrever(primeiroCasoDeTeste));

const casoAutomatizado = marcarAutomatizado(primeiroCasoDeTeste);

console.log(descrever(casoAutomatizado));


