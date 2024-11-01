# encrypt-decrypt-string-CF-Worker
encrypting and decrypting a string in CloadFlare Workers
### راهنمای استفاده و توضیحات تکمیلی

این کد از کتابخانه‌ی **Web Crypto API** استفاده می‌کند و یک تابع رمزنگاری متقارن با الگوریتم AES-GCM برای رمزگذاری و رمزگشایی یک رشته ارائه می‌دهد. الگوریتم **AES-GCM** به دلیل سرعت بالا و امنیت خوب در رمزگذاری داده‌ها کاربرد گسترده‌ای دارد و یکی از روش‌های محبوب در امنیت داده‌های وب است.

#### ساختار کد

1. **تابع `encryptString`**: این تابع رشته‌ای که ورودی گرفته می‌شود را رمزگذاری می‌کند. برای این کار ابتدا یک کلید رمزنگاری و یک IV (مقدار شروع تصادفی) تولید می‌کند و سپس رشته ورودی را رمزگذاری کرده و نتیجه را به صورت یک شیء حاوی کلید، IV و متن رمزگذاری شده برمی‌گرداند.

2. **تابع `decryptString`**: این تابع رشته رمزگذاری‌شده را با استفاده از کلید و IV داده شده رمزگشایی می‌کند.

3. **تابع `generateKey`**: برای تولید کلید 256 بیتی AES استفاده می‌شود که قابل استفاده برای رمزگذاری و رمزگشایی است.

4. **تابع `generateIV`**: برای تولید یک مقدار تصادفی (IV) استفاده می‌شود که به عنوان مقدار شروع رمزنگاری لازم است.

5. **تابع `encrypt`**: این تابع وظیفه رمزگذاری رشته ورودی را با استفاده از کلید و IV داده شده به عهده دارد.

6. **تابع `decrypt`**: این تابع برای رمزگشایی رشته رمزگذاری‌شده استفاده می‌شود.

7. **توابع کمکی `arrayBufferToBase64`, `cryptoKeyToBase64`, `base64ToArrayBuffer`, `base64ToCryptoKey`**: این توابع برای تبدیل داده‌ها به و از Base64 طراحی شده‌اند که به اشتراک‌گذاری امن و ذخیره‌ی کلید‌ها و داده‌ها در قالب متنی کمک می‌کنند.

### توضیحات تکنولوژی

در اینجا از **AES-GCM** استفاده شده است، که یک روش رمزنگاری متقارن است؛ این بدان معناست که برای رمزگذاری و رمزگشایی از یک کلید مشابه استفاده می‌شود. AES-GCM به دلیل سرعت بالا و قابلیت تأیید اصالت پیام (Message Authentication Code) یکی از الگوریتم‌های پیشرفته و امن برای رمزنگاری داده‌های حساس در برنامه‌های کاربردی وب است.

- **AES-GCM**: این الگوریتم هم امنیت و هم کارایی بالایی را برای رمزنگاری داده‌ها ارائه می‌دهد و به دلیل دارا بودن مکانیسم تصدیق یکپارچگی، امکان تشخیص تغییرات احتمالی داده‌ها را فراهم می‌کند.
  
- **Web Crypto API**: این API در مرورگرها برای فراهم کردن یک رابط رمزنگاری امن و کارآمد ارائه شده و شامل توابعی برای ایجاد کلید، رمزگذاری، رمزگشایی، و امضاهای دیجیتال است.


### Usage Guide and Explanation

This code uses the **Web Crypto API** to provide a symmetric encryption function utilizing the AES-GCM algorithm, which is highly secure and efficient for encrypting data in web applications. **AES-GCM** is widely used for its strong security and speed, making it a popular choice for web data security.

#### Code Structure

1. **`encryptString` Function**: This function encrypts an input string. It generates an encryption key and an IV (initialization vector), then encrypts the input string and returns an object containing the key, IV, and the encrypted data.

2. **`decryptString` Function**: This function decrypts the encrypted string using the provided key and IV.

3. **`generateKey` Function**: Generates a 256-bit AES key, which is suitable for encryption and decryption.

4. **`generateIV` Function**: Generates a random IV, necessary for encryption.

5. **`encrypt` Function**: Handles the encryption of the input string using the provided key and IV.

6. **`decrypt` Function**: Used for decrypting the encrypted data.

7. **Helper Functions (`arrayBufferToBase64`, `cryptoKeyToBase64`, `base64ToArrayBuffer`, `base64ToCryptoKey`)**: These functions help convert data to and from Base64 format, aiding in securely sharing and storing keys and data as text.

### Technology Overview

This implementation uses **AES-GCM**, a symmetric encryption method, meaning it uses the same key for both encryption and decryption. AES-GCM is chosen for its high performance and integrity-checking capability, providing a secure and efficient method for encrypting sensitive data.

- **AES-GCM**: This algorithm provides both security and performance, with the additional feature of Message Authentication Code (MAC) to detect tampering of encrypted data.

- **Web Crypto API**: This API is built into modern browsers to provide a secure and efficient cryptographic interface, including functions for key generation, encryption, decryption, and digital signatures.

### Resources for Further Learning
- [Mozilla Web Crypto API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [Introduction to AES-GCM on Wikipedia](https://en.wikipedia.org/wiki/Galois/Counter_Mode)
- [Understanding Cryptography: A Textbook for Students and Practitioners](https://www.springer.com/gp/book/9783642041006)

