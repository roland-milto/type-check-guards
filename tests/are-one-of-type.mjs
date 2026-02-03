// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/oneOfType.mjs")
	.forFunctions("areOneOfType")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "unknown[]",
		types: "DataTypeAsString[]"
	})
	.useTestArguments([
		[[1, 2, 3], ["number"], "All numbers"],
		[["a", "b", "c"], ["string"], "All strings"],
		[[1, "a", true], ["number", "string", "boolean"], "Mixed values allowed by types"],

		[[], ["number"], "Empty array (not filled)"],
		[[1, "a", {}], ["number", "string"], "Contains object not in allowed types"],
		[[1, "a", {}], [], "Empty types array (not filled)"],
		[[new Date(), /x/], ["date", "regexp"], "All complex types allowed"],
		[[new Date(), "x"], ["date"], "Contains string not allowed (only date)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();