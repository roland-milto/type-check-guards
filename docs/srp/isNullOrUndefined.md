# isNullOrUndefined

## Опис

Проверава да ли је дата вредност `null` или `undefined`.

### Случај употребе

Користите `isNullOrUndefined` када треба да третирате и `null` и `undefined` као „без вредности“, на пример при
валидацији опционих уноса, нормализацији API payload-ова или заштити путања кода пре дереференцирања потенцијално
недостајуће вредности.

> **Напомена за TypeScript кориснике:**
>
> Користите `isNullOrUndefined` као гард против недостајућих вредности пре приступања својствима или позивања метода;
> враћа `true` само за `null` и `undefined`.

### Предности

- Пружа јасан, поново употребљив гард за откривање `null` и `undefined` на једном месту.
- Враћа једноставан буловски резултат (`true`/`false`) који је лако комбиновати у условима и валидацијама.
- Помаже да се избегну уобичајене грешке у извршавању тако што проверава недостајуће вредности пре приступања својствима
  или позивања метода.

## Употреба

### Синтакса

Функција:

- `isNullOrUndefined(value)`

Параметри:

- `value`: Вредност коју треба проверити на `null` или `undefined`.

### Локални увоз функције

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // obradi nedostajuću vrednost
}

console.log(isNullOrUndefined(b)); // tačno
console.log(isNullOrUndefined(c)); // netačno

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isNullOrUndefined(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 00:35:21 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>