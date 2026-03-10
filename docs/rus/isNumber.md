# isNumber

## Описание

`isNumber` проверяет, является ли значение конечным числом, не равным `NaN`.

### Сценарий использования

Проверяйте числовой ввод из ненадёжных источников (формы, query-параметры, JSON-полезные нагрузки) перед вычислениями,
сохранением или проверками диапазона, гарантируя, что проходят (`true`) только конечные числа, а всё остальное
возвращает `false`.

> **Примечание для пользователей TypeScript:**
>
> Используйте `isNumber`, чтобы валидировать значения типа `unknown` перед выполнением арифметики; функция отклоняет
`NaN`, `Infinity` и `-Infinity`.

### Преимущества

- Возвращает `true` только для настоящих чисел JavaScript (проверка типа плюс отклонение `NaN` и бесконечности).
- Предотвращает распространённые ошибки валидации, когда `NaN`, `Infinity` или `-Infinity` случайно проходят как числа.
- Хорошо подходит как runtime-guard для неизвестного ввода (например, JSON, пользовательский ввод, внешние API).
- Простая, быстрая и без побочных эффектов.

## Использование

### Синтаксис

Функция:

- `isNumber(value)`

Параметры:

- `value`: Значение для проверки.

### Локальный импорт функции

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input — это допустимое конечное число
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Глобальный импорт объекта

Чтобы импортировать функции как глобальные методы объекта, используйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следующий метод будет затем доступен глобально:

- `Type.isNumber(value)`

## Анализ функций

Здесь задокументирован табличный анализ вывода, получаемого при передаче различных параметров в
функции: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Файл был сгенерирован 30 января 2026 г. в 13:10:52 (UTC) с использованием *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>