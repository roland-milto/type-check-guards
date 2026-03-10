# isFalse

## Lýsing

`isFalse` athugar hvort tiltekið gildi sé stranglega jafnt boolean-bókstafnum `false`.

### Notkunartilvik

Staðfesta óþekkt gögn (t.d. úr JSON, fyrirspurnarbreytum eða notandainntaki) þar sem aðeins hið skýra boolean-gildi
`false` ætti að teljast gilt flagg, og öllu öðru ætti að hafna.

> **Athugasemd fyrir TypeScript-notendur:**
>
> Notaðu `isFalse` þegar þú þarft að samþykkja aðeins bókstafinn `false` og hafna öllum öðrum falsy gildum; það skilar
`true` aðeins fyrir `value === false`.

### Kostir

- Veitir strangt próf fyrir boolean-bókstafinn `false` án þvingunar.
- Hjálpar til við að greina `false` frá öðrum falsy gildum eins og `0`, `""`, `null` og `undefined`.
- Bætir læsileika með því að gera ásetning skýran þegar óþekkt inntak er staðfest.

## Notkun

### Málfræði

Fall:

- `isFalse(value)`

Færibreytur:

- `value`: Gildið sem á að athuga.

### Staðbundinn innflutningur á falli

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input er nákvæmlega false hér
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Alheimsinnflutningur á hlut

Til að flytja inn föllin sem alheims aðferðir hlutar, notaðu:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Eftirfarandi aðferð verður þá aðgengileg á alheimsvísu:

- `Type.isFalse(value)`

## Fallagreining

Hér er skjalfest töflugreining á því hvaða úttak verður til þegar mismunandi færibreytum er slegið inn í
föllin: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Skráin var búin til 31 January 2026 at 16:21:58 (UTC) með notkun *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>