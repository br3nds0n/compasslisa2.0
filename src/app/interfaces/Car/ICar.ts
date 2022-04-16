export interface ICar {
  _id: string
  modelo: string
  cor: string
  ano: string
  acessoririos: [
    {
      descricao: string
    }
  ]
  quantidadePassageiros: Number
}
