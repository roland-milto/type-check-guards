# isPrimitive

## Апісанне

`isPrimitive` вызначае, ці з'яўляецца зададзенае значэнне прымітывам (`null`, `undefined`, `boolean`, `number`,
`string`, `bigint`, `symbol`).

### Выкарыстанне

Правярайце ўваходныя даныя падчас выканання (напрыклад, палі нагрузкі API, значэнні канфігурацыі або даныя, уведзеныя
карыстальнікам), каб пераканацца, што значэнне — прымітыў, перад серыялізацыяй, лагаваннем або прымяненнем аперацый,
даступных толькі для прымітываў.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isPrimitive`, каб абараніць уваходныя значэнні тыпу `unknown` перад тым, як разглядаць іх як аб'екты
> або функцыі; ён вяртае `true` для прымітываў і `false` для аб'ектаў і функцый.

### Перавагі

- Хуткая праверка без выдзялення памяці, ці з'яўляецца значэнне прымітывам JavaScript.
- Карэктна лічыць `null` прымітывам (нават калі `typeof null` — гэта `"object"`).
- Дапамагае звузіць значэнні тыпу `unknown` перад выкананнем аперацый, якія прымяняльныя толькі да аб'ектаў.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isPrimitive(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць на прымітыўны тып.

### Лакальны імпарт функцыі

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isPrimitive(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 23:55:30 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>