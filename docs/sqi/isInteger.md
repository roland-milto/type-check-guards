# isInteger

## Përshkrim

Përcakton nëse një `value` e dhënë është një numër i plotë i sigurt.

### Rast përdorimi

Valido hyrje jo të besueshme (p.sh., parametra query, payload-e JSON, variabla mjedisi) përpara se ta përdorësh si numër
të plotë për indekse vargjesh, faqezuar, numërues ose ID të bazës së të dhënave.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isInteger` për të validuar hyrje të panjohura përpara se ta trajtosh si numër të plotë numerik; kthen `true`
> vetëm për vlera ku `typeof value === "number"` dhe `Number.isSafeInteger(value)`.

### Përparësi

- Kontrollon si tipin ashtu edhe sigurinë numerike: kthen `true` vetëm kur hyrja është numër dhe një numër i plotë i
  sigurt.
- Parandalon kurthet e zakonshme me shndërrimin numerik: vargje si "5" kthejnë saktë `false`.
- Refuzon numrat jo të plotë dhe numrat e plotë të pasigurt, duke e bërë të përshtatshëm për ID, numërues dhe indeksim
  të vargjeve.

## Përdorim

### Sintaksë

Funksion:

- `isInteger(value)`

Parametra:

- `value`: Vlera që duhet kontrolluar për statusin e numrit të plotë.

### Import lokal i funksionit

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // e vërtetë
const b = isInteger(-100);   // e vërtetë
const c = isInteger("5");    // e rreme
const d = isInteger(5.5);    // e rreme
const e = isInteger(null);   // e rreme

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isInteger(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 00:51:27 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>