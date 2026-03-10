# areHexadecimals

## Опис

Проверава да ли су сви елементи у низу хексадецимални стрингови, враћајући `true` само за непразне низове у којима је
свака ставка исправна.

### Случај употребе

Користите `areHexadecimals` да валидирате кориснички унос или спољне податке (нпр. ID-еве, контролне суме, кодове боја
без водећег '#') пре хексадецималног парсирања или даље обраде.

> **Напомена за TypeScript кориснике:**
>
> Користите `areHexadecimals` да валидирате непознат улаз пре парсирања или конвертовања вредности (на пример, пре
`parseInt(value, 16)` или BigInt конверзија).

### Предности

- Проверава да је сваки елемент хексадецимални стринг и враћа `true` само када се све ставке поклапају.
- По дизајну одбацује празне низове, враћајући `false` када недостају улазни подаци.
- Пружа једноставан булов резултат (`true`/`false`) погодан за guard-ове и валидацију са раним повратком.

## Употреба

### Синтакса

Функција:

- `areHexadecimals(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи елементе који су хексадецимални стрингови.

### Локални увоз функције

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areHexadecimals(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 23:07:56 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>