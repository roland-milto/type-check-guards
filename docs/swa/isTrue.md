# isTrue

## Maelezo

`isTrue` huamua kama thamani iliyotolewa ni sawa kabisa na `true`.

### Kesi ya matumizi

Tumia `isTrue` kuthibitisha bendera (flags), vigeuzi vya vipengele (feature toggles), au thamani za usanidi ambapo ni
`true` halisi pekee inapaswa kukubaliwa na kila kitu kingine lazima kishughulikiwe kama `false`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isTrue` unapohitaji kukubali tu thamani halisi ya boolean `true`, si tu thamani za truthy.

### Faida

- Hutoa ukaguzi mkali wa thamani halisi ya boolean `true` (hakuna uongofu wa aina).
- Husaidia kutofautisha `true` na thamani za truthy kama `1`, `"true"`, au `{}`.
- Tabia rahisi na inayotabirika inayofaa kwa walinzi (guards) na mabomba ya uthibitishaji (validation pipelines).

## Matumizi

### Sintaksia

Kazi:

- `isTrue(value)`

Vigezo:

- `value`: Thamani ya kukagua.

### Uingizaji wa kazi wa ndani

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // kweli
const b = isTrue(1);         // si kweli
const c = isTrue("true");   // si kweli

if (isTrue(a)) {
  // a ni kweli hapa
}
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isTrue(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 13:46:18 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>