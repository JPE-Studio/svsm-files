/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let baseURL_2 = "https://cms.svsm.at/"
  let baseURL = "https://cms.svsm.at/"
  let baseURL_3 = "https:///cms.svsm.at/"
  let baseURL_4 = "https://cms.svsm.at/"
  const CMS_4: ResourceRequest = {
    id: "LDV_5LjNkcdTAP1bmJ1tx",
    name: "CMS",
    url: `${baseURL_2}items/neuigkeiten`,
    method: "get",
    headers: [
    ],
  }
  const CMS_3: ResourceRequest = {
    id: "vDIWIkkS_MwVpkkgwLbkC",
    name: "CMS",
    url: "https://cms.svsm.at/items/Header_Footer/",
    method: "get",
    headers: [
    ],
  }
  const CMS_2: ResourceRequest = {
    id: "sTQrRftVLno6xTiB2up5d",
    name: "CMS",
    url: baseURL+"items/Header_Footer/",
    method: "get",
    headers: [
    ],
  }
  const komponenten_1: ResourceRequest = {
    id: "r8fqpJNYD5Ny7y320VJCC",
    name: "komponenten",
    url: baseURL_3+"items/komponenten",
    method: "get",
    headers: [
    ],
  }
  const neuigkeitenCMS_1: ResourceRequest = {
    id: "612FeC3yWeSVH_JiRx_NR",
    name: "neuigkeitenCMS",
    url: baseURL_4+"items/neuigkeiten?filter[status][_eq]=published",
    method: "get",
    headers: [
    ],
  }
  const komponentenCMS_1: ResourceRequest = {
    id: "L91vsIXI2s89rJRAneCXM",
    name: "komponentenCMS",
    url: baseURL_4+"items/komponenten/",
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
    ["CMS_3", CMS_3],
    ["CMS_2", CMS_2],
    ["komponenten_1", komponenten_1],
    ["neuigkeitenCMS_1", neuigkeitenCMS_1],
    ["komponentenCMS_1", komponentenCMS_1],
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
  let baseURL = "https://cms.svsm.at/"
  let CMS = resources.CMS_4
  return {
    title: "Neuigkeiten",
    description: "Entdecken Sie spannende Berichte und Neuigkeiten rund um die Aktivitäten der Sportvereinigung Sozialministerium (SVSM). Jetzt Blogbeiträge lesen und auf dem Laufenden bleiben!",
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
    