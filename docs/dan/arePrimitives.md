# arePrimitives

## Beskrivelse

`arePrimitives` evaluerer, om alle elementer i et angivet, ikke-tomt array er primitive typer.

### Anvendelsestilfælde

Validér, at indkommende data (f.eks. query-parametre, CSV-rækkeværdier eller en liste af ID'er/tags) kun indeholder
primitive værdier, før serialisering, hashing, logning eller før det sendes til API'er, der ikke må modtage objekter.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `arePrimitives`, når du har brug for at sikre, at en `unknown[]` kun indeholder primitive værdier (string,
> number, bigint, boolean, symbol, undefined eller null) før videre behandling.

### Fordele

- Returnerer kun `true`, når hvert element er en primitiv værdi, hvilket gør den til en streng vagt for arrays uden
  “objekter/funktioner”.
- Fejler hurtigt: returnerer `false`, så snart et ikke-primitivt element findes.
- Returnerer også `false` for ikke-arrays og tomme arrays (via tjekket for udfyldt array), hvilket forhindrer utilsigtet
  accept af ugyldigt input.

## Brug

### Syntaks

Funktion:

- `arePrimitives(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for elementer af primitiv type.

### Lokal import af funktion

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // sand
const r2 = arePrimitives(b); // sand
const r3 = arePrimitives(c); // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.arePrimitives(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 00:04:05 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>