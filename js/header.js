var content = document.getElementById("navegation--js");
var page = document.head.baseURI;
var expresion = /index.html/i;
var url = "";
var urlIndex = "";
var regexLocation = expresion.test(page);

if(regexLocation){
    url= "./pages/";
} else {
    url= "./";
    urlIndex= "../";
}

var htmlHeader = `
    <nav class="header__container row justify-content-center">
    <div class="header__title_container col-12 col-md-5 row justify-content-center">
        <h1 src="" alt="" class="header__title header__title--text col-md-6 align-self-center"> </h1>
    </div>
    <ul class="header__list col-12 col-md-7 list-unstyled row justify-content-md-end justify-content-center">
        <li class="btn btn-secondary m-1 col-1">
            <a href="${urlIndex}index.html" class=btn btn btn-secundary> 1 </a>
        </li>
        <li class="btn btn-secondary m-1 col-1">
            <a href="${url}second.html" class=btn btn btn-secundary> 2 </a>
        </li>
        <li class="btn btn-secondary m-1 col-1">
            <a href="${url}third.html" class=btn btn btn-secundary> 3 </a>
        </li>
        <li class="btn btn-secondary m-1 col-1">
            <a href="${url}fourth.html" class=btn btn btn-secundary> 4 </a>
        </li>
        <li class="btn btn-secondary m-1 col-1">
            <a href="${url}fifth.html" class=btn btn btn-secundary> 5 </a>
        </li>
        <li class="btn btn-secondary m-1 col-1">
            <a href="${url}sixth.html" class=btn btn btn-secundary> 6 </a>
        </li>
        <li class="btn btn-secondary m-1 col-1">
            <a href="${url}seventh.html" class=btn btn btn-secundary> 7 </a>
        </li>
        <li class="btn btn-secondary m-1 col-1">
            <a href="${url}eigthth.html" class=btn btn btn-secundary> 8 </a>
        </li>
        <li class="btn btn-secondary m-1 col-1">
            <a href="${url}ninth.html" class=btn btn btn-secundary> 9 </a>
        </li>
    </ul>
    </nav>
`;

content.innerHTML = htmlHeader;