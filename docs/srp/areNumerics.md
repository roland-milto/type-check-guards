# areNumerics

## Опис

`areNumerics` проверава да ли је вредност непразан низ у ком су сви елементи нумерички.

### Случај употребе

Користите `areNumerics` да валидирате спољне или нетипизиране податке (нпр. JSON payload-ове, параметре упита, унос у
формама) пре израчунавања збира, просека или других нумеричких операција, обезбеђујући да је улаз непразан нумерички низ
и да у супротном враћа `false`.

> **Напомена за TypeScript кориснике:**
>
> Користите `areNumerics` да заштитите `unknown` улаз пре него што га третирате као нумерички низ; враћа `false` за
> вредности које нису низови и за празне низове.

### Предности

- Враћа `true` само када је улаз непразан низ и сваки елемент је нумерички.
- Брзо прекида: престаје са провером чим се пронађе ненумерички елемент и враћа `false`.
- Помаже да се непознат улаз безбедно валидира пре извођења нумеричких операција.

## Употреба

### Синтакса

Функција:

- `areNumerics(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи нумеричке елементе.

### Локални увоз функције

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // tačno
console.log(areNumerics(b)); // tačno
console.log(areNumerics(c)); // netačno
console.log(areNumerics(d)); // netačno
console.log(areNumerics(e)); // netačno

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areNumerics(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Датотека је генерисана 6 February 2026 at 16:07:31 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>