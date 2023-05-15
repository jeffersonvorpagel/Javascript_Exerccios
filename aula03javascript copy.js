const notaUm = 5;
const notaDois = 3;
const notaTres = 7;

const media = (notaUm + notaDois + notaTres) / 3;

console.log(media);
if (media < 5) {
    console.log('Reprovação');

} else if( media >=5 && media <=7){
    console.log ('Recuperação');
}elsed (media >7){
    console.log ('Aprovado');
}