# isFilledArray

## Përshkrim

Kontrollon nëse `value` është një varg me të paktën një element, duke kthyer `true` ose `false`.

### Rast përdorimi

Përdorni `isFilledArray` për të validuar të dhënat hyrëse (p.sh., payload-e API, vlera formularësh, konfigurim) përpara
iterimit, aksesimit të elementit të parë, ose aplikimit të logjikës që kërkon të paktën një element.

> **Shënim për përdoruesit e TypeScript:**
>
> `isFilledArray` është një guard në kohë ekzekutimi që kthen një boolean; nuk ngushton llojet e elementeve përtej
> konfirmimit se vargu nuk është bosh.

### Përparësi

- Kontroll i thjeshtë dhe i shpejtë për një varg jo bosh duke përdorur `Array.isArray` dhe një kontroll të gjatësisë.
- Ndihmon të shmangen gabimet në kohë ekzekutimi kur kodi supozon se një varg ka të paktën një element.
- Rezultat i qartë boolean: kthen `true` për vargje jo bosh dhe `false` përndryshe.

## Përdorim

### Sintaksë

Funksion:

- `isFilledArray(value)`

Parametra:

- `value`: Vlera për të kontrolluar nëse është një varg jo bosh.

### Import lokal i funksionit

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input është një varg jo bosh në kohën e ekzekutimit
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isFilledArray(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Skedari u gjenerua më 6 February 2026 at 11:48:53 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>