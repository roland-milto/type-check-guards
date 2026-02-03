// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/date.mjs")
	.forFunctions("areDates")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "date[]"
	})
	.useTestArguments([
		[[new Date()], "Single Date"],
		[[new Date(), new Date(0)], "Multiple Date instances"],
		[[new Date("2021-01-01"), new Date("2025-12-17")], "Date instances from strings"],

		[[], "Empty array (not filled)"],
		[[new Date(), "not a date"], "Contains string"],
		[[new Date(), Date.now()], "Contains number"],
		[[new Date(), {}], "Contains object"],
		[[new Date(), null], "Contains null"],
		[[new Date(), undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();