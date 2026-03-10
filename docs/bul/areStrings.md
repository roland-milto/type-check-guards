# areStrings

## Описание

`areStrings` проверява дали масивът е непразен и дали всички негови елементи са низове, като връща `true` само в този
случай.

### Случай на употреба

Валидирайте външни или предоставени от потребителя данни (напр. query параметри, JSON payload-и, CSV полета), за да сте
сигурни, че имате непразен списък от низове преди обработка.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areStrings`, за да валидирате неизвестни масиви преди прилагане на логика само за низове; връща `false`
> за празни масиви.

### Предимства

- Гарантира, че всеки елемент е низ, и отхвърля масиви със смесени типове, като връща `false`.
- Отхвърля празни масиви, така че `true` означава само непразен списък от низове.
- Полезно като бърза runtime проверка преди изпълнение на операции само за низове (напр. `trim`, `toLowerCase`).

## Използване

### Синтаксис

Функция:

- `areStrings(value)`

Параметри:

- `value`: Expected type `string[]`.

### Локален импорт на функция

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input е непразен string[] по време на изпълнение
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areStrings(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 13:17:26 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>