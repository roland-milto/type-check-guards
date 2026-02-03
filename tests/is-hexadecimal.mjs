// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/hexadecimal.mjs")
	.forFunctions("isHexadecimal")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "hexadecimal"
	})
	.useTestArguments([
		["0x0", "Hex literal: zero"],
		["0x1A2B", "Hex literal: uppercase digits"],
		["0xdeadBEEF", "Hex literal: mixed case digits"],
		["0Xff", "Hex literal: uppercase X prefix"],
		["+0x7f", "Signed hex literal: plus"],
		["-0Xff", "Signed hex literal: minus"],

		["0x", "Missing digits"],
		["0xG", "Invalid hex digit 'G'"],
		["0x1.2", "Dot not allowed"],
		["0x-ff", "Sign in wrong position"],
		["1A2B", "Missing 0x prefix (invalid)"],
		["-1A2B", "Missing 0x prefix even if signed (invalid)"],
		["0o77", "Octal prefix (invalid)"],
		["0b1010", "Binary prefix (invalid)"],
		["0xFF_FF", "Underscore separators (invalid)"],

		[" 0x1A", "Leading whitespace (invalid)"],
		["0x1A ", "Trailing whitespace (invalid)"],
		["\t0x1A", "Leading tab (invalid)"],
		["0x1A\n", "Trailing newline (invalid)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();