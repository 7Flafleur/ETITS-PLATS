

displayCards(recipes);

//glabaol vriable,updated after each sarch function call
 let visibleRecipesList=document.querySelectorAll(".card[data-visible='true' ]")

 let visibleRecipesArray=Array.from(visibleRecipesList);

 let hiddenRecipesList=document.querySelectorAll(".card[data-visible='false']")

 let hiddenRecipesArray=[...hiddenRecipesList] //create Array ,spread operator

 const recipesection=document.querySelector(".card_container")

 const loupe=document.getElementById("loupe");
 const queryInput=document.getElementById("queryInput")


 queryInput.addEventListener("input", (event) => {
  let query = event.target.value.toUpperCase();

  if (query.length >= 3) {
      console.log(query);
      visibleRecipesList.forEach((recipe) => {
          let titre = recipe.querySelector("h2").textContent.toUpperCase();
          let recette = recipe.querySelector(".card_content-recette").textContent.toUpperCase();
          let ingredients = recipe.querySelector(".card_content-ingredients").textContent.toUpperCase();
          if (!titre.includes(query) && !recette.includes(query) && !ingredients.includes(query)) {
              recipe.dataset.visible = "false";
              console.log("not included");
          }
          else{
            recipe.dataset.visible="true";
          }
          visibleRecipesList=document.querySelectorAll(".card[data-visible='true' ]")
          hiddenRecipesList=document.querySelectorAll(".card[data-visible='false']")

      });
      if(visibleRecipesList.length==0){
        console.log("Aucune recette trouvée!")
        const resultmsg=document.createElement("h2")
        resultmsg.textContent="Aucune recette trouvée"
        recipesection.append(resultmsg)
      }
  }  
  else {
    if(hiddenRecipesList.length!=0)
    hiddenRecipesList.forEach((recipe=>{
  recipe.dataset.visible="true"}
  ))
  }
});




















//apply cklickfunction to visible elements in dropdown
let visibleSelectItems = document.querySelectorAll('.dropdown-item[data-visible]');

//get clicked item

let dropdownitems=document.querySelectorAll("dropdown-item")


// create tag for chosen term
visibleSelectItems.forEach(item => {
    item.addEventListener("click", event => {
      let tag=event.currentTarget.textContent
      // console.log(tag);
      
      // Add more functions here
      createTag(item,tag);
  //remove tag on click
  let searchtags=document.querySelectorAll(".searchtag")

  console.log(searchtags)

  searchtags.forEach(item => {
    item.addEventListener("click", event => {
      let term=event.currentTarget.textContent
      console.log(term)
      event.currentTarget.remove();
      

      
    });
  });

   findCards(tag)
    
    });
  });

  const reset=document.getElementById("reset")
  reset.addEventListener("click", resetCards)




