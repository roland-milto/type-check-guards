// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/validDate.mjs")
	.forFunctions("isValidDate")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "date"
	})
	.useTestArguments([
		[new Date(), "Current date (valid)"],
		[new Date(0), "Unix epoch (valid)"],
		[new Date("2025-12-17"), "ISO date string (valid)"],

		[new Date("invalid"), "Invalid date from string"],
		[new Date(NaN), "Invalid date from NaN timestamp"],

		["2025-12-22", "String date (not a Date object)"],
		[Date.now(), "Timestamp number (not a Date object)"],
		[{getTime: () => Date.now()}, "Date-like object (not a Date instance)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();