# arePromises

## Skildring

`arePromises` avgjer om alle element i eit array er `Promise`-instansar.

### Brukstilfelle

Valider at ei dynamisk bygd eller eksternt levert liste berre inneheld promises før du aggregerer dei (t.d. med
`Promise.all`).

> **Merknad for TypeScript-brukarar:**
>
> Bruk `arePromises` til å validere `unknown[]` før du kallar `Promise.all` eller andre operasjonar som berre gjeld
> promises; det returnerer `false` for tomme array.

### Fordelar

- Sikrar at kvart element er ein `Promise` før du går vidare med promise-spesifikk logikk.
- Returnerer `false` for ikkje-fylte array, og hindrar tvetydige resultat for tomme input.
- Nyttig som ein runtime-guard når du jobbar med `unknown[]` frå eksterne kjelder.

## Bruk

### Syntaks

Funksjon:

- `arePromises(array)`

Parameter:

- `array`: Arrayet som skal sjekkast for Promise-instansar.

### Lokal funksjonsimport

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values er ein matrise av Promise-instansar ved køyretid
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.arePromises(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 23:49:19 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>