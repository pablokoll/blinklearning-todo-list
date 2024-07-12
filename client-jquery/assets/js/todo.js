$(document).on('submit', '#todo-form', (e) => {
    e.preventDefault();
    const title = $('#title').val();
    const description = $('#description').val();

    $.ajax({
        url: 'http://localhost:8000',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ title: title, description: description }),
        success: (data) => {
            const todo = data;
            $('#todo-list').append(
                `<li data-id="${todo.id}"><h3>${todo.title}</h3><p>${todo.description}</p><button class="delete">Delete</button></li>`,
            );
            $('#title').val('');
            $('#description').val('');
        },
    });
});

$(document).on('click', '.delete', function () {
    const id = $(this).parent().data('id');

    $.ajax({
        url: 'http://localhost:8000',
        method: 'DELETE',
        contentType: 'application/json',
        data: JSON.stringify({ id: id }),
        success: (response) => {
            if (response.success) {
                $(`li[data-id="${id}"]`).remove();
            } else {
                console.error('response ', response);
            }
        },
        error: (xhr, status, error) => {
            console.log('xhr ', xhr);
            console.log('status ', status);
            console.error('Failed removing task:', error);
        },
    });
});
