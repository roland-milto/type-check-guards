# areBuffers

## Beskrivelse

`areBuffers` kontrollerer, om den angivne værdi er et ikke-tomt, udfyldt array, hvor hvert element er en `Buffer`, og
returnerer `true` i så fald og ellers `false`.

### Anvendelsestilfælde

Validér indkommende chunk-arrays (f.eks. fra streams, filuploads eller netværkspakker) for at sikre, at alle dele er
`Buffer`-instanser, før de sammenkædes, afkodes eller sendes videre til kryptografiske eller binærbehandlende
funktioner.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areBuffers` til at validere `unknown[]` før kald til Buffer-specifikke API'er som `Buffer.concat`, så funktionen
> kun returnerer `true`, når hvert element er en `Buffer`.

### Fordele

- Sikrer, at hvert element i inputtet er en Node.js-`Buffer`-instans, og returnerer kun `true`, når hele arrayet
  matcher.
- Afviser ugyldige input tidligt ved at kræve et ikke-tomt, udfyldt array; returnerer `false` for tomme arrays eller
  ikke-arrays.
- Nyttig som en guard før buffer-kun-operationer (f.eks. sammenkædning, hashing, binære protokoller).

## Brug

### Syntaks

Funktion:

- `areBuffers(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for buffer-instanser.

### Lokal import af funktion

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areBuffers(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 16:24:48 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>