# areOctals

## Skildring

`areOctals` avgjer om den oppgitte verdien er ein ikkje-tom array av gyldige oktalstrengar.

### Brukstilfelle

Bruk `areOctals` når du validerer brukarinput, konfigurasjonsverdiar eller API-nyttelast som må innehalde
oktallitteral (t.d. filrettmodus som `0o755`), og du vil avvise tomme arrayar eller ugyldige oppføringar ved å returnere
`false`.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areOctals` for å sikre at du har ein ikkje-tom `unknown[]` der kvar oppføring er ein gyldig oktalstreng før du
> konverterer (t.d. via `Number(...)` eller eigen parsing).

### Fordelar

- Validerer at ein verdi er ein ikkje-tom array der kvart element er ein oktalstreng, og returnerer `true` berre når
  alle elementa består testen.
- Feilar raskt: returnerer `false` så snart eit ikkje-oktalt element blir funne.
- Nyttig som ein vakt før parsing eller konvertering av oktalstrengar for å unngå køyretidsfeil og inkonsekvent
  handtering av input.

## Bruk

### Syntaks

Funksjon:

- `areOctals(array)`

Parameter:

- `array`: Verdien som skal kontrollerast.

### Lokal funksjonsimport

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value er ein ikkje-tom matrise av oktalstrengar
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areOctals(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 14:57:37 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>