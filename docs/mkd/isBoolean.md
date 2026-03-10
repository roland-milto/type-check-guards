# isBoolean

## Опис

Одредува дали дадена вредност е `boolean`.

### Случај на употреба

Валидирајте надворешни или нетипизирани податоци (на пр., променливи на околината, JSON payloads, query parameters) за
да се осигурате дека вредноста е `boolean` пред да ја користите во условна логика.

> **Белешка за корисници на TypeScript:**
>
> Користете `isBoolean` за да го стесните `unknown` на `boolean` пред да примените boolean операции.

### Предности

- Едноставна и брза проверка во извршување со `typeof`.
- Помага да се валидира непознат влез пред логика специфична за boolean.
- Враќа предвидлив `boolean` резултат (`true`/`false`).

## Употреба

### Синтакса

Функција:

- `isBoolean(value)`

Параметри:

- `value`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input е булов тука
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isBoolean(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 14:37:06 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>