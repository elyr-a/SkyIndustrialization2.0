MIMaterialEvents.addMaterials(event => {
    event.createMaterial("Wood", "wood", 0x8B6B3E, builder => {
        builder
            .hardness("soft")
            .materialSet("dull") 
            .addParts("plate", "gear");
    });

    event.createMaterial("Stone", "stone", 0x7F7F7F, builder => {
        builder
            .hardness("average")
            .materialSet("stone")
            .addParts("plate", "gear");
    });
});
