# areFilledArrays

## Опис

`areFilledArrays` перевіряє, чи двовимірний масив не порожній і чи всі його підмасиви не порожні.

### Випадок використання

Використовуйте `areFilledArrays` для валідації табличного або матричного вводу (наприклад, рядків CSV, даних сітки,
згрупованих результатів), щоб можна було безпечно припускати, що існує принаймні один підмасив і жоден із підмасивів не
є порожнім.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `areFilledArrays`, коли потрібно переконатися, що 2D масив має принаймні один рядок і кожен рядок має
> принаймні один елемент перед ітерацією або індексацією.

### Переваги

- Перевіряє, що зовнішній масив не порожній і що кожен внутрішній масив також не порожній, повертаючи `true` лише тоді,
  коли виконано обидві умови.
- Працює з будь-якими типами елементів усередині підмасивів (наприклад, числами, рядками, об’єктами, вкладеними
  масивами), оскільки перевіряє лише «заповненість» масиву, а не вміст елементів.
- Надає простий булевий результат (`true`/`false`), придатний для перевірок-охоронців перед обробкою двовимірних даних.

## Використання

### Синтаксис

Функція:

- `areFilledArrays(array)`

Параметри:

- `array`: Двовимірний масив для перевірки.

### Локальний імпорт функції

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // true
console.log(areFilledArrays(b)); // true
console.log(areFilledArrays(c)); // true
console.log(areFilledArrays(d)); // false
console.log(areFilledArrays(e)); // false
console.log(areFilledArrays(f)); // false

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.areFilledArrays(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Файл було згенеровано 6 February 2026 at 11:59:37 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>