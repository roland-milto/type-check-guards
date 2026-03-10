# isPlainObject

## Описание

Проверяет, является ли заданное `value` простым объектом, и возвращает `true`, если да, иначе `false`.

### Сценарий использования

Проверять, что входное значение типа `unknown` (например, распарсенный JSON, внешние данные или аргументы функции)
является простым объектом, прежде чем читать ключи или преобразовывать его в типизированный объект конфигурации.

> **Примечание для пользователей TypeScript:**
>
> `isPlainObject` полезна для сужения `unknown` перед тем, как обращаться с ним как с объектом, похожим на запись (
> record); она возвращает `true` только для значений, чей внутренний тег — `[object Object]`.

### Преимущества

- Предоставляет простую и надёжную проверку того, является ли значение простым объектом (т.е. `Object` / `{}`),
  возвращая `true` или `false`.
- Помогает отличать простые объекты от массивов, функций, `null` и других типов, не являющихся простыми объектами.
- Полезно как защитник типа (type guard) в TypeScript для сужения `unknown` значений перед доступом к свойствам объекта.

## Использование

### Синтаксис

Функция:

- `isPlainObject(value)`

Параметры:

- `value`: Значение, которое нужно проверить на статус простого объекта.

### Локальный импорт функции

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // здесь input является простым объектом
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isPlainObject(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Файл был сгенерирован 6 февраля 2026 г. в 12:19:29 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>