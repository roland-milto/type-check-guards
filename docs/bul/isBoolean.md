# isBoolean

## Описание

Определя дали дадена стойност е `boolean`.

### Случай на употреба

Валидирайте външни или нетипизирани данни (напр. променливи на средата, JSON payload-и, параметри на заявка), за да се
уверите, че стойността е `boolean` преди да я използвате в условна логика.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isBoolean`, за да стесните `unknown` до `boolean` преди да прилагате булеви операции.

### Предимства

- Проста и бърза проверка по време на изпълнение с помощта на `typeof`.
- Помага за валидиране на неизвестен вход преди логика, специфична за булеви стойности.
- Връща предвидим резултат `boolean` (`true`/`false`).

## Използване

### Синтаксис

Функция:

- `isBoolean(value)`

Параметри:

- `value`: Стойността, която трябва да бъде проверена.

### Локален импорт на функция

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // тук input е булев тип
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isBoolean(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 14:35:47 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>