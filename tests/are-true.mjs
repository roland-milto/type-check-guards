// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/true.mjs")
	.forFunctions("areTrue")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "boolean[]"
	})
	.useTestArguments([
		[[true], "Single true"],
		[[true, true, true], "All true values"],
		[[true, true, true, true, true], "Many true values"],

		[[], "Empty array (not filled)"],
		[[true, false, true], "Contains false"],
		[[false], "Single false"],
		[[true, 1, true], "Contains truthy number"],
		[[true, "true", true], "Contains string 'true'"],
		[[true, Boolean(true), true], "Contains boxed Boolean object"],
		[[true, null, true], "Contains null"],
		[[true, undefined, true], "Contains undefined"],
		[[true, {}, true], "Contains object"],
		[[true, [], true], "Contains array"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();