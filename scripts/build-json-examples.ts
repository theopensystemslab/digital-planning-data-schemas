import * as path from 'path';
import {validExampleApplicant, validExampleAgent} from '../examples';
import * as fs from 'fs';
import {Schema} from '../types/Schema';

interface Example {
  filename: string;
  data: Schema;
}

const examplesToConvert: Example[] = [
  {
    filename: 'validExampleApplicant',
    data: validExampleApplicant,
  },
  {
    filename: 'validExampleAgent',
    data: validExampleAgent,
  },
];

const convertTypeScriptObjectsToJSONFiles = (objects: Example[]) => {
  for (const object of objects) {
    const outputFilePath = path.join(
      __dirname,
      `../examples/${object.filename}.json`
    );
    const jsonContent = JSON.stringify(object.data, null, 2);
    fs.writeFileSync(outputFilePath, jsonContent, {flag: 'w'});

    console.log(
      `TypeScript object '${object.filename}' converted to JSON and saved to ${outputFilePath}`
    );
  }
};

convertTypeScriptObjectsToJSONFiles(examplesToConvert);
