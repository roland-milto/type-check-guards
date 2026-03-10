# areObjects

## Lýsing

`areObjects` athugar hvort gefið fyllt fylki innihaldi eingöngu hluti.

### Notkunartilvik

Notaðu `areObjects` þegar þú færð óþekkt fylki (t.d. úr JSON-þáttun eða ytri API-um) og þarft að tryggja að það sé ekki
tómt og að hvert stak sé hlutur áður en þú ítrar og nálgast eigindi hluta.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areObjects` til að sannreyna `unknown[]` áður en þú meðhöndlar stök sem hluti; það skilar `false` fyrir tóm
> fylki.

### Kostir

- Skilar `true` aðeins þegar inntakið er fyllt fylki og hvert stak er hlutur.
- Stöðvar snemma og skilar `false` um leið og stak sem er ekki hlutur finnst.
- Hjálpar til við að sannreyna óþekkt inntak áður en framkvæmdar eru aðgerðir sem eru sértækar fyrir hluti.

## Notkun

### Málfræði

Fall:

- `areObjects(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til þess hvort stök þess séu hlutir.

### Staðbundinn innflutningur á falli

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value er fyllt fylki af hlutum
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areObjects(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 00:09:10 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>