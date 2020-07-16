/*

Made by doami2005

이미지 파일을 Base64 문자열로 변환해주는 함수입니다.
예시 ) ImgToBase64("sdcard/img.jpg")

https://open.kakao.com/o/gXaUzu1b
질문은 여기로

*/

function ImgToBase64 (path) {
    let imgFile = new java.io.File(path);
    let bitmap = android.graphics.BitmapFactory.decodeFile(path);
    let bOut = new java.io.ByteArrayOutputStream();
    bitmap.compress(android.graphics.Bitmap.CompressFormat.JPEG, 100, bOut);
    return android.util.Base64.encodeToString(bOut.toByteArray(), android.util.Base64.DEFAULT);
}
