# isNullOrUndefined

## Описание

Проверява дали дадена стойност е `null` или `undefined`.

### Случай на употреба

Използвайте `isNullOrUndefined`, когато трябва да третирате и `null`, и `undefined` като „няма стойност“, например при
валидиране на опционални входни данни, нормализиране на API payload-и или предпазване на кодови пътища преди
дерефериране на потенциално липсваща стойност.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isNullOrUndefined`, за да се предпазите от липсващи стойности преди достъп до свойства или извикване на
> методи; връща `true` само за `null` и `undefined`.

### Предимства

- Предоставя ясен, многократно използваем гард за откриване на `null` и `undefined` на едно място.
- Връща прост булев резултат (`true`/`false`), който лесно се комбинира в условия и валидации.
- Помага да се избегнат често срещани runtime грешки, като проверява за липсващи стойности преди достъп до свойства или
  извикване на методи.

## Използване

### Синтаксис

Функция:

- `isNullOrUndefined(value)`

Параметри:

- `value`: Стойността, която трябва да бъде проверена за `null` или `undefined`.

### Локален импорт на функция

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // обработване на липсваща стойност
}

console.log(isNullOrUndefined(b)); // вярно
console.log(isNullOrUndefined(c)); // невярно

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isNullOrUndefined(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Файлът беше генериран на 31 January 2026 at 00:33:10 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>