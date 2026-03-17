//criar um programa com uma condicional composta para avaliar o desempenho escolar entre ' exelente ', ' otimo ',' bom ', ' regular ' ou 'ruim 'dependendo da nota 
let nota = 95
if(nota >=90){
    console.log(`exelente`)
}else if(nota < 90 && nota >=75 ){
    console.log(`otimo`)
}else if (nota < 75 && nota >=65){
    console.log(`bom`)
}else if (nota <65 && nota >75 ){
    console.log(`regular`)
}else{
    console.log(`ruim`)
}