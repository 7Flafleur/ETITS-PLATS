


displayCards(recipes);


//apply cklickfunction to visible elements
let visibleItems = document.querySelectorAll('.dropdown-item[data-visible]');

//get clicked item

let dropdownitems=document.querySelectorAll("dropdown-item")


// create tag for chosen term
visibleItems.forEach(item => {
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
      const invisibleCards=document.querySelectorAll("selectors")

      
    });
  });

   findCards(tag)
    //   function3();
    });
  });

  const reset=document.getElementById("reset")
  reset.addEventListener("click", resetCards)




