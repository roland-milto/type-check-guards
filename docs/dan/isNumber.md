# isNumber

## Beskrivelse

`isNumber` kontrollerer, om en værdi er et endeligt tal, der ikke er `NaN`.

### Anvendelsestilfælde

Validér numerisk input fra ikke-betroede kilder (formularer, query-parametre, JSON-payloads) før beregninger, lagring
eller intervalkontroller, så kun endelige tal godkendes (`true`), og alt andet returnerer `false`.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isNumber` til at validere `unknown`-værdier, før du laver aritmetik; den afviser `NaN`, `Infinity` og
`-Infinity`.

### Fordele

- Returnerer kun `true` for ægte JavaScript-tal (typekontrol plus afvisning af `NaN` og uendelighed).
- Forhindrer almindelige valideringsfejl, hvor `NaN`, `Infinity` eller `-Infinity` ved et uheld bliver godkendt som tal.
- Fungerer godt som en runtime-guard for ukendt input (f.eks. JSON, brugerinput, eksterne API'er).
- Simpel, hurtig og uden bivirkninger.

## Brug

### Syntaks

Funktion:

- `isNumber(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input er et gyldigt endeligt tal
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isNumber(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 13:08:41 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>