# isPromise

## Апісанне

Вызначае, ці з’яўляецца зададзенае значэнне `Promise`.

### Выкарыстанне

Выкарыстоўвайце `isPromise`, каб правяраць невядомыя ўваходныя значэнні перад тым, як разглядаць іх як `Promise`,
напрыклад пры апрацоўцы значэнняў, вернутых плагінамі, дынамічнымі імпартамі або слабатыпізаванымі API.

> **Падказка для карыстальнікаў TypeScript:**
>
> `isPromise` правярае праз `instanceof Promise`, таму вяртае `true` толькі для сапраўдных асобнікаў `Promise` (а не для
> агульных thenable).

### Перавагі

- Забяспечвае простую праверку падчас выканання, ці з’яўляецца значэнне `Promise`.
- Дапамагае абараніць шляхі кода, якім патрэбны сапраўдны асобнік `Promise`, прадказальна вяртаючы `true` або `false`.
- Пазбягае ілжывых спрацоўванняў ад «thenable» аб’ектаў (напрыклад, `{ then() {} }`), патрабуючы сапраўдны асобнік
  `Promise`.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isPromise(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць.

### Лакальны імпарт функцыі

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // праўда
console.log(isPromise(b)); // няпраўда
console.log(isPromise(123)); // няпраўда
console.log(isPromise(null)); // няпраўда

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isPromise(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 23:52:11 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>