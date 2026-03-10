# isNull

## Описание

Определя дали предоставената `value` е `null`.

### Случай на употреба

Използвайте `isNull`, за да валидирате входни данни или полета в API payload, при които `null` е значима
стойност-сентинел и трябва да се обработва по различен начин от `undefined` или други стойности.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `isNull`, когато трябва да разграничите `null` от `undefined` и други falsy стойности; връща `true` само
> за `null`.

### Предимства

- Осигурява прецизна проверка за `null`, без да го смесва с `undefined`.
- Работи надеждно за всеки тип вход, защото приема `unknown`.
- Просто, бързо и без странични ефекти; връща само `true` или `false`.

## Използване

### Синтаксис

Функция:

- `isNull(value)`

Параметри:

- `value`: Стойността, която да се провери за `null`.

### Локален импорт на функция

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // вярно
console.log(isNull(b)); // невярно

if (isNull(a)) {
  // a е null тук
}
```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.isNull(value)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [isNull](../_analysis/isNull.md)

<br>

---

<small>Файлът беше генериран на 31 January 2026 at 15:38:46 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>