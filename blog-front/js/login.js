$("#login").submit(() => {
    event.preventDefault()
    let dados = $("#login").serialize()
    alert(dados)
    $.post("localhost:8000/login", dados, response => {
        console.log(response)
    })
})