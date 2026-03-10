# areFinite

## Описание

`areFinite` проверява дали дадена стойност е непразен масив, чиито елементи са всички крайни числа, като връща `true`
ако е така и `false` в противен случай.

### Случай на употреба

Валидирайте масиви с числов вход (напр. серии за диаграми, списъци с координати, измервателни проби) преди извършване на
изчисления, като гарантирате, че резултатът е `true` само когато всички стойности са крайни числа.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areFinite`, когато трябва да се уверите, че масивът е непразен и съдържа само крайни числа; връща `false`
> за празни масиви и за масиви, съдържащи `NaN` или безкрайности.

### Предимства

- Връща `true` само когато входът е непразен масив и всеки елемент е крайно число.
- Отхвърля `Infinity`, `-Infinity` и `NaN`, като разчита на проверки с `isFinite` за всеки елемент.
- Предоставя прост булев резултат (`true`/`false`), подходящ за гардове и потоци за валидация.

## Използване

### Синтаксис

Функция:

- `areFinite(array)`

Параметри:

- `array`: Масивът, който трябва да бъде проверен дали всички негови елементи са крайни.

### Локален импорт на функция

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // вярно
console.log(areFinite(b)); // невярно
console.log(areFinite(c)); // невярно

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areFinite(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 16:33:52 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>