const PLUGIN_ID = 'sessionIssueTest';

export function fetchService(
  zoweRes: any,
  serviceName: string,
  options: RequestInit,
  subUrl?: string
): Promise<Response> {
  const pluginDef = getPluginDefinition(zoweRes);
  subUrl = subUrl || '';

  return fetch(
    zoweRes.uriBroker.pluginRESTUri(pluginDef, serviceName, subUrl),
    options
  );
}

function getPluginDefinition(zoweRes: any) {
  const result = zoweRes
      && zoweRes.pluginManager
      && zoweRes.pluginManager.getPlugin(PLUGIN_ID);

  if (!result) {
    const message = 'IUW. Provided invalid ZoweZLUXResources';
    throw new Error(message);
  }

  return result;
}