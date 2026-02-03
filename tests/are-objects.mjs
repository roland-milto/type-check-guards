// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/object.mjs")
	.forFunctions("areObjects")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "object[]"
	})
	.useTestArguments([
		[[{}], "Single object"],
		[[{}, {a: 1}, new Date()], "Mixed objects (plain + date)"],
		[[[], {}, /./], "Array, plain object, RegExp (all objects)"],
		[[new Map(), new Set()], "Map and Set (objects)"],

		[[], "Empty array (not filled)"],
		[[{}, 42, {a: 1}], "Contains number"],
		[[{}, "x", {}], "Contains string"],
		[[{}, null, {}], "Contains null"],
		[[{}, () => {
		}, {}], "Contains function (not object)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();