# areFilledArrays

## Опис

`areFilledArrays` проверава да ли је дводимензионални низ непразан и да ли су сви његови поднизови непразни.

### Случај употребе

Користите `areFilledArrays` да валидирате табеларни или матрични унос (нпр. CSV редове, податке мреже, груписане
резултате) како бисте могли безбедно да претпоставите да постоји бар један подниз и да ниједан подниз није празан.

> **Напомена за TypeScript кориснике:**
>
> Користите `areFilledArrays` када треба да обезбедите да 2D низ има бар један ред и да сваки ред има бар један елемент
> пре итерације или индексирања.

### Предности

- Проверава да ли спољашњи низ није празан и да ли је сваки унутрашњи низ такође непразан, враћајући `true` само када су
  оба услова испуњена.
- Ради са било којим типовима елемената у поднизовима (нпр. бројеви, ниске, објекти, угнежђени низови) јер проверава
  само да ли су низови „попуњени“, а не садржај елемената.
- Пружа једноставан булов резултат (`true`/`false`) погодан за гардове пре обраде дводимензионалних података.

## Употреба

### Синтакса

Функција:

- `areFilledArrays(array)`

Параметри:

- `array`: Дводимензионални низ који треба проверити.

### Локални увоз функције

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // tačno
console.log(areFilledArrays(b)); // tačno
console.log(areFilledArrays(c)); // tačno
console.log(areFilledArrays(d)); // netačno
console.log(areFilledArrays(e)); // netačno
console.log(areFilledArrays(f)); // netačno

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areFilledArrays(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Датотека је генерисана 6 February 2026 at 11:59:05 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>