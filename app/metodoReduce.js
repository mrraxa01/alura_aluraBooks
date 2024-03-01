function calculaValorTotalDosLivros(listaLivros){
    return listaLivros.reduce((acc,livro) => acc + livro.preco, 0).toFixed(2); 
}