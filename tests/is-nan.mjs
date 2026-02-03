// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/nan.mjs")
	.forFunctions("isNaN")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "nan"
	})
	.useTestArguments([
		[NaN, "NaN (number)"],
		[Number.NaN, "Number.NaN (same NaN)"],
		[0 / 0, "Computed NaN (0/0)"],

		[0, "Zero (not NaN)"],
		[123, "Number (not NaN)"],
		[Infinity, "Infinity (not NaN)"],
		[-Infinity, "Negative Infinity (not NaN)"],

		["NaN", "String 'NaN' (no coercion)"],
		[Number(NaN), "Boxed NaN Number object (not typeof 'number')"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();