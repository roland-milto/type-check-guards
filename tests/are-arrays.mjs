// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/array.mjs")
	.forFunctions("areArrays")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "array[]"
	})
	.useTestArguments([
		[[[1, 2], [3, 4]], "2D number arrays"],
		[[["a"], ["b", "c"]], "2D string arrays"],
		[[[1], [], ["x"]], "2D arrays including empty subarray (still arrays)"],

		[[], "Empty outer array (not filled)"],
		[[1, [2, 3]], "Contains non-array item (number)"],
		[[[1, 2], "not an array"], "Contains non-array item (string)"],
		[[[1, 2], {}], "Contains non-array item (object)"],
		[["not an array"], "Outer array contains string (not 2D array)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();