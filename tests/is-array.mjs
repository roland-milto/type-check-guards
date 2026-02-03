// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/array.mjs")
	.forFunctions("isArray")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "array"
	})
	.useTestArguments([
		[[], "Empty array"],
		[[1, 2, 3], "Array with numbers"],
		[["a"], "Array with one string"],
		[new Array(3), "Sparse array (length 3)"],

		[{}, "Object (not array)"],
		["string", "String (not array)"],
		[123, "Number (not array)"],
		[null, "Null (not array)"],
		[undefined, "Undefined (not array)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();