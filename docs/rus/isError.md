# isError

## Описание

Проверяет, является ли заданное `value` экземпляром `Error`.

### Сценарий использования

Используйте `isError`, когда вы получаете значение типа `unknown` (например, из блока `catch`, колбэка или внешней
библиотеки) и вам нужно безопасно определить, является ли оно `Error`, прежде чем читать `message`, `name` или `stack`.

> **Примечание для пользователей TypeScript:**
>
> Используйте `isError` для защиты значений типа `unknown` (например, из `catch`) перед тем, как трактовать их как
`Error`.

### Преимущества

- Предоставляет простую проверку во время выполнения, является ли значение экземпляром `Error`.
- Помогает сузить неизвестные входные данные перед доступом к свойствам `Error`, таким как `message` или `stack`.
- Снижает риск исключений во время выполнения при обработке значений из `catch`, внешних API или нетипизированных
  источников.

## Использование

### Синтаксис

Функция:

- `isError(value)`

Параметры:

- `value`: Значение, которое нужно проверить на соответствие типу `Error`.

### Локальный импорт функции

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isError(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isError](../_analysis/isError.md)

<br>

---

<small>Файл был сгенерирован 6 февраля 2026 г. в 12:46:54 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>