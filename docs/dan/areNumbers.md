# areNumbers

## Beskrivelse

`areNumbers` tjekker, om en værdi er et ikke-tomt array, hvor alle elementer er tal.

### Anvendelsestilfælde

Validér brugerleverede eller API-leverede data for at sikre, at det er et ikke-tomt array af tal, før du beregner
totaler, gennemsnit eller andre numeriske aggregeringer.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areNumbers` til at validere ukendte arrays, før du udfører numeriske beregninger; den returnerer `false` for
> tomme arrays og for arrays, der indeholder en hvilken som helst ikke-talværdi.

### Fordele

- Returnerer kun `true`, når inputtet er et ikke-tomt array, og hvert element er et tal.
- Forhindrer falske positiver ved at afvise tomme arrays og input, der ikke er arrays.
- Nyttig som en guard før numeriske operationer (f.eks. summering, gennemsnit) for at undgå runtime-fejl.

## Brug

### Syntaks

Funktion:

- `areNumbers(array)`

Parametre:

- `array`: Det array, der skal kontrolleres for tal-elementer.

### Lokal import af funktion

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areNumbers(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 13:04:01 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>