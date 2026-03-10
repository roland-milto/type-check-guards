# isValidDate

## Skildring

`isValidDate` sjekkar om ein gitt verdi er eit gyldig `Date`-objekt og returnerer `true` berre for ekte, ikkje-ugyldige
datoar.

### Brukstilfelle

Valider brukarinput eller API-data som kan innehalde datoar, og sikre at verdien er ein ekte `Date`-instans og ikkje ein
ugyldig dato før du utfører datoutrekningar, formatering eller samanlikningar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isValidDate` før du kallar `Date`-metodar (t.d. `toISOString`, `getTime`) på verdiar typa som `unknown` for å
> sikre at dei er gyldige `Date`-objekt.

### Fordelar

- Sikrar at ein verdi er ein `Date`-instans og ikkje berre ein dato-liknande streng eller eit tal.
- Avviser ugyldige datoar (t.d. `new Date("invalid")`) ved å sjekke etter `NaN`-tidsverdiar.
- Enkel boolsk vakt som er lett å bruke i vilkår og valideringspipelines.
- Hjelper med å hindre køyretidsfeil når ein kallar datometodar ved å verifisere inputen først.

## Bruk

### Syntaks

Funksjon:

- `isValidDate(value)`

Parameter:

- `value`: Verdien som skal sjekkast.

### Lokal funksjonsimport

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input er ein gyldig Date-instans
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isValidDate(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 16:52:09 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>