# isRegEx

## Maelezo

Huamua kama thamani iliyotolewa ni instansi ya `RegExp`.

### Kesi ya matumizi

Thibitisha thamani zinazotolewa na mtumiaji au zinazobadilika (kwa mfano, usanidi, payload za API, ingizo za plugin)
kabla ya kuzichukulia kama usemi wa kawaida.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isRegEx` kubana (narrow) thamani za `unknown` (au union) kabla ya kutumia sifa au mbinu maalum za RegExp;
> hurejesha `true` tu kwa thamani ambazo ni instansi za `RegExp`.

### Faida

- Hutoa ulinzi rahisi wa aina wakati wa utekelezaji (runtime) ili kukagua kama thamani ni `RegExp`.
- Husaidia kuzuia makosa wakati msimbo unatarajia usemi wa kawaida (kwa mfano, kabla ya kuita `test`, `exec`, au kusoma
  `source`).
- Hufanya kazi na regex literal na pia instansi zilizoundwa kupitia `new RegExp(...)`.
- Hurejesha matokeo ya wazi ya boolean (`true`/`false`) bila kurusha hitilafu kwa ingizo lisilo regex.

## Matumizi

### Sintaksia

Kazi:

- `isRegEx(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input ni RegExp hapa
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isRegEx(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 23:31:07 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>