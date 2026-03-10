# isFinite

## Опис

Определува дали дадената `value` е конечен `number`.

### Случај на употреба

Користете `isFinite` за да валидирате непознат влез (на пр., од JSON, форми или API-ја) пред да извршувате нумерички
пресметки, осигурувајќи дека вредноста е реален, конечен број.

> **Белешка за корисници на TypeScript:**
>
> `isFinite` враќа `true` само за конечни броеви; враќа `false` за `NaN`, `Infinity` и за која било вредност што не е
> број.

### Предности

- Го користи вградениот `Number.isFinite` за сигурна проверка на конечност.
- Враќа `true` само за конечни броеви; враќа `false` за `NaN`, `Infinity` и за влезови што не се број.
- Едноставен предикат без несакани ефекти, погоден за валидација и заштитна логика.

## Употреба

### Синтакса

Функција:

- `isFinite(value)`

Параметри:

- `value`: Вредноста што треба да се провери за конечност.

### Локален импорт на функција

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers е: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value е конечен број тука
  const doubled = value * 2;
  console.log(doubled);
}
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.isFinite(value)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 16:30:41 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>