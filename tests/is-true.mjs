// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/true.mjs")
	.forFunctions("isTrue")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "true"
	})
	.useTestArguments([
		[true, "Boolean true (strict)"],

		[false, "Boolean false"],
		[1, "Number 1 (truthy)"],
		[0, "Number 0 (falsy)"],
		["true", "String 'true'"],
		["", "Empty string (falsy)"],
		[[], "Empty array (truthy)"],
		[{}, "Empty object (truthy)"],
		[Boolean(true), "Boxed Boolean object (truthy, but not === true)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();