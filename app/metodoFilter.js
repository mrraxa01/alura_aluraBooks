const btnFilters = document.querySelectorAll('.btn');

btnFilters.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibirLivrosNaTela(livrosFiltrados);

    if (categoria == 'disponivel'){
        const valorTotalLivros = calculaValorTotalDosLivros(livrosFiltrados); 
        exibirValorTotalDosLivrosDisponiveis(valorTotalLivros);
    }
}

function exibirValorTotalDosLivrosDisponiveis(valorTotalLivros) {
    sectionTodosLivros.innerHTML = `
    <div class="livros__disponiveis">
     <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalLivros}</span></p>
    </div>
    
    
    `
}