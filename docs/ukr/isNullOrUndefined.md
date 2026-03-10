# isNullOrUndefined

## Опис

Перевіряє, чи є задане значення `null` або `undefined`.

### Випадок використання

Використовуйте `isNullOrUndefined`, коли потрібно трактувати і `null`, і `undefined` як «немає значення», наприклад під
час валідації необов’язкових вхідних даних, нормалізації payload API або захисту гілок коду перед розіменуванням
потенційно відсутнього значення.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isNullOrUndefined`, щоб захиститися від відсутніх значень перед доступом до властивостей або викликом
> методів; він повертає `true` лише для `null` і `undefined`.

### Переваги

- Надає чіткий, повторно використовуваний гард для виявлення `null` і `undefined` в одному місці.
- Повертає простий булевий результат (`true`/`false`), який легко поєднувати в умовах і валідаціях.
- Допомагає уникати поширених помилок під час виконання, перевіряючи відсутні значення перед доступом до властивостей
  або викликом методів.

## Використання

### Синтаксис

Функція:

- `isNullOrUndefined(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити на `null` або `undefined`.

### Локальний імпорт функції

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // обробити відсутнє значення
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isNullOrUndefined(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Файл було згенеровано 31 January 2026 at 00:35:41 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>