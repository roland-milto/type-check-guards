// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/weakSet.mjs")
	.forFunctions("isWeakSet")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "weakSet"
	})
	.useTestArguments([
		[new WeakSet(), "Empty WeakSet"],
		[new WeakSet([{}, Object.freeze({})]), "WeakSet with objects"],
		[new WeakSet([new (class A {
		})(), new (class B {
		})()]), "WeakSet with class instances"],

		[new Set(), "Set (not WeakSet)"],
		[new Map(), "Map (not WeakSet)"],
		[[], "Array (not WeakSet)"],
		[{}, "Object (not WeakSet)"],
		[() => new WeakSet(), "Function returning WeakSet (not a WeakSet)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();