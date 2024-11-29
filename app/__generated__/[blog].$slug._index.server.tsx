/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let baseURL_1 = "https://cms.svsm.at/"
  const system = _props.system
  let baseURL = "https://cms.svsm.at/"
  let baseURL_3 = "https://cms.svsm.at/"
  let baseURL_4 = "https:///cms.svsm.at/"
  const CMS_4: ResourceRequest = {
    id: "oqg2p-wnORyyX0L3s29-n",
    name: "CMS",
    url: `${baseURL_1}items/neuigkeiten?filter%5Bslug%5D%5B_eq%5D=${system?.params?.slug}`,
    method: "get",
    headers: [
    ],
  }
  const CMS_5: ResourceRequest = {
    id: "vDIWIkkS_MwVpkkgwLbkC",
    name: "CMS",
    url: "https://cms.svsm.at/items/Header_Footer/",
    method: "get",
    headers: [
    ],
  }
  const CMS_3: ResourceRequest = {
    id: "sTQrRftVLno6xTiB2up5d",
    name: "CMS",
    url: baseURL+"items/Header_Footer/",
    method: "get",
    headers: [
    ],
  }
  const neuigkeitenCMS_1: ResourceRequest = {
    id: "SVeUCqBFMwWw_aRz8Q0jQ",
    name: "neuigkeitenCMS",
    url: baseURL_3+"items/neuigkeiten?filter[status][_eq]=published&limit=3",
    method: "get",
    headers: [
    ],
  }
  const komponentenCMS_1: ResourceRequest = {
    id: "4FU1JM40ZQMHuwX81sq4C",
    name: "komponentenCMS",
    url: baseURL_3+"items/komponenten/",
    method: "get",
    headers: [
    ],
  }
  const komponenten_1: ResourceRequest = {
    id: "r8fqpJNYD5Ny7y320VJCC",
    name: "komponenten",
    url: baseURL_4+"items/komponenten",
    method: "get",
    headers: [
    ],
  }
  const sektionCMS: ResourceRequest = {
    id: "6JJ5qHhrq5BXsgPrF13CD",
    name: "sektionCMS",
    url: "https://cms.svsm.at/items/sektionen",
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["CMS_4", CMS_4],
    ["CMS_5", CMS_5],
    ["CMS_3", CMS_3],
    ["neuigkeitenCMS_1", neuigkeitenCMS_1],
    ["komponentenCMS_1", komponentenCMS_1],
    ["komponenten_1", komponenten_1],
    ["sektionCMS", sektionCMS],
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  let CMS = resources.CMS_4
  let baseURL = "https://cms.svsm.at/"
  return {
    title: CMS?.data?.data?.[0]?.headline,
    description: CMS?.data?.data?.[0]?.beschreibung,
    excludePageFromSearch: true,
    language: "de-AT",
    socialImageAssetName: undefined,
    socialImageUrl: baseURL+"assets/"+CMS?.data?.data?.[0]?.titelbild,
    status: 200,
    redirect: "",
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const projectId = "54b1339a-c28b-4888-a0ea-7f6f755539f4";

      export const contactEmail = "julian@petermaier.at";
    