var post = localStorage.getItem("postNumber")

if(post){
    $.get(`http://localhost:8000/post/${post}`, response => {
        $("#title").html(response.title)
        $("#text").html(response.text)
        $("#category").html(response.category_id)
        $("#created_at").html(response.created_at)
        $("#image").append(`
            <img src="../images/blog/${response.image}" width="400px">
        `)
    })
}else{
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
