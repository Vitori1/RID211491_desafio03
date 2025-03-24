class Tarefa {
    constructor() {
        this.id = 1;
        this.arrayTarefas = [];
        this.tarefasConcluidas = []; // Array para armazenar tarefas concluídas
        this.sectionTarefas = document.querySelector(".section-tarefas");
        this.concluidasSection = document.querySelector("#todo-footer"); // Área para mostrar tarefas concluídas
        this.contadorTarefas = document.querySelector(".contador-tarefas"); // Área para mostrar número de tarefas concluídas
        this.date = `Criado em: ${this.formatarData()}`;
        this.concluir = false;
        this.concluidasSection.innerHTML = "";
        const contador = document.createElement("p");
        contador.textContent = `${this.tarefasConcluidas.length} tarefa concluída`;
        this.concluidasSection.appendChild(contador);
        this.AtualizarConcluidas();
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
            concluir: this.concluir
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
            row.classList.add("tarefa-item");
    
            const contentDiv = document.createElement("div");
    
            let nome = document.createElement("h2");
            let etiqueta = document.createElement("p");
            let date = document.createElement("p");
            etiqueta.className = "etiqueta";
            date.className = "data";
    
            nome.textContent = tarefa.nome_da_tarefa;
            etiqueta.textContent = tarefa.etiqueta;
            date.textContent = tarefa.date;
            contentDiv.append(nome, etiqueta, date);
    
            let botao = document.createElement("button");
            botao.textContent = "Concluir";
            botao.setAttribute("onclick", `tarefa.Riscar(${tarefa.id})`);
    
            row.append(contentDiv, botao);
            this.sectionTarefas.appendChild(row);
    
            // Verifica se a tarefa está concluída e aplica o estilo
            if (this.tarefasConcluidas.includes(tarefa.id)) {
                this.AtualizarEstiloConcluido(nome, botao);
            }
        }
    }

    AtualizarConcluidas() {
        this.concluidasSection.innerHTML = "";
        const contador = document.createElement("p");
        contador.textContent = `${this.tarefasConcluidas.length} tarefa${this.tarefasConcluidas.length > 1 ? 's' : ''} concluída${this.tarefasConcluidas.length > 1 ? 's' : ''}`;
        this.concluidasSection.appendChild(contador);
    }
    
    Riscar(id) {
        const tarefaElement = document.getElementById(id);
        if (tarefaElement) {
            const nomeElement = tarefaElement.querySelector("h2");
            const botao = tarefaElement.querySelector("button");
    
            if (nomeElement && botao) {
                this.AtualizarEstiloConcluido(nomeElement, botao);
    
                if (!this.tarefasConcluidas.includes(id)) {
                    this.tarefasConcluidas.push(id);
                    this.AtualizarConcluidas();
                }
            }
        }
    }
    
    AtualizarEstiloConcluido(nomeElement, botao) {
        nomeElement.style.textDecoration = "line-through";
        nomeElement.style.color = "#8F98A8";
    
        const imagem = document.createElement("img");
        imagem.src = "checked.png";
        imagem.alt = "Concluído";
        imagem.style.width = "30px";
        imagem.style.height = "30px";
        botao.replaceWith(imagem);
    }
    
}

var tarefa = new Tarefa();



