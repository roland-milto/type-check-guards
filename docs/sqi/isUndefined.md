# isUndefined

## Përshkrim

Kontrollon nëse një vlerë e dhënë është `undefined`.

### Rast përdorimi

Përdor `isUndefined` për të mbrojtur inpute opsionale, për të zbuluar veti që mungojnë, ose për të dalluar midis “nuk
është dhënë” (`undefined`) dhe “qartësisht bosh” (`null`).

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isUndefined` kur të duhet në mënyrë specifike të zbulosh `undefined` (jo `null`). Është e sigurt sepse
> mbështetet te `typeof value === "undefined"`.

### Përparësi

- Ofron një kontroll të qartë dhe të shprehur për `undefined` duke përdorur `typeof`, duke shmangur rastet kufitare me
  variabla të padeklaruara.
- Kthen një rezultat të thjeshtë boolean (`true`/`false`) i përshtatshëm për guard-e, degëzim dhe logjikë validimi.
- Ndihmon të dallohet `undefined` nga vlera të tjera “boshe” si `null`, `0`, `""` ose `NaN`.

## Përdorim

### Sintaksë

Funksion:

- `isUndefined(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x është i papërcaktuar këtu
} else {
  // x nuk është i papërcaktuar këtu
}

const a = isUndefined(undefined); // e vërtetë
const b = isUndefined(null);      // e rreme
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isUndefined(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 14:04:24 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>