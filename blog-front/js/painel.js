// PUBLISH POST

var imgName = "no-image"

$(document).ready(() => {
    $.get("http://alergocare.com/blog-back/public/index.php/categories/", response => {
        populateCategories(response)
    })
})

$("#image").change(() => {
    imgName = $("#image").val().split("\\").pop()
})

$("#category").submit(() => {
    event.preventDefault()
    let data = $("#category").serialize()

    $.post("http://alergocare.com/blog-back/public/index.php/store-category", data, response => {
        console.log(response)
    })
    .fail(() => alert("Ocorreu um erro, tente novamente mais tarde."))
    .done(() => location.reload())
})

$("#post").submit(() => {
    event.preventDefault()
    let data = $("#post").serialize()
    data = data + "&image=" + imgName

    $.post("http://alergocare.com/blog-back/public/index.php/publish-post", data)
    .done(() => {
        uploadImg()
        $("#sucesso").show(500)
        window.setTimeout(() => {
            $("#sucesso").hide(500)
        }, 1500)
    })
    .fail(() => {
        $("#erro").show(500)
        window.setTimeout(() => {
            $("#erro").hide(500)
        }, 1500)
    })
    .always(() => {
        $("#post")[0].reset()
        $(".jqte_editor").html("")
    })
})

function uploadImg()
{
    let fd = new FormData()
    let files = $('#image')[0].files[0]
    fd.append('file',files)

    $.ajax({
        url: 'http://alergocare.com/blog-back/public/index.php/file-upload',
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        success: function(response){
            if(response == 0){
                alert('Ocorreu um erro ao enviar a imagem.')
            }
        },
    })
}

function populateCategories(categories)
{
    console.log(categories)
    categories.forEach((category) => {
        $("#category_id").append(`
            <option value="${category.id}">${category.name}</option>
        `)
        $("#categories").append(`
            <li>${category.name} <a href="#" onclick="deleteCategory(${category.id});"><i class="fa fa-trash"></i></a></li>
        `)
    })
}

function deleteCategory(id)
{
    $.post(`http://alergocare.com/blog-back/public/index.php/delete-category/${id}`, id, response => {
        console.log(response)
    })
    .done(() => location.reload())
    .fail(() => alert("Ocorreu um erro. Tente novamente mais tarde."))
}

// END PUBLISH POST
