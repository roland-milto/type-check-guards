// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/object.mjs")
	.forFunctions("isObject")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "object"
	})
	.useTestArguments([
		[{}, "Plain object"],
		[{a: 1}, "Plain object with property"],
		[[], "Array (typeof === 'object')"],
		[new Date(), "Date object"],
		[/./, "RegExp object"],
		[new Map(), "Map object"],
		[new Set(), "Set object"],
		[Object.create(null), "Object without prototype"],

		[null, "Null (special case, not object)"],
		[42, "Number (not object)"],
		["Hello", "String (not object)"],
		[true, "Boolean (not object)"],
		[() => {
		}, "Function (typeof === 'function', not object)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();