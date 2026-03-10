# areBinaries

## Beskrivelse

Kontrollerer, om den angivne værdi er et ikke-tomt array af gyldige binære strenge og returnerer kun `true`, hvis alle
elementer består valideringen.

### Anvendelsestilfælde

Brug `areBinaries`, når du modtager en ukendt liste (f.eks. fra JSON, formularer eller API'er) og skal sikre, at det er
et ikke-tomt array af binære strenge, før du parser eller behandler det.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areBinaries` til at validere ukendt input, før du konverterer binære strenge til tal/BigInts; den sikrer, at
> arrayet ikke er tomt, og at hvert element er en gyldig binær streng.

### Fordele

- Validerer, at en værdi er et ikke-tomt array, hvor hvert element er en gyldig binær streng.
- Returnerer et simpelt boolesk resultat (`true`/`false`), der egner sig til guards, tidlige returneringer og
  inputvalidering.
- Forhindrer efterfølgende parsingfejl ved at afvise arrays, der indeholder en ikke-binær indgang.

## Brug

### Syntaks

Funktion:

- `areBinaries(array)`

Parametre:

- `array`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // sand
console.log(areBinaries(b)); // falsk
console.log(areBinaries([])); // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areBinaries(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 23:14:14 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>