# isPlainObject

## Апісанне

Правярае, ці з’яўляецца зададзенае `value` звычайным аб’ектам, і вяртае `true`, калі так, інакш `false`.

### Выкарыстанне

Праверыць, што ўваходныя даныя тыпу `unknown` (напрыклад, распарсены JSON, знешнія даныя або аргументы функцыі)
з’яўляюцца звычайным аб’ектам перад чытаннем ключоў або пераўтварэннем у тыпізаваны аб’ект канфігурацыі.

> **Падказка для карыстальнікаў TypeScript:**
>
> `isPlainObject` карысная для звужэння `unknown` перад тым, як разглядаць яго як аб’ект, падобны да запісу (record);
> яна вяртае `true` толькі для значэнняў, унутраны тэг якіх — `[object Object]`.

### Перавагі

- Забяспечвае простую і надзейную праверку таго, ці з’яўляецца значэнне звычайным аб’ектам (г.зн. `Object` / `{}`),
  вяртаючы `true` або `false`.
- Дапамагае адрозніваць звычайныя аб’екты ад масіваў, функцый, `null` і іншых тыпаў, якія не з’яўляюцца звычайнымі
  аб’ектамі.
- Карысна як ахоўнік тыпаў у TypeScript, каб звузіць значэнні тыпу `unknown` перад доступам да ўласцівасцяў аб’екта.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isPlainObject(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць на статус звычайнага аб’екта.

### Лакальны імпарт функцыі

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // тут input — просты аб’ект
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // праўда
console.log(isPlainObject([])); // няпраўда
console.log(isPlainObject(null)); // няпраўда

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isPlainObject(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Файл быў створаны 6 February 2026 at 12:16:31 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>