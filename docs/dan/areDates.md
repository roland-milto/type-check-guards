# areDates

## Beskrivelse

`areDates` afgør, om et givent array er udfyldt og kun indeholder `Date`-objekter, og returnerer kun `true`, når alle
elementer er gyldige datoer.

### Anvendelsestilfælde

Brug `areDates` til at validere ukendt input (f.eks. parsed JSON, formulardata, API-payloads), før du kører
dato-specifik logik som sortering efter tid, formatering eller beregning af intervaller.

> **Bemærkning til TypeScript-brugere:**
>
> Returnerer kun `true` for ikke-tomme arrays, hvor hvert element er en `Date`; tomme arrays giver `false`.

### Fordele

- Sikrer, at et array ikke er tomt, før dets indhold valideres, hvilket forhindrer `true` for tomme input.
- Verificerer, at hvert element er en `Date`-instans, og returnerer straks `false` ved den første uoverensstemmelse.
- Nyttig som en guard-lignende kontrol, før der udføres dato-specifikke operationer på array-elementer.

## Brug

### Syntaks

Funktion:

- `areDates(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for `Date`-objekter.

### Lokal import af funktion

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // sand
console.log(areDates(b)); // falsk
console.log(areDates(c)); // falsk

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areDates(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areDates](../_analysis/areDates.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 15:29:57 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>