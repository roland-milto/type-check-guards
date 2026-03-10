# areOfType

## Описание

Проверява дали всички елементи в дадения `array` са от посочения `type`.

### Случай на употреба

Използвайте `areOfType`, за да валидирате неизвестен вход (напр. парснат JSON, API payload-и, потребителски вход) преди
да извършвате операции, специфични за типа, върху всеки елемент на масив.

> **Бележка за потребителите на TypeScript:**
>
> Тъй като `areOfType` е type guard, TypeScript стеснява масива вътре в блок `if (areOfType(...)) {}` до
`Array<DataTypeOf<T>>`.

### Предимства

- Предоставя TypeScript type guard: когато връща `true`, входът се стеснява до `Array<DataTypeOf<T>>`.
- Валидира всеки елемент спрямо заявения runtime тип, като предотвратява масиви със смесени типове да преминат.
- Проваля се бързо: връща `false` веднага щом бъде открит елемент, който не съвпада.
- По замисъл отхвърля не-масиви и празни масиви (зависи от `isFilledArray`).

## Използване

### Синтаксис

Функция:

- `areOfType(array, type)`

Параметри:

- `array`: Масивът за проверка.
- `type`: Типът, спрямо който да се провери всеки елемент в масива.

### Локален импорт на функция

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values вече е number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // false

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areOfType(array, type)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 17:08:46 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>