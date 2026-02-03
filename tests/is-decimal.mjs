// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/decimal.mjs")
	.forFunctions("isDecimal")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "decimal"
	})
	.useTestArguments([
		["0", "Integer string (valid decimal)"],
		["123", "Positive integer string (valid decimal)"],
		["-42", "Negative integer string (valid decimal)"],
		["+42", "Signed positive integer string (valid decimal)"],
		["0.99", "Decimal with leading zero"],
		["123.45", "Decimal with fraction"],
		["-42.0", "Decimal with trailing .0"],
		["42.", "Trailing dot allowed by regex (digits + '.' + optional digits)"],
		[".5", "Leading dot allowed (.digits)"],
		["-.5", "Signed leading dot decimal"],
		["+.5", "Signed leading dot decimal"],

		["", "Empty string (invalid)"],
		[" ", "Whitespace only (invalid)"],
		[" 123.45", "Leading whitespace (invalid)"],
		["123.45 ", "Trailing whitespace (invalid)"],
		["1.2.3", "Multiple dots (invalid)"],
		["--1", "Double sign (invalid)"],
		["+-1", "Mixed signs (invalid)"],
		[".", "Dot only (invalid)"],
		["+. ", "Sign with whitespace/dot (invalid)"],
		["1e3", "Scientific notation (invalid)"],
		["NaN", "NaN string (invalid)"],
		["Infinity", "Infinity string (invalid)"],
		["0x10", "Hex string (invalid)"],
		["1_000", "Numeric separator underscore (invalid)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();