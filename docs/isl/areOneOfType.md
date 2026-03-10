# areOneOfType

## Lýsing

`areOneOfType` athugar hvort öll stök í ó-tómu fylki séu af einni af tilgreindum keyrslutegundum.

### Notkunartilvik

Sannreyna innkomin gögn (t.d. þáttað JSON) þar sem reitur verður að vera ó-tómt fylki og stök þess eru takmörkuð við
þekkt mengi frumstæðra tegunda; skila `false` þegar fylkið er tómt eða inniheldur einhverja óleyfilega tegund.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Þetta fall skilar boolean og þrengir ekki tegundir fylkisstaka á þýðingartíma; notaðu það sem keyrslusannprófunarskref
> áður en frekari vinnsla fer fram.

### Kostir

- Tryggir að hvert stak í fylki samsvari að minnsta kosti einni leyfilegri keyrslutegund, og skilar aðeins `true` þegar
  allt fylkið stenst.
- Hafnar ógildum inntökum snemma: skilar `false` þegar `array` eða `types` er tómt eða ekki fyllt fylki.
- Gagnlegt til að sannreyna söfn með blönduðum tegundum (t.d. tölur og strengi) með einni köllun á `areOneOfType`.

## Notkun

### Málfræði

Fall:

- `areOneOfType(array, types)`

Færibreytur:

- `array`: Fylki af stökum sem á að sannreyna gegn uppgefnum tegundum.
- `types`: Fylki af strengjum sem tákna gagnategundirnar sem á að athuga gegn.

### Staðbundinn innflutningur á falli

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areOneOfType(array, types)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 23:37:20 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>