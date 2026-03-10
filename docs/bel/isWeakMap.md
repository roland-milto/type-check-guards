# isWeakMap

## Апісанне

Вызначае, ці з'яўляецца зададзенае `value` асобнікам `WeakMap`.

### Выкарыстанне

Выкарыстоўвайце `isWeakMap`, калі вы прымаеце значэнне тыпу `unknown` (напрыклад, з публічнага API, сістэмы плагінаў або
дынамічнай канфігурацыі) і вам трэба праверыць, што гэта `WeakMap`, перад выкарыстаннем паводзін, спецыфічных для
`WeakMap`.

> **Падказка для карыстальнікаў TypeScript:**
>
> `isWeakMap` выконвае праверку `instanceof WeakMap`; гэта ахоўнік падчас выканання, які вяртае `true` толькі для
> сапраўдных асобнікаў `WeakMap`.

### Перавагі

- Простая праверка падчас выканання, ці з'яўляецца значэнне `WeakMap`.
- Дапамагае прадухіліць няправільнае выкарыстанне API, якія патрабуюць `WeakMap`, вяртаючы `true`/`false` замест
  выкідвання выключэння.
- Працуе з уваходнымі значэннямі тыпу `unknown`, што робіць яго зручным на межах модуляў (напрыклад, пры разборы, працы
  са знешнімі данымі або нетыпізаваным кодам).

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isWeakMap(value)`

Параметры:

- `value`: Значэнне для праверкі.

### Лакальны імпарт функцыі

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a — гэта WeakMap падчас выканання
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isWeakMap(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 13:24:12 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>