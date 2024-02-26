//VARIABLES







function filterDropDown(button, dropdown, input, items) {
    //create dropdown items from list of items
    items.forEach((item) =>{
        let dropdown_item = document.createElement('li');
        dropdown_item.setAttribute("data-visible","true");
        dropdown_item.setAttribute('class', 'dropdown-item');
        dropdown_item.innerHTML = item;
        dropdown.appendChild(dropdown_item);
    }) 
    //hide the dropdown list
    dropdown.style.display = 'none';

    //make the button toggle the display of dropdown
    button.addEventListener('click', function () {
        if (dropdown.style.display == 'none')
            dropdown.style.display = 'block';
        else
            dropdown.style.display = 'none';
    });

    //filter function

    input.addEventListener('input', function () {
        let dropdown_items = dropdown.querySelectorAll('.dropdown-item');
        if(input.value.length>=3)
    {        if (!dropdown_items)
            return false;
        for (let i=0; i<dropdown_items.length; i++) {
            if (dropdown_items[i].innerHTML.toUpperCase().includes(input.value.toUpperCase()))
                dropdown_items[i].style.display = 'block';
            else
                dropdown_items[i].style.display = 'none';
        }}
    });
}


// //on click on item, close dropdown, create tag
 function createTag(item,tag){
    let parent=item.parentNode
     parent.style.display="none";  
     const searchtag =document.createElement("span")
        searchtag.setAttribute("class", "searchtag")
        searchtag.textContent=tag
    const tagsection=document.querySelector(".tag_section")    
    tagsection.append(searchtag);

}


function findCards(term){
    const cards=document.querySelectorAll(".card")
    cards.forEach(card =>{
        if(!card.textContent.includes(term)){   
            
            card.setAttribute("data-visible", "false")  
             
        }
    
    })
}



function resetCards(){
    //cards.removeAttribute
    const cards=document.querySelectorAll(".card")
    cards.forEach((card)=>{
        card.setAttribute("data-visible","true")
    })

}














//call filterDropDown function

filterDropDown(
  document.getElementById('toggle1'),
  document.getElementById('dropdown1'),
  document.getElementById('inputIn'),
  IngredientsArray
)


filterDropDown(
    document.getElementById('toggle2'),
    document.getElementById('dropdown2'),
    document.getElementById('inputA'),
    AppareilsList
)


filterDropDown(
  document.getElementById('toggle3'),
  document.getElementById('dropdown3'),
  document.getElementById('inputU'),
  UstensilesList
)