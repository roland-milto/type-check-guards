# isBigInt

## Описание

`isBigInt` проверяет, является ли заданное значение типом `bigint`, возвращая `true` для примитивов BigInt и `false` в
противном случае.

### Сценарий использования

Проверяйте и сужайте значения, поступающие из нетипизированных источников (например, парсинг JSON, пользовательский
ввод, внешние API), перед выполнением вычислений, специфичных для BigInt, или сохранением их в полях, допускающих только
BigInt.

> **Примечание для пользователей TypeScript:**
>
> Используйте `isBigInt`, чтобы сузить `unknown` до `bigint` перед выполнением арифметики BigInt (например, `+`, `*`),
> которая требует операндов типа BigInt.

### Преимущества

- Обеспечивает простую и надёжную проверку во время выполнения для примитивного типа `bigint`.
- Помогает сузить значения типа `unknown` перед выполнением операций, доступных только для BigInt.
- Избегает ложных срабатываний: обычные числа, строки и другие типы возвращают `false`.

## Использование

### Синтаксис

Функция:

- `isBigInt(value)`

Параметры:

- `value`: Значение для проверки.

### Локальный импорт функции

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // истина
console.log(isBigInt(10));  // ложь
console.log(isBigInt("10")); // ложь

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isBigInt(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Файл был сгенерирован 31 января 2026 г. в 23:33:07 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>