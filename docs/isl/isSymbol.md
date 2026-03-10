# isSymbol

## Lýsing

`isSymbol` ákvarðar hvort tiltekið gildi sé af gerðinni `symbol` og skilar `true` fyrir tákn og `false` annars.

### Notkunartilvik

Staðfestu að `unknown` gildi sé `symbol` áður en það er notað sem einstakt auðkenni, skráningarlykill eða reiknaður
eigindalykill í hlutum og möppum.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isSymbol` til að þrengja `unknown` í `symbol` áður en tákn-tengdar aðgerðir eru kallaðar eða það er notað sem
> reiknaður eigindalykill.

### Kostir

- Veitir einfalda og áreiðanlega keyrslutímaathugun fyrir JavaScript frumgerðina `symbol`.
- Hjálpar til við að þrengja `unknown` gildi áður en tákn-sértæk API eru notuð eða þau geymd sem lyklar.
- Forðast rangar jákvæðar niðurstöður með því að nota `typeof`, sem er kanóníska leiðin til að greina `symbol` gildi.

## Notkun

### Málfræði

Fall:

- `isSymbol(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input er tákn hér
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isSymbol(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Skráin var búin til 30 January 2026 at 14:27:16 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>