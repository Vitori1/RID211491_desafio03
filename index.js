let tasks = [
    { id: 1, nome_da_tarefa: "Implementar tela de listagem de tarefas", etiqueta: "frontend", checked: false},
    { id: 2, nome_da_tarefa: "Criar endpoint para cadastro de tarefas", etiqueta: "backend", checked: false},
    { id: 3, nome_da_tarefa: "Implementar protótipo da listagem de tarefas", etiqueta: "backend", checked: false}

]
class Tarefa {
    constructor () {
        this.id = 1;
        this.arrayTarefas= [];
        this.sectionTarefas = document.querySelector(".section-tarefas");
    }
    Adicionar() {
        let tarefa = this.LerDados() 
        if (this.Validar(tarefa)== true){
            this.Salvar(tarefa)
        }
        this.Listar()
    }
    LerDados(){
        let tarefa = {}
        
        tarefa.id = this.id
        tarefa.nome_da_tarefa = document.getElementById('nome-da-tarefa').value;
        tarefa.etiqueta = document.getElementById('etiqueta').value;

        return tarefa
    }
    Validar(tarefa) {
        let msg = '';

        if (tarefa.nome_da_tarefa == '') {
            msg += 'Por favor, insira corretamente o nome da tarefa! \n'
        } 
        if (tarefa.etiqueta == '') {
            msg += 'Por favor, insira corretamente a etiqueta! \n'
        }
        if (msg != ''){
            alert(msg)
            return false
        }
        return true
    }
    Salvar(tarefa) {
        this.arrayTarefas.push(tarefa)
        this.id++;
    }
    Listar(){
        this.sectionTarefas.innerHTML = document.createElement("div");
        for(let i = 0; i < this.arrayTarefas.length; i++ ) {

            let tr = sectionTarefas.insertRow();

            let td_id = tr.insertRow();
            let td_nome = tr.createElement("h2");
            let td_etiqueta = tr.createElement("p");
            let td_button = tr.insertRow();

            td_id.innerHTML = this.arrayTarefas[i].id;
            td_nome.innerHTML = this.arrayTarefas[i].nome_da_tarefa;
            td_etiqueta.innerHTML = this.arrayTarefas[i].etiqueta;
            //td_del.innerHTML = this.arrayProdutos[i].del;

            let botao = document.createElement('button');
            botao.setAttribute("onclick", `tarefa.Riscar(${this.arrayTarefas[i].id})`);
            td_button.appendChild(botao);
        }
        
    }
    Riscar(){
        stileline-through
    }
}
var tarefa = new Tarefa()