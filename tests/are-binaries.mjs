// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/binary.mjs")
	.forFunctions("areBinaries")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "binary[]"
	})
	.useTestArguments([
		[["0"], "Single valid binary (no prefix)"],
		[["0b1010", "1101"], "Valid binaries (mixed prefix/no prefix)"],
		[["0B1", "000", "101010"], "Valid binaries with 0B and leading zeros"],

		[[], "Empty array (not filled)"],
		[["1010", "1020"], "Contains invalid digit"],
		[["0b1010", "0b"], "Contains prefix without digits"],
		[["1010", " 1101"], "Contains leading whitespace (invalid)"],
		[["1010", "1101 "], "Contains trailing whitespace (invalid)"],
		[["1010", 0b1010], "Contains number (non-string, invalid)"],
		[["1010", null], "Contains null"],
		[["1010", undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();