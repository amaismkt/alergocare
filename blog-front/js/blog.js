$(document).ready(() => {
    $.get("http://127.0.0.1:8000/posts/", response => {
        populatePosts(response)
    })
})

function populatePosts(posts)
{
    console.log(posts)
    posts.forEach((post) => {
        $("#post-row").append(`
        <div class="col-md-4">
            <div class="box">
                <h3 style="text-transform: uppercase; text-align:center;">${post.title}</h3>
                <hr>
                <div style="text-align:center;">
                    <img src="../images/blog/${post.image}" height="200px">
                </div>
                <hr>
                <p style="text-align:center;">${post.text.substring(0, 200)}...</p>
                <p>
                    Categoria: ${post.category}<br>
                    Publicado em: ${post.created_at}
                </p>
                <div style="text-align:center; margin-bottom: 20px;">
                    <button onclick="getPostId(this);" id="${post.id}" class="saibaMais" href="#">Saiba Mais</button>
                </div>
            </div>
        </div>
        `)
    })
}

function getPostId(obj)
{
    let id = obj.id
    localStorage.setItem("postNumber", id)
    window.location.href = "post.html"
}