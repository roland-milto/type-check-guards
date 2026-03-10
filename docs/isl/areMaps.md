# areMaps

## Lýsing

`areMaps` ákvarðar hvort tiltekið fylki sé ekki tómt og hvort öll stök þess séu `Map`-tilvik.

### Notkunartilvik

Staðfesta óþekkt inntak (t.d. úr JSON-parsun, ytri API-um eða kvikum upprunum) áður en það er meðhöndlað sem ekki tómur
listi af `Map`-hlutum.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Skilar `false` fyrir tómt fylki; það skilar aðeins `true` þegar fylkið er fyllt og hvert stak er `Map`.

### Kostir

- Tryggir að hvert stak sé tilvik af `Map` og skilar aðeins `true` þegar allt fylkið stenst athugunina.
- Hafnar tómum fylkjum samkvæmt hönnun og kemur þannig í veg fyrir að „engin gögn“ séu óvart samþykkt sem gilt inntak.
- Gagnlegt sem vörður áður en `Map`-sértækar aðgerðir eru framkvæmdar (t.d. `.get()`, `.set()`, ítrun) yfir safn.

## Notkun

### Málfræði

Fall:

- `areMaps(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items er tryggt að vera ótómt fylki af Map-tilvikum í keyrslu
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // ósatt fyrir: tóm fylki, eða fylki sem innihalda eitthvert gildi sem er ekki Map
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areMaps(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 16:13:02 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>