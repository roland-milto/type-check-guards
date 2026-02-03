// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/integer.mjs")
	.forFunctions("isInteger")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "integer"
	})
	.useTestArguments([
		[0, "Zero (safe integer)"],
		[-0, "Negative zero (safe integer)"],
		[1, "Positive integer"],
		[-1, "Negative integer"],
		[42, "Integer"],
		[Number.MAX_SAFE_INTEGER, "MAX_SAFE_INTEGER"],
		[Number.MIN_SAFE_INTEGER, "MIN_SAFE_INTEGER"],

		[3.14, "Float (not integer)"],
		[Number.EPSILON, "EPSILON (not integer)"],
		[Infinity, "Infinity (not safe integer)"],
		[NaN, "NaN (not safe integer)"],
		["5", "Integer as string (invalid)"],
		[Number(5), "Boxed Number object (invalid)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();