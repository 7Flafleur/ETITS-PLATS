
//////////use on list of recipes////


let ingredientslistarray=[]

recipes.forEach((recipe)=>{
    ingredientslist=Object.values(recipe.ingredients)
    ingredientslistarray.push(ingredientslist)
})

// console.log("IngredientslistArray ", ingredientslistarray)
// console.log(typeof(ingredientslistarray))

let ingredientsarray=[]

ingredientslistarray.forEach((inglist)=>{
    inglist.forEach((ingredientinfo)=>{
        let ingredient=ingredientinfo.ingredient
        ingredientsarray.push(ingredient)

    })
})

// console.log("Ingredientsarray ",ingredientsarray)
// console.log(typeof(ingredientsarray))


ingredientsarray=ingredientsarray.map(ingredient=>ingredient.toLowerCase())

const IngredientsList=new Set(ingredientsarray)

const IngredientsArray=Array.from(IngredientsList)

// console.log("IngredientsList ", IngredientsList)
// console.log(typeof(IngredientsList))

IngredientsArray.sort()
////////get appareils for search///////////////





const appareilslist=[]

recipes.forEach((recipe)=>{
    appareil=recipe.appliance
    appareilslist.push(appareil)
})

const AppareilsList = Array.from(new Set(appareilslist));

AppareilsList.sort()

// console.log("Liste appareils ",appareilslist)
// console.log("Sans doublons ", AppareilsList)



/////////////////get ustensiles for search/////////////////

let ustensilelistarray=[]

// let ustensiles=recette.ustensils

// console.log("Ustensiles ",ustensiles)

recipes.forEach((recipe)=>{
    let ustensiles=recipe.ustensils
    
    ustensilelistarray.push(ustensiles)
})

let ustensilelist=[];

ustensilelistarray.forEach((ustenlist)=>{
    ustenlist.forEach((ustensile)=>{
        
        ustensilelist.push(ustensile)

    })
})
ustensilelist=ustensilelist.map(ustensile=>ustensile.toLowerCase())

let UstensilesList=new Set(ustensilelist)



UstensilesList=Array.from(UstensilesList)

UstensilesList.sort()


// console.log("UstensileslistArray ",ustensilelistarray)

// console.log(UstensilesList)

