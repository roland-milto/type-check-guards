# areDecimals

## Lýsing

Athugar hvort öll stök í fylki séu tugabrotatölur og að fylkið sé fyllt, og skilar `true` eða `false`.

### Notkunartilvik

Staðfesta lista sem notendur leggja fram (t.d. CSV-dálka eða innslátt í eyðublöð) til að tryggja að fylkið sé ekki tómt
og að hver færsla sé tugabrotagildi áður en það er þáttað eða reiknað.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areDecimals` þegar þú þarft skjóta boole-athugun á því að `unknown[]` sé ekki tómt og að hvert stak sé
> tugabrotatjáning.

### Kostir

- Tryggir að inntakið sé fyllt fylki áður en atriði eru staðfest, sem kemur í veg fyrir að tómir listar séu óvart
  samþykktir.
- Staðfestir hvert stak með `isDecimal`, þannig að blönduð eða ógild gildi leiða strax til `false` niðurstöðu.
- Veitir einfalda boole-útkomu (`true`/`false`) sem hentar fyrir vörður og staðfestingarflæði með snemmbúinni skilum.

## Notkun

### Málfræði

Fall:

- `areDecimals(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // satt
console.log(areDecimals(b)); // ósatt
console.log(areDecimals(c)); // ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areDecimals(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 15:57:41 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>