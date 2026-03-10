# isOctal

## Lýsing

Ákvarðar hvort gildi sé gildur áttundatölustafsstrengur (t.d. `0o755`).

### Notkunartilvik

Staðfesta notandainntak eða stillingagildi sem verða að vera sett fram sem áttundatölustafsstrengur (til dæmis
skráarheimildarhamir eins og `0o644`) áður en þau eru þáttað eða umbreytt.

> **Athugasemd fyrir TypeScript-notendur:**
>
> `isOctal` er týpuvörður (`value is string`). Eftir `true` niðurstöðu þrengir TypeScript athugaða breytuna að `string`.

### Kostir

- Veitir strangt týpuvörð: skilar `true` aðeins þegar inntakið er strengur sem samsvarar sniði áttundatölustafs (octal
  literal).
- Hafnar tómum strengjum og strengjum með bilum fremst/aftast (ASCII stýri-/bil), sem dregur úr tilviljanakenndum
  samsvörunum.
- Styður valkvætt formerki og er óháð há-/lágstöfum fyrir `0o`/`0O` forskeytið.
- Umburðarlynd fyrir inntök sem eru ekki strengir með því að skila `false` í stað þess að kasta villu.

## Notkun

### Málfræði

Fall:

- `isOctal(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // satt
console.log(isOctal(b)); // satt
console.log(isOctal(c)); // ósatt
console.log(isOctal(d)); // ósatt

if (isOctal(a)) {
  // a er strengur hér
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isOctal(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 15:41:45 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>