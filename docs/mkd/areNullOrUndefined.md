# areNullOrUndefined

## Опис

Проверува дали сите елементи во дадената низа се `null` или `undefined`.

### Случај на употреба

Потврдете дека листа од опционални полиња не содржи никакви реални вредности (само `null`/`undefined`) пред да одлучите
да прескокнете обработка или да прикажете состојба „не се доставени вредности“.

> **Белешка за корисници на TypeScript:**
>
> Користете `areNullOrUndefined` кога треба да потврдите дека низата содржи само недостасувачки вредности (`null`/
`undefined`). Забележете дека враќа `false` за празна низа.

### Предности

- Враќа `true` само кога секој елемент е `null` или `undefined`.
- Враќа `false` за празни низи, помагајќи да се разликува „нема податоци“ од „сите недостасуваат вредности“.
- Работи со `unknown[]`, што го прави безбедно за користење пред стеснување на типовите.

## Употреба

### Синтакса

Функција:

- `areNullOrUndefined(array)`

Параметри:

- `array`: Низата што треба да се провери.

### Локален импорт на функција

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === точно

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === неточно

const empty = areNullOrUndefined([]);
// empty === неточно
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areNullOrUndefined(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 00:30:24 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>