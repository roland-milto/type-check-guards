// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/set.mjs")
	.forFunctions("areSets")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "set[]"
	})
	.useTestArguments([
		[[new Set()], "Single Set"],
		[[new Set(), new Set()], "Multiple Sets"],
		[[new Set([1]), new Set(["a"])], "Sets with different contents"],

		[[], "Empty array (not filled)"],
		[[new Set(), {}], "Contains object"],
		[[new Set(), new WeakSet()], "Contains WeakSet"],
		[[new Set(), new Map()], "Contains Map"],
		[[new Set(), []], "Contains array"],
		[[new Set(), null], "Contains null"],
		[[new Set(), undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();