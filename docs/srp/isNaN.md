# isNaN

## Опис

Утврђује да ли је прослеђена `value` вредност `NaN` типа `number` без конвертовања стрингова.

### Случај употребе

Валидирајте непоуздан или лабаво типизиран улаз (нпр. API payload-ове, вредности из форми, парсирани JSON) да бисте
детектовали специјалну вредност `NaN` и експлицитно је обрадили, док се ненумерички улази третирају као да нису `NaN`.

> **Напомена за TypeScript кориснике:**
>
> Користите `isNaN` када треба да детектујете специјалну нумеричку вредност `NaN`, уз гаранцију да је улаз заиста
`number` (без конверзије из стринга у број).

### Предности

- Проверава да ли је вредност `NaN` без принудног претварања ненумеричких вредности (нпр. стрингова) у бројеве.
- Враћа `true` само за вредности које су и типа `number` и `NaN`.
- Безбедно за улазе типа `unknown` и избегава лажне позитиве услед имплицитних конверзија.

## Употреба

### Синтакса

Функција:

- `isNaN(value)`

Параметри:

- `value`: Вредност коју треба проверити да ли је `NaN` типа `number`.

### Локални увоз функције

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // tačno
console.log(isNaN(b)); // netačno
console.log(isNaN(c)); // netačno

if (isNaN(a)) {
  // a je broj i konkretno NaN
}
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isNaN(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 15:48:06 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>