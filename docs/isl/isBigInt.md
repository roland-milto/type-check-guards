# isBigInt

## Lýsing

`isBigInt` athugar hvort tiltekið gildi sé af gerðinni `bigint` og skilar `true` fyrir BigInt-frumgildi en `false`
annars.

### Notkunartilvik

Staðfesta og þrengja gildi sem koma frá ógerðbundnum upprunum (t.d. JSON-þáttun, notandainntak, ytri API) áður en
BigInt-sértækir útreikningar eru framkvæmdir eða þau eru vistuð í reitum sem taka aðeins við BigInt.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isBigInt` til að þrengja `unknown` í `bigint` áður en þú framkvæmir BigInt-reikniaðgerðir (t.d. `+`, `*`) sem
> krefjast BigInt-viðfanga.

### Kostir

- Veitir einfalda og áreiðanlega keyrslutímaathugun fyrir frumgerðina `bigint`.
- Hjálpar til við að þrengja `unknown` gildi áður en BigInt-eingöngu aðgerðir eru framkvæmdar.
- Forðast rangar jákvæðar niðurstöður: venjulegar tölur, strengir og aðrar gerðir skila `false`.

## Notkun

### Málfræði

Fall:

- `isBigInt(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // satt
console.log(isBigInt(10));  // ósatt
console.log(isBigInt("10")); // ósatt
```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isBigInt(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 23:32:11 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>