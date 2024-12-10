/**
 * @id #CommunityInfrastructureLevy
 * @description Details about the Community Infrastructure Levy planning charge, if applicable
 */
export type CommunityInfrastructureLevy = LiableForCIL | NotLiableForCIL;

type LiableForCIL = {
  // Results are heirarchical (first check if project qualifies for full exemption from CIL, then CIL relief, else plain "liable")
  result:
    | 'exempt.annexe'
    | 'exempt.extension'
    | 'exempt.selfBuild'
    | 'relief.charity'
    | 'relief.socialHousing'
    | 'liable';
};

type NotLiableForCIL = {
  result: 'notLiable';
  declaration: true;
};
