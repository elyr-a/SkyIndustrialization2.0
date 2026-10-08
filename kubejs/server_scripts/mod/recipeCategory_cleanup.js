RecipeViewerEvents.removeCategories(event => {
       console.log(event.categoryIds)
       event.remove('mi_tweaks:brick_furnace')
   })