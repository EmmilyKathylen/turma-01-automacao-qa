// TYPE

type Pessoa = {nome:string; idade:number};    //molde

function criarPessoa(n:string, idade:number): Pessoa{
    return{nome:n, idade};
}

const p = criarPessoa("Emmily", 24);
console.log(p)


const p1 = criarPessoa("Anderson", 26);
console.log(p1)

type Produto = {nome: string, preco: number, estoque: number};

function criarProduto(nome: string, preco: number, estoque: number): Produto {
    return{nome, preco, estoque}
}

const produto = criarProduto("Tevlado com led", 120, 59);
console.log(produto);