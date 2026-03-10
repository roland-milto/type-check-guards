# isNumeric

## Maelezo

`isNumeric` huamua kama `value` fulani inachukuliwa kuwa ya namba kwa kukagua aina yake iliyotatuliwa dhidi ya
`NUMERIC_TYPES`.

### Kesi ya matumizi

Tumia `isNumeric` kuthibitisha ingizo (mf., API payloads, thamani za fomu, usanidi) kabla ya kufanya operesheni za
namba, na kukubali kwa uthabiti aina zinazofanana na namba (kama `BigInt`) kulingana na `NUMERIC_TYPES`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> `isNumeric` ni predicate inayorejesha boolean; ichukulie kama ukaguzi wa wakati wa utekelezaji (runtime) wa kama
> thamani ni sehemu ya seti ya aina za namba iliyofafanuliwa na maktaba.

### Faida

- Hutumia `getTypeOf` pamoja na `NUMERIC_TYPES` ili kuunganisha mantiki ya kutambua namba katika sehemu moja na kuweka
  ukaguzi kuwa thabiti katika msimbo wote.
- Hurejesha boolean rahisi (`true`/`false`) kwa ajili ya matawi (branching) na matumizi ya mtindo wa guard kwa urahisi.
- Husaidia uwakilishi mbalimbali wa namba (mf., `number`, `BigInt`) kama inavyofafanuliwa na `NUMERIC_TYPES`.

## Matumizi

### Sintaksia

Kazi:

- `isNumeric(value)`

Vigezo:

- `value`: Thamani ya kukagua ili kubaini kama ni aina ya namba.

### Uingizaji wa kazi wa ndani

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v inachukuliwa kuwa ya nambari kulingana na sheria za aina za maktaba
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isNumeric(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Faili ilizalishwa 6 February 2026 at 15:54:40 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>