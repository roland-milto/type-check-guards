// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/date.mjs")
	.forFunctions("isDate")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "date"
	})
	.useTestArguments([
		[new Date(), "Current Date instance"],
		[new Date(0), "Epoch Date instance"],
		[new Date("2025-12-17"), "Date from ISO string (may be invalid/valid depending on parser, but is a Date instance)"],

		["1990-08-18", "String (not a Date)"],
		[Date.now(), "Timestamp number (not a Date)"],
		[{year: 1990}, "Plain object (not a Date)"],
		[{getTime: () => Date.now()}, "Date-like object (not a Date instance)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();