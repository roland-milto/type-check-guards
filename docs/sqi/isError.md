# isError

## Përshkrim

Kontrollon nëse një `value` e dhënë është një instancë e `Error`.

### Rast përdorimi

Përdor `isError` kur merr një vlerë `unknown` (si p.sh. nga një bllok `catch`, një callback, ose një bibliotekë e
jashtme) dhe duhet të përcaktosh në mënyrë të sigurt nëse është një `Error` përpara se të lexosh `message`, `name` ose
`stack`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isError` për të mbrojtur vlerat `unknown` (p.sh., nga `catch`) përpara se t’i trajtosh si një `Error`.

### Përparësi

- Ofron një kontroll të thjeshtë në kohë ekzekutimi për të përcaktuar nëse një vlerë është një instancë e `Error`.
- Ndihmon në ngushtimin e inputeve të panjohura përpara se të aksesohen vetitë e `Error` si `message` ose `stack`.
- Ul rrezikun e përjashtimeve në kohë ekzekutimi kur trajtohen vlera nga `catch`, API të jashtme ose burime pa tipe.

## Përdorim

### Sintaksë

Funksion:

- `isError(value)`

Parametra:

- `value`: Vlera që duhet kontrolluar kundrejt tipit `Error`.

### Import lokal i funksionit

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isError(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isError](../_analysis/isError.md)

<br>

---

<small>Skedari u gjenerua më 6 February 2026 at 12:47:08 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>