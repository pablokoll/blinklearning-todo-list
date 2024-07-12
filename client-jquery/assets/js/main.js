$(document).ready(() => {
    loadTodos();
});

function loadTodos() {
    $.ajax({
        url: 'http://localhost:8000',
        method: 'GET',
        success: (data) => {
            $('#todo-list').empty();
            for (const todo of data) {
                $('#todo-list').append(
                    `<li data-id="${todo.id}"><h3>${todo.title}</h3><p>${todo.description}</p><button class="delete">Delete</button></li>`,
                );
            }
        },
        error: function(error) {
            console.error('Error al obtener las tareas:', error);
        }
    });
}
