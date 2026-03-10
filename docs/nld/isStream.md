# isStream

## Beschrijving

`isStream` controleert of een gegeven waarde een streamobject is (Node.js stream-achtig, `ReadableStream` of
`WritableStream`).

### Use case

Valideer invoer die zowel gewone objecten als streams kan zijn (bijv. bestandsuploads, HTTP-bodies of
verwerkingspipelines) en vertak de logica op basis van of de waarde een stream is.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isStream` om `unknown` te verfijnen voordat je streammethoden aanroept; het herkent Node.js stream-achtige
> objecten (via `pipe`/`on`) en Web Streams (`ReadableStream`/`WritableStream`) wanneer die globals bestaan.

### Voordelen

- Detecteert veilig veelvoorkomende Node.js stream-achtige objecten door te controleren op `pipe`- en `on`-functies.
- Ondersteunt ook Web Streams door `ReadableStream` en `WritableStream` te herkennen wanneer beschikbaar.
- Geeft een eenvoudig booleaans resultaat (`true`/`false`) terug dat geschikt is voor guards en vertakkingslogica.

## Gebruik

### Syntax

Functie:

- `isStream(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream is stream-achtig; je kunt veilig veelgebruikte stream-API's gebruiken
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isStream(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isStream](../_analysis/isStream.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 23:42:13 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>