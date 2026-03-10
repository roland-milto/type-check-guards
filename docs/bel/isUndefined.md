# isUndefined

## Апісанне

Правярае, ці з’яўляецца зададзенае значэнне `undefined`.

### Выкарыстанне

Выкарыстоўвайце `isUndefined`, каб абараняць неабавязковыя ўводы, выяўляць адсутныя ўласцівасці або адрозніваць «не
перададзена» (`undefined`) ад «яўна пустое» (`null`).

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isUndefined`, калі вам трэба менавіта выявіць `undefined` (а не `null`). Гэта бяспечна, бо
> абапіраецца на `typeof value === "undefined"`.

### Перавагі

- Забяспечвае ясную, відавочную праверку на `undefined` з выкарыстаннем `typeof`, пазбягаючы крайніх выпадкаў з
  неаб’яўленымі зменнымі.
- Вяртае просты булеў вынік (`true`/`false`), прыдатны для ахоўных праверак, разгалінавання і логікі валідацыі.
- Дапамагае адрозніваць `undefined` ад іншых «пустых» значэнняў, такіх як `null`, `0`, `""` або `NaN`.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isUndefined(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць.

### Лакальны імпарт функцыі

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x тут не вызначаны
} else {
  // x тут не невы́значаны
}

const a = isUndefined(undefined); // праўда
const b = isUndefined(null);      // няпраўда

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isUndefined(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 14:01:56 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>