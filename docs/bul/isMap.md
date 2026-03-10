# isMap

## Описание

Проверява дали дадената `value` е `Map`, като връща `true`, ако е, и `false` в противен случай.

### Случай на употреба

Използвайте `isMap`, когато получите стойност от тип `unknown` (напр. от парсване на JSON, външни API-та или
потребителски вход) и трябва да се уверите, че е `Map`, преди да извършвате операции с `Map`.

> **Бележка за потребителите на TypeScript:**
>
> `isMap` е runtime guard, който връща `true`, когато стойността е `Map`, и `false` в противен случай; използвайте го,
> за да стесните `unknown`, преди да извиквате API-тата на `Map`.

### Предимства

- Осигурява бърза проверка по време на изпълнение дали дадена стойност е `Map`.
- Помага да се предотвратят грешки от типове, като защитава пътищата в кода, които изискват методи на `Map` като `get`,
  `set` и `has`.
- Работи добре като лека стъпка за валидация при обработка на входове от тип `unknown`.

## Използване

### Синтаксис

Функция:

- `isMap(value)`

Параметри:

- `value`: Стойността за проверка.

### Локален импорт на функция

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isMap(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isMap](../_analysis/isMap.md)

<br>

---

<small>Файлът беше генериран на 31 January 2026 at 16:03:50 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>