# isDate

## Beskrivelse

`isDate` afgør, om en angivet værdi er en `Date`, og returnerer `true` for `Date`-instanser og ellers `false`.

### Anvendelsestilfælde

Validér og indsnævr ukendte værdier (f.eks. request-data, konfigurationsværdier eller parsed JSON), før der udføres
`Date`-operationer såsom formatering, sammenligninger eller kald af `toISOString()`.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `isDate` til at indsnævre `unknown` til `Date` ved runtime; den returnerer kun `true` for faktiske `Date`
> -instanser (ikke datostringe).

### Fordele

- Giver en enkel runtime-guard til at verificere, om en værdi er en `Date`.
- Hjælper med at forhindre typefejl ved at sikre, at kun `Date`-instanser består valideringen.
- Nyttig til at validere ukendte input (f.eks. API-payloads), før der bruges dato-specifikke metoder.

## Brug

### Syntaks

Funktion:

- `isDate(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for `Date`-typen.

### Lokal import af funktion

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input er en Date her
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isDate(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isDate](../_analysis/isDate.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 15:37:00 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>