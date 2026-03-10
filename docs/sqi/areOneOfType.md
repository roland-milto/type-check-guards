# areOneOfType

## Përshkrim

`areOneOfType` kontrollon nëse të gjithë elementët në një varg jo-bosh janë të njërit prej tipeve të specifikuara në
runtime.

### Rast përdorimi

Validoni të dhënat hyrëse (p.sh., JSON i parsuar) ku një fushë duhet të jetë një varg jo-bosh, elementët e të cilit janë
të kufizuar në një grup të njohur tipesh primitive; ktheni `false` kur vargu është bosh ose përmban ndonjë tip të
palejuar.

> **Shënim për përdoruesit e TypeScript:**
>
> Ky funksion kthen një boolean dhe nuk i ngushton tipet e elementeve të vargut në kohën e kompilimit; përdoreni si një
> hap validimi në runtime përpara përpunimit të mëtejshëm.

### Përparësi

- Siguron që çdo element në një varg përputhet me të paktën një tip të lejuar në runtime, duke kthyer `true` vetëm kur i
  gjithë vargu kalon verifikimin.
- Refuzon herët hyrjet e pavlefshme: kthen `false` kur `array` ose `types` është bosh ose nuk është një varg i mbushur.
- I dobishëm për validimin e koleksioneve me tipe të përziera (p.sh., numra dhe vargje) me një thirrje të vetme te
  `areOneOfType`.

## Përdorim

### Sintaksë

Funksion:

- `areOneOfType(array, types)`

Parametra:

- `array`: Një varg elementesh për t’u verifikuar kundrejt tipeve të ofruara.
- `types`: Një varg vargjesh (strings) që përfaqësojnë tipet e të dhënave për t’u kontrolluar.

### Import lokal i funksionit

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areOneOfType(array, types)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 23:38:39 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>