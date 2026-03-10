# areNaNs

## Опис

`areNaNs` проверава да ли су сви елементи у низу `NaN` и враћа `true` само ако је сваки елемент `NaN`.

### Случај употребе

Валидирајте долазне податке где се `NaN` користи као сентинел вредност и морате да обезбедите да се цео низ састоји
искључиво од `NaN` (нпр. детектовање потпуно недостајуће нумеричке серије).

> **Напомена за TypeScript кориснике:**
>
> Користите `areNaNs` када треба да валидирате да низ садржи само нумеричку `NaN` вредност (без принудне конверзије
> стринга у број).

### Предности

- Враћа `true` само када је сваки елемент `NaN` (строга провера свих елемената).
- Не врши принудну конверзију стрингова у бројеве; вредности као што је "NaN" остају не-`NaN` и чине резултат `false`.
- Враћа `false` за непопуњене низове, спречавајући случајни `true` на празном улазу.

## Употреба

### Синтакса

Функција:

- `areNaNs(array)`

Параметри:

- `array`: Низ који треба проверити на `NaN` вредности.

### Локални увоз функције

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // tačno
const b = areNaNs([NaN, 1, NaN]); // netačno
const c = areNaNs([NaN, "NaN", NaN]); // netačno
const d = areNaNs([NaN, null, NaN]); // netačno
const e = areNaNs([] as unknown[]); // netačno

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areNaNs(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 15:53:31 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>