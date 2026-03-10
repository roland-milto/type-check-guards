# isValidDate

## Beskrivelse

`isValidDate` kontrollerer, om en given værdi er et gyldigt `Date`-objekt og returnerer kun `true` for ægte,
ikke-ugyldige datoer.

### Anvendelsestilfælde

Validér brugerinput eller API-data, der kan indeholde datoer, og sørg for, at værdien er en ægte `Date`-instans og ikke
en ugyldig dato, før du udfører datoberegninger, formatering eller sammenligninger.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isValidDate` før du kalder `Date`-metoder (f.eks. `toISOString`, `getTime`) på værdier, der er typet som
`unknown`, for at sikre, at de er gyldige `Date`-objekter.

### Fordele

- Sikrer, at en værdi er en `Date`-instans og ikke blot en dato-lignende streng eller et tal.
- Afviser ugyldige datoer (f.eks. `new Date("invalid")`) ved at tjekke for `NaN`-tidsværdier.
- En simpel boolesk guard, der er nem at bruge i betingelser og valideringspipelines.
- Hjælper med at forhindre runtime-fejl ved kald af datometoder ved først at verificere inputtet.

## Brug

### Syntaks

Funktion:

- `isValidDate(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres.

### Lokal import af funktion

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input er en gyldig Date-instans
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // falsk
console.log(isValidDate("2025-12-22")); // falsk

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isValidDate(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 16:39:33 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>