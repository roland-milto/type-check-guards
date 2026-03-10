# isDecimal

## Beskrivelse

`isDecimal` kontrollerer, om en værdi er en decimal strengrepræsentation uden indledende/efterfølgende mellemrum og med
et gyldigt decimalformat.

### Anvendelsestilfælde

Validér formularfelter, API-payloads eller konfigurationsværdier, der skal angives som en decimal streng (valgfrit med
fortegn) uden nogen omgivende mellemrum, før de parses eller gemmes.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isDecimal` til at validere brugerinput, før du konverterer det (f.eks. med `Number(value)`), især når mellemrum
> skal afvises.

### Fordele

- Validerer strengt, at inputtet er en streng og matcher et decimal-literal-mønster.
- Afviser indledende og efterfølgende mellemrum (inklusive kontroltegn) for at undgå tvetydig parsing.
- Hurtige for-tjek (typekontrol og første/sidste tegn) før regexen køres.
- Returnerer et simpelt boolesk resultat (`true`/`false`), velegnet til guards og inputvalidering.

## Brug

### Syntaks

Funktion:

- `isDecimal(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for et decimalt strengformat.

### Lokal import af funktion

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v er en streng her (runtime-valideret)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isDecimal(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 15:51:53 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>