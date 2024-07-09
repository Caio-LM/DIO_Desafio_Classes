class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque(){
        if (this.tipo == "Mago"){
            console.log(`O ${this.tipo} atacou usando Magia`);
    }
        else if(this.tipo == "Guerreiro"){
            console.log(`O ${this.tipo} atacou usando Espada`);
    }

    }

}

let heroi1 = new heroi("Dante", "23", "Mago")

let heroi2 = new heroi("Carlos", "22", "Guerreiro")

heroi1.ataque()
heroi2.ataque()