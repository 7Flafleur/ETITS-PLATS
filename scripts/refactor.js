//original

/////////////EVENT LISTENER FOR SEARCHBAR ///////////////////////
//  queryInput.addEventListener("input", (event) => {
//   let query = event.target.value.toUpperCase();
// findCards(query);

// });

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
  
  

/////refactored 




function handleSearch(query) {
    let spchars=['<', '>', '/'];
    if(spchars.some(char => query.includes(char))) {
      console.log("Invalid characters");
      return false;
    }
    if (query.length >= 3) {
      findCardsSearch(query);
    } else if (query === "") {
      resetCards();
      resetSearchfilter();
      document.querySelectorAll(".searchtag").forEach(tag => tag.remove());
    }
    updateRecipeCount();
  }
  
  queryInput.addEventListener("input", (event) => {
    event.preventDefault();
    handleSearch(queryInput.value.toUpperCase());
  });
  
  queryInput.addEventListener("keyup", (event) => {
    if (event.key === 'Backspace') {
      // A deletion has occurred
      filterBy.pop(); // Remove the last search term
      handleSearch(queryInput.value.toUpperCase());
    }
  });
  
  loupe.addEventListener("click", (event) => {
    event.preventDefault();
    handleSearch(queryInput.value.toUpperCase());
  });




  //////////////refactored filter functions

  function createElement(tag, attributes, text) {
    const element = document.createElement(tag);
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    if (text) {
      element.textContent = text;
    }
    return element;
  }
  
  function createfilterDropDown(button, dropdown, input, items, cat) {
    const dropdown_input = createElement("input", { type: "text", class: "dropdown-input" });
    dropdown.appendChild(dropdown_input);
  
    items.forEach((item) => {
      const dropdown_item = createElement("li", { "data-visible": "true", class: "dropdown-item", "data-category": cat }, item);
      dropdown.appendChild(dropdown_item);
    });
  
    dropdown.style.display = "none";
  
    button.addEventListener("click", function () {
      dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    });
  
    dropdown_input.addEventListener("input", function () {
      const dropdown_items = dropdown.querySelectorAll(".dropdown-item");
      const spchars = ['<', '>', '/'];
      if (spchars.some(char => input.value.includes(char))) {
        console.log("Invalid characters");
        return false;
      }
  
      if (!dropdown_items) return false;
      for (const dropdown_item of dropdown_items) {
        dropdown_item.style.display = dropdown_item.textContent.toUpperCase().includes(input.value.toUpperCase()) ? "block" : "none";
      }
  
      updateRecipeCount();
    });
  }


  ///FUNCTIONAL/

  function createfilterDropDown(button, dropdown, input, items, cat) {
    // Create input field
    const dropdown_input = document.createElement("input");
    dropdown_input.setAttribute("type", "text");
    dropdown_input.setAttribute("class", "dropdown-input");
    dropdown.appendChild(dropdown_input);
  
    // Create dropdown items from list of items
    items.forEach((item) => {
      const dropdown_item = document.createElement("li");
      dropdown_item.setAttribute("data-visible", "true");
      dropdown_item.setAttribute("class", "dropdown-item");
      dropdown_item.dataset.category = cat;
      dropdown_item.textContent = item;
      dropdown.appendChild(dropdown_item);
    });
  
    // Hide the dropdown list
    dropdown.style.display = "none";
  
    // Make the button toggle the display of dropdown
    button.addEventListener("click", () => {
      dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    });
  
    // Filter function
    dropdown_input.addEventListener("input", () => {
      const dropdown_items = Array.from(dropdown.querySelectorAll(".dropdown-item"));
      const spchars = ['<', '>', '/'];
  
      if (spchars.some(char => input.value.includes(char))) {
        console.log("Invalid characters");
        return false;
      }
  
      dropdown_items.forEach(item => {
        item.style.display = item.textContent.toUpperCase().includes(input.value.toUpperCase()) ? "block" : "none";
      });
  
      updateRecipeCount();
    });
  }