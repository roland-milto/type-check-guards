// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/false.mjs")
	.forFunctions("isFalse")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "false"
	})
	.useTestArguments([
		[false, "Boolean `false`"],

		[true, "Boolean true"],
		[0, "Number 0 (falsy)"],
		[1, "Number 1 (truthy)"],
		["false", "String 'false'"],
		["", "Empty string (falsy)"],
		[[], "Empty array (truthy)"],
		[{}, "Empty object (truthy)"],
		[new Boolean(false), "Boxed Boolean object (truthy, but not === false)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();