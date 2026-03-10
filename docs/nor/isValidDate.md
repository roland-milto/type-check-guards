# isValidDate

## Beskrivelse

`isValidDate` sjekker om en gitt verdi er et gyldig `Date`-objekt og returnerer `true` kun for ekte, ikke-ugyldige
datoer.

### Brukstilfelle

Valider brukerinput eller API-data som kan inneholde datoer, og sørg for at verdien er en ekte `Date`-instans og ikke en
ugyldig dato før du utfører datoberegninger, formatering eller sammenligninger.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isValidDate` før du kaller `Date`-metoder (f.eks. `toISOString`, `getTime`) på verdier typet som `unknown` for å
> sikre at de er gyldige `Date`-objekter.

### Fordeler

- Sikrer at en verdi er en `Date`-instans og ikke bare en datolignende streng eller et tall.
- Avviser ugyldige datoer (f.eks. `new Date("invalid")`) ved å sjekke etter `NaN`-tidsverdier.
- En enkel boolsk guard som er lett å bruke i betingelser og valideringspipelines.
- Bidrar til å forhindre kjøretidsfeil når du kaller datometoder ved å verifisere inputen først.

## Bruk

### Syntaks

Funksjon:

- `isValidDate(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input ke instance ya Date ya malamu
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isValidDate(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 16:52:10 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>