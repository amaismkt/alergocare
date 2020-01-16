if(location.pathname.substr(1) != "blog/blog-front/pages/login.html" && location.pathname.substr(1) != "alergocare/blog-front/pages/login.html"){
    $.ajax({
        url: 'http://127.0.0.1:8000/api/auth/user/',
        type: 'GET',
        beforeSend: function (xhr) {
            try{
                let token = JSON.parse(localStorage.getItem("isLoggedIn"))["access_token"]
                xhr.setRequestHeader(`Authorization`, `Bearer ${token}`)
            }catch{
                window.location.href = "login.html"
            }
        },
        error: () => window.location.href = "login.html",
    })
}

$("#login").submit(() => {
    event.preventDefault()
    $("#botao-login").prop("disabled", true)
    let dados = $("#login").serialize()
    $.post("http://127.0.0.1:8000/api/auth/login/", dados)
    .done(response => {
        localStorage.setItem("isLoggedIn", JSON.stringify(response))
        window.location.href = "painel.html"
    })
    .fail(() => alert("Email ou senha incorretos."))
    .always(() =>  $("#botao-login").prop("disabled", false))
})

$("#logout").click(() => {
    localStorage.clear()
    window.location.reload()
})