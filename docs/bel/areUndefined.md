# areUndefined

## Апісанне

`areUndefined` правярае, ці з'яўляецца кожны элемент у перададзеным масіве значэннем `undefined`.

### Выкарыстанне

Праверыць, што спіс неабавязковых вынікаў не змяшчае рэальных значэнняў (толькі `undefined`), напрыклад, пасля мапавання
пошукаў, дзе адсутныя запісы прадстаўлены як `undefined`, і вы хочаце пацвердзіць, што ўсе пошукі не ўдаліся.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `areUndefined`, калі трэба сцвердзіць, што `unknown[]` змяшчае толькі значэнні `undefined`; яна вяртае
`false` для пустых масіваў і для не-масіваў/няправільных уваходных значэнняў з-за ўнутранай праверкі `isFilledArray`.

### Перавагі

- Вяртае `false` для не-масіваў і пустых масіваў, бо патрабуе запоўнены масіў праз `isFilledArray`.
- Гарантуе, што кожны элемент — гэта `undefined`, а не толькі некаторыя, робячы намер відавочным.
- Карысна як прадзікат у стылі guard пры валідацыі невядомых уваходных калекцый.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areUndefined(array)`

Параметры:

- `array`: Масіў, які трэба праверыць на элементы `undefined`.

### Лакальны імпарт функцыі

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Заўвага: вяртае false для пустых масіваў
const r4 = areUndefined([]); // false

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areUndefined(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 13:54:47 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>