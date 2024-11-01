export default {
  async fetch(request) {
    //  event.respondWith(handleRequest(event.request));
      const string = "a simple string test";
        const { key, iv, encrypted } = await encryptString(string);
    const decrypted = await decryptString({
      key: key,
      iv: iv,
      encrypted: encrypted
    });
    console.log("Original string:", string);
    console.log("Encrypted (Base64):", arrayBufferToBase64(encrypted));
    console.log("Decrypted string:", decrypted);
    console.log("Key (Base64):", await cryptoKeyToBase64(key));
    console.log("IV (Base64):", arrayBufferToBase64(iv));
      // const keyBase64 = await cryptoKeyToBase64(key);
      // const key = await base64ToCryptoKey(keyBase64, ["encrypt", "decrypt"], { name: "AES-GCM", length: 256 });
      // const encrypted = await encode(string,string);  
    return new Response(arrayBufferToBase64(encrypted), { status: 503 });
  }
}

async function encryptString(string) {
  const key = await generateKey();
  const iv = await generateIV();
  const encrypted = await encrypt(key, iv, string);
  return { key, iv, encrypted };
}

async function decryptString({ key, iv, encrypted }) {
  return await decrypt(key, iv, encrypted);
}

async function generateKey() {
  return await crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"]
  );
}

async function generateIV() {
  const iv = new Uint8Array(12);
  crypto.getRandomValues(iv);
  return iv;
}

async function encrypt(key, iv, string) {
  const encoder = new TextEncoder();
  const encodedString = encoder.encode(string);
  return await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    encodedString
  );
}

async function decrypt(key, iv, encrypted) {
  const decrypted = await crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    encrypted
  );
  const decoder = new TextDecoder();
  return decoder.decode(decrypted);
}

// Helper function to convert an ArrayBuffer to Base64
function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  bytes.forEach(b => binary += String.fromCharCode(b));
  return btoa(binary);
}

// Helper function to convert a CryptoKey to Base64
async function cryptoKeyToBase64(key) {
  const rawKey = await crypto.subtle.exportKey("raw", key);
  return arrayBufferToBase64(rawKey);
}

// Helper function to convert Base64 to ArrayBuffer
function base64ToArrayBuffer(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

// Helper function to convert Base64 to CryptoKey
async function base64ToCryptoKey(base64, keyUsage, algorithm) {
  const rawKey = base64ToArrayBuffer(base64);
  return await crypto.subtle.importKey("raw", rawKey, algorithm, false, keyUsage);
}
