# getTypeOf

## Paglalarawan

Nagbabalik ang `getTypeOf` ng detalyado at madaling basahing label ng uri para sa isang ibinigay na value, kabilang ang
mas pinong mga numerikong uri at mga tiyak na klase ng object.

### Kaso ng paggamit

Gamitin ang `getTypeOf` para i-normalize ang type detection sa input validation at diagnostics—halimbawa, para tanggihan
ang `nan`, tumanggap lamang ng mga `integer` na ID, ituring ang mga numerikong string gaya ng `decimal` nang iba kaysa
sa karaniwang `string`, o para mag-log ng eksaktong mga klase ng object gaya ng `date` at `regexp`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Ang return type ay `DataTypeAsString | string`. Ituring ito bilang isang mapaglarawang label; ihambing laban sa mga
> kilalang literal gaya ng `integer`, `float`, `nan`, `array`, `null`, at `undefined` kapag nagba-branch.

### Mga bentahe

- Nagbabalik ng mas detalyadong string ng uri kaysa sa `typeof` ng JavaScript, kabilang ang mga numerikong subtype gaya
  ng `integer`, `float`, at `nan`.
- Tahasang pinag-iiba ang `null` at `undefined` bilang `null` at `undefined`.
- Nadidetect nito ang mga karaniwang format ng numerikong string at iniuulat ang mga ito bilang `binary`, `octal`,
  `decimal`, o `hexadecimal` sa halip na simpleng `string`.
- Nakikilala rin nito ang mga array bilang `array` at gumagamit ng `Object.prototype.toString` para magbigay ng mga
  tiyak na pangalan ng uri ng object (hal., `date`, `regexp`, `map`, `set`).
- Napakakapaki-pakinabang ito para sa validation, pagla-log, at pagde-debug kung saan kailangan ang pare-pareho at
  madaling basahing mga label ng uri.

## Paggamit

### Sintaks

Function:

- `getTypeOf(value)`

Mga parameter:

- `value`: Ang value kung saan tutukuyin ang uri ng data.

### Lokal na pag-import ng function

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

// Mga halimbawang pagsusuri
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.getTypeOf(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Ang file ay nabuo noong 6 February 2026 at 13:15:10 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>