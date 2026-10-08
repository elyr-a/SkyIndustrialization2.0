ServerEvents.recipes(event => {
    event.remove({ output:  "modern_industrialization:invar_rotary_blade"})

    event.shaped('modern_industrialization:invar_rotary_blade', [
        ' D ',
        'DGD',
        ' D '
    ], {
        D: 'modern_industrialization:diamond_dust',
        G: 'modern_industrialization:iron_gear'
    });
})

