# areRegExes

## Опис

`areRegExes` проверава да ли је вредност попуњен низ који садржи само `RegExp` објекте.

### Случај употребе

Проверите да ли је опција конфигурације (нпр. листа образаца за дозвољавање/забрану) непразан низ регуларних израза пре
него што је употребите за поклапање.

> **Напомена за TypeScript кориснике:**
>
> Користите `areRegExes` да сузите `unknown` на `RegExp[]` пре итерирања или састављања образаца.

### Предности

- Обезбеђује да је вредност непразан низ у ком је сваки елемент инстанца `RegExp`.
- Пружа једноставну буловску проверу (`true`/`false`) за валидацију корисничког уноса или конфигурације.
- Помаже у спречавању грешака у извршавању када каснији код подразумева да све ставке подржавају операције са регуларним
  изразима.

## Употреба

### Синтакса

Функција:

- `areRegExes(array)`

Параметри:

- `array`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns je ovde niz RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areRegExes(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 23:21:52 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>