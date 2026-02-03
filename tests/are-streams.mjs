// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/stream.mjs")
	.forFunctions("areStreams")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "stream[]"
	})
	.useTestArguments([
		[[new (await import("node:stream")).PassThrough()], "Single Node.js stream"],
		[[new (await import("node:stream")).PassThrough(), new (await import("node:stream")).PassThrough()], "Multiple Node.js streams"],
		[[{
			pipe() {
			}, on() {
			}
		}, new (await import("node:stream")).PassThrough()], "Stream-like and Node.js stream"],

		[[], "Empty array (not filled)"],
		[[new (await import("node:stream")).PassThrough(), {}], "Contains non-stream object"],
		[[{
			pipe() {
			}, on() {
			}
		}, {
			pipe() {
			}, on: "nope"
		}], "One stream-like and one invalid"],
		[[null], "Contains null"],
		[["not an array"], "Array with string (not stream)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();