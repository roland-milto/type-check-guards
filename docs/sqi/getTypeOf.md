# getTypeOf

## Përshkrim

`getTypeOf` kthen një etiketë tipi të detajuar dhe të lexueshme për njerëzit për një vlerë të dhënë, duke përfshirë tipe
numerike të rafinuara dhe lloje specifike objektesh.

### Rast përdorimi

Përdorni `getTypeOf` për të normalizuar zbulimin e tipit në validimin e inputit dhe diagnostikim—për shembull, për të
refuzuar `nan`, për të pranuar vetëm ID `integer`, për t’i trajtuar vargjet numerike si `decimal` ndryshe nga `string` i
thjeshtë, ose për të regjistruar lloje të sakta objektesh si `date` dhe `regexp`.

> **Shënim për përdoruesit e TypeScript:**
>
> Tipi i kthimit është `DataTypeAsString | string`. Trajtojeni si një etiketë përshkruese; krahasoni me literalë të
> njohur si `integer`, `float`, `nan`, `array`, `null` dhe `undefined` kur bëni degëzim.

### Përparësi

- Kthen një varg tipi më të imtësishëm se `typeof` i JavaScript-it, duke përfshirë nëntipe numerike si `integer`,
  `float` dhe `nan`.
- Dallon `null` dhe `undefined` në mënyrë eksplicite si `null` dhe `undefined`.
- Zbulon formate të zakonshme të vargjeve numerike dhe i raporton si `binary`, `octal`, `decimal` ose `hexadecimal` në
  vend të thjesht `string`.
- Gjithashtu identifikon vargjet si `array` dhe përdor `Object.prototype.toString` për të dhënë emra specifikë të tipeve
  të objekteve (p.sh., `date`, `regexp`, `map`, `set`).
- Është shumë i dobishëm për validim, regjistrim (logging) dhe diagnostikim (debugging) kur nevojiten etiketa tipi të
  qëndrueshme dhe të lexueshme për njerëzit.

## Përdorim

### Sintaksë

Funksion:

- `getTypeOf(value)`

Parametra:

- `value`: Vlera për të cilën duhet të përcaktohet tipi i të dhënave.

### Import lokal i funksionit

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Kontroll shembull
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.getTypeOf(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Skedari u gjenerua më 6 February 2026 at 13:14:45 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>