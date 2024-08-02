$(document).ready(function() {
    let taskId = 0;

    // Insert Task
    $('#insertButton').click(function() {
        const taskName = $('#taskName').val();
        const status = $('input[name="status"]:checked').val();
        
        if (taskName && status) {
            taskId++;
            $('#taskList').append(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${taskName} - Status: ${status}
                    <button class="btn btn-danger btn-sm deleteTask" data-id="${taskId}">Delete</button>
                </li>
            `);
            $('#taskForm')[0].reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Delete Task
    $(document).on('click', '.deleteTask', function() {
        $(this).parent().remove();
    });
});
