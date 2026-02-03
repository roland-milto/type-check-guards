// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/error.mjs")
	.forFunctions("isError")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "error"
	})
	.useTestArguments([
		[new Error("x"), "Error instance"],
		[new TypeError("x"), "TypeError instance"],
		[new RangeError("x"), "RangeError instance"],
		[AggregateError ? new AggregateError([new Error("a")], "agg") : new Error("fallback"), "AggregateError instance (if supported)"],

		[{name: "Error", message: "x"}, "Error-like plain object (not Error instance)"],
		["This is a string", "String (not Error)"],
		[42, "Number (not Error)"],
		[undefined, "Undefined (not Error)"],
		[null, "Null (not Error)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();