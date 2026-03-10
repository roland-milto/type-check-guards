# isPrimitive

## Lýsing

`isPrimitive` ákvarðar hvort tiltekið gildi sé frumgildi (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Notkunartilvik

Staðfesta inntök í keyrslu (t.d. reiti í API-farmagni, stillingagildi eða gögn sem notandi leggur til) til að tryggja að
gildi sé frumgildi áður en það er raðað, skráð eða beitt aðgerðum sem aðeins eiga við um frumgildi.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isPrimitive` til að verja `unknown` inntök áður en þau eru meðhöndluð sem hlutir eða föll; það skilar `true`
> fyrir frumgildi og `false` fyrir hluti og föll.

### Kostir

- Hröð, úthlutunarlaus athugun á því hvort gildi sé JavaScript-frumgildi.
- Meðhöndlar `null` rétt sem frumgildi (þótt `typeof null` sé `"object"`).
- Hjálpar til við að þrengja `unknown` gildi áður en framkvæmdar eru aðgerðir sem aðeins eiga við um hluti.

## Notkun

### Málfræði

Fall:

- `isPrimitive(value)`

Færibreytur:

- `value`: Gildið sem á að athuga hvort sé af frumgildistegund.

### Staðbundinn innflutningur á falli

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isPrimitive(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 23:56:33 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>