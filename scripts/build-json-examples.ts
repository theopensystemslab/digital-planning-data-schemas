import * as fs from 'fs';
import * as path from 'path';
import {lawfulDevelopmentCertificateExisting} from '../examples/data/lawfulDevelopmentCertificate/existing';
import {lawfulDevelopmentCertificateProposed} from '../examples/data/lawfulDevelopmentCertificate/proposed';
import {listedBuildingConsent} from '../examples/data/listedBuildingConsent';
import {planningPermissionFullHouseholder} from '../examples/data/planningPermission/fullHouseholder';
import {priorApprovalSolarPanels} from '../examples/data/priorApproval/solarPanels';
import {Schema} from '../types/Schema';

interface Example {
  filename: string;
  data: Schema;
}

const examplesToConvert: Example[] = [
  {
    filename: 'lawfulDevelopmentCertificate/existing',
    data: lawfulDevelopmentCertificateExisting,
  },
  {
    filename: 'lawfulDevelopmentCertificate/proposed',
    data: lawfulDevelopmentCertificateProposed,
  },
  {
    filename: 'priorApproval/solarPanels',
    data: priorApprovalSolarPanels,
  },
  {
    filename: 'planningPermission/fullHouseholder',
    data: planningPermissionFullHouseholder,
  },
  {
    filename: 'listedBuildingConsent',
    data: listedBuildingConsent,
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
