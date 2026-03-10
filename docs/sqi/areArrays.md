# areArrays

## Përshkrim

`areArrays` përcakton nëse një vlerë është një varg dy-dimensional i mbushur, ku të gjithë elementët e tij janë vargje.

### Rast përdorimi

Përdor `areArrays` për të validuar hyrje tabelare ose të ngjashme me matricë (p.sh., rreshta CSV, të dhëna rrjeti, ose
lista të grupuara) përpara se të kryesh operacione rresht/kolonë; kthen `false` nëse hyrja nuk është varg, është bosh,
ose përmban ndonjë element që nuk është varg.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areArrays` kur duhet të sigurohesh që një vlerë është një varg 2D jo bosh dhe që çdo rresht është një varg
> përpara se të iterosh ose të indeksosh në vargje të folezuara.

### Përparësi

- Verifikon që hyrja është një varg dy-dimensional jo bosh, ku çdo element është një varg.
- Kthen një rezultat të thjeshtë boolean (`true`/`false`) i përshtatshëm për guard-e dhe dalje të hershme.
- Ndihmon në parandalimin e gabimeve në kohë ekzekutimi kur kodi i mëvonshëm supozon operacione me vargje të folezuara (
  p.sh., map-imin e rreshtave).

## Përdorim

### Sintaksë

Funksion:

- `areArrays(array)`

Parametra:

- `array`: Hyrja që do të kontrollohet.

### Import lokal i funksionit

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value është një varg 2D me vargje si elemente
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areArrays(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Skedari u gjenerua më 6 February 2026 at 13:41:31 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>