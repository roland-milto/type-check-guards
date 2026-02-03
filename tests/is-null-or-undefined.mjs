// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/nullOrUndefined.mjs")
	.forFunctions("isNullOrUndefined")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "unknown"
	})
	.useTestArguments([
		[null, "Null"],
		[undefined, "Undefined"],
		[void 0, "void 0 (undefined)"],

		[0, "Zero (not null/undefined)"],
		["", "Empty string (not null/undefined)"],
		[false, "Boolean false (not null/undefined)"],
		[{}, "Object (not null/undefined)"],
		[[], "Array (not null/undefined)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();