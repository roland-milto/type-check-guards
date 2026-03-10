# isBoolean

## Описание

Определяет, является ли заданное значение `boolean`.

### Сценарий использования

Валидируйте внешние или нетипизированные данные (например, переменные окружения, JSON-полезные нагрузки, параметры
запроса), чтобы убедиться, что значение является `boolean`, прежде чем использовать его в условной логике.

> **Примечание для пользователей TypeScript:**
>
> Используйте `isBoolean`, чтобы сузить `unknown` до `boolean` перед применением булевых операций.

### Преимущества

- Простая и быстрая проверка во время выполнения с использованием `typeof`.
- Помогает валидировать неизвестный ввод перед логикой, специфичной для boolean.
- Возвращает предсказуемый результат типа `boolean` (`true`/`false`).

## Использование

### Синтаксис

Функция:

- `isBoolean(value)`

Параметры:

- `value`: Значение, которое нужно проверить.

### Локальный импорт функции

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // здесь input является boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isBoolean(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 14:37:41 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>