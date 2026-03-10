# getTypeOf

## Lýsing

`getTypeOf` skilar ítarlegri, mannlæsilegri tegundamerkingu fyrir tiltekið gildi, þar á meðal fínstilltar tölutegundir
og sértækar hlutategundir.

### Notkunartilvik

Notaðu `getTypeOf` til að samræma tegundagreiningu í inntaksstaðfestingu og greiningu—til dæmis til að hafna `nan`,
samþykkja aðeins `integer` auðkenni, meðhöndla tölustrengi eins og `decimal` öðruvísi en venjulegt `string`, eða til að
skrá nákvæmar hlutategundir eins og `date` og `regexp`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Skilategundin er `DataTypeAsString | string`. Líttu á hana sem lýsandi merkingu; berðu saman við þekkt bókstafsgildi
> eins og `integer`, `float`, `nan`, `array`, `null` og `undefined` þegar þú greinir í greinum.

### Kostir

- Skilar nákvæmari tegundastreng en `typeof` í JavaScript, þar á meðal tölulegar undirtegundir eins og `integer`,
  `float` og `nan`.
- Greinir `null` og `undefined` skýrt sem `null` og `undefined`.
- Greinir algeng snið tölustrenga og skilar þeim sem `binary`, `octal`, `decimal` eða `hexadecimal` í stað einfalds
  `string`.
- Þekkir fylki sem `array` og notar `Object.prototype.toString` til að gefa sértæk heiti á hlutategundum (t.d. `date`,
  `regexp`, `map`, `set`).
- Gagnlegt fyrir staðfestingu, skráningu og villuleit þar sem þörf er á samræmdum, mannlæsilegum tegundamerkingum.

## Notkun

### Málfræði

Fall:

- `getTypeOf(value)`

Færibreytur:

- `value`: Gildið sem á að ákvarða gagnategund fyrir.

### Staðbundinn innflutningur á falli

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Dæmi um athuganir
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.getTypeOf(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Skráin var búin til 6 February 2026 at 13:07:08 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>