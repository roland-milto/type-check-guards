// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/promise.mjs")
	.forFunctions("isPromise")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "promise"
	})
	.useTestArguments([
		[Promise.resolve(1), "Promise.resolve(...)"],
		[Promise.reject(new Error("x")).catch(() => {
		}), "Promise from rejected (caught)"],
		[new Promise(() => {
		}), "New Promise(...)"],

		[{
			then() {
			}
		}, "Thenable object (not a Promise instance)"],
		[async () => 1, "Async function (not a Promise)"],
		[() => Promise.resolve(1), "Function returning Promise (not a Promise)"],
		[123, "Number (not a Promise)"],
		[null, "Null (not a Promise)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();