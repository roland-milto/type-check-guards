// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/weakMap.mjs")
	.forFunctions("areWeakMaps")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "weakMap[]"
	})
	.useTestArguments([
		[[new WeakMap()], "Single WeakMap"],
		[[new WeakMap(), new WeakMap()], "Multiple WeakMaps"],
		[[], "Empty array (not filled)"],
		[[new WeakMap(), {}], "Contains non-WeakMap"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();