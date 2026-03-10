# areValidDates

## Апісанне

Вызначае, ці з’яўляецца масіў непустым і ці складаецца ён цалкам з карэктных аб’ектаў `Date`.

### Выкарыстанне

Выкарыстоўвайце `areValidDates` для валідацыі масіваў, атрыманых ад карыстальніка або з API, перад выкананнем аперацый з
датамі (сартаванне, праверкі дыяпазону, фарматаванне), каб гарантаваць, што ўсе элементы — гэта рэальныя, карэктныя
аб’екты `Date`, і што спіс не пусты.

> **Падказка для карыстальнікаў TypeScript:**
>
> `areValidDates` вяртае `false` для пустога масіва; пераканайцеся, што масіў сапраўды павінен быць непустым, перш чым
> спадзявацца на гэта як на крок валідацыі.

### Перавагі

- Вяртае `true` толькі тады, калі кожны элемент з’яўляецца карэктным экзэмплярам `Date` (без некарэктных дат, як
  `new Date('invalid')`).
- Адхіляе пусты ўвод, вяртаючы `false`, гарантуючы, што вы прымаеце толькі змястоўныя, непустыя спісы дат.
- Забяспечвае простую булевую праверку ў стылі guard, якую лёгка камбінаваць з іншымі валідацыямі.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areValidDates(array)`

Параметры:

- `array`: Масіў для праверкі, які патэнцыйна можа ўтрымліваць аб’екты `Date`.

### Лакальны імпарт функцыі

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // праўда
console.log(areValidDates(b)); // няпраўда
console.log(areValidDates(c)); // няпраўда
console.log(areValidDates(d)); // няпраўда

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areValidDates(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 14:30:49 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>