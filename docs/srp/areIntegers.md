# areIntegers

## Опис

`areIntegers` утврђује да ли су сви елементи у датом низу цели бројеви, враћајући `true` ако јесу и `false` у супротном.

### Случај употребе

Користите `areIntegers` да валидирате податке које је обезбедио корисник или спољни извор (нпр. параметри упита, JSON
payload-ови, CSV редови) када ваша логика захтева попуњену листу целобројних вредности као што су ID-јеви, бројачи,
offset-и за пагинацију или индекси низа.

> **Напомена за TypeScript кориснике:**
>
> Користите `areIntegers` као runtime guard за улазе типа `unknown[]` пре него што их третирате као `number[]` који
> садржи само целе бројеве. Ако врати `false`, улаз или није попуњен низ или садржи бар једну вредност која није цео
> број.

### Предности

- Враћа `true` само када је сваки елемент цео број; у супротном враћа `false`.
- Помаже да се валидира непознат улаз пре извршавања операција које раде само са целим бројевима (нпр. индексирање,
  бројачи, ID-јеви).
- Брзо отказује: престаје са провером чим се пронађе елемент који није цео број.

## Употреба

### Синтакса

Функција:

- `areIntegers(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи елементе који су цели бројеви.

### Локални увоз функције

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // tačno
console.log(areIntegers(b)); // tačno
console.log(areIntegers(c)); // netačno

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areIntegers(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 01:00:31 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>