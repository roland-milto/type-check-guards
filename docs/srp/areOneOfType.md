# areOneOfType

## Опис

`areOneOfType` проверава да ли су сви елементи у непразном низу једног од наведених runtime типова.

### Случај употребе

Валидација долазних података (нпр. парсираног JSON-а) где поље мора бити непразан низ чије су ставке ограничене на
познат скуп примитивних типова; вратите `false` када је низ празан или садржи било који недозвољени тип.

> **Напомена за TypeScript кориснике:**
>
> Ова функција враћа boolean и не сузава типове елемената низа у време компајлирања; користите је као корак runtime
> валидације пре даље обраде.

### Предности

- Обезбеђује да сваки елемент у низу одговара бар једном дозвољеном runtime типу, враћајући `true` само када цео низ
  прође проверу.
- Рано одбацује неважеће улазе: враћа `false` када је `array` или `types` празан или није попуњен низ.
- Корисно за валидацију колекција мешовитих типова (нпр. бројева и стрингова) једним позивом `areOneOfType`.

## Употреба

### Синтакса

Функција:

- `areOneOfType(array, types)`

Параметри:

- `array`: Низ елемената који треба проверити у односу на наведене типове.
- `types`: Низ стрингова који представљају типове података у односу на које се врши провера.

### Локални увоз функције

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areOneOfType(array, types)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 23:38:41 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>