// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/float.mjs")
	.forFunctions("isFloat")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "float"
	})
	.useTestArguments([
		[3.14, "Positive float"],
		[-0.1, "Negative float"],
		[1e-7, "Scientific notation float"],
		[Number.EPSILON, "EPSILON (float)"],
		[0.5, "Half (float)"],

		[1, "Integer (not float)"],
		[0, "Zero integer (not float)"],
		[-0, "Negative zero integer (not float)"],
		[1.0, "1.0 is integer (not float)"],
		[2.000, "2.000 is integer (not float)"],

		[NaN, "NaN (not finite)"],
		[Infinity, "Infinity (not finite)"],
		[-Infinity, "Negative Infinity (not finite)"],

		["3.14", "Float as string (invalid)"],
		[new Number(3.14), "Boxed Number object (invalid)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();