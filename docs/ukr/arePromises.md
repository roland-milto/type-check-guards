# arePromises

## Опис

`arePromises` визначає, чи всі елементи в масиві є екземплярами `Promise`.

### Випадок використання

Перевірити, що динамічно сформований або наданий ззовні список містить лише проміси, перед їх агрегацією (наприклад, за
допомогою `Promise.all`).

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `arePromises`, щоб перевіряти `unknown[]` перед викликом `Promise.all` або інших операцій лише для
> промісів; для порожніх масивів вона повертає `false`.

### Переваги

- Гарантує, що кожен елемент є `Promise`, перш ніж ви перейдете до логіки, специфічної для промісів.
- Повертає `false` для порожніх масивів, запобігаючи неоднозначним результатам для порожніх вхідних даних.
- Корисно як runtime-запобіжник під час роботи з `unknown[]` із зовнішніх джерел.

## Використання

### Синтаксис

Функція:

- `arePromises(array)`

Параметри:

- `array`: Масив, який потрібно перевірити на наявність екземплярів Promise.

### Локальний імпорт функції

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values є масивом екземплярів Promise під час виконання
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.arePromises(array)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 23:50:21 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>