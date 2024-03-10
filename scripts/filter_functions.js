//VARIABLES



function createfilterDropDown(button, dropdown, items,chevrondown,chevronup) {

  //empty list before creating it
  dropdown.innerHTML=""

    // Create search field
    // const searchFieldDiv=document.createElement("div")
    const searchField = document.createElement("input");
    searchField.setAttribute("type", "text");
    searchField.setAttribute("class", "search-input")
    searchField.setAttribute("autocomplete", "off")
    searchField.setAttribute("placeholder", button.textContent );
    const btn=document.createElement("button")
    btn.setAttribute("class", "select-search")
    btn.setAttribute("type", "submit")
  const icon=document.createElement("img")
  icon.setAttribute("class", "loupe")
  icon.setAttribute("src", "loupe.png")
  btn.append(icon)
    // searchFieldDiv.append(searchField)
    // searchFieldDiv.append(btn)
    dropdown.appendChild(searchField);
    dropdown.appendChild(btn)
  

  //create dropdown items from list of items
  items.forEach((item)=>
  {
    let dropdown_item = document.createElement("li");
    dropdown_item.setAttribute("data-visible", "true");
    dropdown_item.setAttribute("class", "dropdown-item");
    dropdown_item.innerHTML = item;
    dropdown.appendChild(dropdown_item);
  }
) 




  //hide the dropdown list
  dropdown.style.display = "none";

  chevrondown.dataset.active="true";
  chevronup.dataset.active="false";

  //remove existing evetn listener

  // button.removeEventListener("click", function () {
  //   if (dropdown.style.display == "none") dropdown.style.display = "block";
  //   else dropdown.style.display = "none";
  // });

  //make the button toggle the display of dropdown
  chevrondown.addEventListener("click", function () {
    dropdown.style.display = "block";
    // console.log("listitem",dropdown.children.length)
    chevronup.style.display="inline"
    chevronup.dataset.active="true"
    chevrondown.style.display="none"
    chevrondown.dataset.active="false"
  });


chevronup.addEventListener("click", function(){
  dropdown.style.display = "none"
  chevrondown.style.display="inline"
  chevrondown.dataset.active="true"
  chevronup.style.display="none"
  chevronup.dataset.active="false"
})






  // filter function


  searchField.addEventListener("input", function () {

    let dropdown_items = dropdown.querySelectorAll(".dropdown-item");
    let spchars=['<', '>', '/',';']
     if(spchars.some(char => searchField.value.includes(char)))
     {console.log("charactères erronés")
    return false}
   
      if (!dropdown_items) return false;

     dropdown_items.forEach((dropdown_item) =>{
        if (
          dropdown_item.innerHTML
            .toUpperCase()
            .includes(searchField.value.toUpperCase())
        )
          dropdown_item.style.display = "block";
        else dropdown_item.style.display = "none";
        

      })
    
    updateRecipeCount();
  });
  
// console.log(dropdown,"created - length:",dropdown.children.length)
}



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
    updateFilterDropdown()
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
  const content =tagsection.textContent
  if(!content.includes(tag))
 { tagsection.append(searchtag);
  tagsection.dataset.active='true'}

}









function findCardsSearch(query) {
  console.log(query);
  if(!filterBy.includes(query)){
    filterBy.push(query)
  }
  // console.log("Filter by ",filterBy)
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
  
  // console.log("New recipe list",newRecipeList);

let IngredientsArray=getIngredientsList(newRecipeList);
let AppareilsList=getApparails(newRecipeList)
let UstensilesList=getUstensilesList(newRecipeList)

// console.log(IngredientsArray)
// console.log(AppareilsList)
// console.log(UstensilesList)

createfilterDropDown(
  ingredientsButton, //
  ingredientsSelect,
  
  IngredientsArray,
  chdown1,chup1
);

createfilterDropDown(
  appareilsButton,
   appareilsSelect, 
   
    AppareilsList,chdown2,chup2);

createfilterDropDown(
  ustensileButton,
  ustensileSelect,
  
  UstensilesList,chdown3,chup3
);

applyClickToVisibleItems()




}



