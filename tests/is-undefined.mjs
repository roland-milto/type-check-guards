// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/undefined.mjs")
	.forFunctions("isUndefined")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "undefined"
	})
	.useTestArguments([
		[undefined, "Undefined literal"],
		[void 0, "void 0 (undefined)"],

		[null, "Null (not undefined)"],
		[0, "Zero (not undefined)"],
		["", "Empty string (not undefined)"],
		[false, "Boolean false (not undefined)"],
		[{}, "Object (not undefined)"],
		[[], "Array (not undefined)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();