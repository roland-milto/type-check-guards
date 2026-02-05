// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/boolean.mjs")
	.forFunctions("isBoolean")
	.alias("isBool")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "boolean"
	})
	.useTestArguments([
		[true, "Boolean true"],
		[false, "Boolean false"],

		["true", "String 'true' (not boolean)"],
		["false", "String 'false' (not boolean)"],
		[1, "Number 1 (not boolean)"],
		[0, "Number 0 (not boolean)"],
		[Boolean(true), "Boxed Boolean object (not boolean primitive)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();