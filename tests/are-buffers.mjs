// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/buffer.mjs")
	.forFunctions("areBuffers")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "buffer[]"
	})
	.useTestArguments([
		[[Buffer.from("test")], "Single Buffer"],
		[[Buffer.from("test"), Buffer.from("123")], "Multiple Buffers"],
		[[Buffer.alloc(0), Buffer.alloc(1), Buffer.from([255])], "Buffers of different sizes"],

		[[], "Empty array (not filled)"],
		[[Buffer.from("test"), 42], "Contains number"],
		[[Buffer.from("test"), "x"], "Contains string"],
		[[Buffer.from("test"), {}], "Contains object"],
		[[Buffer.from("test"), new Uint8Array([1])], "Contains Uint8Array (not Buffer)"],
		[[Buffer.from("test"), null], "Contains null"],
		[[Buffer.from("test"), undefined], "Contains undefined"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();