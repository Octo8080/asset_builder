import { parse, encode, ImportTargetFile, ImportedFile, exportBundledObject } from "./deps.ts"

const parsedArgs = parse(Deno.args);

const importFileName =
  typeof parsedArgs["inport-file"] === "string"
    ? parsedArgs["inport-file"]
    : "asset_config.json";

let bundleList = "";

try {
  const readFile = Deno.readTextFileSync(importFileName);
  bundleList = readFile;
} catch (error) {
  if (error.name === "NotFound") {
    console.error(
      `Import Config file [${importFileName}] is not Found!!\nplease confirm.`
    );
    Deno.exit();
  }
  throw error;
}

const bundleListArr: [ImportTargetFile] = JSON.parse(bundleList).files;

let bundledObject: { [key: string]: ImportedFile } = {};

bundleListArr.forEach((file) => {
  try {
    const content = encode(Deno.readFileSync(file.importPath));
    const extension = file.importPath.split(".").slice(-1)[0];
    bundledObject[`${file.calledName}`] = { content, extension };
  } catch (error) {
    if (error.name === "NotFound") {
      console.error(
        `Import file [${file.importPath}] is not Found!!\nplease confirm.`
      );
      Deno.exit();
    }
    throw error;
  }
});

const exportText = exportBundledObject(bundledObject)

console.log(exportText);
