// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/string.mjs")
	.forFunctions("isString")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "string"
	})
	.useTestArguments([
		["   ", "Multiple spaces"],
		["\u00A0", "Non-breaking space (NBSP)"],
		["\u200B", "Zero-width space (ZWSP)"],
		["1337", "Number as string"],
		["äöüß", "Umlauts"],
		["你好", "Non-Latin characters"],
		["🙂", "Emoji"],
		["42".repeat(3), "Repeat the truth"],
		[String('Roland'), "String object `String('Roland')`"],
		[Object('Roland'), "`Object('Roland')` wrapper"],
		[{toString: () => 'DEV'}, "Object with toString() returning string `{ toString: () => 'DEV' }`"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();