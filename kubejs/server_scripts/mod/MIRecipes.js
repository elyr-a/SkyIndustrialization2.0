ServerEvents.recipes(event => { 
    event.shaped("modern_industrialization:ore_washer", 
        [
            "PRP",
            "ABA",
            "MRM"
        ],
        {
            A: "modern_industrialization:analog_circuit",
            M: "modern_industrialization:motor",
            B: "modern_industrialization:basic_machine_hull",
            P: "modern_industrialization:pump",
            R: "modern_industrialization:tin_rotor"
        }
    )
})