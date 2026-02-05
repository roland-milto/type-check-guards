// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/nullOrUndefined.mjs")
	.forFunctions("areNullOrUndefined")
	.alias("areNils")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "unknown[]"
	})
	.useTestArguments([
		[[null], "Single null"],
		[[undefined], "Single undefined"],
		[[null, undefined, null], "Null/undefined mix"],
		[[void 0, undefined], "Undefined mix (void 0 + undefined)"],

		[[], "Empty array (not filled)"],
		[[null, "string"], "Contains string"],
		[[null, 0], "Contains number"],
		[[undefined, false], "Contains boolean"],
		[[null, {}], "Contains object"],
		[[undefined, []], "Contains array"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();