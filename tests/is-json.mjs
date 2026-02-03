// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/json.mjs")
	.forFunctions("isJson")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "string"
	})
	.useTestArguments([
		['{"a":1}', "JSON object"],
		["[1,2,3]", "JSON array"],
		['"text"', "JSON string literal"],
		["true", "JSON boolean literal"],
		["false", "JSON boolean literal"],
		["null", "JSON null literal"],
		["0", "JSON number literal"],
		["-12.5", "JSON negative float literal"],
		["1e3", "JSON scientific notation literal"],
		["{}", "Empty JSON object"],
		["[]", "Empty JSON array"],
		['{"nested":{"b":[1,2,3]}}', "Nested JSON"],

		["", "Empty string (invalid JSON)"],
		[" ", "Whitespace only (invalid JSON)"],
		["Hello, World!", "Plain text (invalid JSON)"],
		["{a:1}", "Invalid JSON (unquoted key)"],
		['{"a":}', "Invalid JSON (missing value)"],
		["[1, 2, 3, invalid]", "Invalid JSON (bare identifier)"],
		["undefined", "Invalid JSON literal 'undefined'"],
		['{"a":1,}', "Invalid JSON (trailing comma)"],
		["00", "Invalid JSON number (leading zero)"],
		["NaN", "Invalid JSON literal 'NaN'"],
		["Infinity", "Invalid JSON literal 'Infinity'"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();