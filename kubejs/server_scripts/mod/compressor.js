ServerEvents.recipes(event => {
    const id_prefix = "fakir:modern_industrialization"

    const recipes = [
        {
            type: 'modern_industrialization:compressor',
            item_inputs: [
                { item: "modern_industrialization:coal_tiny_dust", amount: 64 }
            ],
            item_outputs: [
                { item: "modern_industrialization:diamond_tiny_dust", amount: 1 }
            ],
            eu: 2,
            duration: 200,
            id: `${id_prefix}/compressor/tiny_coal_dust_to_tiny_diamond_dust`
        },
        {
            type: 'modern_industrialization:compressor',
            item_inputs: [
                { item: "modern_industrialization:diamond_dust", amount: 1 }
            ],
            item_outputs: [
                { item: "minecraft:diamond", amount: 1 }
            ],
            eu: 2,
            duration: 400,
            id: `${id_prefix}/compressor/diamond_dust_to_diamond`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:compressor';
        event.custom(recipe).id(recipe.id);
    });
})