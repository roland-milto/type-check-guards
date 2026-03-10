# areOctals

## Beskrivelse

`areOctals` avgjør om den oppgitte verdien er en ikke-tom matrise med gyldige oktale strenger.

### Brukstilfelle

Bruk `areOctals` når du validerer brukerinput, konfigurasjonsverdier eller API-nyttelaster som må inneholde oktale
litteraler (f.eks. filrettighetsmoduser som `0o755`), og du vil avvise tomme matriser eller ugyldige oppføringer ved å
returnere `false`.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areOctals` for å sikre at du har en ikke-tom `unknown[]` der hver oppføring er en gyldig oktal streng før
> konvertering (f.eks. via `Number(...)` eller egendefinert parsing).

### Fordeler

- Validerer at en verdi er en ikke-tom matrise der hvert element er en oktal streng, og returnerer `true` bare når alle
  elementer består.
- Feiler raskt: returnerer `false` så snart et ikke-oktalt element blir funnet.
- Nyttig som en vakt før parsing eller konvertering av oktale strenger for å unngå kjøretidsfeil og inkonsekvent
  håndtering av inndata.

## Bruk

### Syntaks

Funksjon:

- `areOctals(array)`

Parametere:

- `array`: Verdien som skal kontrolleres.

### Lokal funksjonsimport

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value ke lenaneo yeo e se nago selo ya dithapo tša octal
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areOctals(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 14:57:37 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>