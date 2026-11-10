// =====================================================
//  DADOS DOS PRODUTOS
//  Para adicionar um produto novo: copie um bloco abaixo,
//  cole no final da lista (com vírgula) e mude o "id".
//  Os textos de "descricao" e "detalhes" são rascunhos:
//  troque pelas informações reais de cada produto.
// =====================================================

// WhatsApp com código do país e DDD, só números. Ex.: "5511999999999"
// Se ficar vazio, o botão "Fazer encomenda" leva ao formulário de contato.
const NUMERO_WHATSAPP = "";

const produtos = [
  {
    id: 1,
    nome: "Buquê de flores Vermelhas",
    preco: 149.90,
    imagem: "./Produtos - imagens/produto1.jpg",
    resumo: "Um presente clássico para demonstrar amor.",
    descricao:
      "Buquê de rosas vermelhas montado à mão, embrulhado em papel kraft. " +
      "É o presente clássico para declarar amor, comemorar uma data especial " +
      "ou surpreender alguém querido.",
    detalhes: [
      ["Flores", "Rosas vermelhas"],
      ["Embalagem", "Papel kraft"],
      ["Ideal para", "Namoro, aniversário e datas especiais"],
      ["Entrega", "Para toda SP"]
    ]
  },
  {
    id: 2,
    nome: "Arranjo Especial",
    preco: 189.90,
    imagem: "./Produtos - imagens/produto2.jpg",
    resumo: "Uma combinação delicada de flores especiais.",
    descricao:
      "Arranjo colorido de tulipas com laço de cetim, perfeito para alegrar " +
      "qualquer ambiente e presentear em momentos de celebração.",
    detalhes: [
      ["Flores", "Tulipas coloridas"],
      ["Acabamento", "Laço de cetim rosa"],
      ["Ideal para", "Aniversário, agradecimento e celebrações"],
      ["Entrega", "Para toda SP"]
    ]
  },
  {
    id: 3,
    nome: "Buquê de flores azuis",
    preco: 169.90,
    imagem: "./Produtos - imagens/produto3.jpg",
    resumo: "Um presente elegante e sofisticado para ocasiões especiais.",
    descricao:
      "Buquê de flores azuis com detalhes em flores brancas delicadas, " +
      "em embalagem azul. Uma escolha elegante e diferente para quem " +
      "quer surpreender.",
    detalhes: [
      ["Flores", "Flores azuis com flores brancas delicadas"],
      ["Embalagem", "Papel azul"],
      ["Ideal para", "Ocasiões especiais e homenagens"],
      ["Entrega", "Para toda SP"]
    ]
  }
];

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
