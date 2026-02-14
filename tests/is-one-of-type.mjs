// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/oneOfType.mjs")
	.forFunctions("isOneOfType")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "unknown",
		types: "DataTypeAsString"
	})
	.useTestArguments([
		[3, ["number"], "Matches single type: number"],
		["hello", ["string"], "Matches single type: string"],
		[true, ["boolean"], "Matches swwwdingle type: boolean"],

		[3, ["boolean"], "Does not match: number vs boolean"],
		["world", ["array"], "Does not match: string vs array"],

		[3, ["string", "number"], "Matches one of multiple types (number)"],
		["x", ["number", "string"], "Matches one of multiple types (string)"],
		[[], ["array", "object"], "Matches array (also object, but should pass)"],
		[new Date(), ["date", "object"], "Matches date/object via complex types"],

		[{}, [], "Empty types array (always false)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();