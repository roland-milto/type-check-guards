# isNumber

## Maelezo

`isNumber` hukagua kama thamani ni nambari yenye kikomo, isiyo-`NaN`.

### Kesi ya matumizi

Thibitisha ingizo la nambari kutoka vyanzo visivyoaminika (fomu, vigezo vya hoja, mizigo ya JSON) kabla ya mahesabu,
kuhifadhi, au ukaguzi wa mipaka, kuhakikisha ni nambari zenye kikomo pekee zinazopita (`true`) na kila kitu kingine
hurejesha `false`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Tumia `isNumber` kuthibitisha thamani za `unknown` kabla ya kufanya hesabu; hukataa `NaN`, `Infinity`, na `-Infinity`.

### Faida

- Hurejesha `true` tu kwa nambari halisi za JavaScript (ukaguzi wa aina pamoja na kukataa `NaN` na infinity).
- Huzuia hitilafu za kawaida za uthibitishaji ambapo `NaN`, `Infinity`, au `-Infinity` hupita kimakosa kama nambari.
- Hufanya kazi vizuri kama kinga ya wakati wa utekelezaji kwa ingizo lisilojulikana (mf., JSON, ingizo la mtumiaji, API
  za nje).
- Rahisi, ya haraka, na haina athari za pembeni.

## Matumizi

### Sintaksia

Kazi:

- `isNumber(value)`

Vigezo:

- `value`: Thamani ya kukagua.

### Uingizaji wa kazi wa ndani

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input ni nambari halali yenye kikomo
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.isNumber(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Faili ilizalishwa 30 January 2026 at 13:11:10 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>