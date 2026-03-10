# isHexadecimal

## Maelezo

`isHexadecimal` hukagua kama thamani iliyotolewa ni literal ya kamba ya heksadesimali yenye kiambishi awali cha lazima
`0x`/`0X`.

### Kesi ya matumizi

Tumia `isHexadecimal` kuthibitisha thamani za usanidi, sehemu za mzigo wa API, au hoja za CLI ambazo lazima zitolewe
kama literal za kamba za heksadesimali (mf., vitambulisho, maski, au anwani) na zisibebe nafasi tupu zinazozunguka.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isHexadecimal` unapohitaji kuthibitisha ingizo la mtumiaji au data iliyoserialishwa kama kamba kali ya literal
> ya heksadesimali (ikiwemo kiambishi awali `0x`/`0X`) kabla ya kuichanganua au kuibadilisha.

### Faida

- Huthibitisha kwamba thamani ni kamba na inalingana na umbizo kali la literal ya heksadesimali (inahitajika kiambishi
  awali `0x`/`0X`).
- Hukataa kamba zenye nafasi tupu mwanzoni au mwishoni, kusaidia kuepuka kukubali kimakosa ingizo lililoongezewa nafasi.
- Husaidia alama ya hiari na haijali herufi kubwa/ndogo kwa kiambishi awali na tarakimu, ikirudisha `true`/`false` kwa
  njia inayotabirika.

## Matumizi

### Sintaksia

Kazi:

- `isHexadecimal(value)`

Vigezo:

- `value`: Thamani ya kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // kweli
isHexadecimal("-0Xff"); // kweli
isHexadecimal("1A2B"); // si kweli (kiambishi awali hakipo)
isHexadecimal(" 0x1A2B"); // si kweli (nafasi tupu ya mwanzo)
isHexadecimal(0x1a2b); // si kweli (si kamba)
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isHexadecimal(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 23:01:08 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>