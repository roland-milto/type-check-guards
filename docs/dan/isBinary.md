# isBinary

## Beskrivelse

`isBinary` afgør, om en værdi er en binær streng (valgfrit med præfiks `0b`/`0B`) og returnerer `true` eller `false`.

### Anvendelsestilfælde

Validér brugerleverede strenge (f.eks. formularfelter, CLI-argumenter, konfigurationsværdier) for at sikre, at de kun
repræsenterer binære cifre, valgfrit med et `0b`/`0B`-præfiks, før videre behandling.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isBinary` som en type guard før parsing eller konvertering af en streng til `BigInt`/`Number` for at undgå
> ugyldigt input.

### Fordele

- Accepterer binære strenge med eller uden præfikset `0b`/`0B`.
- Afviser tomme strenge og strenge med indledende/efterfølgende mellemrum (ASCII ≤ 32).
- Returnerer `true`/`false` uden at kaste en fejl, hvilket gør den sikker for ukendte input.

## Brug

### Syntaks

Funktion:

- `isBinary(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // sand
const b = isBinary("1010");   // sand
const c = isBinary("0b1020"); // falsk
const d = isBinary(0b1010);     // falsk

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isBinary(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 23:09:33 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>