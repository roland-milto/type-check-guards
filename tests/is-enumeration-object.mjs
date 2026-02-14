// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/enumObject.mjs")
	.forFunctions("isEnumObject")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "EnumLike" // @todo implement this type
	})
	.useTestArguments([
		[{}, "Empty object (no own props => false)"],
		[{KEY1: "value1"}, "Single string value (valid enum-like)"],
		[{KEY1: 123}, "Single number value (valid enum-like)"],
		[{KEY1: "value1", KEY2: 123}, "Mixed string+number values (valid enum-like)"],
		[{"0": "ZERO", "1": "ONE"}, "Numeric-looking keys with string values (valid enum-like)"],

		[{KEY1: true}, "Contains boolean value (invalid)"],
		[{KEY1: null}, "Contains null value (invalid)"],
		[{KEY1: undefined}, "Contains undefined value (invalid)"],
		[{KEY1: {}}, "Contains object value (invalid)"],
		[{KEY1: []}, "Contains array value (invalid)"],
		[{
			KEY1: () => {
			}
		}, "Contains function value (invalid)"],

		[Object.create({INHERITED: 1}), "Inherited props only (no own props => false)"],
		[Object.assign(Object.create({INH: 1}), {OWN: "ok"}), "Has own prop despite prototype (valid)"],

		[[], "Array (invalid)"],
		[null, "Null (invalid)"],
		["KEY", "String (invalid)"],
		[42, "Number (invalid)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();