
class heroi {
	constructor ( nome, idade, classe, arma) {
    this.nome = nome
    this.idade =idade
    this.classe = classe
    this.arma = arma
    }
    ataque(){
    console.log(`${this.classe} atacou usando ${this.arma}`)
    }
  }
  // nome , idade , classe e ataque 
    guerreiro = new heroi ("Errisson", 35, "guerreiro", "espada")
    guerreiro.ataque()

    mago = new heroi ("mago", "magia")
    mago.ataque()
    
    ninja = new heroi ("ninja" , "shuriken" )
    ninja.ataque( )
    
    monge = new heroi ( "monge" , "artes marciais")
    monge.ataque()
    
    