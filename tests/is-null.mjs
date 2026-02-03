// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/null.mjs")
	.forFunctions("isNull")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "null"
	})
	.useTestArguments([
		[null, "Null literal (strict)"],

		[undefined, "Undefined (not null)"],
		[0, "Zero (not null)"],
		["", "Empty string (not null)"],
		[false, "Boolean false (not null)"],
		[{}, "Object (not null)"],
		[[], "Array (not null)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();