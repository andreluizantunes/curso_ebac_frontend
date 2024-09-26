$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();

        // Obtém o valor do input
        let task = $('#taskInput').val();

        // Verifica se o campo não está vazio
        if (task.trim() !== '') {
            // Adiciona um novo item à lista com botões de ação
            $('#taskList').append(`
                <li>
                    <span class="task-text">${task}</span>
                    <div class="task-buttons">
                        <button class="done-btn">Feita</button>
                        <button class="edit-btn">Editar</button>
                        <button class="delete-btn">Excluir</button>
                    </div>
                </li>
            `);

            // Limpa o campo de input
            $('#taskInput').val('');
        }
    });

    // Marcar tarefa como feita
    $('#taskList').on('click', '.done-btn', function() {
        $(this).closest('li').find('.task-text').toggleClass('completed');
    });

    // Excluir tarefa
    $('#taskList').on('click', '.delete-btn', function() {
        $(this).closest('li').remove();
    });

    // Editar tarefa
    $('#taskList').on('click', '.edit-btn', function() {
        let taskText = $(this).closest('li').find('.task-text').text();
        let newTask = prompt("Edite a tarefa:", taskText);
        if (newTask !== null && newTask.trim() !== '') {
            $(this).closest('li').find('.task-text').text(newTask);
        }
    });
});
