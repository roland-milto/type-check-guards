# areRegExes

## Апісанне

`areRegExes` правярае, ці з’яўляецца значэнне запоўненым масівам, які змяшчае толькі аб’екты `RegExp`.

### Выкарыстанне

Праверыць, што опцыя канфігурацыі (напрыклад, спіс шаблонаў дазволу/забароны) — гэта непусты масіў рэгулярных выразаў,
перш чым выкарыстоўваць яе для супастаўлення.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `areRegExes`, каб звузіць тып `unknown` да `RegExp[]` перад ітэрацыяй або камбінаваннем шаблонаў.

### Перавагі

- Гарантуе, што значэнне — гэта непусты масіў, у якім кожны элемент з’яўляецца асобнікам `RegExp`.
- Забяспечвае простую булевую праверку (`true`/`false`) для валідацыі ўводу карыстальніка або канфігурацыі.
- Дапамагае прадухіліць памылкі падчас выканання, калі наступны код мяркуе, што ўсе элементы падтрымліваюць аперацыі з
  рэгулярнымі выразамі.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areRegExes(array)`

Параметры:

- `array`: Значэнне, якое трэба праверыць.

### Лакальны імпарт функцыі

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns тут — масіў RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areRegExes(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 23:16:53 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>