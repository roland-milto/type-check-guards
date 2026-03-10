# areErrors

## Опис

Проверува дали низата е непразна и содржи само `Error` објекти, враќајќи `true` или `false`.

### Случај на употреба

Потврдете дека runtime-доставена `unknown[]` (на пр., агрегирани неуспеси, резултати од валидација или десеријализирани
податоци) е непразна листа од `Error` објекти пред итерирање, логирање или повторно фрлање.

> **Белешка за корисници на TypeScript:**
>
> `areErrors` враќа `true` само за пополнета низа каде што секоја ставка е `Error`; враќа `false` за празна низа или ако
> некој елемент не е `Error`.

### Предности

- Осигурува дека секој елемент е инстанца на `Error`, овозможувајќи безбедно ракување со грешки и логирање.
- Ги отфрла празните низи, спречувајќи случајни состојби „без грешки“ да се третираат како валидни листи на грешки.
- Функционира добро како runtime guard при работа со влезови `unknown[]` (на пр., од API-ја или `catch` блокови).

## Употреба

### Синтакса

Функција:

- `areErrors(array)`

Параметри:

- `array`: Низата што треба да се провери за `Error` објекти.

### Локален импорт на функција

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value е непразна низа од Error објекти
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areErrors(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Датотеката беше генерирана на 6 February 2026 at 12:34:32 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>