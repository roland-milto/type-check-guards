// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/equal.mjs")
	.forFunctions("isEqual")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "unknown",
		expected: "unknown"
	})
	.useTestArguments([
		[5, 5, "Same number (strict equal)"],
		["text", "text", "Same string (strict equal)"],
		[true, true, "Same boolean (strict equal)"],
		[null, null, "Both null (strict equal)"],
		[undefined, undefined, "Both undefined (strict equal)"],

		[5, "5", "Different types (number vs string)"],
		[0, false, "Different types (0 vs false)"],
		[NaN, NaN, "NaN is never strictly equal to itself"],
		[-0, 0, "-0 is strictly equal to 0"],

		[{}, {}, "Different object instances (same shape, not equal)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();