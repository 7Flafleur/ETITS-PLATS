//VARIABLES

function toggledropdowndisplay() {
  if (dropdown.style.display == "none") dropdown.style.display = "block";
  else dropdown.style.display = "none";
}


function filterfunction () {
  let dropdown_items = dropdown.querySelectorAll(".dropdown-item");
  let spchars=['<', '>', '/']
   if(spchars.some(char => input.value.includes(char)))
   {console.log("charactères erronés")
  return false}
 
    if (!dropdown_items) return false;
    for (let i = 0; i < dropdown_items.length; i++) {
      if (
        dropdown_items[i].innerHTML
          .toUpperCase()
          .includes(input.value.toUpperCase())
      )
        dropdown_items[i].style.display = "block";
      else dropdown_items[i].style.display = "none";
    }
  
  updateRecipeCount();
}




function createfilterDropDown(button, dropdown, input, items) {


  //create dropdown items from list of items
  items.forEach((item) => {
    let dropdown_item = document.createElement("li");
    dropdown_item.setAttribute("data-visible", "true");
    dropdown_item.setAttribute("class", "dropdown-item");
   
    dropdown_item.innerHTML = item;
    dropdown.appendChild(dropdown_item);
  });
  //hide the dropdown list
  dropdown.style.display = "none";


  //remove existing evetn listener

  button.removeEventListener("click", function () {
    if (dropdown.style.display == "none") dropdown.style.display = "block";
    else dropdown.style.display = "none";
  });


  //make the button toggle the display of dropdown
  button.addEventListener("click", function () {
    if (dropdown.style.display == "none") dropdown.style.display = "block";
    else dropdown.style.display = "none";
  });






  //filter function

  input.addEventListener("input", function () {
    let dropdown_items = dropdown.querySelectorAll(".dropdown-item");
    let spchars=['<', '>', '/']
     if(spchars.some(char => input.value.includes(char)))
     {console.log("charactères erronés")
    return false}
   
      if (!dropdown_items) return false;
      for (let i = 0; i < dropdown_items.length; i++) {
        if (
          dropdown_items[i].innerHTML
            .toUpperCase()
            .includes(input.value.toUpperCase())
        )
          dropdown_items[i].style.display = "block";
        else dropdown_items[i].style.display = "none";
      }
    
    updateRecipeCount();
  });
  
}



// //AFTER RE/

// function newcreatefilterDropDown( dropdown,recipelist){
//   dropdown.innerHTML=""
//   recipelist.forEach((item) => {
//     let dropdown_item = document.createElement("li");
//     dropdown_item.setAttribute("data-visible", "true");
//     dropdown_item.setAttribute("class", "dropdown-item");
    
//     dropdown_item.innerHTML = item;
//     dropdown.appendChild(dropdown_item);
//   });
//   //hide the dropdown list
//   dropdown.style.display = "none";



// }


//////////////////////////////////////////////////

// function showDropdown () {
//   if (dropdown.style.display == "none") dropdown.style.display = "block";
//   else dropdown.style.display = "none";
// }


// function filterQuery () {
//   let dropdown_items = dropdown.querySelectorAll(".dropdown-item");
//   let spchars=['<', '>', '/']
//    if(spchars.some(char => input.value.includes(char)))
//    {console.log("charactères erronés")
//   return false}
 
//     if (!dropdown_items) return false;
//     for (let i = 0; i < dropdown_items.length; i++) {
//       if (
//         dropdown_items[i].innerHTML
//           .toUpperCase()
//           .includes(input.value.toUpperCase())
//       )
//         dropdown_items[i].style.display = "block";
//       else dropdown_items[i].style.display = "none";
//     }
  
//   updateRecipeCount();
// }


function searchSelectItems() {
  // Apply click function to visible elements in dropdown
  let visibleSelectItems = document.querySelectorAll(".dropdown-item[data-visible]");

  // Create tag for chosen term
  visibleSelectItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      let tag = event.currentTarget.textContent;
      createTag(item, tag);

      //////////RUN SEARCH FUNCTION////////////////////
      findCardsSelect(tag);
      updateRecipeCount();
    });
  });
}

function removeTagOnClick() {
  // Remove tag on click
  let searchtags = document.querySelectorAll(".searchtag");
  searchtags.forEach((item) => {
    item.addEventListener("click", (event) => {
      let term = event.currentTarget.textContent;
      console.log(term);
      event.currentTarget.remove();
      removeSelectFilter(term);
      const tagsection = document.querySelector(".tag_section");
      tagsection.removeAttribute("data-active");
    });
  });
}

