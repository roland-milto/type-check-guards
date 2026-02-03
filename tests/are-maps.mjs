// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/map.mjs")
	.forFunctions("areMaps")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "map[]"
	})
	.useTestArguments([
		[[new Map()], "Single Map"],
		[[new Map(), new Map()], "Multiple Maps"],
		[[new Map([["a", 1]]), new Map([[{}, "x"]])], "Maps with entries"],

		[[], "Empty array (not filled)"],
		[[new Map(), {}], "Contains object"],
		[[new Map(), new WeakMap()], "Contains WeakMap"],
		[[new Map(), new Set()], "Contains Set"],
		[[new Map(), []], "Contains array"],
		[[new Map(), null], "Contains null"],
		[[new Map(), undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();