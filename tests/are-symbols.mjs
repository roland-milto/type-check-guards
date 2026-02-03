// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/symbol.mjs")
	.forFunctions("areSymbols")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "symbol[]"
	})
	.useTestArguments([
		[[Symbol("a")], "Single symbol"],
		[[Symbol("a"), Symbol("b"), Symbol("c")], "Multiple symbols"],
		[[Symbol.for("x"), Symbol.for("y")], "Global symbols (Symbol.for)"],

		[[], "Empty array (not filled)"],
		[[Symbol("a"), "b", Symbol("c")], "Contains string"],
		[[Symbol("a"), Object(Symbol("b"))], "Contains boxed Symbol object"],
		[[Symbol("a"), null], "Contains null"],
		[[Symbol("a"), undefined], "Contains undefined"],
		[[Symbol("a"), {}], "Contains object"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();