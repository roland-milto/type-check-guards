# getTypeOf

## Maelezo

`getTypeOf` hurejesha lebo ya aina iliyo na maelezo ya kina na inayosomeka kwa binadamu kwa thamani fulani, ikijumuisha
aina zilizoboreshwa za namba na aina mahususi za vitu.

### Kesi ya matumizi

Tumia `getTypeOf` kusawazisha utambuzi wa aina katika uthibitishaji wa ingizo na uchunguzi—kwa mfano, kukataa `nan`,
kukubali tu vitambulisho (IDs) vya `integer`, kushughulikia kamba za namba kama `decimal` tofauti na `string` ya
kawaida, au kuandika kumbukumbu za aina sahihi za vitu kama `date` na `regexp`.

> **Dokezo kwa watumiaji wa TypeScript:**
>
> Aina ya thamani inayorejeshwa ni `DataTypeAsString | string`. Ichukulie kama lebo ya maelezo; linganisha dhidi ya
> literali zinazojulikana kama `integer`, `float`, `nan`, `array`, `null`, na `undefined` unapofanya matawi ya mantiki.

### Faida

- Hurejesha kamba ya aina iliyo na maelezo ya kina zaidi kuliko `typeof` ya JavaScript, ikijumuisha aina ndogo za namba
  kama `integer`, `float`, na `nan`.
- Hutofautisha `null` na `undefined` kwa uwazi kama `null` na `undefined`.
- Hutambua miundo ya kawaida ya kamba za namba na huziripoti kama `binary`, `octal`, `decimal`, au `hexadecimal` badala
  ya `string` ya kawaida.
- Pia hutambua safu kama `array` na hutumia `Object.prototype.toString` kutoa majina mahususi ya aina za vitu (mf.,
  `date`, `regexp`, `map`, `set`).
- Ni muhimu sana kwa uthibitishaji, uandishi wa kumbukumbu (logging), na utatuzi wa hitilafu (debugging) ambapo lebo za
  aina thabiti na zinazoeleweka na binadamu zinahitajika.

## Matumizi

### Sintaksia

Kazi:

- `getTypeOf(value)`

Vigezo:

- `value`: Thamani ambayo aina ya data yake inapaswa kubainishwa.

### Uingizaji wa kazi wa ndani

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Ukaguzi wa mifano
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Uingizaji wa kitu wa kimataifa

Ili kuingiza kazi kama mbinu za kitu cha kimataifa, tumia:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Kisha mbinu ifuatayo itapatikana kimataifa:

- `Type.getTypeOf(value)`

## Uchambuzi wa kazi

Hapa kuna uchambuzi wa jedwali wa matokeo yanayotokea unapoweka vigezo tofauti kwenye kazi
uliorekodiwa: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Faili ilizalishwa 6 February 2026 at 13:14:51 (UTC) kwa kutumia *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** na *
*[Roland Milto](https://roland-milto.de/)**.</small>