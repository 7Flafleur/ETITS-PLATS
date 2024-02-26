

displayCards(recipes);

//glabaol vriable,updated after each sarch function call
 let visibleRecipesList=document.querySelectorAll(".card [data-visble='true']")

 let visibleRecipesArray=Array.from(visibleRecipesList);

 let hiddenRecipesList=document.querySelectorAll(".card [data-visible='false']")

 let hiddenRecipesArray=[...hiddenRecipesList] //create Array ,spread operator


 const loupe=document.getElementById("loupe");
 const queryInput=document.getElementById("queryInput")


 queryInput.addEventListener("input", (event)=>{
     let query= event.target.value;
     
     if(query.length>=3){
      
     console.log(query) 
     }

 })




















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




