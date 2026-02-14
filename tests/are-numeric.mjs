// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/numeric.mjs")
	.forFunctions("areNumerics")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "unknown"
	})
	.useTestArguments([
		[[1, 2, 3], "All numbers (numeric)"],
		[[-3.14, 0, 42], "Mixed finite numbers (numeric)"],
		[[0n, 1n, 2n], "All BigInts (numeric)"],
		[["123", "0xFF", "0o10", "0b11"], "All numeric strings (decimal/hex/octal/binary)"],

		[[], "Empty array (not filled)"],
		["string", "Not an array (invalid)"],
		[[1, "two", 3], "Contains non-numeric string"],
		[[1, {}, 3], "Contains object"],
		[[1, null, 3], "Contains null"],
		[[1, undefined, 3], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();