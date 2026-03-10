# isPrimitive

## Опис

`isPrimitive` визначає, чи є задане значення примітивом (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Випадок використання

Перевіряйте вхідні дані під час виконання (наприклад, поля корисного навантаження API, значення конфігурації або дані,
надані користувачем), щоб переконатися, що значення є примітивом перед серіалізацією, логуванням або застосуванням
операцій, дозволених лише для примітивів.

> **Примітка для користувачів TypeScript:**
>
> Використовуйте `isPrimitive`, щоб захистити вхідні значення типу `unknown` перед тим, як трактувати їх як об’єкти або
> функції; вона повертає `true` для примітивів і `false` для об’єктів та функцій.

### Переваги

- Швидка перевірка без виділення пам’яті, чи є значення примітивом JavaScript.
- Коректно вважає `null` примітивом (навіть попри те, що `typeof null` дорівнює `"object"`).
- Допомагає звузити значення типу `unknown` перед виконанням операцій, дозволених лише для об’єктів.

## Використання

### Синтаксис

Функція:

- `isPrimitive(value)`

Параметри:

- `value`: Значення, яке потрібно перевірити на примітивний тип.

### Локальний імпорт функції

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Глобальний імпорт об’єкта

Щоб імпортувати функції як глобальні методи об’єкта, використовуйте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступний метод буде доступний глобально:

- `Type.isPrimitive(value)`

## Аналіз функцій

Тут задокументовано табличний аналіз виводу, що виникає під час підстановки різних параметрів у
функції: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Файл було згенеровано 30 January 2026 at 23:58:13 (UTC) із використанням *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** від *
*[Roland Milto](https://roland-milto.de/)**.</small>