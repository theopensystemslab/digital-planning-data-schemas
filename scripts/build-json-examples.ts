import * as fs from 'fs';
import * as path from 'path';

const convertTypeScriptObjectToJSON = async (input: string, output: string) => {
  try {
    // Import TypeScript module containing example, and extract exported object
    const module = await import(path.resolve(input));
    const object = Object.values(module)[0];

    // Convert to JSON and write to file
    const json = JSON.stringify(object, null, 2);
    fs.writeFileSync(output, json);

    console.log(`Converted ${input} to ${output}`);
  } catch (err) {
    console.error(`Error converting ${input} to JSON:`, err);
  }
};

/**
 * Recursively walk through directories to locate .ts examples
 * Convert from typed TS objects to plain JSON
 */
const walkDirectory = async (dir: string) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      await walkDirectory(filePath);
    } else if (path.extname(filePath) === '.ts') {
      // Write file to mirrored directory, outside the /data folder where the TS examples are stored
      const jsonExampleFilePath = path.join(
        dir.replace('/data', ''),
        `${path.basename(file, '.ts')}.json`
      );
      await convertTypeScriptObjectToJSON(filePath, jsonExampleFilePath);
    }
  }
};

(async () => {
  await walkDirectory('./examples');
  console.log('All example files converted to JSON');
})();
