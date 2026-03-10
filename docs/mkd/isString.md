# isString

## Опис

`isString` утврдува дали дадена вредност е стринг.

### Случај на употреба

Валидирајте кориснички внес, полиња од API payload или конфигурациски вредности во runtime за да се осигурате дека
вредноста е стринг пред да примените стринг-операции (на пр., кратење, разделување, промена на големина на букви).

> **Белешка за корисници на TypeScript:**
>
> Користете `isString` за да валидирате `unknown` или лабаво типизирани вредности пред да повикате стринг-методи; враќа
`true` само кога `typeof value === "string"`.

### Предности

- Едноставна и брза проверка со `typeof`.
- Враќа предвидлив булов резултат: `true` за стрингови, инаку `false`.
- Работи и за празни и за непразни стрингови.
- Корисно како лесна runtime-заштита пред извршување операции специфични за стрингови.

## Употреба

### Синтакса

Функција:

- `isString(value)`

Параметри:

- `value`: Вредноста што треба да се тестира дали е од тип стринг.

### Локален импорт на функција

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input е низа тука
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isString(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isString](../_analysis/isString.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 13:14:49 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>