// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/bigInt.mjs")
	.forFunctions("isBigInt")
	.alias("isBigInteger")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "bigint"
	})
	.useTestArguments([
		[0n, "BigInt zero"],
		[1n, "BigInt one"],
		[-1n, "Negative BigInt"],
		[10n, "BigInt ten"],
		[9007199254740993n, "BigInt larger than MAX_SAFE_INTEGER"],

		[0, "Number zero (not BigInt)"],
		[10, "Number ten (not BigInt)"],
		["10", "String '10' (not BigInt)"],
		[BigInt("10"), "BigInt created from string (still BigInt)"],
		[Object(10n), "Boxed BigInt object (not typeof 'bigint')"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();