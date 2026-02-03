// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/indexFound.mjs")
	.forFunctions("isIndexFound")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "integer"
	})
	.useTestArguments([
		[0, "Zero index (found)"],
		[1, "Positive index (found)"],
		[3, "Index 3 (found)"],
		[Number.MAX_SAFE_INTEGER, "MAX_SAFE_INTEGER (still a non-negative safe integer)"],

		[-1, "Negative integer (not found)"],
		[-0.1, "Negative float (not index)"],
		[0.1, "Positive float (not integer)"],
		[NaN, "NaN (not integer)"],
		[Infinity, "Infinity (not integer)"],

		["5", "String (not integer)"],
		[new Number(5), "Boxed Number object (not integer primitive)"],
		[null, "Null (not integer)"],
		[undefined, "Undefined (not integer)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();