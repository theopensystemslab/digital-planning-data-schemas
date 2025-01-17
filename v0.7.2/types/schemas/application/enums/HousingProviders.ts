export const GLAHousingProviders = {
  affordableHousing: 'Other affordable housing provider',
  councilBuildToRent: 'Council delivered build to rent',
  councilDelivery: 'Council delivery company',
  HA: 'Housing association',
  LA: 'Local Authority',
  private: 'Private',
  privateRented: 'Private rented sector',
  publicAuthority: 'Other public authority',
  selfBuild: 'Self-build',
};

type GLAHousingProviderKeys = keyof typeof GLAHousingProviders;

type GenericGLAHousingProvider<TKey extends GLAHousingProviderKeys> = {
  value: TKey;
  description: (typeof GLAHousingProviders)[TKey];
};

type GLAHousingProviderMap = {
  [K in GLAHousingProviderKeys]: GenericGLAHousingProvider<K>;
};

/**
 * @id #GLAHousingProvider
 * @description Housing provider categories tracked by the Greater London Authority (GLA)
 */
export type GLAHousingProvider =
  GLAHousingProviderMap[keyof GLAHousingProviderMap];
