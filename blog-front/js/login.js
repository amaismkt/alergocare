$("#login").submit(() => {
    event.preventDefault()
    let dados = $("#login").serialize()
    $.post("http://127.0.0.1:8000/login/", dados, response => {
        if(response == "OK"){
            window.location.href = "painel.html"
        }else{
            alert("Usuario ou senha incorretos!")
        }
    })
})

$("#logout").click(() => {
    $.post("http://127.0.0.1:8000/logout/")
    .always(() => window.location.reload())
})