# isBoolean

## Опис

Одређује да ли је дата вредност типа `boolean`.

### Случај употребе

Валидирајте спољне или нетипизиране податке (нпр. променљиве окружења, JSON payload-ове, параметре упита) да бисте
осигурали да је вредност типа `boolean` пре него што је употребите у условној логици.

> **Напомена за TypeScript кориснике:**
>
> Користите `isBoolean` да сузите `unknown` на `boolean` пре примене буловских операција.

### Предности

- Једноставна и брза провера у извршавању помоћу `typeof`.
- Помаже у валидацији непознатог уноса пре логике специфичне за буловске вредности.
- Враћа предвидљив `boolean` резултат (`true`/`false`).

## Употреба

### Синтакса

Функција:

- `isBoolean(value)`

Параметри:

- `value`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input je ovde boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isBoolean(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 14:37:58 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>