# areBuffers

## 설명

`areBuffers`는 제공된 값이 비어 있지 않고 요소가 채워진 배열이며 모든 요소가 `Buffer`인지 확인하고, 그렇다면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

들어오는 청크 배열(예: 스트림, 파일 업로드, 네트워크 패킷에서)을 검증하여 모든 부분이 `Buffer` 인스턴스인지 확인한 다음, 연결, 디코딩하거나 암호화/바이너리 처리 함수에 전달합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areBuffers`를 사용해 `unknown[]`를 검증한 뒤 `Buffer.concat` 같은 Buffer 전용 API를 호출하세요. 이 함수는 모든 요소가 `Buffer`일 때만 `true`를 반환하도록
> 보장합니다.

### 장점

- 입력의 모든 요소가 Node.js `Buffer` 인스턴스임을 보장하며, 전체 배열이 조건을 만족할 때만 `true`를 반환합니다.
- 비어 있지 않고 요소가 채워진 배열을 요구하여 잘못된 입력을 조기에 거부하며, 빈 배열이나 배열이 아닌 값에 대해서는 `false`를 반환합니다.
- 버퍼 전용 작업(예: 연결, 해싱, 바이너리 프로토콜)을 수행하기 전에 가드로 사용하기에 유용합니다.

## 사용법

### 문법

함수:

- `areBuffers(array)`

매개변수:

- `array`: 버퍼 인스턴스인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areBuffers(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 4:25:53 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>