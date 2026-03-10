# isError

## Lýsing

Athugar hvort gefið `value` sé tilvik af `Error`.

### Notkunartilvik

Notaðu `isError` þegar þú færð `unknown` gildi (til dæmis úr `catch`-blokk, bakfalli eða ytra safni) og þú þarft að
ákvarða á öruggan hátt hvort það sé `Error` áður en þú lest `message`, `name` eða `stack`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isError` til að verja `unknown` gildi (t.d. úr `catch`) áður en þau eru meðhöndluð sem `Error`.

### Kostir

- Veitir einfalda keyrslutímaathugun á því hvort gildi sé tilvik af `Error`.
- Hjálpar til við að þrengja óþekkt inntök áður en `Error`-eiginleikar eins og `message` eða `stack` eru notaðir.
- Dregur úr hættu á keyrslutímavillum þegar unnið er með gildi úr `catch`, ytri API-um eða ótegundum heimildum.

## Notkun

### Málfræði

Fall:

- `isError(value)`

Færibreytur:

- `value`: Gildið sem á að athuga gagnvart `Error`-gerðinni.

### Staðbundinn innflutningur á falli

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isError(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isError](../_analysis/isError.md)

<br>

---

<small>Skráin var búin til 6 February 2026 at 12:45:50 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>