var editPost = localStorage.getItem("edit-post")
var imgName = "no-image"

$.get(`http://alergocare.com/blog-back/public/index.php/edit-post/${editPost}`, response => {
    $("#id").val(response.id)
    $("#title").val(response.title)
    $(".jqte_editor").html(response.text)
    imgName = response.image
})

$.get("http://alergocare.com/blog-back/public/index.php/categories/", response => {
        populateCategories(response)
})

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

$("#post").submit(() => {
    event.preventDefault()
    let data = $("#post").serialize()
    data = data + "&image=" + imgName

    $.post("http://alergocare.com/blog-back/public/index.php/update-post", data)
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