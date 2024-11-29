/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let baseURL_1 = "http://cms.svsm.at/"
  const system = _props.system
  let baseURL = "https://cms.svsm.at/"
  let baseURL_3 = "https://cms.svsm.at/"
  let baseURL_4 = "https:///cms.svsm.at/"
  const CMS_5: ResourceRequest = {
    id: "oVe5CF-_lAsQUJbFsqMeF",
    name: "CMS",
    url: `${baseURL_1}items/termine?filter%5Bslug%5D%5B_eq%5D=${system?.params?.slug}`,
    method: "get",
    headers: [
    ],
  }
  const CMS_7: ResourceRequest = {
    id: "vDIWIkkS_MwVpkkgwLbkC",
    name: "CMS",
    url: "https://cms.svsm.at/items/Header_Footer/",
    method: "get",
    headers: [
    ],
  }
  const CMS_4: ResourceRequest = {
    id: "sTQrRftVLno6xTiB2up5d",
    name: "CMS",
    url: baseURL+"items/Header_Footer/",
    method: "get",
    headers: [
    ],
  }
  const CMS_6: ResourceRequest = {
    id: "mqS9VGOLM4f6hSbpz-CTE",
    name: "CMS",
    url: baseURL_3+"items/termine?filter[status][_eq]=published&filter[datum][_gte]=$NOW&sort=datum&limit=3",
    method: "get",
    headers: [
    ],
  }
  const Komponenten_1: ResourceRequest = {
    id: "EATCackXJchWXwK-jqZXT",
    name: "Komponenten",
    url: baseURL_3+"items/komponenten",
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
    ["CMS_5", CMS_5],
    ["CMS_7", CMS_7],
    ["CMS_4", CMS_4],
    ["CMS_6", CMS_6],
    ["Komponenten_1", Komponenten_1],
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
  let CMS = resources.CMS_5
  let baseURL = "http://cms.svsm.at/"
  return {
    title: CMS?.data?.data?.[0]?.titel,
    description: CMS?.data?.data?.[0]?.["beschreibung_kurz"],
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
    