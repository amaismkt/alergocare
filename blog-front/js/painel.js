// PUBLISH POST

var imgName = "no-image"

$("#image").change(() => {
    imgName = $("#image").val().split("\\").pop()
})

$("#post").submit(() => {
    event.preventDefault()
    let data = $("#post").serialize()
    data = data + "&image=" + imgName

    $.post("http://localhost:8000/publish-post", data)
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
        url: 'http://localhost:8000/file-upload',
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

// END PUBLISH POST