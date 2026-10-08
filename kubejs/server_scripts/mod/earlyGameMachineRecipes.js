ServerEvents.recipes(event => {
    event.shaped('mi_tweaks:leaf_press', [
        'PPP',
        'BGB',
        'PPP'
    ], {
        P: 'modern_industrialization:wood_plate',
        B: 'woodenbucket:wooden_bucket',
        G: 'modern_industrialization:wood_gear'
    });
});

ServerEvents.recipes(event => {
    event.shaped('mi_tweaks:cobble_generator', [
        'PPP',
        'HGH',
        'PPP'
    ], {
        P: 'modern_industrialization:wood_plate',
        G: 'modern_industrialization:wood_gear',
        H: 'woodenhopper:wooden_hopper'
    });
});

ServerEvents.recipes(event => {
    event.shaped('mi_tweaks:crucible', [
        'PPP',
        'HGH',
        'PPP'
    ], {
        P: 'modern_industrialization:stone_plate',
        G: 'modern_industrialization:stone_gear',
        H: 'woodenbucket:wooden_bucket'
    });
});

ServerEvents.recipes(event => {
    event.shaped('mi_tweaks:sieve', [
        'PPP',
        'HGH',
        'PPP'
    ], {
        P: 'modern_industrialization:stone_plate',
        G: 'modern_industrialization:stone_gear',
        H: 'minecraft:glass'
    });
});

ServerEvents.recipes(event => {
    event.shaped('mi_tweaks:hand_crusher', [
        'PPP',
        'HGH',
        'PPP'
    ], {
        P: 'modern_industrialization:stone_plate',
        G: 'modern_industrialization:stone_gear',
        H: 'woodenhopper:wooden_hopper'
    });
});

ServerEvents.recipes(event => {
    event.shaped('mi_tweaks:brick_furnace', [
        'BBB',
        'CFC',
        'BBB'
    ], {
        B: 'minecraft:stone_bricks',
        C: 'modern_industrialization:bronze_machine_casing',
        F: 'minecraft:furnace'
    });
});

ServerEvents.recipes(event => {
    event.shaped('mi_tweaks:humidifier', [
        'BBB',
        'CGC',
        'BBB'
    ], {
        B: 'minecraft:stone_bricks',
        C: 'modern_industrialization:copper_rotor',
        G: 'minecraft:glass'
    });
});

