# getTypeOf

## Apraksts

`getTypeOf` atgriež detalizētu, cilvēkam lasāmu tipa etiķeti dotajai vērtībai, tostarp precizētus skaitliskos tipus un
konkrētus objektu veidus.

### Lietošanas gadījums

Izmantojiet `getTypeOf`, lai normalizētu tipu noteikšanu ievades validācijā un diagnostikā—piemēram, lai noraidītu
`nan`, pieņemtu tikai `integer` ID, apstrādātu skaitliskas virknes kā `decimal` atšķirīgi no parastas `string`, vai lai
žurnālos fiksētu precīzus objektu veidus, piemēram, `date` un `regexp`.

> **Piezīme TypeScript lietotājiem:**
>
> Atgrieztā tipa vērtība ir `DataTypeAsString | string`. Uztveriet to kā aprakstošu etiķeti; zarošanā salīdziniet ar
> zināmiem literāļiem, piemēram, `integer`, `float`, `nan`, `array`, `null` un `undefined`.

### Priekšrocības

- Atgriež detalizētāku tipa virkni nekā JavaScript `typeof`, tostarp skaitliskos apakštipus, piemēram, `integer`,
  `float` un `nan`.
- Skaidri atšķir `null` un `undefined` kā `null` un `undefined`.
- Atpazīst izplatītus skaitlisku virkņu formātus un ziņo par tiem kā `binary`, `octal`, `decimal` vai `hexadecimal`,
  nevis kā parastu `string`.
- Atpazīst arī masīvus kā `array` un izmanto `Object.prototype.toString`, lai sniegtu konkrētus objektu tipu
  nosaukumus (piem., `date`, `regexp`, `map`, `set`).
- Ļoti noder validācijai, žurnālfailu veidošanai un atkļūdošanai, kur nepieciešamas konsekventas, cilvēkam lasāmas tipu
  etiķetes.

## Lietošana

### Sintakse

Funkcija:

- `getTypeOf(value)`

Parametri:

- `value`: Vērtība, kurai jānosaka datu tips.

### Lokāls funkcijas imports

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

// Piemēra pārbaudes
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.getTypeOf(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Fails tika izveidots 6 February 2026 at 13:13:07 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>