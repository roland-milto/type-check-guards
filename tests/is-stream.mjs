// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/stream.mjs")
	.forFunctions("isStream")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "stream"
	})
	.useTestArguments([
		[new (await import("node:stream")).PassThrough(), "Node.js PassThrough stream"],
		[new (await import("node:stream")).Readable({
			read() {
			}
		}), "Node.js Readable stream"],
		[new (await import("node:stream")).Writable({
			write(_c, _e, cb) {
				cb();
			}
		}), "Node.js Writable stream"],

		[{
			pipe() {
			}, on() {
			}
		}, "Stream-like object (has pipe and on functions)"],
		[{
			pipe() {
			}, on: "nope"
		}, "Has pipe but on is not a function (not stream)"],
		[{
			on() {
			}, pipe: "nope"
		}, "Has on but pipe is not a function (not stream)"],
		[{}, "Plain object (not stream)"],
		["notAStream", "String (not stream)"],
		[null, "Null (not stream)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();