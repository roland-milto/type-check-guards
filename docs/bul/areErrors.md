# areErrors

## Описание

Проверява дали масивът е непразен и съдържа само обекти `Error`, връщайки `true` или `false`.

### Случай на употреба

Валидирайте, че предоставен по време на изпълнение `unknown[]` (напр. агрегирани неуспехи, резултати от валидация или
десериализирани данни) е непразен списък от обекти `Error`, преди да итерирате, логвате или хвърляте отново.

> **Бележка за потребителите на TypeScript:**
>
> `areErrors` връща `true` само за запълнен масив, в който всеки елемент е `Error`; връща `false` за празен масив или
> ако някой елемент не е `Error`.

### Предимства

- Гарантира, че всеки елемент е инстанция на `Error`, което позволява безопасна обработка на грешки и логване.
- Отхвърля празни масиви, предотвратявайки случайни състояния „няма грешки“ да бъдат третирани като валидни списъци с
  грешки.
- Работи добре като runtime guard при работа с входове `unknown[]` (напр. от API или `catch` блокове).

## Използване

### Синтаксис

Функция:

- `areErrors(array)`

Параметри:

- `array`: Масивът, който да се провери за обекти `Error`.

### Локален импорт на функция

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value е непразен масив от обекти Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areErrors(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Файлът беше генериран на 6 February 2026 at 12:32:54 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>