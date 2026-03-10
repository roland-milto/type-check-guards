# areFalse

## Описание

`areFalse` проверява дали всички елементи в предоставен масив са строго булевата стойност `false`.

### Случай на употреба

Валидирайте, че списък с feature flags, проверки или резултати от guard-ове са всички `false`, преди да продължите (
напр. потвърдете, че няма блокиращи условия).

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areFalse`, когато ви е нужна строга валидация, че масивът не е празен и съдържа само булевата стойност
`false`.

### Предимства

- Гарантира, че всеки елемент е строго `false` (без преобразуване на truthy/falsey стойности).
- Връща `false` за не-масиви или празни масиви, като изисква попълнен масив чрез `isFilledArray`.
- Спира рано при първия елемент, който не е `false`, за по-голяма ефективност.

## Използване

### Синтаксис

Функция:

- `areFalse(array)`

Параметри:

- `array`: Масивът за проверка, съдържащ елементи от всякакъв тип.

### Локален импорт на функция

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // вярно
const b = areFalse([false, true, false]);  // невярно
const c = areFalse([false, "false", false]); // невярно
const d = areFalse([]); // невярно

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areFalse(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Файлът беше генериран на 31 January 2026 at 16:16:26 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>