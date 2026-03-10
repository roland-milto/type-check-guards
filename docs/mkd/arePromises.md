# arePromises

## Опис

`arePromises` утврдува дали сите елементи во низа се инстанци на `Promise`.

### Случај на употреба

Валидирајте дека динамички изградена или надворешно обезбедена листа содржи само промиси пред да ги агрегирате (на пр.,
со `Promise.all`).

> **Белешка за корисници на TypeScript:**
>
> Користете `arePromises` за да го валидирате `unknown[]` пред да повикате `Promise.all` или други операции само за
> промиси; враќа `false` за празни низи.

### Предности

- Осигурува дека секој елемент е `Promise` пред да продолжите со логика специфична за промиси.
- Враќа `false` за непополнети низи, спречувајќи двосмислени резултати за празни влезови.
- Корисно како runtime заштита при работа со `unknown[]` од надворешни извори.

## Употреба

### Синтакса

Функција:

- `arePromises(array)`

Параметри:

- `array`: Низата што треба да се провери за инстанци на Promise.

### Локален импорт на функција

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values е низа од инстанци на Promise во време на извршување
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.arePromises(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 23:49:04 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>