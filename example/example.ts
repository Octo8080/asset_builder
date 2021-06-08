
import assets from './assets.ts'

for (const [key, value] of Object.entries(assets.files)) {
  console.log(`key: ${key}, extension: ${value.extension}, content: ${new TextDecoder().decode(value.content) }`);
}