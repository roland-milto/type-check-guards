# areWeakSets

## Lýsing

Athugar hvort inntak sé ótómt fylki þar sem hvert stak er `WeakSet`, og skilar `true` aðeins í því tilviki.

### Notkunartilvik

Staðfesta keyrslutíma-inntak (t.d. frá API-um, stillingum eða gögnum sem notandi leggur til) til að tryggja að þú hafir
ótóman lista af `WeakSet` tilvikum áður en haldið er áfram með rökfræði sem byggir á `WeakSet` hegðun.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areWeakSets` til að staðfesta óþekkt inntak áður en þú meðhöndlar það sem `WeakSet[]`. Það skilar `false`
> fyrir tóm fylki og inntak sem er ekki fylki.

### Kostir

- Tryggir að hvert stak í inntaksfylkinu sé `WeakSet`.
- Skilar `false` fyrir tóm fylki, sem kemur í veg fyrir óviljandi „allt gilt“ niðurstöður þegar gögn vantar.
- Bregst örugglega við með því að skila `false` þegar inntakið er ekki fyllt fylki (þar á meðal `null`).
- Gagnlegt sem vörður áður en aðgerðir eru framkvæmdar sem krefjast `WeakSet` tilvika.

## Notkun

### Málfræði

Fall:

- `areWeakSets(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til `WeakSet` hluta.

### Staðbundinn innflutningur á falli

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a er fylki sem er ekki tómt af WeakSet-tilvikum
}

console.log(areWeakSets(a)); // satt
console.log(areWeakSets(b)); // ósatt
console.log(areWeakSets(c)); // ósatt
console.log(areWeakSets(null as unknown)); // ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areWeakSets(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 14:09:06 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>