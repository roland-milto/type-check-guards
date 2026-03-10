# isNull

## Опис

Утврђује да ли је прослеђена `value` једнака `null`.

### Случај употребе

Користите `isNull` за валидацију улаза или поља у API payload-у где је `null` значајна sentinel вредност и мора се
обрађивати другачије него `undefined` или друге вредности.

> **Напомена за TypeScript кориснике:**
>
> Користите `isNull` када треба да разликујете `null` од `undefined` и других лажних (falsy) вредности; враћа `true`
> само за `null`.

### Предности

- Пружа прецизну проверу за `null` без мешања са `undefined`.
- Ради поуздано за било који тип улаза јер прихвата `unknown`.
- Једноставно, брзо и без споредних ефеката; враћа само `true` или `false`.

## Употреба

### Синтакса

Функција:

- `isNull(value)`

Параметри:

- `value`: Вредност коју треба проверити на `null`.

### Локални увоз функције

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // tačno
console.log(isNull(b)); // netačno

if (isNull(a)) {
  // a je ovde null
}
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isNull(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isNull](../_analysis/isNull.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 15:40:51 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>