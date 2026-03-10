# isIndexFound

## Përshkrim

`isIndexFound` përcakton nëse një vlerë e dhënë është një numër i plotë jo-negativ, duke treguar se është gjetur një
indeks.

### Rast përdorimi

Vërteto që një rezultat kërkimi përfaqëson një indeks të përdorshëm (numër i plotë `>= 0`) përpara se të indeksohet në
një array ose string, duke parandaluar përdorimin aksidental të `-1` ose vlerave jo-numerike.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isIndexFound` pas operacioneve si `indexOf`, `findIndex` ose kërkimeve të personalizuara ku `-1` (ose vlera të
> tjera të pavlefshme) mund të tregojnë “nuk u gjet”. Kur kthen `true`, vlera është numër dhe e sigurt për t’u përdorur
> si
> indeks i vargut/array-it.

### Përparësi

- Ofron një mbrojtës të thjeshtë tipi për të zbuluar nëse u gjet një indeks duke kontrolluar për një numër të plotë
  jo-negativ.
- Kthen `true` vetëm për vlera të vlefshme të tipit indeks (numra të plotë `>= 0`), duke refuzuar numrat negativë, jo të
  plotë dhe jo-numra.
- Ndihmon të shmangen gabimet off-by-one dhe gabimet me vlera sentinel kur punohet me API që kthejnë `-1` për “nuk u
  gjet”.

## Përdorim

### Sintaksë

Funksion:

- `isIndexFound(value)`

Parametra:

- `value`: Vlera që duhet kontrolluar nëse është një numër i plotë jo-negativ.

### Import lokal i funksionit

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx është një numër këtu dhe është >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Përdorim tipik me indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isIndexFound(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 00:47:53 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>