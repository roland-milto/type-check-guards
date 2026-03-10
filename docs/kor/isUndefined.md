# isUndefined

## 설명

주어진 값이 `undefined`인지 확인합니다.

### 사용 사례

`isUndefined`를 사용해 선택적 입력을 가드하고, 누락된 속성을 감지하거나, “제공되지 않음”(`undefined`)과 “명시적으로 비어 있음”(`null`)을 구분하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `undefined`( `null`이 아님 )를 구체적으로 감지해야 할 때 `isUndefined`를 사용하세요. `typeof value === "undefined"`에 의존하므로 안전합니다.

### 장점

- `typeof`를 사용해 `undefined`를 명확하고 명시적으로 검사하여, 선언되지 않은 변수로 인한 엣지 케이스를 피합니다.
- 가드, 분기, 검증 로직에 적합한 단순한 불리언 결과(`true`/`false`)를 반환합니다.
- `undefined`를 `null`, `0`, `""`, `NaN` 같은 다른 “비어 있는” 값들과 구분하는 데 도움이 됩니다.

## 사용법

### 문법

함수:

- `isUndefined(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // 여기서 x는 undefined입니다
} else {
  // 여기서 x는 undefined가 아닙니다
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isUndefined(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 2:03:14 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>