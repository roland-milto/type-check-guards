# isBuffer

## Описание

Проверяет, является ли значение Node.js `Buffer`, и возвращает `true` или `false`.

### Сценарий использования

Проверяйте входные данные во время выполнения (например, полезные нагрузки API, данные файлов или буферы сообщений),
чтобы убедиться, что значение является `Buffer` перед его обработкой, и надёжно получать `false` при запуске вне
Node.js, где `Buffer` может не существовать.

> **Примечание для пользователей TypeScript:**
>
> Используйте `isBuffer`, чтобы сузить значения типа `unknown` до `Buffer` перед вызовом методов, специфичных для
> Buffer.

### Преимущества

- Безопасно определяет экземпляры Node.js `Buffer` с помощью `Buffer.isBuffer`.
- Возвращает `false` в средах, где `Buffer` недоступен, избегая ошибок во время выполнения.
- Работает с входными данными типа `unknown`, что делает его подходящим для проверки во время выполнения и сужения
  типов.

## Использование

### Синтаксис

Функция:

- `isBuffer(value)`

Параметры:

- `value`: Значение, которое нужно проверить.

### Локальный импорт функции

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  // здесь a является Buffer
  console.log(a.toString("utf8"));
}
```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isBuffer(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Файл был сгенерирован 31 января 2026 г. в 16:33:05 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>