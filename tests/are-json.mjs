// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/json.mjs")
	.forFunctions("areJson")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "string[]"
	})
	.useTestArguments([
		[['{"a":1}'], "Single JSON string"],
		[['{"a":1}', '{"b":2}'], "Multiple JSON objects"],
		[["true", "null", "0", '"x"', "[]", "{}"], "Mixed JSON literals"],

		[[], "Empty array (not filled)"],
		[['{"a":1}', 123], "Contains non-string"],
		[['{"a":1}', ""], "Contains invalid JSON string"],
		[['{"a":1}', " "], "Contains whitespace-only string (invalid JSON)"],
		[['{"a":1}', "{a:1}"], "Contains invalid JSON (unquoted key)"],
		[['{"a":1}', "undefined"], "Contains invalid JSON literal"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();