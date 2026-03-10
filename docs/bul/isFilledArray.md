# isFilledArray

## Описание

Проверява дали `value` е масив с поне един елемент, като връща `true` или `false`.

### Случай на употреба

Използвайте `isFilledArray`, за да валидирате входящи данни (напр. API payloads, стойности от формуляри, конфигурация)
преди обхождане, достъп до първия елемент или прилагане на логика, която изисква поне един елемент.

> **Бележка за потребителите на TypeScript:**
>
> `isFilledArray` е runtime guard, който връща булева стойност; не стеснява типовете на елементите отвъд потвърждението,
> че масивът е непразен.

### Предимства

- Проста и бърза проверка за непразен масив чрез `Array.isArray` и проверка на дължината.
- Помага да се избегнат грешки по време на изпълнение, когато кодът предполага, че масивът има поне един елемент.
- Ясен булев резултат: връща `true` за непразни масиви и `false` в противен случай.

## Използване

### Синтаксис

Функция:

- `isFilledArray(value)`

Параметри:

- `value`: Стойността, която да се провери дали е непразен масив.

### Локален импорт на функция

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input е непразен масив по време на изпълнение
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isFilledArray(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Файлът беше генериран на 6 February 2026 at 11:46:27 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>