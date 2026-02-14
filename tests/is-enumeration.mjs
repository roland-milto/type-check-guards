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
	.forFunctions("isEnum")
	.attachAsMethodTo("Type")
	.renameMethodTo(null)
	.withParameters({
		enumeration: "EnumLike", // @todo implement type
		option: '"both" | "numeric" | "strings"' // @todo implement type
	})
	.useTestArguments([
		[StringEnumLike, undefined, "String-enum (default option => numeric, but string-enum bleibt unfiltered)"],
		[StringEnumLike, "numeric", "String-enum mit option 'numeric' (unfiltered bei reinen string-enums)"],
		[StringEnumLike, "strings", "String-enum mit option 'strings' (unfiltered bei reinen string-enums)"],
		[StringEnumLike, "both", "String-enum mit option 'both' (unfiltered bei reinen string-enums)"],

		[NumericTsEnumLike, undefined, "TS numeric enum-like (default option => numeric)"],
		[NumericTsEnumLike, "numeric", "TS numeric enum-like: nur number-Werte erlaubt"],
		[NumericTsEnumLike, "strings", "TS numeric enum-like: nur string-Namen erlaubt"],
		[NumericTsEnumLike, "both", "TS numeric enum-like: numbers + string-Namen erlaubt"],

		[MixedEnumLike, "both", "Gemischte Werte (number+string, enum-like object)"],

		[{}, "numeric", "Leeres enum-like Objekt (Guard wird erstellt, erlaubt aber nichts)"],
		[StringEnumLike, "invalid", "Ungültige option => fallback auf 'numeric'"],
	])
	.expectReturnType("function")
	.language("eng")
	.translate("languages")
	.highlight("european")
	.create();