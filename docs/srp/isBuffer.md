# isBuffer

## Опис

Проверава да ли је вредност Node.js `Buffer` и враћа `true` или `false`.

### Случај употребе

Валидирајте улазе у извршавању (нпр. API payload-ове, податке датотека или бафере порука) да бисте осигурали да је
вредност `Buffer` пре него што је обрадите, и поуздано добијте `false` када се извршава ван Node.js где `Buffer` можда
не постоји.

> **Напомена за TypeScript кориснике:**
>
> Користите `isBuffer` да сузите `unknown` вредности на `Buffer` пре позивања метода специфичних за Buffer.

### Предности

- Безбедно открива Node.js `Buffer` инстанце помоћу `Buffer.isBuffer`.
- Враћа `false` у окружењима где `Buffer` није доступан, избегавајући грешке у извршавању.
- Ради са улазом типа `unknown`, што га чини погодним за валидацију у извршавању и сужење типа.

## Употреба

### Синтакса

Функција:

- `isBuffer(value)`

Параметри:

- `value`: Вредност која се тестира.

### Локални увоз функције

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // tačno
console.log(isBuffer(b)); // netačno

if (isBuffer(a)) {
  // a je ovde Buffer
  console.log(a.toString("utf8"));
}
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isBuffer(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 16:33:16 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>