import { ImportedFile } from "./type.d.ts";

const exportText = (exportText: string) =>
  `import { decode } from "https://deno.land/std@0.97.0/encoding/base64.ts";

const bundledObject = {
  files:{
  ${exportText}
  }
} 

export default bundledObject`;

const exportObjectText = (
  bundledObject: { [key: string]: ImportedFile },
) => {
  return Object.keys(bundledObject)
    .map(
      (key, index) =>
        `${index>0 ? '  ':''}  "${key}":{\r\n      content:decode("${
          bundledObject[key].content
        }"),\r\n      extension: "${bundledObject[key].extension}"\r\n    }`,
    )
    .join(",\r\n");
};

export const exportBundledObject = (
  bundledObject: { [key: string]: ImportedFile },
) => {
  const tmp = exportObjectText(bundledObject);
  return exportText(tmp);
};
