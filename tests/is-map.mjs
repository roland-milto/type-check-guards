// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/map.mjs")
	.forFunctions("isMap")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "map"
	})
	.useTestArguments([
		[new Map(), "Empty Map"],
		[new Map([["key", "value"]]), "Map with string entry"],
		[new Map([[{}, 1], [[], "x"]]), "Map with object/array keys"],
		[new Map([[1, {ok: true}]]), "Map with number key and object value"],

		[new WeakMap(), "WeakMap (not Map)"],
		[new Set(), "Set (not Map)"],
		[{}, "Object (not Map)"],
		[[], "Array (not Map)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();