# arePromises

## Përshkrim

`arePromises` përcakton nëse të gjithë elementët në një varg janë instanca `Promise`.

### Rast përdorimi

Validoni që një listë e ndërtuar dinamikisht ose e ofruar nga jashtë përmban vetëm premtime përpara se t’i agregoni (
p.sh., me `Promise.all`).

> **Shënim për përdoruesit e TypeScript:**
>
> Përdorni `arePromises` për të validuar `unknown[]` përpara se të thërrisni `Promise.all` ose operacione të tjera vetëm
> për premtime; kthen `false` për vargje bosh.

### Përparësi

- Siguron që çdo element është një `Promise` përpara se të vazhdoni me logjikë specifike për premtimet.
- Kthen `false` për vargje jo të mbushura, duke parandaluar rezultate të paqarta për hyrje bosh.
- I dobishëm si një mbrojtës në kohë ekzekutimi kur punoni me `unknown[]` nga burime të jashtme.

## Përdorim

### Sintaksë

Funksion:

- `arePromises(array)`

Parametra:

- `array`: Vargu që duhet kontrolluar për instanca të Promise.

### Import lokal i funksionit

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values është një varg instancash Promise në kohë ekzekutimi
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.arePromises(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 23:49:57 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>