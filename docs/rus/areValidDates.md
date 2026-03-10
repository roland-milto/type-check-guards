# areValidDates

## Описание

Определяет, является ли массив непустым и состоит ли он полностью из корректных объектов `Date`.

### Сценарий использования

Используйте `areValidDates` для валидации массивов, предоставленных пользователем или API, перед выполнением операций с
датами (сортировка, проверки диапазона, форматирование), гарантируя, что все элементы — реальные, корректные объекты
`Date`, и что список не пуст.

> **Примечание для пользователей TypeScript:**
>
> `areValidDates` возвращает `false` для пустого массива; убедитесь, что массив действительно должен быть непустым,
> прежде чем полагаться на это как на шаг валидации.

### Преимущества

- Возвращает `true` только тогда, когда каждый элемент является корректным экземпляром `Date` (без недопустимых дат
  вроде `new Date('invalid')`).
- Отклоняет пустой ввод, возвращая `false`, гарантируя, что вы принимаете только осмысленные, непустые списки дат.
- Предоставляет простую булеву проверку в стиле guard, которую легко комбинировать с другими валидациями.

## Использование

### Синтаксис

Функция:

- `areValidDates(array)`

Параметры:

- `array`: Массив для проверки, потенциально содержащий объекты `Date`.

### Локальный импорт функции

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // true
console.log(areValidDates(b)); // false
console.log(areValidDates(c)); // false
console.log(areValidDates(d)); // false

```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.areValidDates(array)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 14:33:39 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>