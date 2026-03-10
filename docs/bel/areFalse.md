# areFalse

## Апісанне

`areFalse` правярае, ці ўсе элементы ў перададзеным масіве строга з'яўляюцца булевым значэннем `false`.

### Выкарыстанне

Праверце, што спіс feature flags, праверак або вынікаў guard-праверак усе `false` перад працягам (напрыклад,
пацвердзіць, што няма блакіруючых умоў).

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `areFalse`, калі вам патрэбна строгая валідацыя, што масіў не пусты і змяшчае толькі булевае значэнне
`false`.

### Перавагі

- Гарантуе, што кожны элемент строга `false` (без прывядзення truthy/falsey).
- Вяртае `false` для не-масіваў або пустых масіваў, патрабуючы запоўнены масіў праз `isFilledArray`.
- Спыняецца раней на першым элеменце, які не з'яўляецца `false`, для эфектыўнасці.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areFalse(array)`

Параметры:

- `array`: Масіў для праверкі, які змяшчае элементы любога тыпу.

### Лакальны імпарт функцыі

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // праўда
const b = areFalse([false, true, false]);  // няпраўда
const c = areFalse([false, "false", false]); // няпраўда
const d = areFalse([]); // няпраўда
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areFalse(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Файл быў створаны 31 January 2026 at 16:16:12 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>