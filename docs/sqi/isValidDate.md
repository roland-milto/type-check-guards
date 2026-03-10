# isValidDate

## Përshkrim

`isValidDate` kontrollon nëse një vlerë e dhënë është një objekt `Date` i vlefshëm dhe kthen `true` vetëm për data
reale, jo të pavlefshme.

### Rast përdorimi

Valido hyrjen e përdoruesit ose të dhënat nga API që mund të përmbajnë data, duke u siguruar që vlera është një instancë
reale `Date` dhe jo një datë e pavlefshme përpara se të kryesh llogaritje, formatim ose krahasime të datave.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isValidDate` përpara se të thërrasësh metoda të `Date` (p.sh., `toISOString`, `getTime`) mbi vlera të
> tipizuara si `unknown`, për t’u siguruar që janë objekte `Date` të vlefshme.

### Përparësi

- Siguron që një vlerë është një instancë `Date` dhe jo thjesht një varg ose numër i ngjashëm me datën.
- Refuzon datat e pavlefshme (p.sh., `new Date("invalid")`) duke kontrolluar për vlera kohe `NaN`.
- Mbrojtje e thjeshtë booleane që është e lehtë për t’u përdorur në kushte dhe në rrjedha validimi.
- Ndihmon në parandalimin e gabimeve në kohë ekzekutimi kur thirren metoda të datës, duke verifikuar fillimisht hyrjen.

## Përdorim

### Sintaksë

Funksion:

- `isValidDate(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input është një instancë e vlefshme e Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isValidDate(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 16:52:55 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>