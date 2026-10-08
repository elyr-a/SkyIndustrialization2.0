ServerEvents.recipes(event => {
    event.shaped('modern_industrialization:wood_plate', [
        'P',
        'P'
    ], {
        P: '#minecraft:planks'
    });

    event.shaped('modern_industrialization:wood_gear', [
        ' P ',
        'PSP',
        ' P '
    ], {
        P: 'modern_industrialization:wood_plate',
        S: 'minecraft:stick'
    });

    event.shaped('modern_industrialization:stone_plate', [
        'S',
        'S'
    ], {
        S: 'minecraft:stone'
    });

    event.shaped('modern_industrialization:stone_gear', [
        ' P ',
        'PGP',
        ' P '
    ], {
        P: 'modern_industrialization:stone_plate',
        G: 'modern_industrialization:wood_gear'
    });
});
