# areBuffers

## Опис

`areBuffers` проверува дали дадената вредност е непразна, пополнета низа каде што секој елемент е `Buffer`, враќајќи
`true` ако е така и `false` во спротивно.

### Случај на употреба

Валидирајте влезни низи од делови (на пр., од stream-ови, прикачувања на датотеки или мрежни пакети) за да се осигурате
дека сите делови се `Buffer` инстанци пред конкатенација, декодирање или проследување до криптографски или функции за
бинарна обработка.

> **Белешка за корисници на TypeScript:**
>
> Користете `areBuffers` за да валидирате `unknown[]` пред да повикате API-ја специфични за Buffer како `Buffer.concat`,
> осигурувајќи дека функцијата враќа `true` само кога секој елемент е `Buffer`.

### Предности

- Осигурува дека секој елемент во влезот е Node.js `Buffer` инстанца, враќајќи `true` само кога целата низа се совпаѓа.
- Рано ги отфрла невалидните влезови со тоа што бара непразна, пополнета низа; враќа `false` за празни низи или за
  вредности што не се низи.
- Корисно како заштитна проверка пред извршување операции што работат само со buffer-и (на пр., конкатенација, хеширање,
  бинарни протоколи).

## Употреба

### Синтакса

Функција:

- `areBuffers(array)`

Параметри:

- `array`: Низата што треба да се провери за buffer инстанци.

### Локален импорт на функција

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Глобален импорт на објект

За импорт на функциите како глобални методи на објект користете:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следниот метод потоа ќе биде достапен глобално:

- `Type.areBuffers(array)`

## Анализа на функции

Тука е документирана табеларна анализа на излезот што се добива при внесување различни параметри во
функциите: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Датотеката беше генерирана на 31 January 2026 at 16:26:18 (UTC) со користење на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>