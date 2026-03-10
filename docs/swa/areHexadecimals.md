# areHexadecimals

## Maelezo

Hukagua kama vipengele vyote katika safu ni mifuatano ya herufi ya heksadesimali, ikirudisha `true` tu kwa safu zisizo
tupu ambapo kila kipengee ni halali.

### Kesi ya matumizi

Tumia `areHexadecimals` kuthibitisha ingizo la mtumiaji au data ya nje (k.m., vitambulisho, checksums, misimbo ya rangi
bila alama ya kuongoza '#') kabla ya kufanya uchanganuzi wa heksadesimali au uchakataji zaidi.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areHexadecimals` kuthibitisha ingizo lisilojulikana kabla ya kuchanganua au kubadilisha thamani (kwa mfano,
> kabla ya `parseInt(value, 16)` au ubadilishaji wa BigInt).

### Faida

- Huthibitisha kwamba kila kipengele ni mfuatano wa herufi wa heksadesimali na hurudisha `true` tu pale ambapo vipengee
  vyote vinafanana.
- Hukataa safu tupu kwa muundo, ikirudisha `false` kwa data ya ingizo inayokosekana.
- Hutoa matokeo rahisi ya boolean (`true`/`false`) yanayofaa kwa walinzi na uthibitishaji wa kurudi mapema.

## Matumizi

### Sintaksia

Kazi:

- `areHexadecimals(array)`

Vigezo:

- `array`: Safu itakayokaguliwa ili kubaini vipengele vya mfuatano wa herufi wa heksadesimali.

### Uingizaji wa kazi wa ndani

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areHexadecimals(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 23:08:00 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>