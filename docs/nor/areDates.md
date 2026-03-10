# areDates

## Beskrivelse

`areDates` avgjør om en gitt matrise er utfylt og kun inneholder `Date`-objekter, og returnerer `true` bare når alle
elementene er gyldige datoer.

### Brukstilfelle

Bruk `areDates` til å validere ukjent input (f.eks. parsede JSON-data, skjemadata, API-payloads) før du kjører
dato-spesifikk logikk som sortering etter tid, formatering eller beregning av intervaller.

> **Merknad for TypeScript-brukere:**
>
> Returnerer `true` kun for ikke-tomme matriser der hvert element er en `Date`; tomme matriser gir `false`.

### Fordeler

- Sikrer at en matrise ikke er tom før innholdet valideres, og forhindrer `true` for tomme inndata.
- Verifiserer at hvert element er en `Date`-instans, og returnerer `false` umiddelbart ved første avvik.
- Nyttig som en guard-lignende sjekk før du utfører dato-spesifikke operasjoner på elementer i matrisen.

## Bruk

### Syntaks

Funksjon:

- `areDates(array)`

Parametere:

- `array`: Matrisen som skal sjekkes for `Date`-objekter.

### Lokal funksjonsimport

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // sant
console.log(areDates(b)); // falsk
console.log(areDates(c)); // falsk

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areDates(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areDates](../_analysis/areDates.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 15:31:44 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>