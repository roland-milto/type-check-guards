// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/set.mjs")
	.forFunctions("isSet")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "set"
	})
	.useTestArguments([
		[new Set(), "Empty Set"],
		[new Set([1, 2, 3]), "Set with numbers"],
		[new Set(["a", "b"]), "Set with strings"],
		[new Set([{}, []]), "Set with object and array"],

		[new WeakSet(), "WeakSet (not Set)"],
		[new Map(), "Map (not Set)"],
		[[], "Array (not Set)"],
		[{}, "Object (not Set)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();