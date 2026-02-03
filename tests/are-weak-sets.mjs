// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/weakSet.mjs")
	.forFunctions("areWeakSets")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "weakSet[]"
	})
	.useTestArguments([
		[[new WeakSet()], "Single WeakSet"],
		[[new WeakSet(), new WeakSet()], "Multiple WeakSets"],
		[[new WeakSet([{}]), new WeakSet([new (class A {
		})()])], "WeakSets with objects/instances"],

		[[], "Empty array (not filled)"],
		[[new WeakSet(), {}], "Contains plain object"],
		[[new WeakSet(), new Set()], "Contains Set"],
		[[new WeakSet(), []], "Contains array"],
		[[new WeakSet(), null], "Contains null"],
		[[new WeakSet(), undefined], "Contains undefined"],
		[[new WeakSet(), () => {
		}], "Contains function"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();