//glabaol vriable,updated after each sarch function call

const nb_recettes = document.querySelector(".nb_recipes");

const recipesection = document.querySelector(".card_container");

const loupe = document.getElementById("loupe");
const queryInput = document.getElementById("queryInput");

///SELECT DROPDOWN////////////
const ingredientsButton = document.getElementById("toggle1");
const ingredientsSelect = document.getElementById("dropdown1");
const chdown1 = document.getElementById("chdown1")
const chup1 =document.getElementById("chup1")

const appareilsButton = document.getElementById("toggle2");
const appareilsSelect = document.getElementById("dropdown2");
const chdown2 = document.getElementById("chdown2")
const chup2 =document.getElementById("chup2")


const ustensileButton = document.getElementById("toggle3");
const ustensileSelect = document.getElementById("dropdown3");
const chdown3 = document.getElementById("chdown3")
const chup3 =document.getElementById("chup3")



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
  IngredientsArray,
  chdown1,
  chup1

);

createfilterDropDown(
  appareilsButton,
   appareilsSelect, 
    AppareilsList,
    chdown2,
    chup2);

createfilterDropDown(
  ustensileButton,
  ustensileSelect,
  UstensilesList,
  chdown3,
  chup3
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
    updateFilterDropdown()
   
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



const lightbox=document.querySelector(".lightbox")
const cards=document.querySelectorAll(".card")
// const templates=document.querySelectorAll("template")

cards.forEach((card)=>{
  card.addEventListener("click", (e)=>{
    console.log(e.currentTarget)
    const card=e.currentTarget
    const cardclone=card.cloneNode(true)
    cardclone.dataset.lightbox="true"
    cardclone.dataset.hover="false"
    const hidden=cardclone.querySelectorAll("[data-hidden='true']")
    console.log(hidden)
    hidden.forEach((element)=>
    element.dataset.hidden="false")
    
    
    lightbox.dataset.active="true"
    lightbox.append(cardclone)

  })
})

const closeLB=document.querySelector("#closeLB")

closeLB.addEventListener("click", ()=>
{
  lightbox.dataset.active="false";
  const activecard=lightbox.querySelector(".card")
 
  activecard.dataset.lightbox="false"
  
 activecard.remove()
  
})


















//////////RESET BUTTON FOR TESTING////////////////////
// const reset = document.getElementById("reset");
// reset.addEventListener("click", resetCards);
// reset.addEventListener("click", resetSearchfilter())
