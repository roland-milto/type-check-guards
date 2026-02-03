// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/symbol.mjs")
	.forFunctions("isSymbol")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "symbol"
	})
	.useTestArguments([
		[Symbol(), "Anonymous Symbol"],
		[Symbol("key"), "Symbol with description"],
		[Symbol.for("shared"), "Global Symbol (Symbol.for)"],

		["Symbol()", "String that looks like Symbol"],
		[Object(Symbol("boxed")), "Boxed Symbol object (not typeof 'symbol')"],
		[{valueOf: () => Symbol("x")}, "Object with valueOf returning symbol (not a symbol)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();