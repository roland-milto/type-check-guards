// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/number.mjs")
	.forFunctions("areNumbers")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "number[]"
	})
	.useTestArguments([
		[[0], "Single number: zero"],
		[[1, 2, 3], "Integers"],
		[[10.5, -3, 0], "Mixed: float, negative, zero"],
		[[-0, 0], "Negative zero and zero"],
		[[Number.EPSILON, 1], "EPSILON and 1"],
		[[Number.MIN_VALUE, 1], "MIN_VALUE and 1"],
		[[Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER], "Safe integer boundaries"],
		[[Number.MAX_VALUE, 1], "MAX_VALUE and 1"],

		[[], "Empty array (not filled)"],
		[[NaN], "Contains NaN"],
		[[Infinity], "Contains Infinity"],
		[[-Infinity], "Contains -Infinity"],

		[[1, "2", 3], "Contains number as string"],
		[[1, " 2 ", 3], "Contains trimmed number string"],
		[[1, Number(2), 3], "Contains boxed Number object `Number(2)`"],
		[[1, {}, 3], "Contains object"],
		[[1, null, 3], "Contains null"],
		[[1, undefined, 3], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();