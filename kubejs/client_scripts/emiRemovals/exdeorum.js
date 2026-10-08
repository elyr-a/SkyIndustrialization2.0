RecipeViewerEvents.removeEntries('item', event => {
    event.remove(Ingredient.of('@exdeorum'))
})

RecipeViewerEvents.removeEntries('fluid', event => {
    event.remove('@exdeorum')
})

RecipeViewerEvents.removeCategories(event => {
    console.log(event.categoryIds)
})
