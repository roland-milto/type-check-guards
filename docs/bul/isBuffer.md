# isBuffer

## Описание

Проверява дали дадена стойност е Node.js `Buffer` и връща `true` или `false`.

### Случай на употреба

Валидирайте входовете по време на изпълнение (напр. API payload-и, файлови данни или буфери за съобщения), за да се
уверите, че стойността е `Buffer` преди обработка, и надеждно получавайте `false`, когато се изпълнява извън Node.js,
където `Buffer` може да не съществува.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isBuffer`, за да стесните стойности от тип `unknown` до `Buffer`, преди да извиквате методи, специфични
> за Buffer.

### Предимства

- Безопасно открива инстанции на Node.js `Buffer`, използвайки `Buffer.isBuffer`.
- Връща `false` в среди, където `Buffer` не е наличен, като избягва грешки по време на изпълнение.
- Работи с вход от тип `unknown`, което го прави подходящ за валидиране по време на изпълнение и стесняване на типа.

## Използване

### Синтаксис

Функция:

- `isBuffer(value)`

Параметри:

- `value`: Стойността, която трябва да бъде тествана.

### Локален импорт на функция

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // вярно
console.log(isBuffer(b)); // невярно

if (isBuffer(a)) {
  // a тук е Buffer
  console.log(a.toString("utf8"));
}
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isBuffer(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Файлът беше генериран на 31 January 2026 at 16:30:57 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>