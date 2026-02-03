// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/filledArray.mjs")
	.forFunctions("areFilledArrays")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "array[][]"
	})
	.useTestArguments([
		[[[1]], "2D array with one filled subarray"],
		[[["a", "b"], [1, 2, 3]], "2D array with multiple filled subarrays"],
		[[[{}, []], ["string"]], "2D array with mixed values, filled subarrays"],

		[[], "Empty outer array (not filled)"],
		[[[]], "Contains empty subarray"],
		[[[], [1, 2, 3]], "First subarray empty"],
		[[[1, 2, 3], []], "Last subarray empty"],
		[[[1], "not an array"], "Contains non-array item"],
		[[[1], null], "Contains null item"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();