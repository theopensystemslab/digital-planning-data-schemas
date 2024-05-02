import * as fs from 'fs';
import * as path from 'path';
import {validLDCE} from '../examples/data/ldcE';
import {validLDCP} from '../examples/data/ldcP';
import {validListedBuildingConsent} from '../examples/data/listedBuildingConsent';
import {validPlanningPermission} from '../examples/data/planningPermission';
import {validPriorApproval} from '../examples/data/priorApproval';
import {Schema} from '../types/Schema';

interface Example {
  filename: string;
  data: Schema;
}

const examplesToConvert: Example[] = [
  {
    filename: 'validLawfulDevelopmentCertificateExisting',
    data: validLDCE,
  },
  {
    filename: 'validLawfulDevelopmentCertificateProposed',
    data: validLDCP,
  },
  {
    filename: 'validPriorApproval',
    data: validPriorApproval,
  },
  {
    filename: 'validPlanningPermission',
    data: validPlanningPermission,
  },
  {
    filename: 'validListedBuildingConsent',
    data: validListedBuildingConsent,
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
