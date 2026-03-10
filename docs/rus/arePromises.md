# arePromises

## Описание

`arePromises` определяет, являются ли все элементы массива экземплярами `Promise`.

### Сценарий использования

Проверьте, что динамически сформированный или предоставленный извне список содержит только промисы, прежде чем
агрегировать их (например, с помощью `Promise.all`).

> **Примечание для пользователей TypeScript:**
>
> Используйте `arePromises`, чтобы валидировать `unknown[]` перед вызовом `Promise.all` или других операций,
> предназначенных только для промисов; для пустых массивов функция возвращает `false`.

### Преимущества

- Гарантирует, что каждый элемент является `Promise`, прежде чем вы продолжите логику, специфичную для промисов.
- Возвращает `false` для неполных массивов, предотвращая неоднозначные результаты для пустых входных данных.
- Полезно как проверка во время выполнения при работе с `unknown[]` из внешних источников.

## Использование

### Синтаксис

Функция:

- `arePromises(array)`

Параметры:

- `array`: Массив, который нужно проверить на наличие экземпляров Promise.

### Локальный импорт функции

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values — это массив экземпляров Promise во время выполнения
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.arePromises(array)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 23:49:44 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>