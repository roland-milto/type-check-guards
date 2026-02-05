// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/boolean.mjs")
	.forFunctions("areBooleans")
	.alias("areBools")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "boolean[]"
	})
	.useTestArguments([
		[[true], "Single boolean true"],
		[[false], "Single boolean false"],
		[[true, false, true], "Mixed booleans"],
		[[true, false], "Two booleans"],

		[[], "Empty array (not filled)"],
		[[true, 1, false], "Contains number"],
		[[true, "false"], "Contains string"],
		[[true, Boolean(false)], "Contains boxed Boolean object"],
		[[true, null], "Contains null"],
		[[true, undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();