let tabela = document.querySelector('#tabela')
let errosForm = 1

function adicionaPaciente() {
    let novaTr = document.createElement('tr')

    let novaTdNome = document.createElement('td')
    let novaTdPeso = document.createElement('td')
    let novaTdAltura = document.createElement('td')
    let novaTdGordura = document.createElement('td')
    let novaTdImc = document.createElement('td')
    let novaTdImcEstado = document.createElement('td')

    let nomePaciente = document.querySelector('#nome-paciente').value
    let pesoPaciente = document.querySelector('#peso-paciente').value
    let alturaPaciente = document.querySelector('#altura-paciente').value
    let gorduraPaciente = document.querySelector('#gordura-paciente').value

    novaTdNome.textContent = nomePaciente
    novaTdPeso.textContent = pesoPaciente
    novaTdAltura.textContent = alturaPaciente
    novaTdGordura.textContent = gorduraPaciente

    let imc = pesoPaciente / (alturaPaciente * alturaPaciente)
    novaTdImc.textContent = imc.toFixed(2)

    if (imc <= 18.5) {
        novaTdImcEstado.textContent = 'Abaixo do Peso'
        novaTdImcEstado.classList.add('peso-abaixo')
    }
    if (imc >= 18.6 && imc <= 24.9) {
        novaTdImcEstado.textContent = 'Peso Normal'
        novaTdImcEstado.classList.add('peso-normal')
    }
    if (imc >= 25 && imc <= 29.9) {
        novaTdImcEstado.textContent = 'Sobrepeso'
        novaTdImcEstado.classList.add('peso-acima')
    }
    if (imc >= 30) {
        novaTdImcEstado.textContent = 'Obesidade'
        novaTdImcEstado.classList.add('peso-obeso')
    }
     
    validaForm(nomePaciente,pesoPaciente,alturaPaciente,gorduraPaciente)

    if (errosForm == 0) {
        tabela.appendChild(novaTr)

        novaTr.appendChild(novaTdNome)
        novaTr.appendChild(novaTdPeso)
        novaTr.appendChild(novaTdAltura)
        novaTr.appendChild(novaTdGordura)
        novaTr.appendChild(novaTdImc)
        novaTr.appendChild(novaTdImcEstado)
    }
}

function validaForm(nome,peso,altura,gordura) {
    let mensagemErro = document.querySelector('.mensagem-erro')

    if (nome == '' || peso == '' || altura == '' || gordura == '') {
        errosForm = 1
        mensagemErro.classList.add('ativo')
    }

    else {
        mensagemErro.classList.remove('ativo')
        errosForm = 0
    }
    
}
