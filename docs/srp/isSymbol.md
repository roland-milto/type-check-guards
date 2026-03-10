# isSymbol

## Опис

`isSymbol` одређује да ли је дата вредност типа `symbol`, враћајући `true` за симболе и `false` у супротном.

### Случај употребе

Потврдите да је `unknown` вредност `symbol` пре него што је употребите као јединствени идентификатор, кључ регистра или
израчунати кључ својства у објектима и мапама.

> **Напомена за TypeScript кориснике:**
>
> Користите `isSymbol` да сузите `unknown` на `symbol` пре позивања функција повезаних са симболима или пре коришћења
> као израчунатог кључа својства.

### Предности

- Пружа једноставну и поуздану проверу у извршавању за JavaScript примитивни тип `symbol`.
- Помаже да се сузе `unknown` вредности пре коришћења API-ја специфичних за симболе или пре њиховог складиштења као
  кључева.
- Избегава лажне позитиве коришћењем `typeof`, што је канонски начин за детекцију `symbol` вредности.

## Употреба

### Синтакса

Функција:

- `isSymbol(value)`

Параметри:

- `value`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input je ovde simbol
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isSymbol(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 14:28:47 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>