# isUndefined

## Описание

Проверява дали дадена стойност е `undefined`.

### Случай на употреба

Използвайте `isUndefined`, за да защитите опционални входни данни, да откривате липсващи свойства или да разграничавате
между „не е предоставено“ (`undefined`) и „изрично празно“ (`null`).

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isUndefined`, когато конкретно трябва да засечете `undefined` (а не `null`). Безопасно е, защото разчита
> на `typeof value === "undefined"`.

### Предимства

- Осигурява ясна, изрична проверка за `undefined` чрез `typeof`, като избягва гранични случаи с недекларирани
  променливи.
- Връща прост булев резултат (`true`/`false`), подходящ за гардове, разклоняване и логика за валидация.
- Помага да се разграничи `undefined` от други „празни“ стойности като `null`, `0`, `""` или `NaN`.

## Използване

### Синтаксис

Функция:

- `isUndefined(value)`

Параметри:

- `value`: Стойността, която трябва да бъде проверена.

### Локален импорт на функция

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x е undefined тук
} else {
  // x не е undefined тук
}

const a = isUndefined(undefined); // вярно
const b = isUndefined(null);      // невярно

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isUndefined(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 14:02:08 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>