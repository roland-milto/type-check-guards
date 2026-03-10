# areWeakSets

## Апісанне

Правярае, ці з'яўляецца ўваход непустым масівам, дзе кожны элемент — `WeakSet`, і вяртае `true` толькі ў гэтым выпадку.

### Выкарыстанне

Правяраць увод падчас выканання (напрыклад, з API, канфігурацыі або даных, пададзеных карыстальнікам), каб пераканацца,
што ў вас ёсць непусты спіс асобнікаў `WeakSet` перад працягам логікі, якая залежыць ад паводзін `WeakSet`.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `areWeakSets`, каб праверыць невядомы ўвод перад тым, як разглядаць яго як `WeakSet[]`. Ён вяртае
`false` для пустых масіваў і не-масіваў.

### Перавагі

- Гарантуе, што кожны элемент ва ўваходным масіве — гэта `WeakSet`.
- Вяртае `false` для пустых масіваў, прадухіляючы выпадковыя вынікі «усё валідна» пры адсутных даных.
- Бяспечна завяршаецца, вяртаючы `false`, калі ўваход не з'яўляецца запоўненым масівам (уключаючы `null`).
- Карысна як ахоўная праверка перад выкананнем аперацый, якія патрабуюць асобнікаў `WeakSet`.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areWeakSets(array)`

Параметры:

- `array`: Масіў, які трэба праверыць на наяўнасць аб'ектаў `WeakSet`.

### Лакальны імпарт функцыі

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a — гэта непусты масіў асобнікаў WeakSet
}

console.log(areWeakSets(a)); // праўда
console.log(areWeakSets(b)); // няпраўда
console.log(areWeakSets(c)); // няпраўда
console.log(areWeakSets(null as unknown)); // няпраўда

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areWeakSets(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 14:07:39 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>