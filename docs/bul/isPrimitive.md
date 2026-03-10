# isPrimitive

## Описание

`isPrimitive` определя дали дадена стойност е примитив (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Случай на употреба

Валидирайте входовете по време на изпълнение (напр. полета от API payload, конфигурационни стойности или данни,
предоставени от потребителя), за да се уверите, че стойността е примитив преди сериализиране, логване или прилагане на
операции, валидни само за примитиви.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isPrimitive`, за да защитите входове от тип `unknown` преди да ги третирате като обекти или функции;
> връща `true` за примитиви и `false` за обекти и функции.

### Предимства

- Бърза проверка без заделяне на памет дали дадена стойност е JavaScript примитив.
- Коректно третира `null` като примитив (въпреки че `typeof null` е `"object"`).
- Помага за стесняване на стойности от тип `unknown` преди извършване на операции, валидни само за обекти.

## Използване

### Синтаксис

Функция:

- `isPrimitive(value)`

Параметри:

- `value`: Стойността, която да се провери дали е от примитивен тип.

### Локален импорт на функция

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isPrimitive(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 23:55:36 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>