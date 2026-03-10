# isBigInt

## Апісанне

`isBigInt` правярае, ці мае зададзенае значэнне тып `bigint`, вяртаючы `true` для прымітываў BigInt і `false` у іншых
выпадках.

### Выкарыстанне

Правярайце і звужайце значэнні, якія паступаюць з нетыпізаваных крыніц (напрыклад, разбор JSON, увод карыстальніка,
знешнія API), перад выкананнем вылічэнняў, спецыфічных для BigInt, або перад захаваннем іх у палях, якія прымаюць толькі
BigInt.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isBigInt`, каб звузіць `unknown` да `bigint` перад выкананнем арыфметыкі BigInt (напрыклад, `+`,
`*`), якая патрабуе аперандаў BigInt.

### Перавагі

- Забяспечвае простую, надзейную праверку падчас выканання для прымітыўнага тыпу `bigint`.
- Дапамагае звузіць значэнні тыпу `unknown` перад выкананнем аперацый, даступных толькі для BigInt.
- Пазбягае ілжывых спрацоўванняў: звычайныя лікі, радкі і іншыя тыпы вяртаюць `false`.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isBigInt(value)`

Параметры:

- `value`: Значэнне для праверкі.

### Лакальны імпарт функцыі

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // праўда
console.log(isBigInt(10));  // няпраўда
console.log(isBigInt("10")); // няпраўда
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isBigInt(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Файл быў створаны 31 January 2026 at 23:31:11 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>