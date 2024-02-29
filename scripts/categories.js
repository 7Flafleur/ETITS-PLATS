
function getIngredientsList(recipelist){

    let ingredientslistarray=[]

    recipelist.forEach((recipe)=>{
        let ingredientslist=Object.values(recipe.ingredients)
        ingredientslistarray.push(ingredientslist)
    })
    

    
    let ingredientsarray=[]
    
    ingredientslistarray.forEach((inglist)=>{
        inglist.forEach((ingredientinfo)=>{
            let ingredient=ingredientinfo.ingredient
            ingredientsarray.push(ingredient)
    
        })
    })
    

    
    
    ingredientsarray=ingredientsarray.map(ingredient=>ingredient.toUpperCase())
    
    const IngredientsList=new Set(ingredientsarray)
    
    const IngredientsArray=Array.from(IngredientsList)
    
   
    
    IngredientsArray.sort()
    
    return IngredientsArray;
}


function getIngredientsListDOM(visiblerecipes){
    let ingredientslistarray=[]

    visiblerecipes.forEach((recipe)=>{
        let ingredientslist=recipe.querySelectorAll(".ingr")

        ingredientslist.forEach((ing)=>{
            ingredientslistarray.push(ing.textContent.toUpperCase())
        })
    })

    const IngredientsList=new Set(ingredientslistarray)
    
    const IngredientsArray=Array.from(IngredientsList)
    
   
    
    IngredientsArray.sort()
    
    return IngredientsArray;   
}


////////get appareils for search///////////////



function getApparails(recipelist){

    const appareilslist=[]

    recipelist.forEach((recipe)=>{
        appareil=recipe.appliance
        appareilslist.push(appareil.toUpperCase())
    })
    
    const AppareilsList = Array.from(new Set(appareilslist));
    
    AppareilsList.sort()

    return AppareilsList
}

function getApparailsDOM(visiblerecipes){
    const appareilslist=[]

    visiblerecipes.forEach((recipe)=>{
        let appareils=recipe.querySelector(".appl")
        let appareil=appareils.textContent
        appareilslist.push(appareil.toUpperCase())
    })
    
    const AppareilsList = Array.from(new Set(appareilslist));
    
    AppareilsList.sort()

    return AppareilsList

}



function getUstensilesList(recipelist){
    let ustensilelistarray=[]



recipelist.forEach((recipe)=>{
    let ustensiles=recipe.ustensils
    
    ustensilelistarray.push(ustensiles)
})

let ustensilelist=[];

ustensilelistarray.forEach((ustenlist)=>{
    ustenlist.forEach((ustensile)=>{
        
        ustensilelist.push(ustensile)

    })
})
ustensilelist=ustensilelist.map(ustensile=>ustensile.toUpperCase())

let UstensilesList=new Set(ustensilelist)



UstensilesList=Array.from(UstensilesList)

UstensilesList.sort()

return UstensilesList

}

function getUstensilesListDOM(visiblerecipes){
    let ustensilelistarray=[]



    visiblerecipes.forEach((recipe)=>{
    
        const ustensiles=recipe.querySelectorAll(".usts")
        
        ustensiles.forEach((ust)=>{
            let usts=ust.textContent
            if(typeof(usts)=="string")
            {ustensilelistarray.push(usts.toUpperCase())}
        })
    
    
})


let UstensilesList=new Set(ustensilelistarray)



UstensilesList=Array.from(UstensilesList)

UstensilesList.sort()

return UstensilesList


}
