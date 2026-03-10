# isNumber

## Описание

`isNumber` проверява дали дадена стойност е крайно число, различно от `NaN`.

### Случай на употреба

Валидирайте числов вход от ненадеждни източници (форми, query параметри, JSON payload-и) преди изчисления, съхранение
или проверки на диапазон, като гарантирате, че само крайни числа минават (`true`), а всичко останало връща `false`.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isNumber`, за да валидирате стойности от тип `unknown` преди аритметика; отхвърля `NaN`, `Infinity` и
`-Infinity`.

### Предимства

- Връща `true` само за реални JavaScript числа (проверка на типа плюс отхвърляне на `NaN` и безкрайност).
- Предотвратява чести грешки при валидация, при които `NaN`, `Infinity` или `-Infinity` случайно минават като числа.
- Работи добре като runtime guard за неизвестен вход (напр. JSON, потребителски вход, външни API).
- Просто, бързо и без странични ефекти.

## Използване

### Синтаксис

Функция:

- `isNumber(value)`

Параметри:

- `value`: Стойността за проверка.

### Локален импорт на функция

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // входът е валидно крайно число
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isNumber(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 13:08:22 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>