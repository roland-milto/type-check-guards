# isSymbol

## Апісанне

`isSymbol` вызначае, ці мае зададзенае значэнне тып `symbol`, вяртаючы `true` для сімвалаў і `false` у іншых выпадках.

### Выкарыстанне

Праверце, што значэнне `unknown` з'яўляецца `symbol`, перад выкарыстаннем яго як унікальнага ідэнтыфікатара, ключа
рэестра або вылічальнага ключа ўласцівасці ў аб'ектах і мапах.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isSymbol`, каб звузіць `unknown` да `symbol` перад выклікам функцый, звязаных з symbol, або перад
> выкарыстаннем яго як вылічальнага ключа ўласцівасці.

### Перавагі

- Забяспечвае простую і надзейную праверку падчас выканання для прымітыўнага тыпу JavaScript `symbol`.
- Дапамагае звузіць значэнні `unknown` перад выкарыстаннем API, спецыфічных для symbol, або перад захаваннем іх у якасці
  ключоў.
- Пазбягае ілжывых спрацоўванняў дзякуючы выкарыстанню `typeof`, што з'яўляецца кананічным спосабам вызначэння значэнняў
  `symbol`.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isSymbol(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць.

### Лакальны імпарт функцыі

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // тут input — сімвал
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isSymbol(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 14:25:58 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>