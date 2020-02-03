if(location.pathname.substr(1) != "blog/blog-front/pages/login.html" && location.pathname.substr(1) != "pages/login.html"){
    $.ajax({
        url: 'http://alergocare.com/blog-back/public/index.php/api/auth/user/',
        type: 'GET',
        beforeSend: function (xhr) {
            try{
                let token = JSON.parse(localStorage.getItem("isLoggedIn"))["access_token"]
                xhr.setRequestHeader(`Authorization`, `Bearer ${token}`)
            }catch{
		        //window.location.href = "login.html"
		console.log('catch');
            }
        },
        error: (e) => console.log('meu jesus',e)
    })
}

$("#login").submit(event => {
    event.preventDefault();
    $("#botao-login").prop("disabled", true)
    let dados = $("#login").serialize()
    $.post("http://alergocare.com/blog-back/public/index.php/api/auth/login", dados)
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
