# areNumerics

## Описание

`areNumerics` проверява дали дадена стойност е непразен масив, в който всички елементи са числови.

### Случай на употреба

Използвайте `areNumerics`, за да валидирате външни или нетипизирани данни (напр. JSON payload-и, параметри на заявка,
вход от формуляри) преди изчисляване на суми, средни стойности или други числови операции, като гарантирате, че входът е
непразен числов масив и в противен случай връщате `false`.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areNumerics` като гард за вход от тип `unknown`, преди да го третирате като числов масив; връща `false`
> за стойности, които не са масиви, както и за празни масиви.

### Предимства

- Връща `true` само когато входът е непразен масив и всеки елемент е числов.
- Проваля се бързо: спира проверката веднага щом бъде намерен нечислов елемент, връщайки `false`.
- Помага за безопасно валидиране на неизвестен вход преди извършване на числови операции.

## Използване

### Синтаксис

Функция:

- `areNumerics(array)`

Параметри:

- `array`: Масивът, който да се провери за числови елементи.

### Локален импорт на функция

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // вярно
console.log(areNumerics(b)); // вярно
console.log(areNumerics(c)); // невярно
console.log(areNumerics(d)); // невярно
console.log(areNumerics(e)); // невярно

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areNumerics(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Файлът беше генериран на 6 February 2026 at 16:04:14 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>