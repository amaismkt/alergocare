$(document).ready(() => {
    $.get("http://127.0.0.1/blog", response => {
        alert(response)
    })
})