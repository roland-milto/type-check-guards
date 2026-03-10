# areWeakMaps

## Lýsing

`areWeakMaps` athugar hvort gildi sé ekki tómt fylki þar sem hvert stak er `WeakMap`, og skilar aðeins `true` í því
tilviki en `false` annars.

### Notkunartilvik

Staðfestu keyrslugögn (t.d. þáttað JSON, inntak viðbóta eða lauslega týpaða stillingu) til að tryggja að þau séu ekki
tómt fylki af `WeakMap`-tilvikum áður en itererað er og kallað á `WeakMap`-aðferðir; skilar `false` þegar eitthvert stak
er ekki `WeakMap` eða þegar fylkið er tómt.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areWeakMaps` til að staðfesta óþekkt inntak áður en það er meðhöndlað sem ekki tómt `WeakMap[]`; það skilar
`false` fyrir tóm fylki.

### Kostir

- Tryggir að hvert stak í uppgefna fylkinu sé tilvik af `WeakMap`.
- Skilar `false` fyrir tóm fylki, sem kemur í veg fyrir að „engin gögn“ séu óvart samþykkt sem gilt inntak.
- Gagnlegt sem vörður áður en `WeakMap`-sértækar aðgerðir eru framkvæmdar á öllum stökum.

## Notkun

### Málfræði

Fall:

- `areWeakMaps(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til `WeakMap`-tilvika.

### Staðbundinn innflutningur á falli

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // listi er ekki-tómt fylki af WeakMap-tilvikum
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // ekki ekki-tómt WeakMap[]
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areWeakMaps(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 13:37:45 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>