# isWeakSet

## 설명

주어진 `value`가 객체의 `WeakSet`인지 여부를 판별합니다.

### 사용 사례

타입이 지정되지 않은 입력(예: 외부 API, 동적 구성, 또는 `unknown` 값)을 받을 때 `WeakSet` 전용 연산을 사용하기 전에 그것이 `WeakSet`인지 검증해야 한다면 `isWeakSet`을
사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `isWeakSet`을 사용해 런타임에서 `unknown` 값을 `WeakSet<object>`로 좁히세요. `WeakSet`에는 객체 참조만 포함될 수 있다는 점에 유의하세요.

### 장점

- 값이 `WeakSet`인지 여부를 간단히 런타임에서 확인할 수 있습니다.
- `WeakSet` 인스턴스만 해당 타입으로 취급되도록 보장하여 타입 오류를 방지하는 데 도움이 됩니다.
- 어떤 `unknown` 입력에도 동작하며 명확한 불리언 결과(`true`/`false`)를 반환합니다.

## 사용법

### 문법

함수:

- `isWeakSet(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a는 런타임에서 WeakSet이다
}
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isWeakSet(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 2:17:52 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>