# isMap

## Опис

Проверава да ли је дати `value` `Map`, враћајући `true` ако јесте и `false` у супротном.

### Случај употребе

Користите `isMap` када примите `unknown` вредност (нпр. из парсирања JSON-а, спољних API-ја или корисничког уноса) и
треба да обезбедите да је то `Map` пре извршавања `Map` операција.

> **Напомена за TypeScript кориснике:**
>
> `isMap` је заштита у извршавању која враћа `true` када је вредност `Map` и `false` у супротном; користите је да сузите
`unknown` пре позивања `Map` API-ја.

### Предности

- Пружа брзу проверу у извршавању да ли је вредност `Map`.
- Помаже у спречавању грешака типова тако што штити путање кода које захтевају `Map` методе као што су `get`, `set` и
  `has`.
- Добро функционише као лаган корак валидације при руковању `unknown` улазима.

## Употреба

### Синтакса

Функција:

- `isMap(value)`

Параметри:

- `value`: Вредност коју треба проверити.

### Локални увоз функције

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isMap(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isMap](../_analysis/isMap.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 16:29:47 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>