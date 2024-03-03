function RecipeCardTemplate(data) {
    const { id, image, name, ingredients, time, description, appliance, ustensils } = data;
    const img = `../pictures/${image}`;

    function getRecipeCardDOM() {
        // create card
        const recipecard = document.createElement("article");
        recipecard.setAttribute("class", "card");
        recipecard.setAttribute("data-visible", "true")

        // img tag
        let cardImg = document.createElement('div');
        cardImg.className = 'cardImg';
        cardImg.style.backgroundImage = `url(../pictures/${image})`;
        cardImg.style.backgroundSize = 'cover';
        cardImg.style.backgroundPosition = 'center';
        cardImg.style.width = '100%'; // Set the width
        cardImg.style.height = '253px'; // Set the height
        recipecard.append(cardImg)

        //timetag

        const timetag=document.createElement("span")
        timetag.setAttribute("class", "timetag")
        timetag.textContent=time+" min"
        recipecard.append(timetag)

        // card.content
        const cardcontent = document.createElement("div");
        const h2 = document.createElement("h2");
        h2.textContent = name;
        cardcontent.append(h2);
       cardcontent.setAttribute("class", "card_content")

        // card_content-recette
        const recette = document.createElement("div");
        const h4=document.createElement("h4");
        h4.textContent="Recette"
        recette.setAttribute("class", "card_content-recette");
        
        recette.textContent = description;
        cardcontent.append(h4)
        cardcontent.append(recette);

        // ingredients
        const h3 = document.createElement("h4");
        h3.textContent = "Ingrédients";
        const ingredientsDiv = document.createElement("ul");
        ingredientsDiv.setAttribute("class", "card_content-ingredients");

// ...

for (let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i];
    const ingr = document.createElement("li");
    ingr.setAttribute("class", "ingredient");
    const ingsp = document.createElement("span");
    ingsp.textContent = ingredient.ingredient;
    ingr.append(ingsp);
    ingsp.setAttribute("class", "ingr");
    const br = document.createElement("br");
    const quant = document.createElement("span");
    quant.setAttribute("class", "quantité");
    
    let qu;
    if (!ingredient.quantity) {
        qu = " - ";
    } else {
        qu = ingredient.quantity;
    }
    
    let u;
    if (!ingredient.unit) {
        u = "";
    } else {
        u = ingredient.unit;
    }
    quant.textContent = qu + " " + u;

    ingr.append(quant);
    ingredientsDiv.append(ingr);
}

// ...
        //appliance,invisible
const h3a=document.createElement("h4")
h3a.setAttribute("class", "ingredient")
h3a.textContent="Appareils: "

        const appls=document.createElement("div")
        appls.setAttribute("class", "appls")
        const appl=document.createElement("div")
        appl.setAttribute("class","appl")
        appls.dataset.hidden="true"

        appls.append(h3a)
       
       
        appl.textContent=appliance
        
        
        appls.append(appl)
        
//hidden container

const hidden=document.createElement("div")
hidden.classList.add("card_content-ingredients", "hidden")
hidden.dataset.hidden="true"


        //ustensils, invisible

        const ustensilsTemplate=document.createElement("div")
        ustensilsTemplate.setAttribute("data-hidden","true")
        ustensilsTemplate.setAttribute("id","ustl")
        const h3u=document.createElement("h4")
        h3u.setAttribute("class", "ingredient")
        h3u.textContent="Ustensiles:"
        const ustensilsListtemplate=document.createElement("div")

        /////////////////////////////////////////////////////
        for(let index = 0; index < ustensils.length; index++) {
            const ust = document.createElement("span");
            ust.setAttribute("class", "usts");
            // if(index < ustensils.length - 1) {
            //   ust.textContent = " " + ustensils[index].toLowerCase() + ",";
            // } else {
              ust.textContent = " " + ustensils[index].toLowerCase()+" ";
            // }
            ustensilsListtemplate.append(ust);
          }
        ///////////////////////////////////////
        ustensilsTemplate.append(h3u)
        ustensilsTemplate.append(ustensilsListtemplate)

        hidden.append(ustensilsTemplate)
        hidden.append(appls)

        

        
        cardcontent.append(h3);
        cardcontent.append(ingredientsDiv);

    cardcontent.append(hidden)

        recipecard.append(cardcontent);

        const cardcontainer = document.querySelector(".card_container");
        cardcontainer.append(recipecard);

        return recipecard;
    }

    return { id, image, name, ingredients, time, description, appliance, ustensils, getRecipeCardDOM };
} // end RecipeCardTemplate



function displayCards(cardarray) {
    const cardcontainer = document.querySelector(".card_container");

    for (let i = 0; i < cardarray.length; i++) {
        const cardModel = RecipeCardTemplate(cardarray[i]);
        const recipeCard = cardModel.getRecipeCardDOM(cardarray[i]);
        
        cardcontainer.appendChild(recipeCard);
    }
}