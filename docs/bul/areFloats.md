# areFloats

## Описание

`areFloats` проверява дали даден масив е запълнен и всички негови елементи са числа с плаваща запетая.

### Случай на употреба

Използвайте `areFloats`, когато получавате `unknown[]` (напр. от JSON, параметри на заявка или външни API) и трябва да
се уверите, че това е запълнен масив, в който всеки елемент е число с плаваща запетая, преди да изпълните числова логика
като осредняване, интерполация или статистически изчисления.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areFloats`, за да защитите `unknown[]`, преди да го третирате като `number[]`, съдържащ само числа с
> плаваща запетая; функцията връща `false` за празни масиви и за всеки елемент, който не е число с плаваща запетая.

### Предимства

- Връща `true` само когато входът е непразен масив и всеки елемент е число с плаваща запетая.
- Прекратява рано: връща `false` веднага щом бъде открит елемент, който не е число с плаваща запетая.
- Помага за валидиране на неизвестен вход преди извършване на изчисления, специфични за числа с плаваща запетая.

## Използване

### Синтаксис

Функция:

- `areFloats(array)`

Параметри:

- `array`: Масивът, който да се провери за елементи от тип число с плаваща запетая.

### Локален импорт на функция

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // вярно
console.log(areFloats(b)); // невярно
console.log(areFloats(c)); // невярно

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areFloats(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 15:56:29 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>