// Call the functions





// //on click on item, close dropdown, create tag
function createTag(item, tag) {
  let parent = item.parentNode;
  parent.style.display = "none";
  const searchtag = document.createElement("span");
  searchtag.setAttribute("class", "searchtag");
  searchtag.textContent = tag;
  const tagsection = document.querySelector(".tag_section");
  tagsection.append(searchtag);
  tagsection.dataset.active='true'
}









function findCardsSearch(query) {
  console.log(query);
  if(!filterBy.includes(query)){
    filterBy.push(query)
  }
  console.log("Filter by ",filterBy)
  let allRecipesList = document.querySelectorAll(".card");

  allRecipesList.forEach((recipe) => {
    let titre = recipe.querySelector("h2").textContent.toUpperCase();
    let recette = recipe
      .querySelector(".card_content-recette")
      .textContent.toUpperCase();
    let ingredients = recipe
      .querySelector(".card_content-ingredients")
      .textContent.toUpperCase();
    if (
      !titre.includes(query) &&
      !recette.includes(query) &&
      !ingredients.includes(query)
    ) {
      recipe.dataset.visible = "false";
      // console.log("not included");
    } else {
      recipe.dataset.visible = "true";
      resultmsg.textContent="";
    }
     visibleRecipesList = document.querySelectorAll(
      ".card[data-visible='true' ]"
    );
    updateRecipeCount();
  });
  if (visibleRecipesList.length == 0) {
    displayNoResults();
  }

  //nex recipelist for nexw selcts

  let newRecipeList = [];

  newRecipeList = recipes.filter(recipe => 
      recipe.name.toUpperCase().includes(query) || 
      recipe.ingredients.some(ingredient => ingredient.ingredient.toUpperCase().includes(query)) || 
      recipe.description.toUpperCase().includes(query)
  );
  
  console.log("New recipe list",newRecipeList);

let IngredientsArray=getIngredientsList(newRecipeList);
let AppareilsList=getApparails(newRecipeList)
let UstensilesList=getUstensilesList(newRecipeList)

console.log(IngredientsArray)
console.log(AppareilsList)
console.log(UstensilesList)

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






}



function findCardsSelect(query){
    // console.log(query);
    filterBy.push(query)
    console.log("Filter by ", filterBy)
    let visibleRecipesList = document.querySelectorAll(".card[data-visible='true' ]");
    visibleRecipesList.forEach((recipe) => {
        let cardContent = recipe.textContent.toUpperCase();
        if (!cardContent.includes(query)) {
            recipe.dataset.visible = "false";
            // console.log("not included");
        } else {
            recipe.dataset.visible = "true";
        }
    });

    visibleRecipesList = document.querySelectorAll(".card[data-visible='true' ]");
    updateRecipeCount();

    if (visibleRecipesList.length == 0) {
        displayNoResults();
    }
}

function displayNoResults() {
  const resultmsg = document.getElementById("resultmsg");
  resultmsg.dataset.active="true"
  resultmsg.textContent = "Aucune recette trouvée";
}

function updateRecipeCount() {
  let visibleRecipesList = document.querySelectorAll(
    ".card[data-visible='true']"
  );
  let nb = visibleRecipesList.length;
  if(nb==1){
    nb_recettes.textContent = nb + " recette";
  }
  else{nb_recettes.textContent = nb + " recettes"; }
  
}

// Call this function every time `visibleRecipesList` is updated

function resetCards() {
  //cards.removeAttribute
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.setAttribute("data-visible", "true");
  });
  queryInput.value = "";
  resultmsg.textContent = "";
  updateRecipeCount();
}

function resetSearchfilter(){
  filterBy=[];
}

//call filterDropDown function

function removeSelectFilter(tag){
    let invisibleRecipesList = document.querySelectorAll(
        ".card[data-visible='false' ]")
        console.log("filters before ",filterBy)
        let index=filterBy.indexOf(tag)
        if (index !== -1) {
          filterBy.splice(index, 1);
      }
      console.log("Filters after ",filterBy)
     

        invisibleRecipesList.forEach((invisiblerecipe)=>{
          let textContent = invisiblerecipe.textContent.toUpperCase();

          let containsAllTags = filterBy.every(tag => textContent.includes(tag.toUpperCase()));
      
          if (containsAllTags) {
              invisiblerecipe.dataset.visible="true";
          } 
resultmsg.textContent="";
        })
 updateRecipeCount()
}