# areRegExes

## Описание

`areRegExes` проверява дали дадена стойност е запълнен масив, съдържащ само обекти `RegExp`.

### Случай на употреба

Валидирайте, че опция от конфигурацията (напр. списък с шаблони за allow/deny) е непразен масив от регулярни изрази,
преди да я използвате за съпоставяне.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areRegExes`, за да стесните `unknown` до `RegExp[]` преди обхождане или комбиниране на шаблони.

### Предимства

- Гарантира, че стойността е непразен масив, в който всеки елемент е инстанция на `RegExp`.
- Предоставя проста булева проверка (`true`/`false`) за валидиране на потребителски вход или конфигурация.
- Помага да се предотвратят грешки по време на изпълнение, когато по-късен код приема, че всички елементи поддържат
  операции с регулярни изрази.

## Използване

### Синтаксис

Функция:

- `areRegExes(array)`

Параметри:

- `array`: Стойността, която трябва да бъде проверена.

### Локален импорт на функция

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns тук е масив от RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areRegExes(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 23:17:00 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>