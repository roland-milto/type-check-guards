# areFalse

## Përshkrim

`areFalse` kontrollon nëse të gjithë elementët në një array të dhënë janë rreptësisht booleana `false`.

### Rast përdorimi

Valido që një listë me feature flags, kontrolle ose rezultate guard janë të gjitha `false` përpara se të vazhdosh (
p.sh., konfirmo që nuk ka kushte bllokuese të pranishme).

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areFalse` kur të duhet një validim i rreptë që një array nuk është bosh dhe përmban vetëm vlerën booleane
`false`.

### Përparësi

- Siguron që çdo element është rreptësisht `false` (pa shndërrim të vlerave truthy/falsey).
- Kthen `false` për jo-array ose array bosh duke kërkuar një array të mbushur përmes `isFilledArray`.
- Ndërpret herët te elementi i parë që nuk është `false` për efikasitet.

## Përdorim

### Sintaksë

Funksion:

- `areFalse(array)`

Parametra:

- `array`: Array për t’u kontrolluar, që përmban elemente të çdo lloji.

### Import lokal i funksionit

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // e vërtetë
const b = areFalse([false, true, false]);  // e rreme
const c = areFalse([false, "false", false]); // e rreme
const d = areFalse([]); // e rreme

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areFalse(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 16:18:38 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>