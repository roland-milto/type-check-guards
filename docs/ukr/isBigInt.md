# isBigInt

## Опис

`isBigInt` перевіряє, чи має задане значення тип `bigint`, повертаючи `true` для примітивів BigInt і `false` в інших
випадках.

### Випадок використання

Перевіряйте та звужуйте значення, що надходять із нетипізованих джерел (наприклад, парсинг JSON, введення користувача,
зовнішні API), перед виконанням обчислень, специфічних для BigInt, або збереженням їх у полях, що приймають лише BigInt.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isBigInt`, щоб звузити `unknown` до `bigint` перед виконанням арифметики BigInt (наприклад, `+`, `*`),
> яка вимагає операндів типу BigInt.

### Переваги

- Надає просту й надійну перевірку під час виконання для примітивного типу `bigint`.
- Допомагає звузити значення типу `unknown` перед виконанням операцій, доступних лише для BigInt.
- Уникає хибнопозитивних результатів: звичайні числа, рядки та інші типи повертають `false`.

## Використання

### Синтаксис

Функція:

- `isBigInt(value)`

Параметри:

- `value`: Значення для перевірки.

### Локальний імпорт функції

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // істина
console.log(isBigInt(10));  // хибність
console.log(isBigInt("10")); // хибність

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isBigInt(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Файл було згенеровано 31 January 2026 at 23:33:42 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>