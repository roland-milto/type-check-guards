# areBooleans

## Përshkrim

`areBooleans` kontrollon nëse një varg i dhënë jo-bosh përmban vetëm vlera boolean, duke kthyer `true` nëse po dhe
`false` përndryshe.

### Rast përdorimi

Valido të dhëna të ofruara nga përdoruesi ose të jashtme (p.sh., payload-e JSON, parametra query, vargje konfigurimi)
për të siguruar që një listë jo-bosh përmban vetëm boolean përpara se të aplikosh logjikë boolean ose ta kalosh te
API-të që presin `boolean[]`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areBooleans` për të validuar `unknown[]` përpara se ta trajtosh si `boolean[]`; ai kthen `false` për vargjet
> bosh, prandaj trajtoje atë rast në mënyrë eksplicite nëse duhet të lejohet një listë bosh.

### Përparësi

- Kthen `true` vetëm kur çdo element është boolean dhe hyrja është një varg jo-bosh.
- Parandalon rezultate pozitive të rreme duke refuzuar vargjet bosh (kthen `false`).
- Funksionon mirë si një mbrojtës në kohë ekzekutimi përpara operacioneve vetëm me boolean (p.sh., `every`, `some`,
  reduktime logjike).

## Përdorim

### Sintaksë

Funksion:

- `areBooleans(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për elemente boolean.

### Import lokal i funksionit

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areBooleans(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 14:42:28 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>