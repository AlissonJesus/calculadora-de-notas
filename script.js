function criaCalculadora() {
    const formulario = document.querySelector(".formulario");
    const inputNota = formulario.querySelector(".nota");
    const notas = [];
    const notaMedia = 5;

    formulario.addEventListener("submit",(e) => {
        e.preventDefault();
        const nota = adicionaNota(+inputNota.value);
        exibirResultado(nota);
    })

    const adicionaNota = (nota) => {
        notas.push(nota)
        return nota;
    };

    const calculaMedia = () => {
        const totalNotas = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        return (totalNotas / notas.length).toFixed(2);
    };

    const criaLinhaTabela = (nomeAtividade, nota) => {
        const tr = document.createElement("tr");
        const tdAtividade = document.createElement("td");
        const tdNota = document.createElement("td");
        const tdResultado = document.createElement("td");

        tdAtividade.textContent = nomeAtividade;
        tdNota.textContent = nota;

        if(nota < notaMedia) {
            tdResultado.textContent = "Ruim"
        }else {
            tdResultado.textContent = "Boa"
        };

        tr.appendChild(tdAtividade);
        tr.appendChild(tdNota);
        tr.appendChild(tdResultado);
        return tr; 
    }

    const exibirResultado = (nota) => {
        const nomeAtividade = formulario.querySelector(".atividade").value;
        const tabelaCorpo = document.querySelector(".tabelaCorpo");
        const linhaResultado = document.querySelector(".resultado");
        const celulaMediaFinalNota = linhaResultado.children[1];
        const celulaMediaFinalResultado = linhaResultado.children[2];

        const media = calculaMedia();

        const linhaAtividade = criaLinhaTabela(nomeAtividade, nota);
        tabelaCorpo.append(linhaAtividade);

        celulaMediaFinalNota.textContent = media;

        if(media < notaMedia) {
            celulaMediaFinalResultado.textContent = "Repovado";
        }else {
            celulaMediaFinalResultado.textContent = "Aprovado";
        };
    }
}

criaCalculadora();
