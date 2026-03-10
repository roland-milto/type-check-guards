# isOctal

## Maelezo

Huamua kama thamani ni kamba halali ya literal ya oktali (mf. `0o755`).

### Kesi ya matumizi

Thibitisha ingizo la mtumiaji au thamani za usanidi ambazo lazima zionyeshwe kama kamba ya literal ya oktali (kwa mfano,
modi za ruhusa za faili kama `0o644`) kabla ya kuzichanganua au kuzibadilisha.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `isOctal` ni ulinzi wa aina (`value is string`). Baada ya matokeo ya `true`, TypeScript hupunguza (narrow) kigezo
> kilichokaguliwa hadi `string`.

### Faida

- Hutoa ulinzi mkali wa aina: hurudisha `true` tu pale ingizo linapokuwa ni kamba inayolingana na umbizo la literal ya
  oktali.
- Hukataa kamba tupu na kamba zenye nafasi nyeupe mwanzoni/mwishoni (udhibiti wa ASCII/nafasi), hivyo kupunguza
  ulinganifu wa bahati mbaya.
- Husaidia alama ya hiari na haitegemei herufi kubwa/ndogo kwa kiambishi awali `0o`/`0O`.
- Ni mwepesi kwa ingizo lisilo kamba kwa kurudisha `false` badala ya kutupa kosa.

## Matumizi

### Sintaksia

Kazi:

- `isOctal(value)`

Vigezo:

- `value`: Thamani inayopaswa kukaguliwa.

### Uingizaji wa kazi wa ndani

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // kweli
console.log(isOctal(b)); // kweli
console.log(isOctal(c)); // si kweli
console.log(isOctal(d)); // si kweli

if (isOctal(a)) {
  // a ni string hapa
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isOctal(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 15:43:29 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>