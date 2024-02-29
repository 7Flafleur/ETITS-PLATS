//glabaol vriable,updated after each sarch function call

const nb_recettes = document.querySelector(".nb_recipes");

const recipesection = document.querySelector(".card_container");

const loupe = document.getElementById("loupe");
const queryInput = document.getElementById("queryInput");

///SELECT DROPDOWN////////////
const ingredientsButton = document.getElementById("toggle1");
const ingredientsSelect = document.getElementById("dropdown1");
const ingredientsInput = document.getElementById("inputIn");

const appareilsButton = document.getElementById("toggle2");
const appareilsSelect = document.getElementById("dropdown2");
const appareilsInput = document.getElementById("inputA");

const ustensileButton = document.getElementById("toggle3");
const ustensileSelect = document.getElementById("dropdown3");
const ustensileInput = document.getElementById("inputU");



let filterBy=[];

//////////////MAIN CODE///////////////////////
displayCards(recipes);
updateRecipeCount();
let IngredientsArray=getIngredientsList(recipes)
let AppareilsList=getApparails(recipes)
let UstensilesList=getUstensilesList(recipes)

createfilterDropDown(
  ingredientsButton, //
  ingredientsSelect,
  ingredientsInput,
  IngredientsArray
);

createfilterDropDown(
  appareilsButton,
   appareilsSelect, 
   appareilsInput,
    AppareilsList);

createfilterDropDown(
  ustensileButton,
  ustensileSelect,
  ustensileInput,
  UstensilesList
);

queryInput.value = "";
filterBy=[];




/////////////EVENT LISTENER FOR SEARCHBAR ///////////////////////


queryInput.addEventListener("input",(event) => {
  event.preventDefault();
  let query = queryInput.value.toUpperCase();
  let spchars=['<', '>', '/']
  if(spchars.some(char => query.includes(char)))
  {console.log("charactères erronés")
 return false}
  if (query.length >= 3) {
    
    findCardsSearch(query);
  }
  else if (query == "") {
    resetCards();
    resetSearchfilter();
   
  }
  updateRecipeCount();
} )

queryInput.addEventListener("input",(event) => {
  if (event.key==="Enter")
  event.preventDefault();
  let query = queryInput.value.toUpperCase();
  let spchars=['<', '>', '/']
  if(spchars.some(char => query.includes(char)))
  {console.log("charactères erronés")
 return false}
  if (query.length >= 3) {
    
    findCardsSearch(query);
  }
  else if (query == "") {
    resetCards();
    resetSearchfilter();
   
  }
  updateRecipeCount();
} )

queryInput.addEventListener("keyup", (event) => {
  if (event.key === 'Backspace') {
      // A deletion has occurred
      console.log("sup")
      console.log( document.querySelectorAll(
        ".card"
      ))
      filterBy.pop(); // Remove the last search term
      console.log(filterBy[filterBy.length - 1])
      findCardsSearch(queryInput.value.toUpperCase());
      if(queryInput.value==""){
        resetCards()
        resetSearchfilter()
      }
  } 

});




loupe.addEventListener("click", (event) => {
  event.preventDefault();
  let query = queryInput.value.toUpperCase();
  let spchars=['<', '>', '/']
  if(spchars.some(char => query.includes(char)))
  {console.log("charactères erronés")
 return false}
  if (query.length >= 3) {
    
    findCardsSearch(query);
    
  }
  else if (query == "") {
    resetCards();
    resetSearchfilter();
    let searchtags=document.querySelectorAll(".searchtag")

    searchtags.forEach((searchtag)=>{
      searchtag.remove()
    })

   
  }
  updateRecipeCount();
});


 ////////////SELECT SEARCH FUNCTION/////////////////


applyClickToVisibleItems()

let ulElements = document.querySelectorAll('ul');

ulElements.forEach((ul) => {
  let style = window.getComputedStyle(ul);
  if (style.display === 'none') {
    // ul is hidden, change an element in its sibling node
    let sibling = ul.nextElementSibling;
    if (sibling) {
      // Change the sibling element
      sibling.textContent = 'Changed!';
    }
  }
});








// //apply cklickfunction to visible elements in dropdown
// let visibleSelectItems = document.querySelectorAll(
//   ".dropdown-item[data-visible]"
// );
// // create tag for chosen term
// visibleSelectItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     let tag = event.currentTarget.textContent;
//     // console.log(tag);
//     createTag(item, tag);


//     //remove tag on click
//     let searchtags = document.querySelectorAll(".searchtag");
//     searchtags.forEach((item) => {
//       item.addEventListener("click", (event) => {
//         let term = event.currentTarget.textContent;
//         console.log(term);
//         event.currentTarget.remove();
//         removeSelectFilter(tag)
//         const tagsection = document.querySelector(".tag_section");
//         tagsection.removeAttribute("data-active")
//       });
//     });


   

//     //////////RUN SEARCH FUNCTION////////////////////
//     findCardsSelect(tag);
//     updateRecipeCount();
    
//   });
// });
// /////////////////////////////////






























//////////RESET BUTTON FOR TESTING////////////////////
// const reset = document.getElementById("reset");
// reset.addEventListener("click", resetCards);
// reset.addEventListener("click", resetSearchfilter())
