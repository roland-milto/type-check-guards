// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/number.mjs")
	.forFunctions("isNumber")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "number"
	})
	.useTestArguments([
		[0, "Zero"],
		[-0, "Negative zero"],
		[1, "Positive integer"],
		[-1, "Negative integer"],
		[42, "Integer"],
		[3.14159, "Float"],

		[Number.EPSILON, "EPSILON (smallest difference)"],
		[Number.MIN_VALUE, "MIN_VALUE (smallest positive number)"],
		[Number.MAX_VALUE, "MAX_VALUE (largest finite number)"],
		[Number.MAX_SAFE_INTEGER, "MAX_SAFE_INTEGER"],
		[Number.MIN_SAFE_INTEGER, "MIN_SAFE_INTEGER"],

		[NaN, "NaN (invalid number)"],
		[Infinity, "Infinity (invalid number)"],
		[-Infinity, "Negative Infinity (invalid number)"],

		["42", "Number as string (invalid)"],
		["3.14", "Float as string (invalid)"],
		[" 42 ", "Trimmed number string (invalid)"],
		[Number(42), "Boxed Number object `Number(42)`"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();