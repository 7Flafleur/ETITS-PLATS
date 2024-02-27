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
queryInput.value = "";

/////////////EVENT LISTENER FOR SEARCHBAR ///////////////////////
//  queryInput.addEventListener("input", (event) => {
//   let query = event.target.value.toUpperCase();
// findCards(query);

// });

loupe.addEventListener("click", (event) => {
  event.preventDefault();
  let query = queryInput.value.toUpperCase();
  if (query.length >= 3) {
    filterBy.push(query)
    findCardsSearch(query);
  }
  else if (query == "") {
    resetCards();
    resetSearchfilter();
   
  }
  updateRecipeCount();
});

////////CREATE SELECT MENUS//////////////////////
filterDropDown(
  ingredientsButton, //
  ingredientsSelect,
  ingredientsInput,
  IngredientsArray,
  "ingr"
);

filterDropDown(
  appareilsButton,
   appareilsSelect, 
   appareilsInput,
    AppareilsList,"App");

filterDropDown(
  ustensileButton,
  ustensileSelect,
  ustensileInput,
  UstensilesList,
  "ust"
);

 ////////////SELECT SEARCH FUNCTION/////////////////



//apply cklickfunction to visible elements in dropdown
let visibleSelectItems = document.querySelectorAll(
  ".dropdown-item[data-visible]"
);


//get clicked item
let dropdownitems = document.querySelectorAll("dropdown-item");

// create tag for chosen term
visibleSelectItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    let tag = event.currentTarget.textContent;
    // console.log(tag);
    createTag(item, tag);


    //remove tag on click
    let searchtags = document.querySelectorAll(".searchtag");
    searchtags.forEach((item) => {
      item.addEventListener("click", (event) => {
        let term = event.currentTarget.textContent;
        console.log(term);
        event.currentTarget.remove();
        removeSelectFilter(tag)
      });
    });

    //////////RUN SEARCH FUNCTION////////////////////
    findCardsSelect(tag);
    updateRecipeCount();
    
  });
});

/////////make selectsearch accessible via keys/////////

document.addEventListener("keydown", (e) => {
  //down key
  if (e.key === 'ArrowDown') {
    console.log("downArrowKey was pressed")
  }

  //upkey
  else if (e.key === 'ArrowUp') {
    console.log("upArrowKey was pressed")
  }

  //Enter key
  else if (e.key === "Enter") {
    console.log("Enter key was pressed")
  }
});





















//////////RESET BUTTON FOR TESTING////////////////////
const reset = document.getElementById("reset");
reset.addEventListener("click", resetCards);
reset.addEventListener("click", resetSearchfilter())
