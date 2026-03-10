# isBigInt

## Опис

`isBigInt` proverava da li je data vrednost tipa `bigint`, vraćajući `true` za BigInt primitive, a `false` u suprotnom.

### Случај употребе

Validirajte i suzite vrednosti koje dolaze iz netipizovanih izvora (npr. parsiranje JSON-a, korisnički unos, spoljne
API-je) pre izvođenja BigInt-specifičnih izračunavanja ili njihovog čuvanja u poljima koja prihvataju samo BigInt.

> **Напомена за TypeScript кориснике:**
>
> Koristite `isBigInt` da suzite `unknown` na `bigint` pre izvođenja BigInt aritmetike (npr. `+`, `*`), koja zahteva
> BigInt operande.

### Предности

- Pruža jednostavnu, pouzdanu proveru u izvršavanju za primitivni tip `bigint`.
- Pomaže da se suze `unknown` vrednosti pre izvođenja operacija koje su dozvoljene samo nad BigInt vrednostima.
- Izbegava lažno pozitivne rezultate: obični brojevi, stringovi i drugi tipovi vraćaju `false`.

## Употреба

### Синтакса

Функција:

- `isBigInt(value)`

Параметри:

- `value`: Vrednost koju treba proveriti.

### Локални увоз функције

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // tačno
console.log(isBigInt(10));  // netačno
console.log(isBigInt("10")); // netačno
```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isBigInt(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 23:33:21 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>