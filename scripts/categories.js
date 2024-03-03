function getIngredientsList(recipelist){
    let ingredientslistarray = [];
    for(let i = 0; i < recipelist.length; i++) {
        let ingredientslist = Object.values(recipelist[i].ingredients);
        ingredientslistarray.push(ingredientslist);
    }
    let ingredientsarray = [];
    for(let i = 0; i < ingredientslistarray.length; i++) {
        for(let j = 0; j < ingredientslistarray[i].length; j++) {
            let ingredient = ingredientslistarray[i][j].ingredient;
            ingredientsarray.push(ingredient);
        }
    }
    ingredientsarray = ingredientsarray.map(ingredient => ingredient.toUpperCase());
    const IngredientsList = new Set(ingredientsarray);
    const IngredientsArray = Array.from(IngredientsList);
    IngredientsArray.sort();
    return IngredientsArray;
}

function getIngredientsListDOM(visiblerecipes){
    let ingredientslistarray = [];
    for(let i = 0; i < visiblerecipes.length; i++) {
        let ingredientslist = visiblerecipes[i].querySelectorAll(".ingr");
        for(let j = 0; j < ingredientslist.length; j++) {
            ingredientslistarray.push(ingredientslist[j].textContent.toUpperCase());
        }
    }
    const IngredientsList = new Set(ingredientslistarray);
    const IngredientsArray = Array.from(IngredientsList);
    IngredientsArray.sort();
    return IngredientsArray;   
}

function getApparails(recipelist){
    const appareilslist = [];
    for(let i = 0; i < recipelist.length; i++) {
        let appareil = recipelist[i].appliance;
        appareilslist.push(appareil.toUpperCase());
    }
    const AppareilsList = Array.from(new Set(appareilslist));
    AppareilsList.sort();
    return AppareilsList;
}

function getApparailsDOM(visiblerecipes){
    const appareilslist = [];
    for(let i = 0; i < visiblerecipes.length; i++) {
        let appareils = visiblerecipes[i].querySelector(".appl");
        let appareil = appareils.textContent;
        appareilslist.push(appareil.toUpperCase());
    }
    const AppareilsList = Array.from(new Set(appareilslist));
    AppareilsList.sort();
    return AppareilsList;
}

function getUstensilesList(recipelist){
    let ustensilelistarray = [];
    for(let i = 0; i < recipelist.length; i++) {
        let ustensiles = recipelist[i].ustensils;
        ustensilelistarray.push(ustensiles);
    }
    let ustensilelist = [];
    for(let i = 0; i < ustensilelistarray.length; i++) {
        for(let j = 0; j < ustensilelistarray[i].length; j++) {
            ustensilelist.push(ustensilelistarray[i][j]);
        }
    }
    ustensilelist = ustensilelist.map(ustensile => ustensile.toUpperCase());
    let UstensilesList = new Set(ustensilelist);
    UstensilesList = Array.from(UstensilesList);
    UstensilesList.sort();
    return UstensilesList;
}

function getUstensilesListDOM(visiblerecipes){
    let ustensilelistarray = [];
    for(let i = 0; i < visiblerecipes.length; i++) {
        const ustensiles = visiblerecipes[i].querySelectorAll(".usts");
        for(let j = 0; j < ustensiles.length; j++) {
            let usts = ustensiles[j].textContent;
            if(typeof(usts) == "string") {
                ustensilelistarray.push(usts.toUpperCase());
            }
        }
    }
    let UstensilesList = new Set(ustensilelistarray);
    UstensilesList = Array.from(UstensilesList);
    UstensilesList.sort();
    return UstensilesList;
}