// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/regExp.mjs")
	.forFunctions("areRegExes")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "regexp[]"
	})
	.useTestArguments([
		[[/a/], "Single RegExp"],
		[[/[a-z]/, /[0-9]/], "Multiple RegExp literals"],
		[[new RegExp("a"), new RegExp("^b$", "i")], "RegExp constructors and flags"],

		[[], "Empty array (not filled)"],
		[[/a/, ".*"], "Contains string"],
		[[/a/, {}], "Contains object"],
		[[/a/, null], "Contains null"],
		[[/a/, undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();