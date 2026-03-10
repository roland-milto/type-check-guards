# areStrings

## Апісанне

`areStrings` правярае, ці з'яўляецца масіў непустым і ці ўсе яго элементы — радкі, вяртаючы `true` толькі ў гэтым
выпадку.

### Выкарыстанне

Правярайце знешнія або карыстальніцкія даныя (напрыклад, параметры запыту, JSON-нагрузкі, палі CSV), каб пераканацца,
што перад апрацоўкай у вас ёсць непусты спіс радкоў.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `areStrings`, каб правяраць невядомыя масівы перад ужываннем логікі толькі для радкоў; для пустых
> масіваў яна вяртае `false`.

### Перавагі

- Гарантуе, што кожны элемент — радок, і адхіляе масівы са змешанымі тыпамі, вяртаючы `false`.
- Адхіляе пустыя масівы, таму `true` азначае толькі непусты спіс радкоў.
- Карысна як хуткая праверка падчас выканання перад аперацыямі толькі для радкоў (напрыклад, `trim`, `toLowerCase`).

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areStrings(value)`

Параметры:

- `value`: Expected type `string[]`.

### Лакальны імпарт функцыі

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input — гэта непусты string[] падчас выканання
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areStrings(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 13:17:17 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>