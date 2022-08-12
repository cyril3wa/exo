/* DECLARER VARIABLES */

const resultList = document.getElementById("result-list");
const input = document.getElementById("search");


/* DELCARER DES FONCTION */

function showResult (val, name) {
  result = document.getElementById(`result`);
}

function search (resultFound) {
  //for=boucle ------ je creer ma variable const = choice ---------- of= de ------------ monTableau=choices

  choices.forEach((choice) => {
    if(resultFound === choice.val){
      // <a href="#">nom du choix</a>
      displaySearch(choice.name);
      console.log(choice.name);
    }

    // choices.find(choice => choice.val === resultFound);
    // displaySearch(choice.name)
    // console.log(choice.val);
    // console.log(choice.name);
  })
}




function displaySearch (displayResultFound) {
  
  resultList.classList.remove("hide");

  const hyperLink = document.createElement("a");
  //document.append(text)
  hyperLink.appendChild(document.createTextNode(displayResultFound));
  hyperLink.setAttribute("href","#");

  const list = document.createElement("li");
  list.appendChild(hyperLink);
  resultList.appendChild(list);

  // console.log(list);
}

/* 

<ul>
    <li> <a href="#">value</a> </li>
</ul> 
 
*/

function onClickSearchBar (e) { 
  // const value = e.target.value;
  //peut s'ecrire : 
  const value = document.getElementById("search").value;
  search(value);
  //e.target.empty();

}


/* DOM */

document.addEventListener("DOMContentLoaded", function () {
  // displaySearch("texte");
  // search();
 
  input.addEventListener("input", onClickSearchBar);
  
})
