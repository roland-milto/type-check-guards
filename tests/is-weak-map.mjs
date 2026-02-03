// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/weakMap.mjs")
	.forFunctions("isWeakMap")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "weakMap"
	})
	.useTestArguments([
		[new WeakMap(), "Empty WeakMap"],
		[new WeakMap([[{}, 1]]), "WeakMap with one entry"],
		[new Map(), "Map (not WeakMap)"],
		[{}, "Object (not WeakMap)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();