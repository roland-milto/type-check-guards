# isValidDate

## Апісанне

`isValidDate` правярае, ці з'яўляецца зададзенае значэнне карэктным аб'ектам `Date`, і вяртае `true` толькі для
сапраўдных, не няправільных дат.

### Выкарыстанне

Валідаваць карыстальніцкі ўвод або даныя API, якія могуць утрымліваць даты, гарантуючы, што значэнне з'яўляецца
сапраўдным асобнікам `Date`, а не няправільнай датай, перад выкананнем разлікаў з датамі, фарматаваннем або
параўнаннямі.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isValidDate` перад выклікам метадаў `Date` (напрыклад, `toISOString`, `getTime`) для значэнняў тыпу
`unknown`, каб пераканацца, што гэта карэктныя аб'екты `Date`.

### Перавагі

- Гарантуе, што значэнне з'яўляецца асобнікам `Date`, а не проста радком або лікам, падобным да даты.
- Адхіляе няправільныя даты (напрыклад, `new Date("invalid")`), правяраючы значэнні часу на `NaN`.
- Просты булеўскі гард, які лёгка выкарыстоўваць у ўмовах і пайплайнах валідацыі.
- Дапамагае прадухіліць памылкі падчас выканання пры выкліку метадаў даты, папярэдне правяраючы ўвод.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isValidDate(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць.

### Лакальны імпарт функцыі

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input — гэта сапраўдны экзэмпляр Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // false
console.log(isValidDate("2025-12-22")); // false

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isValidDate(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 16:38:57 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>