ServerEvents.recipes(event => {
  event.remove({ id: 'modern_industrialization:quarry/steel' })

  event.custom({
    "type": "modern_industrialization:quarry",
    "eu": 4, 
    "duration": 1200,
    "item_inputs": {
      "item": "modern_industrialization:steel_drill",
      "amount": 1,
      "probability": 0.04
    },
    "item_outputs": [
      {
        "item": "modern_industrialization:antimony_ore",
        "amount": 1,
        "probability": 0.2
      },
      {
        "item": "minecraft:diamond_ore",
        "amount": 1,
        "probability": 0.12
      },
      {
        "item": "minecraft:lapis_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "modern_industrialization:lead_ore",
        "amount": 1,
        "probability": 0.25
      },
      {
        "item": "modern_industrialization:nickel_ore",
        "amount": 1,
        "probability": 0.18
      },
      {
        "item": "modern_industrialization:bauxite_ore",
        "amount": 1,
        "probability": 0.4
      },
      {
        "item": "modern_industrialization:salt_ore",
        "amount": 1,
        "probability": 0.12
      },
      {
        "item": "minecraft:emerald_ore",
        "amount": 1,
        "probability": 0.1
      },
      {
        "item": "modern_industrialization:quartz_ore",
        "amount": 1,
        "probability": 0.2
      },
      {
        "neoforge:conditions": [
          { "type": "neoforge:mod_loaded", "modid": "powah" }
        ],
        "item": "powah:uraninite_ore",
        "amount": 1,
        "probability": 0.08
      }
    ]
  }).id('kubejs:quarry/steel_custom') 
})