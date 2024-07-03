import * as fs from 'fs';
import * as path from 'path';

import {lawfulDevelopmentCertificateExisting} from '../examples/data/lawfulDevelopmentCertificate/existing';
import {lawfulDevelopmentCertificateProposed} from '../examples/data/lawfulDevelopmentCertificate/proposed';
import {listedBuildingConsent} from '../examples/data/listedBuildingConsent';
import {planningPermissionFullHouseholder} from '../examples/data/planningPermission/fullHouseholder';
import {planningPermissionMajor} from '../examples/data/planningPermission/major';
import {priorApprovalBuildHomes} from '../examples/data/priorApproval/buildHomes';
import {priorApprovalConvertCommercialToHome} from '../examples/data/priorApproval/convertCommercialToHome';
import {priorApprovalExtendUniversity} from '../examples/data/priorApproval/extendUniversity';
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
    filename: 'priorApproval/extendUniversity',
    data: priorApprovalExtendUniversity,
  },
  {
    filename: 'priorApproval/solarPanels',
    data: priorApprovalSolarPanels,
  },
  {
    filename: 'priorApproval/buildHomes',
    data: priorApprovalBuildHomes,
  },
  {
    filename: 'priorApproval/convertCommercialToHome',
    data: priorApprovalConvertCommercialToHome,
  },
  {
    filename: 'planningPermission/fullHouseholder',
    data: planningPermissionFullHouseholder,
  },
  {
    filename: 'planningPermission/major',
    data: planningPermissionMajor,
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
