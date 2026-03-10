# arePrimitives

## Lýsing

`arePrimitives` metur hvort öll stök í gefnu, ekki-tómu fylki séu frumgerðir.

### Notkunartilvik

Staðfestu að innkomin gögn (t.d. fyrirspurnarbreytur, gildi í CSV-röð eða listi af auðkennum/merkjum) innihaldi aðeins
frumgildi áður en þau eru raðtengd, hökkuð, skráð eða send til API-a sem mega ekki taka við hlutum.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `arePrimitives` þegar þú þarft að tryggja að `unknown[]` innihaldi aðeins frumgildi (string, number, bigint,
> boolean, symbol, undefined eða null) áður en unnið er frekar með það.

### Kostir

- Skilar `true` aðeins þegar hvert stak er frumgildi, sem gerir það að ströngu vörnum fyrir fylki án „hluta/falla“.
- Bregst hratt: skilar `false` um leið og stak sem er ekki frumgildi finnst.
- Skilar einnig `false` fyrir ekki-fylki og tóm fylki (í gegnum athugun á fylltu fylki), sem kemur í veg fyrir að ógilt
  inntak sé óvart samþykkt.

## Notkun

### Málfræði

Fall:

- `arePrimitives(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til staka af frumgerð.

### Staðbundinn innflutningur á falli

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // satt
const r2 = arePrimitives(b); // satt
const r3 = arePrimitives(c); // ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.arePrimitives(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 00:05:07 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>