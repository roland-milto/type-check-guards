# isFinite

## Описание

Определя дали дадена `value` е крайно `number`.

### Случай на употреба

Използвайте `isFinite`, за да валидирате вход с неизвестен тип (напр. от JSON, форми или API) преди да извършвате
числови изчисления, като гарантирате, че стойността е реално, крайно число.

> **Бележка за потребителите на TypeScript:**
>
> `isFinite` връща `true` само за крайни числа; връща `false` за `NaN`, `Infinity` и всяка стойност, която не е число.

### Предимства

- Използва вградената `Number.isFinite` за надеждна проверка за крайност.
- Връща `true` само за крайни числа; връща `false` за `NaN`, `Infinity` и входове, които не са числа.
- Прост предикат без странични ефекти, подходящ за валидация и защитна логика.

## Използване

### Синтаксис

Функция:

- `isFinite(value)`

Параметри:

- `value`: Стойността, която да се провери за крайност.

### Локален импорт на функция

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers е: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value тук е крайно число
  const doubled = value * 2;
  console.log(doubled);
}
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isFinite(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 16:29:10 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>