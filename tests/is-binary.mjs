// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/binary.mjs")
	.forFunctions("isBinary")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "binary"
	})
	.useTestArguments([
		["0", "Single digit 0 (no prefix)"],
		["1", "Single digit 1 (no prefix)"],
		["1010", "Binary digits (no prefix)"],
		["0b1010", "Binary with 0b prefix"],
		["0B1010", "Binary with 0B prefix"],
		["000101", "Leading zeros (valid)"],

		["", "Empty string (invalid)"],
		["0b", "Prefix without digits (invalid)"],
		["0B", "Prefix without digits (invalid)"],
		["0b1020", "Contains invalid digit 2"],
		["1020", "Contains invalid digit 2 (no prefix)"],
		["0b10_10", "Underscore separators (invalid)"],
		["0b10.10", "Dot not allowed (invalid)"],
		["-1010", "Sign not supported (invalid)"],
		["+0b1", "Sign not supported (invalid)"],

		[" 1010", "Leading whitespace (invalid)"],
		["1010 ", "Trailing whitespace (invalid)"],
		["\t0b1010", "Leading tab (invalid)"],
		["0b1010\n", "Trailing newline (invalid)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();