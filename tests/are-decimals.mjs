// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/decimal.mjs")
	.forFunctions("areDecimals")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "decimal[]"
	})
	.useTestArguments([
		[["1.0"], "Single decimal string"],
		[["1.0", "2.5", "3.14"], "Multiple decimal strings"],
		[["0", "-42", "+42", ".5", "42."], "Various valid decimal forms"],

		[[], "Empty array (not filled)"],
		[["1.0", "abc", "3.14"], "Contains non-decimal string"],
		[["1.0", " 2.5", "3.14"], "Contains leading whitespace (invalid)"],
		[["1.0", "2.5 ", "3.14"], "Contains trailing whitespace (invalid)"],
		[["1.0", 2.5, "3.14"], "Contains number (non-string, invalid)"],
		[["1.0", null, "3.14"], "Contains null"],
		[["1.0", undefined, "3.14"], "Contains undefined"],
		[["1.0", "1e3", "3.14"], "Contains scientific notation (invalid)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();