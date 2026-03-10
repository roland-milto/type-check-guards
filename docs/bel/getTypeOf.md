# getTypeOf

## Апісанне

`getTypeOf` вяртае дэталізаваную, зразумелую чалавеку пазнаку тыпу для зададзенага значэння, уключаючы ўдакладненыя
лікавыя тыпы і канкрэтныя віды аб’ектаў.

### Выкарыстанне

Выкарыстоўвайце `getTypeOf`, каб нармалізаваць вызначэнне тыпаў у валідацыі ўводу і дыягностыцы — напрыклад, каб
адхіляць `nan`, прымаць толькі `integer`-ідэнтыфікатары, апрацоўваць лікавыя радкі тыпу `decimal` інакш, чым звычайны
`string`, або лагіраваць дакладныя віды аб’ектаў, такія як `date` і `regexp`.

> **Падказка для карыстальнікаў TypeScript:**
>
> Тып вяртання — `DataTypeAsString | string`. Успрымайце яго як апісальную пазнаку; пры разгалінаванні параўноўвайце з
> вядомымі літараламі, такімі як `integer`, `float`, `nan`, `array`, `null` і `undefined`.

### Перавагі

- Вяртае больш дэталізаваны радок тыпу, чым JavaScript-аўскі `typeof`, уключаючы лікавыя падтыпы, такія як `integer`,
  `float` і `nan`.
- Яўна адрознівае `null` і `undefined` як `null` і `undefined`.
- Вызначае распаўсюджаныя фарматы лікавых радкоў і паведамляе пра іх як `binary`, `octal`, `decimal` або `hexadecimal`
  замест звычайнага `string`.
- Ідэнтыфікуе масівы як `array` і выкарыстоўвае `Object.prototype.toString`, каб даваць канкрэтныя назвы тыпаў
  аб’ектаў (напрыклад, `date`, `regexp`, `map`, `set`).
- Карысна для валідацыі, лагіравання і адладкі, калі патрэбныя паслядоўныя, зразумелыя чалавеку пазнакі тыпаў.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `getTypeOf(value)`

Параметры:

- `value`: Значэнне, для якога трэба вызначыць тып даных.

### Лакальны імпарт функцыі

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

// Прыклады праверак
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.getTypeOf(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Файл быў створаны 6 February 2026 at 13:05:13 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>