// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/ofType.mjs")
	.forFunctions("areOfType")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "unknown[]",
		type: "string"
	})
	.useTestArguments([
		[[1, 2, 3], "number", "All numbers"],
		[["a", "b", "c"], "string", "All strings"],
		[[true, false, true], "boolean", "All booleans"],
		[[42n, 0n, 7n], "bigint", "All bigints"],
		[[Symbol("a"), Symbol("b")], "symbol", "All symbols"],
		[[() => {
		}, () => {
		}], "function", "All functions"],

		[[null, null], "null", "All null"],
		[[undefined, undefined], "undefined", "All undefined"],

		[[[], []], "array", "All arrays"],
		[[new Date(), new Date(0)], "date", "All dates"],
		[[/a/, /b/], "regexp", "All regexps"],
		[[3.14, -0.1, 1e-7], "float", "All floats"],

		[[], "string", "Empty array (not filled)"],
		[[1, "2", 3], "number", "Mixed values (not all numbers)"],
		[[new Date(), "x"], "date", "Mixed values (not all dates)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();