ServerEvents.loaded(event => {
    let server = event.server
    let overworld = server.getLevel('minecraft:overworld')
    
    if (overworld) {
        server.setDifficulty('peaceful', true) 
        
        let worldData = server.getWorldData()
        worldData.setDifficultyLocked(true)
    }
})
