let ORE_WASHER;
let PYROLYSE_OVEN;

MIMachineEvents.registerRecipeTypes(event => {
    PYROLYSE_OVEN = event.register("pyrolyse_oven")
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
    
    ORE_WASHER = event.register("ore_washer")
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines(event => { 
    event.craftingSingleBlock(  
        "Ore Washer", 
        "ore_washer", 
        ORE_WASHER, 
        ["electric"],

        186, 
        event.progressBar(83, 45, "centrifuge"), 
        event.efficiencyBar(10, 86), 
        event.energyBar(14, 44), 

        2,
        4, 
        2,
        2, 
        16, 

        items => items.addSlots(37, 35, 2, 1).addSlots(117, 35, 2, 2),
        fluids => fluids.addSlots(37, 55, 2, 1).addSlots(117, 75, 2, 1), 
        
        true, 
        false, 
        true  
    );

    const pyrolyseHatch = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output", "energy_input");
    const heatproofMember = event.memberOfBlock("modern_industrialization:heatproof_machine_casing");
    const cupronickelCoilMember = event.memberOfBlock("modern_industrialization:cupronickel_coil");
    
    const pyrolyseShape = event.layeredShape("heatproof_machine_casing", [
        [ "HHH", "HHH", "HHH" ],
        [ "CCC", "C C", "CCC" ],
        [ "CCC", "C C", "CCC" ],
        [ "HHH", "H#H", "HHH" ],
    ])
        .key("H", heatproofMember, pyrolyseHatch)
        .key("C", cupronickelCoilMember, event.noHatch())
        .build();

    event.simpleElectricCraftingMultiBlock(
        "Pyrolyse Oven", 
        "pyrolyse_oven",
        PYROLYSE_OVEN, 
        pyrolyseShape,

        event.progressBar(77, 33, "arrow"),

        itemInputs => itemInputs.addSlots(56, 35, 1, 2), 
        itemOutputs => itemOutputs.addSlot(102, 35),
        fluidInputs => fluidInputs.addSlot(36, 35), 
        fluidOutputs => fluidOutputs.addSlot(122, 35),

        "heatproof_machine_casing", 
        "pyrolyse_oven", 
        true, 
        false, 
        false
    );
});