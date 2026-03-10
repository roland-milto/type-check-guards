# areRegExes

## Опис

`areRegExes` проверува дали вредноста е пополнета низа што содржи само `RegExp` објекти.

### Случај на употреба

Потврдете дека опција во конфигурацијата (на пр., листа на allow/deny шеми) е непразна низа од регуларни изрази пред да
ја користите за совпаѓање.

> **Белешка за корисници на TypeScript:**
>
> Користете `areRegExes` за да го стесните `unknown` на `RegExp[]` пред итерирање или составување шеми.

### Предности

- Обезбедува дека вредноста е непразна низа каде што секој елемент е инстанца на `RegExp`.
- Обезбедува едноставна булова проверка (`true`/`false`) за валидација на кориснички внес или конфигурација.
- Помага да се спречат грешки при извршување кога подоцнежниот код претпоставува дека сите ставки поддржуваат операции
  со регуларни изрази.

## Употреба

### Синтакса

Функција:

- `areRegExes(array)`

Параметри:

- `array`: Вредноста што треба да се провери.

### Локален импорт на функција

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns е низа од RegExp тука
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areRegExes(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 23:19:50 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>