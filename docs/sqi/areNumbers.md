# areNumbers

## Përshkrim

`areNumbers` kontrollon nëse një vlerë është një varg jo bosh ku të gjithë elementët janë numra.

### Rast përdorimi

Valido të dhëna të ofruara nga përdoruesi ose nga API për të siguruar që është një varg jo bosh numrash përpara se të
llogaritësh totalet, mesataret ose agregime të tjera numerike.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areNumbers` për të validuar vargje të panjohura përpara se të kryesh llogaritje numerike; kthen `false` për
> vargjet bosh dhe për vargjet që përmbajnë çfarëdo vlere jo-numerike.

### Përparësi

- Kthen `true` vetëm kur hyrja është një varg jo bosh dhe çdo element është numër.
- Parandalon rezultate të rreme pozitive duke refuzuar vargjet bosh dhe hyrjet që nuk janë vargje.
- E dobishme si një kontroll paraprak përpara operacioneve numerike (p.sh., mbledhje, mesatare) për të shmangur gabimet
  në kohë ekzekutimi.

## Përdorim

### Sintaksë

Funksion:

- `areNumbers(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për elemente numerike.

### Import lokal i funksionit

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areNumbers(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 13:05:59 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>