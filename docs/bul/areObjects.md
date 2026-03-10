# areObjects

## Описание

`areObjects` проверява дали предоставен запълнен масив съдържа само обекти.

### Случай на употреба

Използвайте `areObjects`, когато получавате неизвестен масив (напр. от парсване на JSON или външни API) и трябва да се
уверите, че не е празен и че всеки елемент е обект, преди да обхождате и да достъпвате свойства на обекти.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areObjects`, за да валидирате `unknown[]` преди да третирате елементите като обекти; връща `false` за
> празни масиви.

### Предимства

- Връща `true` само когато входът е запълнен масив и всеки елемент е обект.
- Спира по-рано и връща `false` веднага щом бъде намерен елемент, който не е обект.
- Помага за валидиране на неизвестен вход преди извършване на операции, специфични за обекти.

## Използване

### Синтаксис

Функция:

- `areObjects(array)`

Параметри:

- `array`: Масивът, който трябва да бъде проверен за елементи от тип обект.

### Локален импорт на функция

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value е запълнен масив от обекти
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areObjects(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Файлът беше генериран на 31 January 2026 at 00:08:05 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>