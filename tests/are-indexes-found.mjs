// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/indexFound.mjs")
	.forFunctions("areIndexesFound")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "integer[]"
	})
	.useTestArguments([
		[[0], "Single index (found)"],
		[[0, 1, 2], "Multiple indexes (found)"],
		[[5, 6, 10], "Indexes (found)"],
		[[100], "Single large-ish index (found)"],
		[[0, Number.MAX_SAFE_INTEGER], "Includes MAX_SAFE_INTEGER (found)"],

		[[], "Empty array (not filled)"],
		[[0, -1, 2], "Contains -1 (not found)"],
		[[0, 0.5, 2], "Contains float (not integer)"],
		[[0, NaN, 2], "Contains NaN (not integer)"],
		[[0, Infinity, 2], "Contains Infinity (not integer)"],
		[[0, "a", 2], "Contains string"],
		[[null, 1], "Contains null"],
		[[undefined, 1], "Contains undefined"],
		[[0, new Number(2)], "Contains boxed Number object"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();