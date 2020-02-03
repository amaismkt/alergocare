function getUrlVars() {
    var vars = {}
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
        vars[key] = value
    })
    return vars
}

var post = getUrlVars()["post"]

if(post){
    $.get(`http://alergocare.com/blog-back/public/index.php/post/${post}`, response => {
        dados = JSON.parse(response)
        $("#title").html(dados.title)
        $("#text").html(dados.text)
        $("#category").html(dados.category)
        $("#created_at").html(dados.created_at)
        $("#image").append(`
            <img src="../images/blog/${dados.image}" width="90%">
        `)
    })
}else{
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
