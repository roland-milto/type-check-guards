# isWeakSet

## Апісанне

Вызначае, ці з’яўляецца зададзенае `value` `WeakSet` аб’ектаў.

### Выкарыстанне

Выкарыстоўвайце `isWeakSet`, калі прымаеце нетыпізаваны ўвод (напрыклад, з вонкавых API, дынамічнай канфігурацыі або
значэнняў `unknown`) і вам трэба праверыць, што гэта `WeakSet`, перад выкарыстаннем аперацый, спецыфічных для `WeakSet`.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isWeakSet`, каб звузіць значэнне тыпу `unknown` да `WeakSet<object>` падчас выканання; улічыце, што
`WeakSet` можа ўтрымліваць толькі спасылкі на аб’екты.

### Перавагі

- Забяспечвае простую праверку падчас выканання, ці з’яўляецца значэнне `WeakSet`.
- Дапамагае прадухіляць памылкі тыпаў, гарантуючы, што толькі асобнікі `WeakSet` разглядаюцца як такія.
- Працуе з любым уваходам тыпу `unknown` і вяртае выразны булеў вынік (`true`/`false`).

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isWeakSet(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць.

### Лакальны імпарт функцыі

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // праўда
console.log(isWeakSet(b)); // няпраўда

if (isWeakSet(a)) {
  // a — гэта WeakSet падчас выкананьня
}
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isWeakSet(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 14:13:58 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>