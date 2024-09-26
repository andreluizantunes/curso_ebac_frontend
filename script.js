$(document).ready(function() {
    // Adiciona uma nova tarefa
    $('#task-form').on('submit', function(e) {
        e.preventDefault();
        
        const taskName = $('#task-input').val();
        
        if (taskName) {
            $('#task-list').append(`<li>${taskName}</li>`);
            $('#task-input').val(''); // Limpar o input
        }
    });

    // Marcar tarefa como concluida
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
