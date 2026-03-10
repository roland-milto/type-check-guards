# areRegExes

## Lýsing

`areRegExes` athugar hvort gildi sé fyllt fylki sem inniheldur eingöngu `RegExp` hluti.

### Notkunartilvik

Staðfestu að stillingavalkostur (t.d. listi af leyfa/hafna mynstrum) sé ótómt fylki af reglulegum segðum áður en hann er
notaður til að bera saman.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areRegExes` til að þrengja `unknown` í `RegExp[]` áður en þú ítrar eða setur saman mynstur.

### Kostir

- Tryggir að gildi sé ótómt fylki þar sem hvert stak er tilvik af `RegExp`.
- Veitir einfalt boolean-vörð (`true`/`false`) til að staðfesta inntak notanda eða stillingar.
- Hjálpar til við að koma í veg fyrir keyrsluvillur þegar síðari kóði gerir ráð fyrir að allir hlutir styðji aðgerðir
  með reglulegum segðum.

## Notkun

### Málfræði

Fall:

- `areRegExes(array)`

Færibreytur:

- `array`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns er fylki af RegExp hér
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areRegExes(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 23:19:08 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>