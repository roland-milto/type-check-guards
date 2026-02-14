// Import: third-party modules.
import {Documentation} from "dist";

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/numeric.mjs")
	.forFunctions("isNumeric")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		value: "unknown"
	})
	.useTestArguments([
		[42, "Integer number (numeric)"],
		[3.14, "Float number (numeric)"],
		[0, "Zero number (numeric)"],
		[-7, "Negative integer (numeric)"],
		[0n, "BigInt zero (numeric)"],
		[BigInt(1000), "BigInt from constructor (numeric)"],

		["123", "Decimal string (numeric via getTypeOf => decimal)"],
		["123.45", "Decimal string with fraction (numeric via getTypeOf => decimal)"],
		["0xFF", "Hexadecimal string (numeric via getTypeOf => hexadecimal)"],
		["0o755", "Octal string (numeric via getTypeOf => octal)"],
		["0b1010", "Binary string (numeric via getTypeOf => binary)"],
		["1010", "Binary string without prefix (numeric via getTypeOf => binary)"],

		[NaN, "NaN (numeric typeName is 'nan' -> depends on NUMERIC_TYPE_STRINGS; typically numeric)"],
		[Infinity, "Infinity (type is 'number', classification depends on getTypeOf/NUMERIC_TYPE_STRINGS)"],

		["hello", "Non-numeric string (not numeric)"],
		[null, "Null (not numeric)"],
		[undefined, "Undefined (not numeric)"],
		[{}, "Object (not numeric)"],
		[[], "Array (not numeric)"],
	])
	.expectReturnType("boolean")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();