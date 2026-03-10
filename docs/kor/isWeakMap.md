# isWeakMap

## 설명

주어진 `value`가 `WeakMap` 인스턴스인지 여부를 판별합니다.

### 사용 사례

공개 API, 플러그인 시스템, 또는 동적 구성 등에서 `unknown` 값을 받아들이고 `WeakMap` 전용 동작을 사용하기 전에 그것이 `WeakMap`인지 검증해야 할 때 `isWeakMap`을 사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `isWeakMap`은 `instanceof WeakMap` 검사를 수행하며, 실제 `WeakMap` 인스턴스에 대해서만 `true`를 반환하는 런타임 가드입니다.

### 장점

- 값이 `WeakMap`인지 여부를 간단히 런타임에서 확인합니다.
- `WeakMap`이 필요한 API를 잘못 사용하는 것을 방지하는 데 도움이 되며, 예외를 던지는 대신 `true`/`false`를 반환합니다.
- `unknown` 입력에서도 동작하므로 모듈 경계(예: 파싱, 외부 데이터, 또는 타입이 없는 코드)에서 사용하기에 편리합니다.

## 사용법

### 문법

함수:

- `isWeakMap(value)`

매개변수:

- `value`: 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a는 런타임에서 WeakMap이다
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isWeakMap(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 1:25:36 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>