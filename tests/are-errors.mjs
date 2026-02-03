// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/error.mjs")
	.forFunctions("areErrors")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "error[]"
	})
	.useTestArguments([
		[[new Error("error1")], "Single Error"],
		[[new Error("error1"), new Error("error2")], "Multiple Errors"],
		[[new TypeError("x"), new RangeError("y")], "Multiple Error subclasses"],

		[[], "Empty array (not filled)"],
		[[new Error("error1"), "not an error"], "Contains string"],
		[[undefined], "Contains undefined"],
		[[null], "Contains null"],
		[[new Error("error1"), {name: "Error", message: "x"}], "Contains Error-like object"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();