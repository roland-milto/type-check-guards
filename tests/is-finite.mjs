// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/finite.mjs")
	.forFunctions("isFinite")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "finite"
	})
	.useTestArguments([
		[0, "Zero (finite)"],
		[-0, "Negative zero (finite)"],
		[42, "Integer (finite)"],
		[-123.45, "Negative float (finite)"],
		[Number.MIN_VALUE, "MIN_VALUE (finite)"],
		[Number.MAX_VALUE, "MAX_VALUE (finite)"],
		[Number.EPSILON, "EPSILON (finite)"],

		[Infinity, "Infinity (not finite)"],
		[-Infinity, "Negative Infinity (not finite)"],
		[NaN, "NaN (not finite)"],

		["123", "Number as string (not finite by Number.isFinite)"],
		[Number(123), "Boxed Number object (not finite by Number.isFinite)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();