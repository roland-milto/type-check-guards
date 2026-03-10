# areBooleans

## Опис

`areBooleans` проверава да ли дати непразан низ садржи само булове вредности, враћајући `true` ако је тако и `false` у
супротном.

### Случај употребе

Валидирајте податке које је обезбедио корисник или спољни извор (нпр. JSON payload-ове, параметре упита, конфигурационе
низове) како бисте осигурали да непразна листа садржи само булове пре примене булове логике или прослеђивања API-јима
који очекују `boolean[]`.

> **Напомена за TypeScript кориснике:**
>
> Користите `areBooleans` да валидирате `unknown[]` пре него што га третирате као `boolean[]`; враћа `false` за празне
> низове, па тај случај обрадите експлицитно ако празна листа треба да буде дозвољена.

### Предности

- Враћа `true` само када је сваки елемент булов и када је улаз непразан низ.
- Спречава лажне позитиве тако што одбацује празне низове (враћа `false`).
- Добро служи као заштита у извршавању пре операција које раде само са буловима (нпр. `every`, `some`, логичке
  редукције).

## Употреба

### Синтакса

Функција:

- `areBooleans(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи булове елементе.

### Локални увоз функције

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areBooleans(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 14:42:28 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>