# arePromises

## Beskrivelse

`arePromises` avgjør om alle elementene i en array er `Promise`-instanser.

### Brukstilfelle

Valider at en dynamisk bygget eller eksternt levert liste kun inneholder promises før du aggregerer dem (f.eks. med
`Promise.all`).

> **Merknad for TypeScript-brukere:**
>
> Bruk `arePromises` til å validere `unknown[]` før du kaller `Promise.all` eller andre operasjoner som kun gjelder
> promises; den returnerer `false` for tomme arrayer.

### Fordeler

- Sikrer at hvert element er en `Promise` før du går videre med promise-spesifikk logikk.
- Returnerer `false` for ikke-utfylte arrayer, noe som forhindrer tvetydige resultater for tomme inndata.
- Nyttig som en runtime-guard når du jobber med `unknown[]` fra eksterne kilder.

## Bruk

### Syntaks

Funksjon:

- `arePromises(array)`

Parametere:

- `array`: Arrayen som skal sjekkes for Promise-instanser.

### Lokal funksjonsimport

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values er en matrise av Promise-instanser ved kjøring
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.arePromises(array)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 23:49:19 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>