# isDate

## Beskrivelse

`isDate` avgjør om en gitt verdi er en `Date`, og returnerer `true` for `Date`-instanser og `false` ellers.

### Brukstilfelle

Valider og snevre inn ukjente verdier (f.eks. forespørselsdata, konfigurasjonsverdier eller tolket JSON) før du utfører
`Date`-operasjoner som formatering, sammenligninger eller kall til `toISOString()`.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isDate` for å snevre inn `unknown` til `Date` ved kjøretid; den returnerer `true` kun for faktiske `Date`
> -instanser (ikke datostrenger).

### Fordeler

- Den gir en enkel kjøretidskontroll for å verifisere om en verdi er en `Date`.
- Den bidrar til å forhindre typefeil ved å sikre at bare `Date`-instanser passerer validering.
- Den er nyttig for å validere ukjente inndata (f.eks. API-nyttelaster) før man bruker datospesifikke metoder.

## Bruk

### Syntaks

Funksjon:

- `isDate(value)`

Parametere:

- `value`: Verdien som skal sjekkes for `Date`-type.

### Lokal funksjonsimport

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input er ein Date her
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isDate(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isDate](../_analysis/isDate.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 15:47:10 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>