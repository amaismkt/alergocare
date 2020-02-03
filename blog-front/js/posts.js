$.get("http://alergocare.com/blog-back/public/index.php/posts", response => {
    response.forEach((post) => {
        $("#posts-tbody").append(`
            <tr>
                <td>${post.title}</td>
                <td>${post.category}</td>
                <td>${post.created_at}</td>
                <td>${post.text}</td>
                <td><a href="javascript:void(0)" onclick="deletePost(${post.id})"><i class="fa fa-trash"></i></a></td>
                <td><a href="javascript:void(0)" onclick="editPost(${post.id})"><i class="fa fa-edit"></i></a></td>
            </tr>
        `)
    })
    setDataTable()
})

function setDataTable()
{
    $("#posts").DataTable({
        language:{
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            },
            "select": {
                "rows": {
                    "_": "Selecionado %d linhas",
                    "0": "Nenhuma linha selecionada",
                    "1": "Selecionado 1 linha"
                }
            }
        }
    })
}

function deletePost(id)
{
    let r = confirm("Você tem certeza de que deseja excluir permanentemente este post?")
    if(r){
        $.get(`http://alergocare.com/blog-back/public/index.php/delete-post/${id}`, response => {
            console.log(response)
        })
        .done(() => location.reload())
    }
}

function editPost(id)
{
    localStorage.setItem("edit-post", id)
    window.location.href = "editar-post.html"
}


