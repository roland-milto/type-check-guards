// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/empty.mjs")
	.forFunctions("isEmpty")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "unknown"
	})
	.useTestArguments([
		[null, "Null is empty"],
		[undefined, "Undefined is empty"],

		["", "Empty string is empty"],
		["   ", "Whitespace-only string is empty (trim)"],
		["\n\t", "Whitespace/control string is empty (trim)"],

		[[], "Empty array is empty"],
		[[1], "Non-empty array is not empty"],

		[new Map(), "Empty Map is empty"],
		[new Map([["k", "v"]]), "Non-empty Map is not empty"],

		[new Set(), "Empty Set is empty"],
		[new Set([1]), "Non-empty Set is not empty"],

		[{}, "Empty object is empty (no own enumerable props)"],
		[{a: 1}, "Object with prop is not empty"],
		[{a: undefined}, "Object with prop (even undefined) is not empty"],

		[Object.create(null), "Object.create(null) with no props is empty"],
		[Object.assign(Object.create(null), {a: 1}), "Object.create(null) with prop is not empty"],

		[0, "Number is not empty"],
		[false, "Boolean is not empty"],
		[() => {
		}, "Function is not empty"],
		[new Date(), "Date object is not empty (has no own enumerable props, but treated as object => empty)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();