// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/primitive.mjs")
	.forFunctions("isPrimitive")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "primitive"
	})
	.useTestArguments([
		[null, "Null (primitive by definition)"],
		[undefined, "Undefined (primitive)"],
		[true, "Boolean (primitive)"],
		[0, "Number (primitive)"],
		["text", "String (primitive)"],
		[0n, "BigInt (primitive)"],
		[Symbol("k"), "Symbol (primitive)"],

		[{}, "Plain object (not primitive)"],
		[[], "Array (not primitive)"],
		[() => {
		}, "Function (not primitive)"],
		[new Date(), "Date (not primitive)"],
		[new Number(1), "Boxed Number object (not primitive)"],
		[new Boolean(false), "Boxed Boolean object (not primitive)"],
		[new String("x"), "Boxed String object (not primitive)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();