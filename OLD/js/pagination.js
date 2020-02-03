
var imagens = [
		{
			full: "images/portfolio/full/01.jpg",
			img: "images/portfolio/3/01.jpg",
			descricao: "Gallery Thumb 1"
		},
		{
			full: "images/portfolio/full/02.jpg",
			img: "images/portfolio/3/02.jpg",
			descricao: "Gallery Thumb 2"
		},
		{
			full: "images/portfolio/full/03.jpg",
			img: "images/portfolio/3/03.jpg",
			descricao: "Gallery Thumb 3"
		},
		{
			full: "images/portfolio/full/04.jpg",
			img: "images/portfolio/3/04.jpg",
			descricao: "Gallery Thumb 4"
		},
		{
			full: "images/portfolio/full/05.jpg",
			img: "images/portfolio/3/05.jpg",
			descricao: "Gallery Thumb 5"
		},
		{
			full: "images/portfolio/full/06.jpg",
			img: "images/portfolio/3/06.jpg",
			descricao: "Gallery Thumb 6"
		},
		{
			full: "images/portfolio/full/07.jpg",
			img: "images/portfolio/3/07.jpg",
			descricao: "Gallery Thumb 1"
		},
		{
			full: "images/portfolio/full/08.jpg",
			img: "images/portfolio/3/08.jpg",
			descricao: "Gallery Thumb 1"
		},
		{
			full: "images/portfolio/full/09.jpg",
			img: "images/portfolio/3/09.jpg",
			descricao: "Gallery Thumb 1"
		},
		{
			full: "images/portfolio/full/10.jpg",
			img: "images/portfolio/3/10.jpg",
			descricao: "Gallery Thumb 1"
		},
		{
			full: "images/portfolio/full/11.jpg",
			img: "images/portfolio/3/11.jpg",
			descricao: "Gallery Thumb 1"
		},
		{
			full: "images/portfolio/full/12.jpg",
			img: "images/portfolio/3/12.jpg",
			descricao: "Gallery Thumb 1"
		},
{
			full: "images/portfolio/full/13.jpg",
			img: "images/portfolio/3/13.jpg",
			descricao: "Gallery Thumb 2"
		},
		{
			full: "images/portfolio/full/14.jpg",
			img: "images/portfolio/3/14.jpg",
			descricao: "Gallery Thumb 2"
		},
		{
			full: "images/portfolio/full/15.jpg",
			img: "images/portfolio/3/15.jpg",
			descricao: "Gallery Thumb 2"
		},
		{
			full: "images/portfolio/full/16.jpg",
			img: "images/portfolio/3/16.jpg",
			descricao: "Gallery Thumb 2"
		},
		{
			full: "images/portfolio/full/17.jpg",
			img: "images/portfolio/3/17.jpg",
			descricao: "Gallery Thumb 2"
		},
		{
			full: "images/portfolio/full/18.jpg",
			img: "images/portfolio/3/18.jpg",
			descricao: "Gallery Thumb 2"
		},
		

	
]

var galeria = document.getElementById("galleryPagination");
var paginaAtual;
function buildPaginationGallery(page){
	//Inserindo na variavel global a página atual;
	paginaAtual = page;

	//Limpando galeria
	galeria.innerHTML = "";

	var indexFim = page * 6; 
	var indexInicio = indexFim - 6;
	
	if(indexFim>imagens.length){
		indexFim = imagens.length;
	}

	for(var i=indexInicio; i<indexFim; i++){
			//Criando o element <a>
			var a  = document.createElement("a");
			a.setAttribute("href", imagens[i].full);
			a.setAttribute("data-lightbox", "gallery-item");

			//Criando o element <img>
			var img = document.createElement("img");
			img.setAttribute("class", "image-fade");
			img.setAttribute("src", imagens[i].img);
			img.setAttribute("alt", imagens[i].descricao);

			//Inserindo o <img> dentro do <a>
			a.appendChild(img)

			galeria.appendChild(a);
		}
			

			
}
		

function changePage(page){
	//Essa função executará ao clicar no item da paginação

	buildPaginationGallery(page);

}

  // <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
var ulPagination = document.getElementById("paginationList");
function definePaginationList(){
	//Para definir a quantidade de páginas, é o tamanho da lista de imagens dividido por 6 (quantiade máxima por página) arredondado pra cima
	var qtPaginas = Math.ceil(imagens.length/6);

	//Adicionarndoo primeiro item da paginação (<)
	var first = returnPageItem("«");
	first.addEventListener("click", function() {

		//Verificação se já está na primeira paginação (Se tiver, nada mudará)
		var novaPagina;
		if(paginaAtual>1){
			novaPagina = paginaAtual-1;
			buildPaginationGallery(novaPagina);
		} 
		
    });
	ulPagination.appendChild(first);

	//Adicioanndo a quantidade de páginas exata
	for(var i=1; i<=qtPaginas; i++){
		var item = returnPageItem(i);
		item.setAttribute("onclick","changePage("+i+")");
		// item.addEventListener("click", function() {
		// 	buildPaginationGallery(i);
  //      	})
		ulPagination.appendChild(item);
	}

	//Adicionando o ultimo item da paginação (>)
	var last = returnPageItem("»");
	last.addEventListener("click", function() {
		//Verificação se já está na última paginação (Se estiver, nada mudará)
		var novaPagina;
		if(paginaAtual<qtPaginas){
			novaPagina = paginaAtual+1;
			buildPaginationGallery(novaPagina);
		} 
    });
	ulPagination.appendChild(last);

}

function returnPageItem (number){
	var itemPage = document.createElement("li");
	itemPage.setAttribute("class", "page-item");

	//Inserindo numero da página
	var a = document.createElement("a");
	a.setAttribute("class", "page-link");
	a.appendChild(document.createTextNode(number));
	itemPage.appendChild(a);
	return itemPage;
}

definePaginationList();

//Inicializando galeria na primeira página
buildPaginationGallery(1);