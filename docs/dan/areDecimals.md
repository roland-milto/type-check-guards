# areDecimals

## Beskrivelse

Kontrollerer, om alle elementer i et array er decimaltal, og om arrayet er udfyldt, og returnerer `true` eller `false`.

### Anvendelsestilfælde

Validér brugerleverede lister (f.eks. CSV-kolonner eller formularinput) for at sikre, at arrayet ikke er tomt, og at
hver post er en decimalværdi før parsing eller beregninger.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areDecimals`, når du har brug for et hurtigt boolesk tjek af, at et `unknown[]` ikke er tomt, og at hvert
> element er en decimalrepræsentation.

### Fordele

- Sikrer, at inputtet er et udfyldt array, før elementerne valideres, hvilket forhindrer utilsigtet accept af tomme
  lister.
- Validerer hvert element med `isDecimal`, så blandede eller ugyldige værdier giver et øjeblikkeligt `false`-resultat.
- Giver et simpelt boolesk udfald (`true`/`false`), velegnet til guards og valideringsflows med tidlig returnering.

## Brug

### Syntaks

Funktion:

- `areDecimals(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres.

### Lokal import af funktion

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // sand
console.log(areDecimals(b)); // falsk
console.log(areDecimals(c)); // falsk
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areDecimals(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 15:56:49 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>