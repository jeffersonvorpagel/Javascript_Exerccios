const preco_etiqueta = 100;
const condDePagamento1 = 4;


const pagamento = condDePagamento1 

if( condDePagamento1 === 1){
    console.log (preco_etiqueta - (preco_etiqueta * 0.1)  );
} else if (condDePagamento1 === 2){
    console.log (preco_etiqueta - (preco_etiqueta * 0.15));
} else if (condDePagamento1 === 3){
    console.log(preco_etiqueta);
}else {
    console.log (preco_etiqueta + (preco_etiqueta * 0.10));
}