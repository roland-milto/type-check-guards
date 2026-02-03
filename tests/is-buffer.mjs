// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/buffer.mjs")
	.forFunctions("isBuffer")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "buffer"
	})
	.useTestArguments([
		[Buffer.from("hello"), "Buffer from string (utf8)"],
		[Buffer.from([0, 1, 2, 255]), "Buffer from byte array"],
		[Buffer.alloc(0), "Empty Buffer (still a Buffer)"],
		[Buffer.alloc(4), "Allocated Buffer with length 4"],

		[new Uint8Array([1, 2, 3]), "Uint8Array (not a Buffer)"],
		["hello", "String (not a Buffer)"],
		[[1, 2, 3], "Array (not a Buffer)"],
		[{}, "Object (not a Buffer)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();