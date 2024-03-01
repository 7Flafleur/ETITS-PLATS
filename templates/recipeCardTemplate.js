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


        ingredients.forEach((ingredient)=>{
            const ingr=document.createElement("li")
            ingr.setAttribute("class", "ingredient")
            const ingsp=document.createElement("span")
            ingsp.textContent=ingredient.ingredient
            ingr.append(ingsp)
            ingsp.setAttribute("class", "ingr")
            const br=document.createElement("br")
            const quant=document.createElement("span")
            quant.setAttribute("class", "quantité")
            
            let qu;
            if(!ingredient.quantity)
            { qu=" - "}
            else{qu=ingredient.quantity}
            
            let u;
            if(!ingredient.unit){
                u=""
            }
            else{u=ingredient.unit}
        quant.textContent=qu+" "+u
         

            ingr.append(quant)
            ingredientsDiv.append(ingr);

        })

        //appliance,invisible

        const appls=document.createElement("template")
        appls.setAttribute("class", "hidden")
        const appl=document.createElement("span")
        appl.classList.add("hidden","appl")
        
       
       
        appl.textContent=appliance
        appls.append(appl)
        


        //ustensils, invisible

        const ustensilsTemplate=document.createElement("template")
        ustensilsTemplate.setAttribute("class","hidden")
        const ustensilsListtemplate=document.createElement("ul")
        ustensils.forEach((ustensil)=>{
            const ust=document.createElement("li")
            ust.setAttribute("class", "usts")
            ust.textContent=ustensil
            ustensilsListtemplate.append(ust)
        })
        ustensilsTemplate.append(ustensilsListtemplate)
        

        
        cardcontent.append(h3);
        cardcontent.append(ingredientsDiv);
        cardcontent.append(appl)
        cardcontent.append(ustensilsTemplate)

        recipecard.append(cardcontent);

        const cardcontainer = document.querySelector(".card_container");
        cardcontainer.append(recipecard);

        return recipecard;
    }

    return { id, image, name, ingredients, time, description, appliance, ustensils, getRecipeCardDOM };
} // end RecipeCardTemplate

function displayCards(cardarray){
    const cardcontainer=document.querySelector(".card_container");

    cardarray.forEach(element => {
        const cardModel=RecipeCardTemplate(element);
        const recipeCard=cardModel.getRecipeCardDOM(element);
        
        cardcontainer.appendChild(recipeCard)
        
    });
}