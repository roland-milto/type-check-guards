// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/plainObject.mjs")
	.forFunctions("isPlainObject")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "plainObject"
	})
	.useTestArguments([
		[{}, "Object literal (plain)"],
		[{a: 1}, "Object literal with property (plain)"],
		[Object(), "Object constructor (plain)"],
		[Object.create(null), "Object.create(null) (not [object Object])"],

		[[], "Array (not plain object)"],
		[new Date(), "Date (not plain object)"],
		[/./, "RegExp (not plain object)"],
		[new Map(), "Map (not plain object)"],
		[new Set(), "Set (not plain object)"],
		[() => ({}), "Function (not plain object)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();