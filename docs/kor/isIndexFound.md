# isIndexFound

## 설명

`isIndexFound`는 주어진 값이 음수가 아닌 정수인지 판단하여, 인덱스가 발견되었음을 나타냅니다.

### 사용 사례

검색 결과가 사용 가능한 인덱스(정수 `>= 0`)를 나타내는지 확인한 뒤 배열이나 문자열에 인덱싱하여, `-1` 또는 숫자가 아닌 값을 실수로 사용하는 것을 방지합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `indexOf`, `findIndex` 또는 사용자 정의 검색처럼 `-1`(또는 다른 무효 값)이 “찾을 수 없음”을 나타낼 수 있는 연산 뒤에 `isIndexFound`를 사용하세요. `true`를 반환하면
> 해당 값은 숫자이며 배열/문자열 인덱스로 안전하게 사용할 수 있습니다.

### 장점

- 음수가 아닌 정수인지 확인하여 인덱스가 발견되었는지 감지하는 간단한 타입 가드를 제공합니다.
- 유효한 인덱스 형태의 값(정수 `>= 0`)에 대해서만 `true`를 반환하며, 음수, 정수가 아닌 값, 숫자가 아닌 값은 거부합니다.
- “찾을 수 없음”을 위해 `-1`을 반환하는 API를 사용할 때 오프바이원(off-by-one) 및 센티널 값(sentinel-value) 실수를 피하는 데 도움이 됩니다.

## 사용법

### 문법

함수:

- `isIndexFound(value)`

매개변수:

- `value`: 음수가 아닌 정수인지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // 여기서 idx는 숫자이며 0 이상입니다
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// indexOf와 함께 사용하는 일반적인 예
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isIndexFound(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오전 12:46:33 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>