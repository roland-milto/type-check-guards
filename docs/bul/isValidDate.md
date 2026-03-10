# isValidDate

## Описание

`isValidDate` проверява дали дадена стойност е валиден обект `Date` и връща `true` само за реални, не-невалидни дати.

### Случай на употреба

Валидирайте потребителски вход или данни от API, които може да съдържат дати, като гарантирате, че стойността е реална
инстанция на `Date`, а не невалидна дата, преди да извършвате изчисления, форматиране или сравнения на дати.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isValidDate` преди да извиквате методи на `Date` (напр. `toISOString`, `getTime`) върху стойности с тип
`unknown`, за да се уверите, че са валидни обекти `Date`.

### Предимства

- Гарантира, че стойността е инстанция на `Date`, а не просто низ или число, наподобяващи дата.
- Отхвърля невалидни дати (напр. `new Date("invalid")`), като проверява за `NaN` стойности на времето.
- Прост булев гард, който е лесен за използване в условни проверки и пайплайни за валидация.
- Помага да се предотвратят runtime грешки при извикване на методи за дати, като първо валидира входа.

## Използване

### Синтаксис

Функция:

- `isValidDate(value)`

Параметри:

- `value`: Стойността, която трябва да бъде проверена.

### Локален импорт на функция

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // входът е валиден екземпляр на Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // невярно
console.log(isValidDate("2025-12-22")); // невярно

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isValidDate(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 16:39:06 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>