# areEqual

## 설명

`areEqual`은 배열의 모든 요소가 주어진 예상 값과 같은지 확인하며, 비어 있지 않은 배열에서 모든 항목이 일치하는 경우에만 `true`를 반환합니다.

### 사용 사례

목록이 하나의 허용된 값만 포함하는지 검증합니다(예: 모든 상태 플래그가 `true`, 모든 역할이 `"admin"`, 또는 모든 숫자 항목이 요구되는 상수와 동일). 또한 빈 입력은 유효하지 않은 것으로 처리하여(
`false`) 반환합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 엄격한 전체 항목 검사가 필요할 때 `areEqual`을 사용하세요. 빈 배열과 배열이 아니거나 채워지지 않은 입력에 대해서는 `false`를 반환합니다.

### 장점

- 모든 요소가 예상 값과 일치할 때에만 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.
- 빠른 실패(fail-fast): 일치하지 않는 요소를 발견하는 즉시 검사를 중단합니다.
- 입력이 채워진 배열이 아닐 경우 `false`를 반환하여 잘못된 입력을 방지합니다.

## 사용법

### 문법

함수:

- `areEqual(value, expected)`

매개변수:

- `value`: 검사할 배열입니다.
- `expected`: 각 배열 항목과 비교할 요소입니다.

### 로컬 함수 임포트

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areEqual(value, expected)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 11:51:06 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>