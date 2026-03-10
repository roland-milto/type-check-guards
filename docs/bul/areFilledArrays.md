# areFilledArrays

## Описание

`areFilledArrays` проверява дали двумерен масив не е празен и всички негови подмасиви не са празни.

### Случай на употреба

Използвайте `areFilledArrays`, за да валидирате табличен или матричен вход (напр. CSV редове, данни за решетка,
групирани резултати), така че да можете безопасно да приемете, че има поне един подмасив и нито един от подмасивите не е
празен.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areFilledArrays`, когато трябва да се уверите, че 2D масивът има поне един ред и всеки ред има поне един
> елемент, преди да го обхождате или да индексирате в него.

### Предимства

- Проверява дали външният масив не е празен и дали всеки вътрешен масив също не е празен, като връща `true` само когато
  и двете условия са изпълнени.
- Работи с всякакви типове елементи вътре в подмасивите (напр. числа, низове, обекти, вложени масиви), защото проверява
  само дали масивите са „запълнени“, а не съдържанието на елементите.
- Предоставя прост булев резултат (`true`/`false`), подходящ за проверки (guards) преди обработка на двумерни данни.

## Използване

### Синтаксис

Функция:

- `areFilledArrays(array)`

Параметри:

- `array`: Двумерният масив за проверка.

### Локален импорт на функция

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // вярно
console.log(areFilledArrays(b)); // вярно
console.log(areFilledArrays(c)); // вярно
console.log(areFilledArrays(d)); // невярно
console.log(areFilledArrays(e)); // невярно
console.log(areFilledArrays(f)); // невярно

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areFilledArrays(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Файлът беше генериран на 6 February 2026 at 11:55:44 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>