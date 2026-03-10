# areBuffers

## Maelezo

`areBuffers` hukagua kama thamani iliyotolewa ni safu isiyo tupu na iliyojaa ambapo kila kipengele ni `Buffer`,
ikirejesha `true` ikiwa ndivyo na `false` vinginevyo.

### Kesi ya matumizi

Thibitisha safu za vipande vinavyoingia (mf., kutoka kwa streams, upakiaji wa faili, au pakiti za mtandao) ili
kuhakikisha sehemu zote ni mifano ya `Buffer` kabla ya kuziunganisha, kuzisimbua, au kuzipitisha kwa kazi za
kriptografia au uchakataji wa binari.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `areBuffers` kuthibitisha `unknown[]` kabla ya kuita API mahususi za Buffer kama `Buffer.concat`, kuhakikisha
> kuwa kazi hurejesha `true` tu pale ambapo kila kipengele ni `Buffer`.

### Faida

- Hakikisha kila kipengele kwenye ingizo ni mfano wa `Buffer` ya Node.js, ikirejesha `true` tu pale ambapo safu nzima
  inalingana.
- Hukataa ingizo batili mapema kwa kuhitaji safu isiyo tupu na iliyojaa; hurejesha `false` kwa safu tupu au zisizo safu.
- Ni muhimu kama kinga kabla ya kufanya operesheni zinazohitaji buffer pekee (mf., kuunganisha, kuhashi, itifaki za
  binari).

## Matumizi

### Sintaksia

Kazi:

- `areBuffers(array)`

Vigezo:

- `array`: Safu itakayokaguliwa ili kubaini mifano ya buffer.

### Uingizaji wa kazi wa ndani

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.areBuffers(array)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Faili ilizalishwa 31 January 2026 at 16:27:24 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>