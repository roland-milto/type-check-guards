# areIntegers

## Përshkrim

`areIntegers` përcakton nëse të gjithë elementët në një varg të dhënë janë numra të plotë, duke kthyer `true` nëse janë
dhe `false` përndryshe.

### Rast përdorimi

Përdor `areIntegers` për të validuar të dhëna të ofruara nga përdoruesi ose të jashtme (p.sh., parametra query,
payload-e JSON, rreshta CSV) kur logjika jote kërkon një listë të mbushur me vlera numra të plotë si ID, numërues,
offset-e të faqëzimit, ose indekse vargu.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areIntegers` si një guard në kohë ekzekutimi për hyrje `unknown[]` përpara se t’i trajtosh si `number[]` që
> përmban vetëm numra të plotë. Nëse kthen `false`, hyrja ose nuk është një varg i mbushur ose përmban të paktën një vlerë
> që nuk është numër i plotë.

### Përparësi

- Kthen `true` vetëm kur çdo element është një numër i plotë; përndryshe kthen `false`.
- Ndihmon të validohet hyrja e panjohur përpara kryerjes së operacioneve vetëm me numra të plotë (p.sh., indeksim,
  numërime, ID).
- Dështon shpejt: ndalon kontrollin sapo të gjendet një element që nuk është numër i plotë.

## Përdorim

### Sintaksë

Funksion:

- `areIntegers(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për elemente numra të plotë.

### Import lokal i funksionit

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // e vërtetë
console.log(areIntegers(b)); // e vërtetë
console.log(areIntegers(c)); // e rreme

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areIntegers(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 01:00:36 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>