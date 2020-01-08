$("#login").submit(() => {
    event.preventDefault()
    let dados = $("#login").serialize()
    $.post("http://127.0.0.1:8000/login/", dados, response => {
        console.log(response)
    })
})