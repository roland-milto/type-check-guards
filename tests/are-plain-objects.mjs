// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/plainObject.mjs")
	.forFunctions("arePlainObjects")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "plainObject[]"
	})
	.useTestArguments([
		[[{}], "Single plain object"],
		[[{a: 1}, {b: 2}], "Multiple plain objects with properties"],
		[[{}, Object()], "Object literal and Object constructor"],

		[[], "Empty array (not filled)"],
		[[{}, []], "Contains array"],
		[[{}, new Date()], "Contains Date"],
		[[{}, /./], "Contains RegExp"],
		[[{}, new Map()], "Contains Map"],
		[[{}, null], "Contains null"],
		[[{}, undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();