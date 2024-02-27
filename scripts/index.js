
//glabaol vriable,updated after each sarch function call

const nb_recettes=document.querySelector(".nb_recipes")

 const recipesection=document.querySelector(".card_container")

 const loupe=document.getElementById("loupe");
 const queryInput=document.getElementById("queryInput")

 const resultmsg=document.getElementById("resultmsg")

 ///SELECT DROPDOWN////////////
 const ingredientsButton=document.getElementById('toggle1')
 const ingredientsSelect=  document.getElementById('dropdown1')
 const ingredientsInput=document.getElementById('inputIn')

 const appareilsButton=document.getElementById('toggle2')
 const appareilsSelect=document.getElementById('dropdown2')
 const appareilsInput=    document.getElementById('inputA')

 const ustensileButton=  document.getElementById('toggle3')
 const ustensileSelect=  document.getElementById('dropdown3')
 const ustensileInput=  document.getElementById('inputU')



 //////////////MAIN CODE///////////////////////
displayCards(recipes);
updateRecipeCount();
queryInput.value="";

/////////////EVENT LISTENER FOR SEARCHBAR ///////////////////////
//  queryInput.addEventListener("input", (event) => {
//   let query = event.target.value.toUpperCase();
// findCards(query);

// });

loupe.addEventListener("click", (event)=>
{ event.preventDefault();
  let query=queryInput.value.toUpperCase();
  findCards(query)
})



////////CREATE SELECT MENUS//////////////////////
filterDropDown(
  ingredientsButton, // 
ingredientsSelect,
ingredientsInput,
  IngredientsArray
)


filterDropDown(

  appareilsButton,
  appareilsSelect,
  appareilsInput,
  AppareilsList
)


filterDropDown(
ustensileButton,
ustensileSelect,
ustensileInput,
  UstensilesList
)


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

  //remove tag on click
  searchtags.forEach(item => {
    item.addEventListener("click", event => {
      let term=event.currentTarget.textContent
      console.log(term)
      event.currentTarget.remove();
      

      
    });
  });

  //////////RUN SEARCH FUNCTION////////////////////
   findCards(tag)
    
    });
  });

  //////////RESET BUTTON FOR TESTING////////////////////
  const reset=document.getElementById("reset")
  reset.addEventListener("click", resetCards)




