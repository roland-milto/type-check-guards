# areOctals

## Lýsing

`areOctals` ákvarðar hvort uppgefið gildi sé ótómt fylki af gildum áttundastrengjum.

### Notkunartilvik

Notaðu `areOctals` þegar þú staðfestir notandainntak, stillingagildi eða API-farm sem verða að innihalda
áttundabókstafi (t.d. skráarheimildarhamir eins og `0o755`) og þú vilt hafna tómum fylkjum eða öllum ógildum færslum með
því að skila `false`.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areOctals` til að tryggja að þú sért með ótómt `unknown[]` þar sem hver færsla er gildur áttundastrengur áður
> en þú umbreytir (t.d. með `Number(...)` eða sérsniðinni þáttun).

### Kostir

- Staðfestir að gildi sé ótómt fylki þar sem hvert stak er áttundastrengur, og skilar `true` aðeins þegar öll stök
  standast.
- Bregst hratt: skilar `false` um leið og stak sem er ekki áttundatala finnst.
- Gagnlegt sem vörður áður en áttundastrengir eru þáttaðir eða umbreyttir til að forðast keyrsluvillur og ósamræmda
  meðhöndlun inntaks.

## Notkun

### Málfræði

Fall:

- `areOctals(array)`

Færibreytur:

- `array`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value er fylki sem er ekki tómt af áttundastrengjum
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areOctals(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 14:56:35 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>