
import asset from './asset.ts'

for (const [key, value] of Object.entries(asset.files)) {
  console.log(`key: ${key}, extension: ${value.extension}, content: ${new TextDecoder().decode(value.content) }`);
}
// key: test-text, extension: txt, content: Hello World!!
// key: test-text2, extension: txt, content: Hello World!!
