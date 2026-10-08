ServerEvents.recipes(event => {
    const id_prefix = "fakir:modern_industrialization/sifter"

    const recipes = [
        { 
            item_inputs: [
                {item: "minecraft:gravel", amount: 1}
            ],
            item_outputs: [
                {item: "modern_industrialization:iron_tiny_dust", amount: 3, probability: 0.2},
                {item: "modern_industrialization:copper_tiny_dust", amount: 3, probability: 0.2},
                {item: "modern_industrialization:tin_tiny_dust", amount: 3, probability: 0.2}
            ],
            eu: 1,
            duration: 100,
            id:  `${id_prefix}/sifting`
        },
        { 
            item_inputs: [
                {item: "modern_industrialization:bronze_machine_casing", amount: 1, probability: 0},
                {item: "minecraft:sand", amount: 1}
            ],
            item_outputs: [
                {item: "modern_industrialization:iron_tiny_dust", amount: 4, probability: 0.25},
                {item: "modern_industrialization:copper_tiny_dust", amount: 4, probability: 0.25},
                {item: "modern_industrialization:tin_tiny_dust", amount: 4, probability: 0.25},
                {item: "modern_industrialization:gold_tiny_dust", amount: 4, probability: 0.25},
                {item: "modern_industrialization:redstone_tiny_dust", amount: 2, probability: 0.2},
                {item: "modern_industrialization:coal_tiny_dust", amount: 4, probability: 0.4}
            ],
            eu: 1,
            duration: 100,
            id:  `${id_prefix}/bronze_sifting`
        },
        { 
            item_inputs: [
                {item: "minecraft:dirt", amount: 1}
            ],
            item_outputs: [
                {item: "minecraft:spruce_sapling", amount: 1, probability: 0.25},
                {item: "minecraft:birch_sapling", amount: 1, probability: 0.25},
                {item: "minecraft:jungle_sapling", amount: 1, probability: 0.25},
                {item: "minecraft:acacia_sapling", amount: 1, probability: 0.25},
                {item: "minecraft:dark_oak_sapling", amount: 1, probability: 0.25},
                {item: "minecraft:cherry_sapling", amount: 1, probability: 0.25}
            ],
            eu: 1,
            duration: 100,
            id:  `${id_prefix}/dirt_sifting`
        }
    ];

    const mi = event.recipes.modern_industrialization

    recipes.forEach((r) => {
        let b = mi.sieve(r.eu, r.duration)
        r.item_inputs.forEach((i) => {
            if (i.probability === undefined) b.itemIn(`${i.amount}x ${i.item}`)
            else b.itemIn(`${i.amount}x ${i.item}`, i.probability) // 0 = mesh is not consumed
        })
        r.item_outputs.forEach((o) => {
            b.itemOut(`${o.amount}x ${o.item}`, o.probability === undefined ? 1 : o.probability)
        })
        b.id(r.id)
    })

    mi.hand_crusher(1, 100).itemIn("minecraft:cobblestone").itemOut("minecraft:gravel")
        .id("fakir:modern_industrialization/hand_crusher/cobble_to_gravel")
    mi.hand_crusher(1, 100).itemIn("minecraft:gravel").itemOut("minecraft:sand")
        .id("fakir:modern_industrialization/hand_crusher/gravel_to_sand")
    mi.hand_crusher(1, 100).itemIn("minecraft:sand").itemOut("minecraft:dirt")
        .id("fakir:modern_industrialization/hand_crusher/sand_to_dirt")

    mi.leaf_press(1, 100).itemIn("1x #minecraft:leaves")
        .fluidOut("minecraft:water", 250)
        .itemOut("minecraft:stick", 0.2)
        .id("fakir:modern_industrialization/leaf_press/leaves_to_water")

    mi.humidifier(1, 200).itemIn("minecraft:sand")
        .fluidIn("minecraft:water", 1000, 0)
        .itemOut("minecraft:clay")
        .id("fakir:modern_industrialization/humidifier/sand_to_clay")

    mi.humidifier(1, 100).itemIn("1x #minecraft:leaves")
        .fluidIn("minecraft:water", 125, 0)
        .itemOut("minecraft:moss_block")
        .id("fakir:modern_industrialization/humidifier/leaves_to_moss")

    mi.cobble_generator(1, 20)
        .fluidIn("minecraft:water", 1000, 0)
        .fluidIn("minecraft:lava", 1000, 0)
        .itemOut("minecraft:cobblestone")
        .id("fakir:modern_industrialization/cobble_generator/cobblestone")

    mi.crucible(1, 200).itemIn("4x minecraft:cobblestone")
        .fluidOut("minecraft:lava", 25)
        .id("fakir:modern_industrialization/crucible/cobble_to_lava")

    const BATCH = 8
    const FUELS = [
        { item: "1x #minecraft:coals", id: "coal" },              
        { item: "5x #minecraft:logs_that_burn", id: "log" },
        { item: "5x #minecraft:planks", id: "plank" }
    ]
    const ingredientId = (ing) => {
        if (ing.isJsonArray()) ing = ing.get(0)
        return ing.has("item") ? ing.get("item").getAsString() : "#" + ing.get("tag").getAsString()
    }
    event.forEachRecipe({ type: "minecraft:smelting" }, (r) => {
        const input = ingredientId(r.json.get("ingredient"))
        const res = r.json.get("result")
        const output = res.isJsonObject() ? res.get("id").getAsString() : res.getAsString()
        const count = (res.isJsonObject() && res.has("count")) ? res.get("count").getAsInt() : 1
        const base = r.getId().replace(":", "_").replace("/", "_")
        FUELS.forEach((f) => {
            mi.brick_furnace(1, 400)
                .itemIn(`${BATCH}x ${input}`)
                .itemIn(f.item)
                .itemOut(`${BATCH * count}x ${output}`)
                .id(`fakir:modern_industrialization/brick_furnace/${base}_${f.id}`)
        })
    })
})
