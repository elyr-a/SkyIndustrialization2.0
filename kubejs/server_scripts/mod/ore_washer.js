ServerEvents.recipes(event => {
    const id_prefix = "fakir:modern_industrialization/ore_washer"

    const recipes = [
        { // bauxite
            item_inputs: [
                {item: "modern_industrialization:bauxite_crushed_dust", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "minecraft:water", amount: 100}
            ],
            item_outputs: [
                {item: "modern_industrialization:bauxite_dust", amount: 1},
                {item: "modern_industrialization:bauxite_dust", amount: 1, probability: 0.5},
                {item: "modern_industrialization:aluminum_dust", amount: 1, probability: 0.15},
                {item: "modern_industrialization:titanium_tiny_dust", amount: 1, probability: 0.05}
            ],
            eu: 8,
            duration: 200,
            id:  `${id_prefix}/bauxite_washer`
        },
        { // redstone
            item_inputs: [
                {item: "modern_industrialization:redstone_crushed_dust", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "minecraft:water", amount: 100}
            ],
            item_outputs: [
                {item: "minecraft:redstone", amount: 1},
                {item: "minecraft:redstone", amount: 1, probability: 0.5},
                {item: "modern_industrialization:ruby_dust", amount: 1, probability: 0.25},
                {item: "modern_industrialization:neodymium_tiny_dust", amount: 1, probability: 0.015}
            ],
            eu: 8,
            duration: 200,
            id:  `${id_prefix}/redstone_washer`
        },
        { // lapis
            item_inputs: [
                {item: "modern_industrialization:lapis_crushed_dust", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "minecraft:water", amount: 100}
            ],
            item_outputs: [
                {item: "modern_industrialization:lapis_dust", amount: 1},
                {item: "modern_industrialization:lapis_dust", amount: 1, probability: 0.5},
                {item: "modern_industrialization:aluminum_dust", amount: 1, probability: 0.05},
                {item: "modern_industrialization:silicon_dust", amount: 1, probability: 0.025}
            ],
            eu: 8,
            duration: 200,
            id: `${id_prefix}/lapis_washer`
        },
        { // copper
            item_inputs: [
                {item: "minecraft:raw_copper", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "minecraft:water", amount: 100}
            ],
            item_outputs: [
                {item: "modern_industrialization:copper_dust", amount: 1},
                {item: "modern_industrialization:copper_dust", amount: 1, probability: 0.5},
                {item: "modern_industrialization:gold_dust", amount: 1, probability: 0.15}
            ],
            eu: 8,
            duration: 200,
            id: `${id_prefix}/copper_washer`
        },
        { // iron
            item_inputs: [
                {item: "minecraft:raw_iron", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "minecraft:water", amount: 100}
            ],
            item_outputs: [
                {item: "modern_industrialization:iron_dust", amount: 1},
                {item: "modern_industrialization:iron_dust", amount: 1, probability: 0.5},
                {item: "modern_industrialization:nickel_dust", amount: 1, probability: 0.15}
            ],
            eu: 8,
            duration: 200,
            id: `${id_prefix}/iron_washer`
        },
        { // gold
            item_inputs: [
                {item: "minecraft:raw_gold", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "minecraft:water", amount: 100}
            ],
            item_outputs: [
                {item: "modern_industrialization:gold_dust", amount: 1},
                {item: "modern_industrialization:gold_dust", amount: 1, probability: 0.5},
                {item: "modern_industrialization:tin_dust", amount: 1, probability: 0.15}
            ],
            eu: 8,
            duration: 200,
            id: `${id_prefix}/gold_washer`
        },
        { // coal
            item_inputs: [
                {item: "modern_industrialization:coal_crushed_dust", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "minecraft:water", amount: 100}
            ],
            item_outputs: [
                {item: "modern_industrialization:coal_dust", amount: 1},
                {item: "modern_industrialization:coal_dust", amount: 1, probability: 0.5},
                {item: "modern_industrialization:carbon_dust", amount: 1, probability: 0.25},
                {item: "modern_industrialization:diamond_tiny_dust", amount: 1, probability: 0.01}
            ],
            eu: 8,
            duration: 200,
            id: `${id_prefix}/coal_washer`
        },
        { // nickel
            item_inputs: [
                {item: "modern_industrialization:raw_nickel", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "minecraft:water", amount: 100}
            ],
            item_outputs: [
                {item: "modern_industrialization:nickel_dust", amount: 1},
                {item: "modern_industrialization:nickel_dust", amount: 1, probability: 0.5},
                {item: "modern_industrialization:iron_dust", amount: 1, probability: 0.15},              
            ],
            eu: 8,
            duration: 200,
            id: `${id_prefix}/nickel_washer`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:ore_washer';
        event.custom(recipe).id(recipe.id);
    });
})