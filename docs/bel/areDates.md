# areDates

## Апісанне

`areDates` вызначае, ці запоўнены дадзены масіў і ці змяшчае ён толькі аб’екты `Date`, вяртаючы `true` толькі тады, калі
ўсе элементы — карэктныя даты.

### Выкарыстанне

Выкарыстоўвайце `areDates`, каб праверыць невядомы ўвод (напрыклад, распарсены JSON, даныя формы, payload API) перад
выкананнем логікі, спецыфічнай для дат, такой як сартаванне па часе, фарматаванне або вылічэнне дыяпазонаў.

> **Падказка для карыстальнікаў TypeScript:**
>
> Вяртае `true` толькі для непустых масіваў, дзе кожны элемент — `Date`; пустыя масівы даюць `false`.

### Перавагі

- Гарантуе, што масіў не пусты перад праверкай яго змесціва, прадухіляючы `true` для пустых уваходных даных.
- Правярае, што кожны элемент з’яўляецца асобнікам `Date`, і адразу вяртае `false` пры першым несупадзенні.
- Карысна як праверка ў стылі guard перад выкананнем аперацый, спецыфічных для дат, над элементамі масіва.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areDates(array)`

Параметры:

- `array`: Масіў, які трэба праверыць на наяўнасць аб’ектаў `Date`.

### Лакальны імпарт функцыі

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // праўда
console.log(areDates(b)); // няпраўда
console.log(areDates(c)); // няпраўда

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areDates(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areDates](../_analysis/areDates.md)

<br>

---

<small>Файл быў створаны 31 January 2026 at 15:29:32 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>