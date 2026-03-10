# areObjects

## Опис

`areObjects` проверува дали дадена пополнета низа содржи само објекти.

### Случај на употреба

Користете `areObjects` кога добивате непозната низа (на пр., од парсирање JSON или надворешни API-и) и треба да се
осигурате дека не е празна и дека секој елемент е објект пред да итерирате и да пристапувате до својства на објектите.

> **Белешка за корисници на TypeScript:**
>
> Користете `areObjects` за да валидирате `unknown[]` пред да ги третирате ставките како објекти; враќа `false` за
> празни низи.

### Предности

- Враќа `true` само кога влезот е пополнета низа и секој елемент е објект.
- Запира рано и враќа `false` штом ќе се пронајде елемент што не е објект.
- Помага да се валидира непознат влез пред да се извршат операции специфични за објекти.

## Употреба

### Синтакса

Функција:

- `areObjects(array)`

Параметри:

- `array`: Низата што треба да се провери дали содржи елементи што се објекти.

### Локален импорт на функција

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value е пополнета низа од објекти
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areObjects(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 00:09:36 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>