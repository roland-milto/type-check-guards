// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/filledArray.mjs")
	.forFunctions("isFilledArray")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "array[]"
	})
	.useTestArguments([
		[[1], "Single element array (filled)"],
		[["a", "b"], "String array (filled)"],
		[[undefined], "Array with undefined element (still filled)"],
		[new Array(1), "Sparse array length 1 (still filled)"],

		[[], "Empty array (not filled)"],
		["not an array", "String (not an array)"],
		[{}, "Object (not an array)"],
		[null, "Null (not an array)"],
		[undefined, "Undefined (not an array)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();