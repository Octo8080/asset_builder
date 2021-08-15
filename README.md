# asset_builder
Asset files (eg, text, image) bundle tool for Deno.

# Install 

```sh
deno install --allow-read https://deno.land/x/asset_builder/asset_builder.ts

# Import config file from default ./asset_config.json.
asset_builder >> asset.ts

# Set Import config file.
asset_builder --import-file my_asset_config.json >> asset.ts
```

# Usage 

```sh
# Import config file from default ./asset_config.json.
deno run --allow-read https://deno.land/x/asset_builder/asset_builder.ts >> asset.ts

# Set Import config file.
deno run --allow-read https://deno.land/x/asset_builder/asset_builder.ts --import-file my_asset_config.json  >> asset.ts
```

# Configuration

The configuration file is described in json.  
Write as follows.

```json
{
  "files":[
    {
      "importPath": "./sample.txt",
      "calledName": "sample-text"
    }
  ]  
}
```

# Example of using bundled files

The file created by asset_builder is used as follows.

```ts 
import asset from './asset.ts'

for (const [key, value] of Object.entries(asset.files)) {
  console.log(`key: ${key}, extension: ${value.extension}, content: ${new TextDecoder().decode(value.content) }`);
}
// key: test-text, extension: txt, content: Hello World!!
// key: test-text2, extension: txt, content: Hello World!!
```

