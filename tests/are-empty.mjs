// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/empty.mjs")
	.forFunctions("areEmpty")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "unknown[]"
	})
	.useTestArguments([
		[[null], "Single empty value (null)"],
		[[null, "", undefined], "All empty values (null/empty string/undefined)"],
		[[[], {}, new Map(), new Set()], "All empty containers (array/object/map/set)"],
		[["   ", "\n\t"], "All whitespace-only strings (empty after trim)"],

		[[], "Empty array (not filled)"],
		[[null, 0], "Contains non-empty number"],
		[[null, "Roland"], "Contains non-empty string"],
		[[{}, {a: 1}], "Contains non-empty object"],
		[[new Map(), new Map([["k", "v"]])], "Contains non-empty Map"],
		[[new Set(), new Set([1])], "Contains non-empty Set"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();