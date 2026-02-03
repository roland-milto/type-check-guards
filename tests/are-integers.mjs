// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/integer.mjs")
	.forFunctions("areIntegers")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "integer[]"
	})
	.useTestArguments([
		[[1], "Single integer"],
		[[1, 2, 3], "Multiple integers"],
		[[0, -10, 42], "Integers including zero and negative"],
		[[Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER], "Safe integer boundaries"],

		[[], "Empty array (not filled)"],
		[[1, 2, "3"], "Contains integer as string"],
		[[1, 2, 3.14], "Contains float"],
		[[1, Infinity], "Contains Infinity"],
		[[1, NaN], "Contains NaN"],
		[[1, Number(2)], "Contains boxed Number object"],
		[[1, null], "Contains null"],
		[[1, undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();