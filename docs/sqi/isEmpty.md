# isEmpty

## Përshkrim

Përcakton nëse një vlerë e dhënë është e zbrazët, duke kthyer `true` për `null`, `undefined`, vargje bosh/vetëm me
hapësira, vargje (arrays) bosh, `Map`/`Set` bosh, ose objekte pa veti të veta të numërueshme.

### Rast përdorimi

Përdorni `isEmpty` për të validuar hyrjet dhe për të zbuluar vlera që mungojnë/janë bosh nëpër disa lloje të dhënash (
p.sh., fusha formulari, payload-e API, objekte konfigurimi) ku `null`, `undefined`, vargjet vetëm me hapësira,
koleksionet bosh dhe objektet pa veti duhet të trajtohen si të zbrazëta.

> **Shënim për përdoruesit e TypeScript:**
>
> `isEmpty` është një mjet që kthen boolean (jo një predikat tipi TypeScript), prandaj nuk i ngushton tipet vetvetiu;
> përdoreni për validim/degëzim në vend të ngushtimit në kohë kompilimi.

### Përparësi

- I trajton `null` dhe `undefined` si `true` për kontrollet e zbrazëtisë.
- I konsideron vargjet vetëm me hapësira si të zbrazëta duke i prerë (trim) para se të kontrollojë gjatësinë.
- Mbështet lloje të zakonshme kontejnerësh (vargje, `Map`, `Set`) dhe objekte të thjeshta pa veti të veta të
  numërueshme.
- Shmang numërimin e vetive të trashëguara duke përdorur kontrolle `hasOwnProperty`.
- Kthen një rezultat të thjeshtë boolean (`true`/`false`) të përshtatshëm për roje (guards) dhe validim.

## Përdorim

### Sintaksë

Funksion:

- `isEmpty(value)`

Parametra:

- `value`: Vlera që duhet kontrolluar për zbrazëti.

### Import lokal i funksionit

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isEmpty(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Skedari u gjenerua më 6 February 2026 at 16:20:54 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>