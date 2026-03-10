# areIntegers

## Описание

`areIntegers` определя дали всички елементи в даден масив са цели числа, като връща `true`, ако са, и `false` в противен
случай.

### Случай на употреба

Използвайте `areIntegers`, за да валидирате предоставени от потребителя или външни данни (напр. параметри на заявка,
JSON payload-и, CSV редове), когато логиката ви изисква запълнен списък от цели числови стойности, като идентификатори,
броячи, отмествания за пагинация или индекси на масив.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areIntegers` като runtime guard за входове от тип `unknown[]`, преди да ги третирате като `number[]`,
> съдържащ само цели числа. Ако върне `false`, входът или не е запълнен масив, или съдържа поне една стойност, която не е
> цяло число.

### Предимства

- Връща `true` само когато всеки елемент е цяло число; в противен случай връща `false`.
- Помага за валидиране на неизвестен вход преди изпълнение на операции, които работят само с цели числа (напр.
  индексиране, броячи, идентификатори).
- Прекратява рано: спира проверката веднага щом бъде намерен елемент, който не е цяло число.

## Използване

### Синтаксис

Функция:

- `areIntegers(array)`

Параметри:

- `array`: Масивът, който да се провери за елементи, които са цели числа.

### Локален импорт на функция

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // вярно
console.log(areIntegers(b)); // вярно
console.log(areIntegers(c)); // невярно

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areIntegers(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Файлът беше генериран на 31 January 2026 at 00:57:36 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>