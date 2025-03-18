let tasks = [
    { id: 1, nome_da_tarefa: "Implementar tela de listagem de tarefas", etiqueta: "frontend", checked: false},
    { id: 2, nome_da_tarefa: "Criar endpoint para cadastro de tarefas", etiqueta: "backend", checked: false},
    { id: 3, nome_da_tarefa: "Implementar protótipo da listagem de tarefas", etiqueta: "backend", checked: false}

]
class Tarefa {
    constructor() {
        this.id = 1;
        this.arrayTarefas = [];
        this.tarefasConcluidas = []; // Array para armazenar tarefas concluídas
        this.sectionTarefas = document.querySelector(".section-tarefas");
        this.concluidasSection = document.querySelector("todo-footer"); // Área para mostrar tarefas concluídas
        this.date = `Criado em: ${this.formatarData()}`;
    }

    formatarData() {
        let data = new Date();
        let dia = data.getDate();
        let mes = data.getMonth() + 1;
        let ano = data.getFullYear();
        if (mes < 10) mes = "0" + mes;
        if (dia < 10) dia = "0" + dia;
        return `${dia}/${mes}/${ano}`;
    }

    Adicionar() {
        let tarefa = this.LerDados();
        if (this.Validar(tarefa)) {
            this.Salvar(tarefa);
        }
        this.Listar();
    }

    LerDados() {
        return {
            id: this.id,
            nome_da_tarefa: document.getElementById("nome-da-tarefa").value,
            etiqueta: document.getElementById("etiqueta").value,
            date: this.date,
        };
    }

    Validar(tarefa) {
        let msg = "";

        if (tarefa.nome_da_tarefa === "") {
            msg += "Por favor, insira corretamente o nome da tarefa! \n";
        }
        if (tarefa.etiqueta === "") {
            msg += "Por favor, insira corretamente a etiqueta! \n";
        }
        if (msg) {
            alert(msg);
            return false;
        }
        return true;
    }

    Salvar(tarefa) {
        this.arrayTarefas.push(tarefa);
        this.id++;
    }

    Listar() {
        this.sectionTarefas.innerHTML = "";
        for (let tarefa of this.arrayTarefas) {
            const row = document.createElement("div");
            row.setAttribute("id", tarefa.id);

            let nome = document.createElement("h2");
            let etiqueta = document.createElement("p");
            let date = document.createElement("p");
            etiqueta.className = "etiqueta";
            date.className = "data";

            nome.textContent = tarefa.nome_da_tarefa;
            etiqueta.textContent = tarefa.etiqueta;
            date.textContent = tarefa.date;

            let botao = document.createElement("button");
            botao.textContent = "Concluir";
            botao.setAttribute("onclick", `tarefa.Riscar(${tarefa.id})`);

            row.append(nome, etiqueta, date, botao);
            this.sectionTarefas.appendChild(row);
        }
    }

    Riscar(id) {
        const tarefaElement = document.getElementById(id); // Encontra o elemento da tarefa pelo ID
        if (tarefaElement) {
            const nomeElement = tarefaElement.querySelector("h2"); // Localiza o <h2> dentro da tarefa
            const botao = tarefaElement.querySelector("button"); // Localiza o botão dentro da tarefa

            if (nomeElement && botao) {
                nomeElement.style.textDecoration = "line-through"; // Aplica o estilo de riscar

                // Substitui o botão por uma imagem
                const imagem = document.createElement("img");
                imagem.src = "checked.png"; // Substitua pelo caminho correto da sua imagem
                imagem.alt = "Concluído";
                imagem.style.width = "30px"; // Ajusta o tamanho da imagem
                imagem.style.height = "30px";
                botao.replaceWith(imagem); // Substitui o botão pela imagem

                // Adiciona o ID ao array de tarefas concluídas
                if (!this.tarefasConcluidas.includes(id)) {
                    this.tarefasConcluidas.push(id);
                    this.AtualizarConcluidas();
                }
            }
        }
    }

    AtualizarConcluidas() {
        this.concluidasSection.innerHTML = "<h3>Tarefas Concluídas:</h3>";
        for (let id of this.tarefasConcluidas) {
            const tarefa = this.arrayTarefas.find(t => t.id === id);
            if (tarefa) {
                const nome = document.createElement("p");
                nome.textContent = tarefa.nome_da_tarefa;
                this.concluidasSection.appendChild(nome);
            }
        }
    }
}

var tarefa = new Tarefa();