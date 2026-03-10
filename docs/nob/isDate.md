# isDate

## Beskrivelse

`isDate` avgjør om en gitt verdi er en `Date`, og returnerer `true` for `Date`-instanser og `false` ellers.

### Brukstilfelle

Valider og snevre inn ukjente verdier (f.eks. forespørselsdata, konfigurasjonsverdier eller parsede JSON-data) før du
utfører `Date`-operasjoner som formatering, sammenligninger eller å kalle `toISOString()`.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isDate` for å snevre inn `unknown` til `Date` ved runtime; den returnerer `true` kun for faktiske `Date`
> -instanser (ikke datostrenger).

### Fordeler

- Den gir en enkel runtime-sjekk for å verifisere om en verdi er en `Date`.
- Den bidrar til å forhindre typefeil ved å sikre at bare `Date`-instanser består valideringen.
- Den er nyttig for å validere ukjente inndata (f.eks. API-payloads) før man bruker dato-spesifikke metoder.

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
  // input er en Date her
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

<small>Filen ble generert 31 January 2026 at 15:47:07 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>