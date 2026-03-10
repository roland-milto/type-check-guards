# areStrings

## Maelezo

`areStrings` hukagua kama safu si tupu na vipengele vyake vyote ni kamba, na hurudisha `true` tu katika hali hiyo.

### Kesi ya matumizi

Thibitisha data ya nje au iliyotolewa na mtumiaji (mf., query params, JSON payloads, CSV fields) ili kuhakikisha una
orodha isiyo tupu ya kamba kabla ya kuchakata.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areStrings` kuthibitisha safu zisizojulikana kabla ya kutumia mantiki ya kamba pekee; hurudisha `false` kwa
> safu tupu.

### Faida

- Hakikisha kila kipengele ni kamba na hukataa safu zenye aina mchanganyiko kwa kurudisha `false`.
- Hukataa safu tupu, hivyo `true` huonyesha tu orodha isiyo tupu ya kamba.
- Ni muhimu kama kinga ya haraka wakati wa utekelezaji kabla ya kufanya operesheni za kamba pekee (mf., `trim`,
  `toLowerCase`).

## Matumizi

### Sintaksia

Kazi:

- `areStrings(value)`

Vigezo:

- `value`: Expected type `string[]`.

### Uingizaji wa kazi wa ndani

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input ni string[] isiyo tupu wakati wa utekelezaji
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areStrings(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 13:20:28 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>