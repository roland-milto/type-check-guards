# areNullOrUndefined

## Описание

Проверява дали всички елементи в дадения масив са `null` или `undefined`.

### Случай на употреба

Проверете дали списък с незадължителни полета не съдържа реални стойности (само `null`/`undefined`), преди да решите да
пропуснете обработката или да покажете състояние „не са предоставени стойности“.

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `areNullOrUndefined`, когато трябва да проверите, че масивът съдържа само липсващи стойности (`null`/
`undefined`). Имайте предвид, че връща `false` за празен масив.

### Предимства

- Връща `true` само когато всеки елемент е `null` или `undefined`.
- Връща `false` за празни масиви, което помага да се разграничи „няма данни“ от „всички стойности липсват“.
- Работи с `unknown[]`, което го прави безопасен за използване преди стесняване на типовете.

## Използване

### Синтаксис

Функция:

- `areNullOrUndefined(array)`

Параметри:

- `array`: Масивът за проверка.

### Локален импорт на функция

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.areNullOrUndefined(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Файлът беше генериран на 31 January 2026 at 00:29:12 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>