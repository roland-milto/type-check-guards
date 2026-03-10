# isDecimal

## Lýsing

`isDecimal` athugar hvort gildi sé tugabrotastrengjaframsetning án bila fremst/aftast og með giltu tugabrotasniði.

### Notkunartilvik

Staðfesta reiti í eyðublöðum, API-farm eða stillingagildi sem verða að vera gefin upp sem tugabrotastrengur (valfrjálst
með formerki) án nokkurra bila í kring, áður en þau eru túlkuð eða vistuð.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isDecimal` til að staðfesta inntak notanda áður en því er umbreytt (t.d. með `Number(value)`), sérstaklega
> þegar bilum verður að vera hafnað.

### Kostir

- Staðfestir með ströngum hætti að inntakið sé strengur og passi við mynstur fyrir tugabrotstölustafsetningu.
- Hafnar bilum fremst og aftast (þar á meðal stýritáknum) til að forðast tvíræða túlkun.
- Hraðar forathuganir (gerðathugun og fyrsta/síðasta staf) áður en reglulega segðin er keyrð.
- Skilar einfaldri boolean-niðurstöðu (`true`/`false`) sem hentar fyrir vörður og inntaksstaðfestingu.

## Notkun

### Málfræði

Fall:

- `isDecimal(value)`

Færibreytur:

- `value`: Gildið sem á að athuga hvort sé á tugabrotastrengjasniði.

### Staðbundinn innflutningur á falli

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v er strengur hér (staðfest í keyrslu)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isDecimal(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 15:52:56 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>