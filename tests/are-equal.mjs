// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/equal.mjs")
	.forFunctions("areEqual")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "unknown[]",
		expected: "unknown"
	})
	.useTestArguments([
		[[1, 1, 1], 1, "All equal to 1"],
		[["test", "test"], "test", "All equal to 'test'"],
		[[true, true, true], true, "All equal to true"],
		[[null, null], null, "All equal to null"],
		[[undefined, undefined], undefined, "All equal to undefined"],

		[[], 5, "Empty array (not filled)"],
		[[2, 3, 2], 2, "Not all equal to 2"],
		[[1, "1", 1], 1, "Contains different type (string)"],
		[[NaN, NaN], NaN, "NaN comparison fails (NaN !== NaN)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();