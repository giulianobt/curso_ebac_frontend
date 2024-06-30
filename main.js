$(document).ready(function() {

    $("#incluirTodoForm").on('submit', function(e) {

        e.preventDefault()
        
        const tarefa = $("#tarefa").val()

        if (tarefa.length > 0) {

            $("#tarefas").append(`<li>${tarefa}</li>`)
            $("#tarefa").val("")
        }

    })

    $("#tarefas").on('click', 'li', function (e) {

        console.log(e)
        $(e.target).addClass('concluido')
    })
})
