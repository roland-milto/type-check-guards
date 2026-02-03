// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/float.mjs")
	.forFunctions("areFloats")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "float[]"
	})
	.useTestArguments([
		[[3.14], "Single float"],
		[[3.14, 2.71, 0.5], "Multiple floats"],
		[[1e-7, -0.1, Number.EPSILON], "Floats with scientific notation and EPSILON"],

		[[], "Empty array (not filled)"],
		[[3.14, 2], "Contains integer"],
		[[3.14, 1.0], "Contains 1.0 (integer, not float)"],
		[[3.14, NaN], "Contains NaN"],
		[[3.14, Infinity], "Contains Infinity"],
		[[3.14, "2.71"], "Contains float as string"],
		[[3.14, Number(2.71)], "Contains boxed Number object"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();