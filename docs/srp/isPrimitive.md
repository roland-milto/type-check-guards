# isPrimitive

## Опис

`isPrimitive` određuje da li je data vrednost primitiv (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Случај употребе

Validirajte ulaze u toku izvršavanja (npr. polja API payload-a, konfiguracione vrednosti ili podatke koje je uneo
korisnik) kako biste obezbedili da je vrednost primitiv pre serijalizacije, logovanja ili primene operacija koje važe
samo za primitive.

> **Напомена за TypeScript кориснике:**
>
> Koristite `isPrimitive` da zaštitite `unknown` ulaze pre nego što ih tretirate kao objekte ili funkcije; vraća `true`
> za primitive i `false` za objekte i funkcije.

### Предности

- Brza provera bez alokacija da li je vrednost JavaScript primitiv.
- Ispravno tretira `null` kao primitiv (iako je `typeof null` `"object"`).
- Pomaže da se suze `unknown` vrednosti pre izvođenja operacija koje važe samo za objekte.

## Употреба

### Синтакса

Функција:

- `isPrimitive(value)`

Параметри:

- `value`: Vrednost koju treba proveriti da li je primitivnog tipa.

### Локални увоз функције

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isPrimitive(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Датотека је генерисана 30 January 2026 at 23:57:48 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>