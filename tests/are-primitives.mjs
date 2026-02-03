// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/primitive.mjs")
	.forFunctions("arePrimitives")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "primitive[]"
	})
	.useTestArguments([
		[[1, "string", true], "Mixed primitives (number, string, boolean)"],
		[[null, undefined, Symbol("x")], "Null, undefined, symbol"],
		[[0n, "0", 0, false], "BigInt, string, number, boolean"],

		[[], "Empty array (not filled)"],
		[[1, {}, false], "Contains object"],
		[[1, [], false], "Contains array"],
		[[1, () => {
		}, false], "Contains function"],
		[[1, new Number(2), false], "Contains boxed number object"],
		[[1, new String("x"), false], "Contains boxed string object"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();