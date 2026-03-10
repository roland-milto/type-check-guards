# isPlainObject

## Описание

Проверява дали дадена `value` е обикновен обект и връща `true`, ако е така, в противен случай `false`.

### Случай на употреба

Валидирайте, че вход от тип `unknown` (напр. парсиран JSON, външни данни или аргументи на функция) е обикновен обект,
преди да четете ключове или да го преобразувате в типизиран конфигурационен обект.

> **Бележка за потребителите на TypeScript:**
>
> `isPlainObject` е полезна за стесняване на `unknown` преди да се третира като обект от тип record; връща `true` само
> за стойности, чийто вътрешен таг е `[object Object]`.

### Предимства

- Предоставя проста и надеждна проверка дали дадена стойност е обикновен обект (т.е. `Object` / `{}`), като връща `true`
  или `false`.
- Помага да се разграничат обикновените обекти от масиви, функции, `null` и други типове, които не са обикновени обекти.
- Полезно като type guard в TypeScript за стесняване на стойности от тип `unknown` преди достъп до свойства на обекта.

## Използване

### Синтаксис

Функция:

- `isPlainObject(value)`

Параметри:

- `value`: Стойността, която да се тества дали е обикновен обект.

### Локален импорт на функция

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // входът тук е обикновен обект
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // вярно
console.log(isPlainObject([])); // невярно
console.log(isPlainObject(null)); // невярно
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isPlainObject(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Файлът беше генериран на 6 February 2026 at 12:16:40 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>