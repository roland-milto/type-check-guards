# arePromises

## Lýsing

`arePromises` ákvarðar hvort öll stök í fylki séu `Promise`-tilvik.

### Notkunartilvik

Staðfestu að listi sem er byggður á keyrslutíma eða kemur frá ytri aðila innihaldi eingöngu loforð áður en þau eru
sameinuð (t.d. með `Promise.all`).

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `arePromises` til að staðfesta `unknown[]` áður en þú kallar á `Promise.all` eða aðrar aðgerðir sem eru
> eingöngu fyrir loforð; það skilar `false` fyrir tóm fylki.

### Kostir

- Tryggir að hvert stak sé `Promise` áður en þú heldur áfram með rökfræði sem er sértæk fyrir loforð.
- Skilar `false` fyrir ófyllt fylki, sem kemur í veg fyrir óljósar niðurstöður fyrir tóm inntök.
- Gagnlegt sem keyrslutímavörn þegar unnið er með `unknown[]` frá ytri aðilum.

## Notkun

### Málfræði

Fall:

- `arePromises(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til `Promise`-tilvika.

### Staðbundinn innflutningur á falli

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values er fylki af Promise-tilvikum í keyrslutíma
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.arePromises(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 23:48:43 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>