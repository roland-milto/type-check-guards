# arePromises

## Опис

`arePromises` утврђује да ли су сви елементи у низу инстанце `Promise`.

### Случај употребе

Проверите да ли динамички састављена или споља достављена листа садржи само промисе пре њиховог груписања (нпр. помоћу
`Promise.all`).

> **Напомена за TypeScript кориснике:**
>
> Користите `arePromises` да валидирате `unknown[]` пре позивања `Promise.all` или других операција које важе само за
> промисе; враћа `false` за празне низове.

### Предности

- Обезбеђује да је сваки елемент `Promise` пре него што наставите са логиком специфичном за промисе.
- Враћа `false` за непопуњене низове, спречавајући двосмислене резултате за празне улазе.
- Корисно као заштита у време извршавања при раду са `unknown[]` из спољних извора.

## Употреба

### Синтакса

Функција:

- `arePromises(array)`

Параметри:

- `array`: Низ који се проверава да ли садржи инстанце `Promise`.

### Локални увоз функције

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values je niz instanci Promise u vreme izvršavanja
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.arePromises(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 23:49:59 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>