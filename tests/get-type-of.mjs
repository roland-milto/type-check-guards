// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/utils/getTypeOf.mjs")
	.forFunctions("getTypeOf")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "unknown"
	})
	.useTestArguments([
		[null, "null"],
		[undefined, "undefined"],

		[0, "number: zero"],
		[42, "number: integer"],
		[3.14, "number: float"],
		[NaN, "number: nan"],

		["hello", "string: non-numeric"],
		["1010", "string: binary (no prefix)"],
		["0b1010", "string: binary (0b prefix)"],
		["123", "string: decimal integer"],
		["123.45", "string: decimal float"],
		["0xFF", "string: hexadecimal"],
		["0o755", "string: octal"],

		[[], "array"],
		[[1, 2, 3], "array with values"],

		[true, "boolean"],
		[1n, "bigint"],
		[Symbol("k"), "symbol"],
		[() => {
		}, "function"],

		[new Date(), "date"],
		[/abc/i, "regexp"],
		[new Error("x"), "error"],
		[new Map(), "map"],
		[new Set(), "set"],
		[Promise.resolve(1), "promise"],
		[new WeakMap(), "weakmap"],
		[new WeakSet(), "weakset"],

		[Object.create(null), "object without prototype => raw [object Object] => object"],
	])
	.expectReturnType("string")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();