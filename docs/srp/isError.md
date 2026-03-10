# isError

## Опис

Проверава да ли је дати `value` инстанца `Error`.

### Случај употребе

Користите `isError` када примите `unknown` вредност (на пример из `catch` блока, повратног позива или спољне библиотеке)
и треба безбедно да утврдите да ли је то `Error` пре читања `message`, `name` или `stack`.

> **Напомена за TypeScript кориснике:**
>
> Користите `isError` да заштитите `unknown` вредности (нпр. из `catch`) пре него што их третирате као `Error`.

### Предности

- Пружа једноставну проверу у извршавању да ли је вредност инстанца `Error`.
- Помаже да се сузе непознати улази пре приступања `Error` својствима као што су `message` или `stack`.
- Смањује ризик од изузетака у извршавању при руковању вредностима из `catch`, спољних API-ја или нетипизираних извора.

## Употреба

### Синтакса

Функција:

- `isError(value)`

Параметри:

- `value`: Вредност коју треба проверити у односу на тип `Error`.

### Локални увоз функције

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isError(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isError](../_analysis/isError.md)

<br>

---

<small>Датотека је генерисана 6 February 2026 at 12:47:09 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>