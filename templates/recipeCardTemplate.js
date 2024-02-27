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
            ingr.setAttribute("class", ingredient)
            ingr.textContent=ingredient.ingredient
            const br=document.createElement("br")
            const quant=document.createElement("span")
            quant.setAttribute("class", "quantité")
            ingr.append(br)
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

        
        cardcontent.append(h3);
        cardcontent.append(ingredientsDiv);

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