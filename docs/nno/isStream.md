# isStream

## Skildring

`isStream` sjekkar om ein gitt verdi er eit straumobjekt (Node.js-straumliknande, `ReadableStream` eller
`WritableStream`).

### Brukstilfelle

Valider inndata som kan vere anten vanlege objekt eller straumar (t.d. filopplastingar, HTTP-kroppar eller
prosesseringsrøyrleidningar) og forgrein logikken basert på om verdien er ein straum.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isStream` til å snevre inn `unknown` før du kallar straummetodar; han kjenner att Node.js-straumliknande
> objekt (via `pipe`/`on`) og Web Streams (`ReadableStream`/`WritableStream`) når desse globalane finst.

### Fordelar

- Oppdagar vanlege Node.js-straumliknande objekt på ein trygg måte ved å sjekke etter `pipe`- og `on`-funksjonar.
- Støttar òg Web Streams ved å kjenne att `ReadableStream` og `WritableStream` når dei er tilgjengelege.
- Returnerer eit enkelt boolsk resultat (`true`/`false`) som passar for vaktar og forgreiningslogikk.

## Bruk

### Syntaks

Funksjon:

- `isStream(value)`

Parameter:

- `value`: Verdien som skal sjekkast.

### Lokal funksjonsimport

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream er straum-liknande; du kan trygt bruke vanlege straum-API-ar
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isStream(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isStream](../_analysis/isStream.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 23:42:20 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>