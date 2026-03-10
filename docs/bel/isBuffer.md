# isBuffer

## Апісанне

Правярае, ці з'яўляецца значэнне Node.js `Buffer`, і вяртае `true` або `false`.

### Выкарыстанне

Правярайце ўваходныя даныя падчас выканання (напрыклад, нагрузкі API, даныя файлаў або буферы паведамленняў), каб
пераканацца, што значэнне — гэта `Buffer` перад яго апрацоўкай, і надзейна атрымлівайце `false` пры запуску па-за
Node.js, дзе `Buffer` можа не існаваць.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isBuffer`, каб звузіць значэнні тыпу `unknown` да `Buffer` перад выклікам метадаў, спецыфічных для
> Buffer.

### Перавагі

- Бяспечна выяўляе асобнікі Node.js `Buffer` з дапамогай `Buffer.isBuffer`.
- Вяртае `false` у асяроддзях, дзе `Buffer` недаступны, пазбягаючы памылак падчас выканання.
- Працуе з уваходнымі данымі тыпу `unknown`, што робіць яго прыдатным для праверкі падчас выканання і звужэння тыпаў.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isBuffer(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць.

### Лакальны імпарт функцыі

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // праўда
console.log(isBuffer(b)); // няпраўда

if (isBuffer(a)) {
  // тут a — Buffer
  console.log(a.toString("utf8"));
}
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isBuffer(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Файл быў створаны 31 January 2026 at 16:30:48 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>