# areOfType

## Përshkrim

Kontrollon nëse të gjithë elementët në `array`-n e dhënë janë të `type`-it të specifikuar.

### Rast përdorimi

Përdor `areOfType` për të validuar hyrje të panjohura (p.sh., JSON i parsuar, payload-e API, hyrje nga përdoruesi)
përpara se të kryesh operacione specifike për tipin mbi çdo element të një vargu.

> **Shënim për përdoruesit e TypeScript:**
>
> Meqenëse `areOfType` është një type guard, TypeScript e ngushton vargun brenda një blloku `if (areOfType(...)) {}` në
`Array<DataTypeOf<T>>`.

### Përparësi

- Ofron një TypeScript type guard: kur kthen `true`, hyrja ngushtohet në `Array<DataTypeOf<T>>`.
- Validon çdo element kundrejt tipit të kërkuar në runtime, duke parandaluar që vargjet me tipe të përziera të kalojnë.
- Dështon shpejt: kthen `false` sapo të gjendet një element që nuk përputhet.
- Refuzon jo-vargjet dhe vargjet bosh sipas dizajnit (varet nga `isFilledArray`).

## Përdorim

### Sintaksë

Funksion:

- `areOfType(array, type)`

Parametra:

- `array`: Vargu për t'u kontrolluar.
- `type`: Tipi kundrejt të cilit kontrollohet secili element në varg.

### Import lokal i funksionit

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values tani është number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areOfType(array, type)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 17:11:26 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>