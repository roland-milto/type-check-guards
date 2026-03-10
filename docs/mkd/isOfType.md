# isOfType

## Опис

Утврдува дали дадена `value` се совпаѓа со зададен стринг за тип, користејќи `typeof` за примитиви и резервен механизам
за сложени типови.

### Случај на употреба

Валидирајте и стеснете `unknown` влезови (на пр., API одговори, кориснички внес, парсиран JSON) со проверка дали
вредноста е од очекуваниот стринг-тип пред да извршите операции специфични за тип.

> **Белешка за корисници на TypeScript:**
>
> Користете `isOfType` за разгранување според runtime типови кога работите со `unknown` вредности; враќа `true`/`false`
> и експлицитно ги третира `null` и `undefined`.

### Предности

- Ги проверува примитивните типови преку директен `typeof` за брзина и јасност.
- Правилно ги обработува `null` и `undefined`, кои `typeof` сам по себе не може да ги разликува како што е наменето.
- Поддржува сложени или сопствени стрингови за тип преку резервна споредба со користење на `getTypeOf`.
- Враќа едноставен булов резултат (`true`/`false`) погоден за гардови и разгранување.

## Употреба

### Синтакса

Функција:

- `isOfType(value, type)`

Параметри:

- `value`: Вредноста што се тестира во однос на `type`.
- `type`: Стринг-репрезентацијата на типот со кој се споредува.

### Локален импорт на функција

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // input е број тука
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // input е низа тука
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isOfType(value, type)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 17:05:00 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>