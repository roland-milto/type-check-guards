// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/regExp.mjs")
	.forFunctions("isRegEx")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "regexp"
	})
	.useTestArguments([
		[/abc/, "RegExp literal"],
		[new RegExp("abc"), "RegExp constructor"],
		[new RegExp("^abc$", "i"), "RegExp with flags"],

		["/abc/", "String that looks like RegExp"],
		["abc", "Plain string (not RegExp)"],
		[{}, "Object (not RegExp)"],
		[() => /abc/, "Function returning RegExp (not RegExp)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();