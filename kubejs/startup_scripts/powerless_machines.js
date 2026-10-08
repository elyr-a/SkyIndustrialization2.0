MIMachineEvents.registerCasings((event) =>
{
	event.registerNamed("oak_log_casing", "Oak Log");
	event.registerNamed("stone_brick_casing", "Stone Brick");
	event.registerNamed("cobblestone_casing", "Cobblestone");
	event.registerNamed("brick_casing", "Brick");
});

let SIEVE;
let CRUSHER;
let LEAF_PRESS;
let COBBLE_GEN;
let CRUCIBLE;
let BRICK_FURNACE;
let HUMIDIFIER;

MIMachineEvents.registerRecipeTypes((event) =>
{
	BRICK_FURNACE = event.register("brick_furnace")
		.withItemInputs()
		.withItemOutputs();

	CRUCIBLE = event.register("crucible")
		.withItemInputs()
		.withFluidOutputs();

	COBBLE_GEN = event.register("cobble_generator")
		.withItemOutputs()
		.withFluidInputs();

	SIEVE = event.register("sieve")
		.withItemInputs()
		.withItemOutputs();

	CRUSHER = event.register("hand_crusher")
		.withItemInputs()
		.withItemOutputs();

	LEAF_PRESS = event.register("leaf_press")
		.withItemInputs()
		.withItemOutputs()
		.withFluidOutputs();
	
	HUMIDIFIER = event.register("humidifier")
		.withItemInputs()
		.withItemOutputs()
		.withFluidInputs()
		.withFluidOutputs();
});

MITweaksMachineEvents.registerPowerlessMachines((event) =>
{
	event.singleblock(
		"Sieve", "sieve",
		SIEVE,
		-1, event.progressBar(77, 33, "arrow"),
		2, 6, 0, 0,
		16,
		(items) => items.addSlots(36, 35, 2, 1).addSlots(102, 26, 3, 2),
		(fluids) => {},
		"stone_brick_casing", "sieve", true, true, false,
		1, false
	);

	event.singleblock(
		"Hand Crusher", "hand_crusher",
		CRUSHER,
		-1, event.progressBar(77, 33, "arrow"),
		1, 1, 0, 0,
		16,
		(items) => items.addSlot(56, 35).addSlot(102, 35),
		(fluids) => {},
		"stone_brick_casing", "hand_crusher", false, true, false,
		1, false
	);

	event.singleblock(
		"Leaf Press", "leaf_press",
		LEAF_PRESS,
		-1, event.progressBar(77, 33, "arrow"),
		1, 1, 0, 1,
		16,
		(items) => items.addSlot(46, 35).addSlot(102, 35),
		(fluids) => fluids.addSlot(122, 35),
		"oak_log_casing", "leaf_press", true, false, true,
		1, false
	);

	event.singleblock(
    "Humidifier", "humidifier",
    HUMIDIFIER,
    -1, event.progressBar(78, 42, "arrow"),
    1, 1, 1, 1,
    16,
    (items) => items.addSlot(52, 32).addSlot(106, 32),
    (fluids) => fluids.addSlot(52, 54).addSlot(106, 54),
    "stone_brick_casing", "humidifier", true, false, true,
    1, false
	);

	event.singleblock(
		"Cobblestone Generator", "cobble_generator",
		COBBLE_GEN,
		-1, event.progressBar(77, 33, "arrow"),
		0, 1, 2, 0,
		16,
		(items) => items.addSlot(102, 35),
		(fluids) => { fluids.addSlot(36, 35); fluids.addSlot(56, 35); },
		"oak_log_casing", "cobble_generator", false, true, false,
		1, false
	);

	event.singleblock(
		"Crucible", "crucible",
		CRUCIBLE,
		-1, event.progressBar(77, 33, "arrow"),
		1, 0, 0, 1,
		16,
		(items) => items.addSlot(56, 35),
		(fluids) => fluids.addSlot(102, 35),
		"stone_brick_casing", "crucible", false, true, false,
		1, false
	);

	const furnaceHatch = event.hatchOf("item_input", "item_output");
	const brickMember = event.memberOfBlock("minecraft:stone_bricks");
	const campfireMember = event.memberOfBlock("minecraft:campfire");
	const furnaceShape = event.layeredShape("stone_brick_casing",
		[
			["BBB", "BBB", "BBB", "BBB"],
			["BBB", "BFB", "B B", "B B"],
			["BBB", "B#B", "BBB", "BBB"],
		])
		.key("B", brickMember, furnaceHatch)
		.key("F", campfireMember, event.noHatch())
		.build();

	event.multiblock(
		"Stone Brick Furnace", "brick_furnace",
		BRICK_FURNACE, furnaceShape,
		event.progressBar(77, 33, "arrow"),
		(itemInputs) => itemInputs.addSlot(56, 35),
		(itemOutputs) => itemOutputs.addSlot(102, 35),
		(fluidInputs) => {},
		(fluidOutputs) => {},
		"stone_brick_casing", "brick_furnace", true, false, false,
		1, false
	);
});
