# areStrings

## Опис

`areStrings` проверува дали една низа е непразна и дали сите нејзини елементи се низи (strings), враќајќи `true` само во
тој случај.

### Случај на употреба

Валидирајте надворешни или кориснички доставени податоци (на пр., query params, JSON payloads, CSV fields) за да се
осигурате дека имате непразна листа од низи (strings) пред обработка.

> **Белешка за корисници на TypeScript:**
>
> Користете `areStrings` за да валидирате непознати низи пред да примените логика само за низи; враќа `false` за празни
> низи.

### Предности

- Осигурува дека секој елемент е низа (string) и отфрла низи со мешани типови со враќање `false`.
- Отфрла празни низи, па `true` означува само непразна листа од низи (strings).
- Корисно како брза runtime проверка пред извршување операции само за низи (на пр., `trim`, `toLowerCase`).

## Употреба

### Синтакса

Функција:

- `areStrings(value)`

Параметри:

- `value`: Expected type `string[]`.

### Локален импорт на функција

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input е непразен string[] при извршување
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areStrings(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 13:19:19 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>