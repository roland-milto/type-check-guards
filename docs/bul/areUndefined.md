# areUndefined

## Описание

`areUndefined` проверява дали всеки елемент в предоставен масив е `undefined`.

### Случай на употреба

Валидирайте, че списък с опционални резултати не съдържа реални стойности (само `undefined`), напр. след мапване на
търсения, при което липсващите записи са представени като `undefined`, и искате да потвърдите, че всички търсения са се
провалили.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areUndefined`, когато трябва да потвърдите, че `unknown[]` съдържа само стойности `undefined`; връща
`false` за празни масиви и за не-масиви/невалидни входове поради вътрешната проверка `isFilledArray`.

### Предимства

- Връща `false` за не-масиви и празни масиви, като изисква непразен масив чрез `isFilledArray`.
- Гарантира, че всеки елемент е `undefined`, а не само някои, като прави намерението изрично.
- Полезно като предикат тип „guard“ при валидиране на неизвестни входни колекции.

## Използване

### Синтаксис

Функция:

- `areUndefined(array)`

Параметри:

- `array`: Масивът, който да се провери за елементи `undefined`.

### Локален импорт на функция

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // вярно
const r2 = areUndefined(b); // невярно
const r3 = areUndefined(c); // невярно

// Забележка: връща невярно за празни масиви
const r4 = areUndefined([]); // невярно
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areUndefined(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 13:55:02 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>