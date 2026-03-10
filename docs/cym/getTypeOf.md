# getTypeOf

## Disgrifiad

Mae `getTypeOf` yn dychwelyd label math manwl, darllenadwy i bobl ar gyfer gwerth penodol, gan gynnwys mathau rhifiadol
wedi'u mireinio a mathau gwrthrychau penodol.

### Achos defnydd

Defnyddiwch `getTypeOf` i normaleiddio canfod math mewn dilysu mewnbwn a diagnosteg—er enghraifft, i wrthod `nan`,
derbyn dim ond IDau `integer`, trin llinynnau rhifiadol fel `decimal` yn wahanol i `string` plaen, neu i gofnodi mathau
gwrthrychau manwl fel `date` a `regexp`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Y math dychwelyd yw `DataTypeAsString | string`. Triniwch ef fel label disgrifiadol; cymharwch yn erbyn llythrennau
> hysbys fel `integer`, `float`, `nan`, `array`, `null`, ac `undefined` wrth ganghennu.

### Manteision

- Yn dychwelyd llinyn math mwy manwl na `typeof` JavaScript, gan gynnwys is-fathau rhifiadol fel `integer`, `float`, a
  `nan`.
- Yn gwahaniaethu `null` a `undefined` yn benodol fel `null` a `undefined`.
- Yn canfod fformatau llinyn rhifiadol cyffredin ac yn eu hadrodd fel `binary`, `octal`, `decimal`, neu `hexadecimal` yn
  hytrach na `string` plaen.
- Yn adnabod araeau fel `array` ac yn defnyddio `Object.prototype.toString` i ddarparu enwau math gwrthrych penodol (
  e.e., `date`, `regexp`, `map`, `set`).
- Yn ddefnyddiol ar gyfer dilysu, cofnodi, a dadfygio lle mae angen labeli math cyson, darllenadwy i bobl.

## Defnydd

### Cystrawen

Swyddogaeth:

- `getTypeOf(value)`

Paramedrau:

- `value`: Y gwerth y mae angen pennu'r math data ar ei gyfer.

### Mewnforio swyddogaeth leol

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

// Gwiriadau enghreifftiol
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.getTypeOf(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Crëwyd y ffeil ar 6 February 2026 at 13:05:54 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>