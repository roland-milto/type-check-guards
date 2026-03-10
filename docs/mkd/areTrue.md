# areTrue

## Опис

Проверува дали непразна низа содржи само булови вредности `true`.

### Случај на употреба

Користете `areTrue` за да потврдите дека збир од предуслови или feature flags се сите вклучени (сите вредности се
`true`) пред да продолжите, при што празните или неправилно формирани влезови се третираат како незадоволени (`false`).

> **Белешка за корисници на TypeScript:**
>
> `areTrue` враќа `false` за празна низа и за низи што содржат каква било вредност што не е строго `true`.

### Предности

- Враќа `true` само кога секој елемент е строго `true` и низата не е празна.
- Брзо прекинува: враќа `false` веднаш штом ќе се пронајде вредност што не е `true`.
- Одбива невалидни влезови (не-низи или празни низи) со враќање `false`.

## Употреба

### Синтакса

Функција:

- `areTrue(array)`

Параметри:

- `array`: Низата што треба да се провери дали сите вредности се `true`.

### Локален импорт на функција

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areTrue(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Датотеката беше генерирана на 30 January 2026 at 13:51:58 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>