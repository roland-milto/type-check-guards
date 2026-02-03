// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/validDate.mjs")
	.forFunctions("areValidDates")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "date[]"
	})
	.useTestArguments([
		[[new Date()], "Single valid date"],
		[[new Date(), new Date(0)], "Multiple valid dates"],
		[[new Date("2025-12-17"), new Date("2026-01-01")], "Valid ISO dates"],

		[[], "Empty array (not filled)"],
		[[new Date(), "not a date"], "Contains string"],
		[[new Date(), Date.now()], "Contains timestamp number"],
		[[new Date("invalid")], "Contains invalid Date"],
		[[new Date(), new Date("invalid")], "Contains one invalid Date among valid ones"],
		[[{getTime: () => Date.now()}], "Contains Date-like object (not Date instance)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();