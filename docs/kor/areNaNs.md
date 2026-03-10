# areNaNs

## 설명

`areNaNs`는 배열의 모든 요소가 `NaN`인지 확인하며, 모든 요소가 `NaN`일 때에만 `true`를 반환합니다.

### 사용 사례

`NaN`이 센티널 값으로 사용되는 들어오는 데이터를 검증할 때, 전체 배열이 오직 `NaN`으로만 구성되어야 하는 경우에 사용합니다(예: 전부 결측인 숫자 시계열 감지).

> **TypeScript 사용자를 위한 참고:**
>
> 문자열-숫자 강제 변환 없이 배열이 숫자 `NaN` 값만 포함하는지 검증해야 할 때 `areNaNs`를 사용하세요.

### 장점

- 모든 요소가 `NaN`일 때에만 `true`를 반환합니다(엄격한 전체 요소 검사).
- 문자열을 숫자로 강제 변환하지 않습니다. "NaN" 같은 값은 `NaN`이 아닌 것으로 유지되며 결과를 `false`로 만듭니다.
- 채워지지 않은 배열에 대해 `false`를 반환하여, 빈 입력에서 실수로 `true`가 되는 것을 방지합니다.

## 사용법

### 문법

함수:

- `areNaNs(array)`

매개변수:

- `array`: `NaN` 값인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // 참
const b = areNaNs([NaN, 1, NaN]); // 거짓
const c = areNaNs([NaN, "NaN", NaN]); // 거짓
const d = areNaNs([NaN, null, NaN]); // 거짓
const e = areNaNs([] as unknown[]); // 거짓
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areNaNs(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 3:52:05 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>