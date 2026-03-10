# isObject

## Опис

Утврђује да ли је дати `value` `object` (искључујући `null`).

### Случај употребе

Користите `isObject` да валидирате непознате улазе (нпр. парсирани JSON, API одговори, payload-и догађаја) пре приступа
својствима, осигуравајући да је вредност објекат, а не `null`.

> **Напомена за TypeScript кориснике:**
>
> `isObject` је runtime guard који враћа boolean; не сузава тип на конкретан облик објекта. Комбинујте га са додатним
> проверама (нпр. постојање својстава) када вам је потребно јаче типизирање.

### Предности

- Враћа `true` само за вредности које нису `null` и чији је `typeof` `"object"`.
- Спречава честу JavaScript замку где би `null` иначе био третиран као објекат.
- Ради за обичне објекте и уграђене инстанце објеката (нпр. `Date`, `RegExp`).
- Једноставна, брза провера у извршавању, погодна за дефанзивно програмирање и валидацију улаза.

## Употреба

### Синтакса

Функција:

- `isObject(value)`

Параметри:

- `value`: Вредност коју треба проверити да ли је `object`.

### Локални увоз функције

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input je nenulti objekat tokom izvršavanja
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isObject(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isObject](../_analysis/isObject.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 00:20:24 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>