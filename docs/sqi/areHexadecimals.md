# areHexadecimals

## Përshkrim

Kontrollon nëse të gjithë elementët në një varg janë vargje heksadecimale, duke kthyer `true` vetëm për vargje jo-bosh
ku çdo element është i vlefshëm.

### Rast përdorimi

Përdor `areHexadecimals` për të vërtetuar hyrjen e përdoruesit ose të dhëna të jashtme (p.sh., ID, checksum-e, kode
ngjyrash pa një '#' në fillim) përpara se të kryesh analizim heksadecimal ose përpunim të mëtejshëm.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areHexadecimals` për të vërtetuar hyrje të panjohura përpara se të bësh analizim ose konvertim vlerash (për
> shembull, përpara `parseInt(value, 16)` ose konvertimeve në BigInt).

### Përparësi

- Vërteton që çdo element është një varg heksadecimal dhe kthen `true` vetëm kur të gjithë elementët përputhen.
- Refuzon vargjet bosh sipas dizajnit, duke kthyer `false` kur mungojnë të dhënat hyrëse.
- Ofron një rezultat të thjeshtë boole (`true`/`false`) të përshtatshëm për guard-e dhe validim me kthim të hershëm.

## Përdorim

### Sintaksë

Funksion:

- `areHexadecimals(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për elementë vargje heksadecimale.

### Import lokal i funksionit

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areHexadecimals(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 23:07:55 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>