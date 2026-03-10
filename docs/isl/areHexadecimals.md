# areHexadecimals

## Lýsing

Athugar hvort öll stök í fylki séu sextándakerfisstrengir og skilar `true` aðeins fyrir ó-tóm fylki þar sem hvert atriði
er gilt.

### Notkunartilvik

Notaðu `areHexadecimals` til að staðfesta notandainntak eða ytri gögn (t.d. auðkenni, gátsummur, litakóða án
fremsta '#') áður en sextándakerfisþáttun eða frekari vinnsla fer fram.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `areHexadecimals` til að staðfesta óþekkt inntak áður en gildi eru þáttað eða umbreytt (til dæmis áður en
`parseInt(value, 16)` er notað eða umbreytingar í BigInt).

### Kostir

- Staðfestir að hvert stak sé sextándakerfisstrengur og skilar `true` aðeins þegar öll atriði passa.
- Hafnar tómum fylkjum samkvæmt hönnun og skilar `false` þegar inntaksgögn vantar.
- Veitir einfalda boole-gildi niðurstöðu (`true`/`false`) sem hentar fyrir vörður og staðfestingu með
  snemm-tilbaka-skilum.

## Notkun

### Málfræði

Fall:

- `areHexadecimals(array)`

Færibreytur:

- `array`: Fylkið sem á að athuga með tilliti til sextándakerfisstrengja.

### Staðbundinn innflutningur á falli

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.areHexadecimals(array)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 23:06:38 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>