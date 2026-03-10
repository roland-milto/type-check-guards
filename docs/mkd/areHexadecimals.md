# areHexadecimals

## Опис

Проверува дали сите елементи во низа се хексадецимални низи, враќајќи `true` само за непразни низи каде што секоја
ставка е валидна.

### Случај на употреба

Користете `areHexadecimals` за да валидирате кориснички влез или надворешни податоци (на пр., ID-ја, контролни суми,
кодови за бои без водечко '#') пред да извршите хексадецимално парсирање или понатамошна обработка.

> **Белешка за корисници на TypeScript:**
>
> Користете `areHexadecimals` за да валидирате непознат влез пред парсирање или конвертирање на вредности (на пример,
> пред `parseInt(value, 16)` или BigInt конверзии).

### Предности

- Потврдува дека секој елемент е хексадецимална низа и враќа `true` само кога сите ставки се совпаѓаат.
- По дизајн одбива празни низи, враќајќи `false` кога недостасуваат влезни податоци.
- Обезбедува едноставен булов резултат (`true`/`false`) погоден за гардови и валидација со рано враќање.

## Употреба

### Синтакса

Функција:

- `areHexadecimals(array)`

Параметри:

- `array`: Низата што треба да се провери за елементи што се хексадецимални низи.

### Локален импорт на функција

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areHexadecimals(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 23:07:01 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>