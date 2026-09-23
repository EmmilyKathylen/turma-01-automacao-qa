import { METHODS } from "node:http";
import path from "node:path";
import { title } from "node:process";

interface POST {
    id: number;
    title: string;
    body: string;
}

//GET: buscar post

async function buscarPostagem(id: number): Promise<POST> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}` 
    );

    console.log("STATUS:")
    console.log(res.status)

///Aqui existe uma conversão e ao terminar ele vai retornar uma postagem
    const resGet = await res.json() as Promise<POST>;  
    return resGet
}

const get = await buscarPostagem(77);
console.log(get)
console.log(get.title)


//POST: cria uma nova postagem 

async function criarPostagem(): Promise<POST> {
    const res = await fetch(
     `https://jsonplaceholder.typicode.com/posts`, {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
             },
            body: JSON.stringify({
                title:"Minha primeira postagem",
                body:"Descrição",
                userId:2
            }),
        });

    console.log("STATUS:")
    console.log(res.status)

    const resPost = await res.json() as Promise<POST>;
    return resPost
}
// const post = await criarPostagem();
// console.log(post)


// PUT
async function atualizarPostagemCompleta(id: number): Promise<POST> {
    const corpoEnviado = {
        title:"Atualização da minha primeira postagem",
        boy:"Uma nova descrição",
        userId:1
    }

    const res = await fetch(
     `https://jsonplaceholder.typicode.com/posts/${77}/`, {
            method: "PUT", 
            headers: {
                'Content-Type': 'application/json'
             },
            body: JSON.stringify(corpoEnviado),
        });

    console.log("CORPO ENVIADO")
    console.log(corpoEnviado)

    console.log("STATUS:")
    console.log(res.status)

    console.log("CORPO RECEBIDO")
    const resPut = await res.json() as Promise<POST>;
    return resPut

}
/// const put = await atualizarPostagemCompleta(77)
/// console.log(put)


//DELETE

async function deletar(id: number): Promise<void> {
    const res = await fetch(
     `https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
     });

    console.log("STATUS")
    console.log(res.status);

 }

///deletar(77)


// PATCH

async function atualizaCampo(id: number): Promise<POST> {
    const corpoEnviado = {
        title: "Novo titulo"   
    }

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method:"PATCH",
            headers:  {
                'Content-Type': 'application/json'
             },

             body: JSON.stringify(corpoEnviado)
     });

    console.log("CORPO ENVIADO")
    console.log(corpoEnviado)

    console.log("STATUS");
    console.log(res.status);

    console.log("CORPO RECEBIDO")
    const resPatch = await res.json() as Promise<POST>;
    return resPatch

}

// const patch = await atualizaCampo(56);
// console.log(patch);
// console.log(patch.title);


