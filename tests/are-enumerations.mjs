// Import: third-party modules.
import {Documentation} from "dist";

const NumericTsEnumLike = {
	Red: 1,
	Green: 2,
	Blue: 3,
	1: "Red",
	2: "Green",
	3: "Blue",
};

const StringEnumLike = {
	RED: "red",
	GREEN: "green",
	BLUE: "blue",
};

const MixedEnumLike = {
	A: 1,
	B: "b",
	C: 3,
};

// Create documentation.
await new Documentation()
	.fromSource("../dist/guards/enum.mjs")
	.forFunctions("areEnums")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		array: "EnumLike", // @todo implement type
		option: '"both" | "numeric" | "strings"' // @todo implement type
	})
	.useTestArguments([
		[StringEnumLike, undefined, "String-enum: erzeugt Array-Guard (default option)"],
		[StringEnumLike, "strings", "String-enum: option 'strings'"],
		[StringEnumLike, "numeric", "String-enum: option 'numeric' (bei string-enum praktisch identisch)"],

		[NumericTsEnumLike, undefined, "TS numeric enum-like: default => numeric (nur Zahlen)"],
		[NumericTsEnumLike, "numeric", "TS numeric enum-like: nur Zahlen im Token-Array erlaubt"],
		[NumericTsEnumLike, "strings", "TS numeric enum-like: nur Namen (Strings) im Token-Array erlaubt"],
		[NumericTsEnumLike, "both", "TS numeric enum-like: Zahlen + Namen im Token-Array erlaubt"],

		[MixedEnumLike, "both", "Gemischtes enum-like: numbers+strings im Token-Array erlaubt"],

		[{}, "numeric", "Leeres enum-like Objekt: erzeugt Guard, der nie true liefern kann"],
		[StringEnumLike, "invalid", "Ungültige option => fallback auf 'numeric'"],
	])
	.expectReturnType("function")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();