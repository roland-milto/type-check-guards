// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/enumObject.mjs")
	.forFunctions("areEnumObjects")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "unknown[]"
	})
	.useTestArguments([
		[[{KEY1: "a"}], "Single enum-like object"],
		[[{KEY1: 1}, {KEY2: 2}], "Multiple enum-like objects with numbers"],
		[[{KEY1: "a", KEY2: 2}, {KEY3: "b"}], "Multiple enum-like objects mixed values"],

		[[], "Empty array (not filled)"],
		[[{KEY1: "a"}, 42], "Contains non-object element"],
		[[{KEY1: "a"}, {}], "Contains empty object (invalid enum-like)"],
		[[{KEY1: "a"}, {KEY2: true}], "Contains invalid value type (boolean)"],
		[[{KEY1: "a"}, null], "Contains null"],
		[[{KEY1: "a"}, []], "Contains array"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();