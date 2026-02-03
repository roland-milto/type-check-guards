// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/nan.mjs")
	.forFunctions("areNaNs")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "nan[]"
	})
	.useTestArguments([
		[[NaN], "Single NaN"],
		[[NaN, NaN, NaN], "All NaN values"],
		[[0 / 0, Number.NaN], "Computed NaN and Number.NaN"],

		[[], "Empty array (not filled)"],
		[[NaN, 1, NaN], "Contains a number"],
		[[NaN, Infinity, NaN], "Contains Infinity"],
		[[NaN, "NaN", NaN], "Contains string 'NaN' (no coercion)"],
		[[NaN, null, NaN], "Contains null"],
		[[NaN, undefined, NaN], "Contains undefined"],
		[[NaN, Number(NaN), NaN], "Contains boxed Number object"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();