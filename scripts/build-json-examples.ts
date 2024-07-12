import * as fs from 'fs';
import * as path from 'path';

import {landDrainageConsent} from '../examples/digitalPlanningApplication/data/landDrainageConsent';
import {lawfulDevelopmentCertificateExisting} from '../examples/digitalPlanningApplication/data/lawfulDevelopmentCertificate/existing';
import {lawfulDevelopmentCertificateProposed} from '../examples/digitalPlanningApplication/data/lawfulDevelopmentCertificate/proposed';
import {listedBuildingConsent} from '../examples/digitalPlanningApplication/data/listedBuildingConsent';
import {planningPermissionFullHouseholder} from '../examples/digitalPlanningApplication/data/planningPermission/fullHouseholder';
import {planningPermissionMajor} from '../examples/digitalPlanningApplication/data/planningPermission/major';
import {planningPermissionMinor} from '../examples/digitalPlanningApplication/data/planningPermission/minor';
import {priorApprovalBuildHomes} from '../examples/digitalPlanningApplication/data/priorApproval/buildHomes';
import {priorApprovalConvertCommercialToHome} from '../examples/digitalPlanningApplication/data/priorApproval/convertCommercialToHome';
import {priorApprovalExtendUniversity} from '../examples/digitalPlanningApplication/data/priorApproval/extendUniversity';
import {priorApprovalLargerExtension} from '../examples/digitalPlanningApplication/data/priorApproval/largerExtension';
import {priorApprovalSolarPanels} from '../examples/digitalPlanningApplication/data/priorApproval/solarPanels';
import {DigitalPlanningApplication} from '../types/schemas/digitalPlanningApplication';

interface Example {
  filename: string;
  data: DigitalPlanningApplication;
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
    filename: 'priorApproval/largerExtension',
    data: priorApprovalLargerExtension,
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
    filename: 'planningPermission/minor',
    data: planningPermissionMinor,
  },
  {
    filename: 'listedBuildingConsent',
    data: listedBuildingConsent,
  },
  {
    filename: 'landDrainageConsent',
    data: landDrainageConsent,
  },
];

const convertTypeScriptObjectsToJSONFiles = (objects: Example[]) => {
  for (const object of objects) {
    const outputFilePath = path.join(
      __dirname,
      // TODO: Handle schema name as variable
      `../examples/digitalPlanningApplication/${object.filename}.json`
    );
    const jsonContent = JSON.stringify(object.data, null, 2);
    fs.writeFileSync(outputFilePath, jsonContent, {flag: 'w'});

    console.log(
      `TypeScript object '${object.filename}' converted to JSON and saved to ${outputFilePath}`
    );
  }
};

convertTypeScriptObjectsToJSONFiles(examplesToConvert);
