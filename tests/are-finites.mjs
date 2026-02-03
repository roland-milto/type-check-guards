// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/finite.mjs")
	.forFunctions("areFinite")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "finite[]"
	})
	.useTestArguments([
		[[1], "Single finite number"],
		[[1, 2, 3], "All finite integers"],
		[[10.5, -3, 0], "Finite mixed numbers"],
		[[Number.MIN_VALUE, Number.MAX_VALUE], "Finite boundaries"],

		[[], "Empty array (not filled)"],
		[[1, Infinity, 3], "Contains Infinity"],
		[[1, -Infinity, 3], "Contains -Infinity"],
		[[1, NaN, 3], "Contains NaN"],
		[[1, "2", 3], "Contains number as string"],
		[[1, Number(2), 3], "Contains boxed Number object"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();