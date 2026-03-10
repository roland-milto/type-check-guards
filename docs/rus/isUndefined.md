# isUndefined

## Описание

Проверяет, является ли заданное значение `undefined`.

### Сценарий использования

Используйте `isUndefined`, чтобы защитить опциональные входные данные, обнаружить отсутствующие свойства или различать
«не предоставлено» (`undefined`) и «явно пусто» (`null`).

> **Примечание для пользователей TypeScript:**
>
> Используйте `isUndefined`, когда вам нужно именно обнаружить `undefined` (а не `null`). Это безопасно, потому что
> опирается на `typeof value === "undefined"`.

### Преимущества

- Обеспечивает ясную, явную проверку на `undefined` с помощью `typeof`, избегая пограничных случаев с необъявленными
  переменными.
- Возвращает простой булев результат (`true`/`false`), подходящий для гардов, ветвления и логики валидации.
- Помогает отличать `undefined` от других «пустых» значений, таких как `null`, `0`, `""` или `NaN`.

## Использование

### Синтаксис

Функция:

- `isUndefined(value)`

Параметры:

- `value`: Значение, которое нужно проверить.

### Локальный импорт функции

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x здесь является undefined
} else {
  // x здесь не является undefined
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isUndefined(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 14:04:12 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>