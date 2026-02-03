// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/octal.mjs")
	.forFunctions("areOctals")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "octal[]"
	})
	.useTestArguments([
		[["0o0"], "Single valid octal"],
		[["0o123", "+0O755"], "Multiple valid octals (signed + case-insensitive)"],
		[["0o7", "0o10", "0o777"], "Multiple valid octals"],

		[[], "Empty array (not filled)"],
		[["0o123", "0o128"], "Contains invalid digit"],
		[["0o123", " 0o7"], "Contains leading whitespace (invalid)"],
		[["0o123", "0o7 "], "Contains trailing whitespace (invalid)"],
		[["0o123", 0o123], "Contains number (non-string, invalid)"],
		[["0o123", null], "Contains null"],
		[["0o123", undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();