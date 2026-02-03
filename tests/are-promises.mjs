// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/promise.mjs")
	.forFunctions("arePromises")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "promise[]"
	})
	.useTestArguments([
		[[Promise.resolve(1)], "Single Promise"],
		[[Promise.resolve(1), new Promise(() => {
		})], "Multiple Promises"],
		[[Promise.resolve("a"), Promise.resolve("b")], "Resolved Promises"],

		[[], "Empty array (not filled)"],
		[[Promise.resolve(1), 123], "Contains number"],
		[[Promise.resolve(1), {
			then() {
			}
		}], "Contains thenable (not Promise instance)"],
		[[Promise.resolve(1), null], "Contains null"],
		[[Promise.resolve(1), undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();