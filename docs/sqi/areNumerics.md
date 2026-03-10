# areNumerics

## Përshkrim

`areNumerics` kontrollon nëse një vlerë është një varg jo bosh ku të gjithë elementët janë numerikë.

### Rast përdorimi

Përdor `areNumerics` për të validuar të dhëna të jashtme ose pa tipizim (p.sh., payload-e JSON, parametra query, hyrje
formulari) përpara llogaritjes së shumave, mesatareve ose operacioneve të tjera numerike, duke siguruar që hyrja është
një varg numerik jo bosh dhe duke kthyer `false` përndryshe.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areNumerics` për të mbrojtur hyrjen `unknown` përpara se ta trajtosh si një varg numerik; kthen `false` për
> jo-vargje dhe për vargje bosh.

### Përparësi

- Kthen `true` vetëm kur hyrja është një varg jo bosh dhe çdo element është numerik.
- Dështon shpejt: ndalon kontrollin sapo gjendet një element jo numerik, duke kthyer `false`.
- Ndihmon të validohet në mënyrë të sigurt hyrja e panjohur përpara kryerjes së operacioneve numerike.

## Përdorim

### Sintaksë

Funksion:

- `areNumerics(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për elemente numerike.

### Import lokal i funksionit

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // e vërtetë
console.log(areNumerics(b)); // e vërtetë
console.log(areNumerics(c)); // e rreme
console.log(areNumerics(d)); // e rreme
console.log(areNumerics(e)); // e rreme

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areNumerics(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Skedari u gjenerua më 6 February 2026 at 16:07:28 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>