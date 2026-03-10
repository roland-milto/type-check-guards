# areStrings

## Lýsing

`areStrings` athugar hvort fylki sé ekki tómt og að öll stök þess séu strengir, og skilar `true` aðeins í því tilviki.

### Notkunartilvik

Staðfesta ytri eða notendaveitt gögn (t.d. fyrirspurnarbreytur, JSON-farm, CSV-reiti) til að tryggja að þú hafir lista
af strengjum sem er ekki tómur áður en unnið er úr þeim.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areStrings` til að staðfesta óþekkt fylki áður en strengjaeingöngu rökfræði er beitt; það skilar `false` fyrir
> tóm fylki.

### Kostir

- Tryggir að hvert stak sé strengur og hafnar fylkjum með blönduðum gerðum með því að skila `false`.
- Hafnar tómum fylkjum, þannig að `true` gefur aðeins til kynna lista af strengjum sem er ekki tómur.
- Gagnlegt sem fljótleg keyrslutímavörn áður en strengjaeingöngu aðgerðir eru framkvæmdar (t.d. `trim`, `toLowerCase`).

## Notkun

### Málfræði

Fall:

- `areStrings(value)`

Færibreytur:

- `value`: Expected type `string[]`.

### Staðbundinn innflutningur á falli

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input er ótt og títt ótómt string[] á keyrslutíma
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areStrings(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 13:18:43 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>