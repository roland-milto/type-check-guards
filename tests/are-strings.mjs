// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/string.mjs")
	.forFunctions("areStrings")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "string[]"
	})
	.useTestArguments([
		// true cases
		[["a"], "Single string"],
		[["hello", "world"], "Two strings"],
		[["", " "], "Empty string and space"],
		[["\t", "\n", "\r"], "Whitespace/control strings"],
		[["äöüß", "你好", "🙂"], "Unicode strings"],
		[["0", "42", "true", "null", "undefined"], "Stringified primitives"],
		[["a".repeat(256), "b".repeat(1024)], "Long strings"],

		// false cases (not filled / not an array)
		[[], "Empty array"],
		[null, "Null (not an array)"],
		[undefined, "Undefined (not an array)"],
		["hello", "String (not an array)"],
		[{}, "Object (not an array)"],

		// false cases (array contains non-strings)
		[["hello", 42], "Contains number"],
		[[true, "hello"], "Contains boolean"],
		[["hello", null], "Contains null"],
		[["hello", undefined], "Contains undefined"],
		[["hello", Symbol("x")], "Contains symbol"],
		[["hello", /./], "Contains RegExp"],
		[["hello", new Date()], "Contains Date"],
		[["hello", new Error("x")], "Contains Error"],
		[["hello", {}], "Contains plain object"],
		[["hello", ["nested"]], "Contains nested array"],
		[["hello", () => {
		}], "Contains function"],

		// false cases (string-like, but not string primitive)
		[[String("hello")], "String object (boxed) in array"],
		[["hello", Object("world")], "Object('...') wrapper in array"],

		// false cases (sparse arrays / missing elements)
		[new Array(2), "Sparse array with empty slots"],
		[(arr => (arr[0] = "ok", arr))(new Array(2)), "Sparse array with one string and one empty slot"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")

	.create();