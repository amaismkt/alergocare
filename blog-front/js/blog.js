$(document).ready(() => {
    $.get("http://127.0.0.1:8000/blog/", response => {
        console.log(response)
    })
})

$("#post").submit(() => {
    event.preventDefault()
    let data = $("#post").serialize()
    $.post("publish-post", data, response => {
        console.log(response)
    })
})