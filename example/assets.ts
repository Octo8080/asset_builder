import { decode } from "https://deno.land/std@0.97.0/encoding/base64.ts";

const bundledObject = {
  files:{
    "test-text":{
      content:decode("SGVsbG8gV29ybGQhIQ=="),
      extension: "txt"
    },
    "test-text2":{
      content:decode("SGVsbG8gV29ybGQhIQ=="),
      extension: "txt"
    }
  }
} 

export default bundledObject
