// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/false.mjs")
	.forFunctions("areFalse")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "false[]"
	})
	.useTestArguments([
		[[false], "Single false"],
		[[false, false, false], "All false values"],
		[[false, false], "Two false values"],

		[[], "Empty array (not filled)"],
		[[false, true, false], "Contains true"],
		[[false, 0, false], "Contains falsy number 0 (not false)"],
		[[false, "false", false], "Contains string 'false'"],
		[[false, new Boolean(false), false], "Contains boxed Boolean object"],
		[[false, null, false], "Contains null"],
		[[false, undefined, false], "Contains undefined"],
		[[false, {}, false], "Contains object"],
		[[false, [], false], "Contains array"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();