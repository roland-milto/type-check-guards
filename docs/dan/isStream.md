# isStream

## Beskrivelse

`isStream` kontrollerer, om en given værdi er et stream-objekt (Node.js stream-lignende, `ReadableStream` eller
`WritableStream`).

### Anvendelsestilfælde

Validér input, der kan være enten almindelige objekter eller streams (f.eks. filuploads, HTTP-bodies eller
behandlingspipelines), og forgren logikken baseret på, om værdien er en stream.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isStream` til at indsnævre `unknown`, før du kalder stream-metoder; den genkender Node.js stream-lignende
> objekter (via `pipe`/`on`) og Web Streams (`ReadableStream`/`WritableStream`), når disse globals findes.

### Fordele

- Registrerer sikkert almindelige Node.js stream-lignende objekter ved at tjekke for `pipe`- og `on`-funktioner.
- Understøtter også Web Streams ved at genkende `ReadableStream` og `WritableStream`, når de er tilgængelige.
- Returnerer et simpelt boolesk resultat (`true`/`false`), der egner sig til guards og forgreningslogik.

## Brug

### Syntaks

Funktion:

- `isStream(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream er strømlignende; du kan trygt bruge almindelige stream-API'er
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isStream(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isStream](../_analysis/isStream.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 23:39:21 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>