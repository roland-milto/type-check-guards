// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/ofType.mjs")
	.forFunctions("isOfType")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "unknown",
		type: "string"
	})
	.useTestArguments([
		[123, "number", "Matches number"],
		["hello", "string", "Matches string"],
		[true, "boolean", "Matches boolean"],
		[42n, "bigint", "Matches bigint"],
		[Symbol("k"), "symbol", "Matches symbol"],
		[() => {
		}, "function", "Matches function"],

		[null, "null", "Matches null"],
		[undefined, "undefined", "Matches undefined"],

		[[], "array", "Matches array"],
		[new Date(), "date", "Matches date"],
		[/./, "regexp", "Matches regexp"],
		[3.14, "float", "Matches float"],

		[123, "boolean", "Does not match boolean"],
		["123", "number", "Does not match number"],
		[null, "object", "Null does not match object"],
		[{}, "array", "Object does not match array"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();