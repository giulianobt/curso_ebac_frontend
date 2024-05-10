const formPrincipal = document.getElementById('formPrincipal')
formPrincipal.addEventListener('submit', function(e) {
    e.preventDefault()

    const valorA = formPrincipal.campoA.value
    const valorB = formPrincipal.campoB.value

    //validar se B é maior que A, se sim, exibir mensagem positiva, se não mensagem negativa
    const divResultado = document.getElementById('resultado')
    if (validaDados(valorA, valorB)) {
        divResultado.classList.remove('negativo')
        divResultado.classList.add('positivo')
        divResultado.innerHTML = '<h3>Muito bem, o valor de B é maior do que o valor de A.</h3>'
        divResultado.style.display = 'block'
    } else {
        divResultado.classList.remove('positivo')
        divResultado.classList.add('negativo')
        divResultado.innerHTML = '<h3>Assim não pode, o valor de B é menor ou igual ao valor de A.</h3>'
        divResultado.style.display = 'block'
    }


})

function validaDados(valorA, valorB) {
    return valorB > valorA ? true : false
}
