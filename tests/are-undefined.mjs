// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/undefined.mjs")
	.forFunctions("areUndefined")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "undefined[]"
	})
	.useTestArguments([
		[[undefined], "Single undefined"],
		[[undefined, undefined], "All undefined values"],
		[[void 0, undefined, void 0], "Mixed undefined forms (void 0 and undefined)"],

		[[], "Empty array (not filled)"],
		[[undefined, null], "Contains null"],
		[[undefined, 0, undefined], "Contains number"],
		[[undefined, false, undefined], "Contains boolean"],
		[[undefined, "", undefined], "Contains string"],
		[[undefined, {}, undefined], "Contains object"],
		[[undefined, [], undefined], "Contains array"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();