# isOfType

## Maelezo

Huamua kama `value` iliyotolewa inalingana na kamba ya aina iliyoainishwa, ikitumia `typeof` kwa aina za msingi na
mbadala kwa aina changamano.

### Kesi ya matumizi

Thibitisha na finyaza ingizo za `unknown` (mf. majibu ya API, ingizo la mtumiaji, JSON iliyochanganuliwa) kwa kukagua
kama thamani ni ya kamba ya aina inayotarajiwa kabla ya kufanya operesheni mahususi za aina.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isOfType` kutengeneza matawi kulingana na aina za wakati wa utekelezaji unapofanya kazi na thamani za
`unknown`; hurejesha `true`/`false` na hushughulikia `null` na `undefined` kwa uwazi.

### Faida

- Hukagua aina za msingi kwa kutumia `typeof` moja kwa moja kwa kasi na uwazi.
- Hushughulikia kwa usahihi `null` na `undefined`, ambavyo `typeof` pekee haiwezi kutofautisha kama inavyokusudiwa.
- Inaunga mkono kamba changamano au maalum za aina kupitia ulinganisho wa akiba kwa kutumia `getTypeOf`.
- Hurejesha matokeo rahisi ya boolean (`true`/`false`) yanayofaa kwa walinzi na matawi.

## Matumizi

### Sintaksia

Kazi:

- `isOfType(value, type)`

Vigezo:

- `value`: Thamani ya kujaribu dhidi ya `type`.
- `type`: Uwakilishi wa kamba wa aina ya kukagua dhidi yake.

### Uingizaji wa kazi wa ndani

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input ni nambari hapa
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input ni tungo hapa
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isOfType(value, type)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 17:06:32 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>