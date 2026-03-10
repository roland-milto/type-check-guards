# isPromise

## Описание

Определяет, является ли заданное значение `Promise`.

### Сценарий использования

Используйте `isPromise`, чтобы валидировать неизвестные входные данные перед тем, как обрабатывать их как `Promise`,
например при работе со значениями, возвращаемыми плагинами, динамическими импортами или слабо типизированными API.

> **Примечание для пользователей TypeScript:**
>
> `isPromise` проверяет через `instanceof Promise`, поэтому возвращает `true` только для реальных экземпляров
`Promise` (а не для обобщённых thenable).

### Преимущества

- Предоставляет простую проверку во время выполнения, является ли значение `Promise`.
- Помогает защитить ветви кода, которым требуется реальный экземпляр `Promise`, предсказуемо возвращая `true` или
  `false`.
- Избегает ложных срабатываний от «thenable»-объектов (например, `{ then() {} }`), требуя настоящий экземпляр `Promise`.

## Использование

### Синтаксис

Функция:

- `isPromise(value)`

Параметры:

- `value`: Значение, которое нужно проверить.

### Локальный импорт функции

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // истина
console.log(isPromise(b)); // ложь
console.log(isPromise(123)); // ложь
console.log(isPromise(null)); // ложь

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isPromise(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 23:54:04 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>