# isFloat

## Përshkrim

`isFloat` përcakton nëse një `value` e dhënë është një numër me presje dhjetore i fundëm (një `number` që nuk është
numër i plotë).

### Rast përdorimi

Vlerëso hyrjen numerike të dhënë nga përdoruesi kur kërkohen vlera fraksionare (p.sh., çmime, matje, norma) dhe refuzo
numrat e plotë, `NaN` dhe pafundësitë.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isFloat` kur duhet të pranosh vetëm hyrje numerike të fundme, jo të plota; ai refuzon numrat e plotë dhe
> numrat jo të fundëm.

### Përparësi

- Kthen `true` vetëm për numra të fundëm, jo të plotë (përjashton numrat e plotë, `NaN`, `Infinity` dhe `-Infinity`).
- Funksionon me çdo lloj hyrjeje (`unknown`) dhe e ngushton në mënyrë të sigurt duke kontrolluar
  `typeof value === "number"`.
- Përdor mbrojtje numerike të integruara (`Number.isInteger`, `Number.isFinite`) për sjellje të parashikueshme.

## Përdorim

### Sintaksë

Funksion:

- `isFloat(value)`

Parametra:

- `value`: Vlera që do të kontrollohet nëse është numër me presje dhjetore.

### Import lokal i funksionit

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // vlera është një numër në kohën e ekzekutimit; është e fundme dhe jo një numër i plotë
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isFloat(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 16:09:50 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>