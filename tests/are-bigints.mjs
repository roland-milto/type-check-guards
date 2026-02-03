// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/bigInt.mjs")
	.forFunctions("areBigInts")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "bigint[]"
	})
	.useTestArguments([
		[[10n], "Single BigInt"],
		[[10n, 20n], "Multiple BigInts"],
		[[0n, -1n, 42n], "Mixed BigInts (zero/negative/positive)"],

		[[], "Empty array (not filled)"],
		[[10n, 20], "Contains number"],
		[[10n, "20"], "Contains string"],
		[[10n, Object(20n)], "Contains boxed BigInt object"],
		[[10n, null], "Contains null"],
		[[10n, undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();