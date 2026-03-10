# isWeakMap

## Описание

Определяет, является ли заданное `value` экземпляром `WeakMap`.

### Сценарий использования

Используйте `isWeakMap`, когда вы принимаете значение типа `unknown` (например, из публичного API, системы плагинов или
динамической конфигурации) и вам нужно убедиться, что это `WeakMap`, прежде чем использовать поведение, специфичное для
`WeakMap`.

> **Примечание для пользователей TypeScript:**
>
> `isWeakMap` выполняет проверку `instanceof WeakMap`; это runtime-guard, который возвращает `true` только для реальных
> экземпляров `WeakMap`.

### Преимущества

- Простая проверка во время выполнения, является ли значение `WeakMap`.
- Помогает предотвратить неправильное использование API, которым требуется `WeakMap`, возвращая `true`/`false` вместо
  выбрасывания исключения.
- Работает с входными значениями типа `unknown`, что удобно на границах модулей (например, при парсинге, работе с
  внешними данными или нетипизированным кодом).

## Использование

### Синтаксис

Функция:

- `isWeakMap(value)`

Параметры:

- `value`: Значение для проверки.

### Локальный импорт функции

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a является WeakMap во время выполнения
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isWeakMap(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 13:26:42 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>