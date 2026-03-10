# isTrue

## 설명

`isTrue`는 주어진 값이 `true`와 엄격하게 동일한지 여부를 판단합니다.

### 사용 사례

`isTrue`를 사용해 플래그, 기능 토글, 또는 구성 값에서 리터럴 `true`만 허용하고 그 외의 모든 값은 `false`로 처리해야 하는 경우를 검증하세요.

> **TypeScript 사용자를 위한 참고:**
>
> 단순히 truthy 값이 아니라 불리언 리터럴 `true`만 허용해야 할 때 `isTrue`를 사용하세요.

### 장점

- 불리언 리터럴 `true`에 대해 엄격한 검사를 제공합니다(강제 변환 없음).
- `1`, `"true"`, `{}` 같은 truthy 값과 `true`를 구분하는 데 도움이 됩니다.
- 가드 및 검증 파이프라인에 적합한 단순하고 예측 가능한 동작을 제공합니다.

## 사용법

### 문법

함수:

- `isTrue(value)`

매개변수:

- `value`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // 참
const b = isTrue(1);         // 거짓
const c = isTrue("true");   // 거짓

if (isTrue(a)) {
  // 여기서 a는 참입니다
}
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isTrue(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 1:45:12 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>