function findCardsSelect(query){
    // console.log(query);
    if(!filterBy.includes(query))
    {filterBy.push(query)}
    console.log("Filter by ", filterBy)
    let visibleRecipesList = document.querySelectorAll(".card[data-visible='true' ]");
    visibleRecipesList.forEach((recipe) => {
        let cardContent = recipe.textContent.toUpperCase();
        if (!cardContent.includes(query)) {
            recipe.dataset.visible = "false";
            
        } else {
            recipe.dataset.visible = "true";
        }
    });

    visibleRecipesList = document.querySelectorAll(".card[data-visible='true' ]");
    updateRecipeCount();

      //nex recipelist for nexw selcts

  let newRecipeList = Array.from(visibleRecipesList);


  console.log("New recipe list",newRecipeList);

let IngredientsArray=getIngredientsListDOM(newRecipeList);
let AppareilsList=getApparailsDOM(newRecipeList)
let UstensilesList=getUstensilesListDOM(newRecipeList)

// console.log(IngredientsArray)
// console.log(AppareilsList)
// console.log(UstensilesList)

createfilterDropDown(
  ingredientsButton, //
  ingredientsSelect,
  IngredientsArray,
  chdown1,chup1,
);

createfilterDropDown(
  appareilsButton,
   appareilsSelect, 
    AppareilsList,chdown2,chup2
    );

createfilterDropDown(
  ustensileButton,
  ustensileSelect,
 
  UstensilesList,chdown3,chup3
);

applyClickToVisibleItems()





    if (visibleRecipesList.length == 0) {
        displayNoResults();
    }
}

function displayNoResults() {
  let searchterm=document.querySelector("#queryInput").value
  const resultmsg = document.getElementById("resultmsg");
  resultmsg.dataset.active="true"
  resultmsg.textContent = "Aucune recette ne contient  	« "+searchterm+" ».Vous pouvez rechercher  «tarte aux pommes », « poisson » etc.";
}//end displayno

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



function applyClickToVisibleItems() {

  // Apply click function to visible elements in dropdown
  let visibleSelectItems = document.querySelectorAll(".dropdown-item[data-visible]");



  // Create tag for chosen term
  visibleSelectItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      let tag = event.currentTarget.textContent;
      let target=event.currentTarget
      let button=target.parentNode.previousElementSibling
      let chevup=button.querySelector(".fa-chevron-up")
      let chevdown=button.querySelector(".fa-chevron-down")
      console.log("Target",target)
      console.log("Parent",target.parentNode.previousElementSibling)
      createTag(item, tag);
      chevdown.style.display="inline"
      chevup.style.display="none"
  
     

      // Remove tag on click
      let searchtags = document.querySelectorAll(".searchtag");
      searchtags.forEach((item) => {
        item.addEventListener("click", (event) => {
          let term = event.currentTarget.textContent;
          console.log(term);
          event.currentTarget.remove();
          removeSelectFilter(tag);
          const tagsection = document.querySelector(".tag_section");
          tagsection.removeAttribute("data-active");
          updateFilterDropdown()
        });
      });

      // Run search function
      findCardsSelect(tag);
      updateRecipeCount();

      //toggle chevron


    });
  });
}


function updateFilterDropdown(){

  let visibleRecipesList = document.querySelectorAll(
    ".card[data-visible='true']"
  );

      //nex recipelist for nexw selcts

      let newRecipeList = Array.from(visibleRecipesList);


      console.log("New recipe list",newRecipeList);
    
    let IngredientsArray=getIngredientsListDOM(newRecipeList);
    let AppareilsList=getApparailsDOM(newRecipeList)
    let UstensilesList=getUstensilesListDOM(newRecipeList)
    
    console.log(IngredientsArray)
    console.log(AppareilsList)
    console.log(UstensilesList)
    
    createfilterDropDown(
      ingredientsButton, //
      ingredientsSelect,
      IngredientsArray,
      chdown1,chup1,
    );
    
    createfilterDropDown(
      appareilsButton,
       appareilsSelect, 
        AppareilsList,chdown2,chup2
        );
    
    createfilterDropDown(
      ustensileButton,
      ustensileSelect,
     
      UstensilesList,chdown3,chup3
    );
    
    applyClickToVisibleItems()
    
    
    
    
    
        if (visibleRecipesList.length == 0) {
            displayNoResults();
        }


}
