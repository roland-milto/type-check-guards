// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/hexadecimal.mjs")
	.forFunctions("areHexadecimals")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "hexadecimal[]"
	})
	.useTestArguments([
		[["0x1A"], "Single valid hex literal"],
		[["0x1A", "0X3f", "-0xB2"], "Multiple valid hex literals (case-insensitive, signed)"],
		[["0x0", "0xdeadBEEF", "+0x7f"], "Various valid hex forms"],

		[[], "Empty array (not filled)"],
		[["0x1A", "0x3G", "0xB2"], "Contains invalid hex digit"],
		[["0x1A", "1A2B"], "Contains missing-prefix value"],
		[["0x1A", " 0x3f"], "Contains leading whitespace (invalid)"],
		[["0x1A", "0x3f "], "Contains trailing whitespace (invalid)"],
		[["0x1A", 0x1a], "Contains number (non-string, invalid)"],
		[["0x1A", null], "Contains null"],
		[["0x1A", undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();