// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/null.mjs")
	.forFunctions("areNull")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "null[]"
	})
	.useTestArguments([
		[[null], "Single null"],
		[[null, null, null], "All null values"],

		[[], "Empty array (not filled)"],
		[[null, undefined], "Contains undefined"],
		[[null, 0], "Contains number"],
		[[null, "x"], "Contains string"],
		[[null, false], "Contains boolean"],
		[[null, {}], "Contains object"],
		[[null, []], "Contains array"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();