# isError

## Опис

Проверува дали дадената `value` е инстанца на `Error`.

### Случај на употреба

Користете `isError` кога добивате `unknown` вредност (како од `catch` блок, callback или надворешна библиотека) и треба
безбедно да утврдите дали е `Error` пред да ги читате `message`, `name` или `stack`.

> **Белешка за корисници на TypeScript:**
>
> Користете `isError` за да ги заштитите `unknown` вредностите (на пр., од `catch`) пред да ги третирате како `Error`.

### Предности

- Обезбедува едноставна проверка во извршување дали некоја вредност е инстанца на `Error`.
- Помага да се стеснат непознати влезови пред пристап до својства на `Error` како `message` или `stack`.
- Го намалува ризикот од исклучоци при извршување при ракување со вредности од `catch`, надворешни API-и или
  нетипизирани извори.

## Употреба

### Синтакса

Функција:

- `isError(value)`

Параметри:

- `value`: Вредноста што треба да се провери во однос на типот `Error`.

### Локален импорт на функција

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isError(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isError](../_analysis/isError.md)

<br>

---

<small>Датотеката беше генерирана на 6 February 2026 at 12:46:19 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>