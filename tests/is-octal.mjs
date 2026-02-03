// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/octal.mjs")
	.forFunctions("isOctal")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "octal"
	})
	.useTestArguments([
		["0o0", "Octal literal: zero"],
		["0o7", "Octal literal: single digit"],
		["0o10", "Octal literal: two digits"],
		["0o123", "Octal literal: typical"],
		["0O755", "Octal literal: uppercase O"],
		["+0o755", "Signed octal literal: plus"],
		["-0O755", "Signed octal literal: minus"],

		["0o", "Missing digits"],
		["0o8", "Invalid digit 8"],
		["0o9", "Invalid digit 9"],
		["0o128", "Contains invalid digit 8"],
		["0o007", "Leading zeros after prefix (valid)"],
		["00o123", "Wrong prefix position"],
		["0x10", "Hex prefix (not octal)"],
		["0755", "Legacy octal-like without 0o prefix (invalid)"],
		["0o12_", "Invalid underscore separator"],
		["0o12.3", "Decimal point (invalid)"],
		["0o-123", "Sign in wrong position (invalid)"],

		[" 0o123", "Leading whitespace (invalid)"],
		["0o123 ", "Trailing whitespace (invalid)"],
		["\t0o123", "Leading tab (invalid)"],
		["0o123\n", "Trailing newline (invalid)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();