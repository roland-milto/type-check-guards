# areBinaries

## 설명

제공된 값이 유효한 이진 문자열로 이루어진 비어 있지 않은 배열인지 확인하고, 모든 항목이 검증을 통과할 때만 `true`를 반환합니다.

### 사용 사례

알 수 없는 목록(예: JSON, 폼, API에서 온 데이터)을 받았을 때, 파싱하거나 처리하기 전에 그것이 비어 있지 않은 이진 문자열 배열인지 확인해야 하는 경우 `areBinaries`를 사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> 숫자/BigInt로 변환하기 전에 알 수 없는 입력을 검증하는 데 `areBinaries`를 사용하세요. 배열이 비어 있지 않고 모든 요소가 유효한 이진 문자열임을 보장합니다.

### 장점

- 값이 비어 있지 않은 배열이며 모든 요소가 유효한 이진 문자열인지 검증합니다.
- 가드, 조기 반환, 입력 검증에 적합한 간단한 불리언 결과(`true`/`false`)를 반환합니다.
- 이진이 아닌 항목이 하나라도 포함된 배열을 거부하여 후속 파싱 오류를 방지합니다.

## 사용법

### 문법

함수:

- `areBinaries(array)`

매개변수:

- `array`: 검사할 값입니다.

### 로컬 함수 임포트

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // 참
console.log(areBinaries(b)); // 거짓
console.log(areBinaries([])); // 거짓
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areBinaries(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 11:15:02 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>