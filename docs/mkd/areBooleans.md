# areBooleans

## Опис

`areBooleans` проверува дали дадена непразна низа содржи само булови вредности, враќајќи `true` ако е така и `false` во
спротивно.

### Случај на употреба

Валидирајте податоци обезбедени од корисник или надворешни извори (на пр., JSON payloads, query params, конфигурациски
низи) за да се осигурате дека непразна листа содржи само булови пред да примените булова логика или да ја проследите до
API-и што очекуваат `boolean[]`.

> **Белешка за корисници на TypeScript:**
>
> Користете `areBooleans` за да валидирате `unknown[]` пред да го третирате како `boolean[]`; враќа `false` за празни
> низи, па експлицитно обработете го тој случај ако треба да се дозволи празна листа.

### Предности

- Враќа `true` само кога секој елемент е булов и влезот е непразна низа.
- Спречува лажни позитиви со отфрлање на празни низи (враќа `false`).
- Добро функционира како runtime guard пред операции само со булови (на пр., `every`, `some`, логички редукции).

## Употреба

### Синтакса

Функција:

- `areBooleans(array)`

Параметри:

- `array`: Низата што треба да се провери за булови елементи.

### Локален импорт на функција

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areBooleans(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 14:41:13 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>