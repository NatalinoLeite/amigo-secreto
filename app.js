// Array que armazena os nomes dos amigos adicionados pelo usuário.
let amigos = [];

function adicionarAmigo() {
    // Obtém o valor digitado no campo de entrada.
    let nomeInput = document.getElementById('amigo');
    let nome = nomeInput.value.trim();
    
    // Valida se o campo não está vazio.
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona o nome ao array de amigos.
    amigos.push(nome);
    
    // Atualiza a exibição da lista na interface.
    atualizarLista();
    
    // Limpa o campo de entrada após adicionar o nome.
    nomeInput.value = "";
}

function atualizarLista() {
    // Obtém a referência da lista no HTML.
    let lista = document.getElementById('listaAmigos');
    
    // Limpa a lista antes de adicionar novos itens.
    lista.innerHTML = "";

    // Percorre o array de amigos e cria um item de lista para cada nome.
    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica se há nomes na lista antes de sortear.
    if (amigos.length === 0) {
        alert("Adicione ao menos um nome antes de sortear.");
        return;
    }

    // Sorteia um nome aleatoriamente do array de amigos.
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    // Exibe o nome sorteado na interface.
    document.getElementById('resultado').innerHTML = `<li>Amigo secreto: ${sorteado}</li>`;

    // Oculta a lista de amigos após o sorteio, removendo os itens da tela.
    document.getElementById('listaAmigos').innerHTML = "";
}
