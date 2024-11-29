/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let baseURL_2 = "https://cms.svsm.at"
  let baseURL = "https://cms.svsm.at/"
  let baseURL_3 = "https:///cms.svsm.at/"
  let baseURL_4 = "https://cms.svsm.at/"
  const CMS_6: ResourceRequest = {
    id: "2mlt1baHf6qMs5GifeLrJ",
    name: "CMS",
    url: baseURL_2+"/items/termine",
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
  const komponenten_1: ResourceRequest = {
    id: "r8fqpJNYD5Ny7y320VJCC",
    name: "komponenten",
    url: baseURL_3+"items/komponenten",
    method: "get",
    headers: [
    ],
  }
  const CMS_4: ResourceRequest = {
    id: "MNVbKIXz75QKFchUNZAgy",
    name: "CMS",
    url: baseURL_4+"items/termine?filter[status][_eq]=published&filter[datum][_gte]=$NOW&sort=datum",
    method: "get",
    headers: [
    ],
  }
  const Komponenten_1: ResourceRequest = {
    id: "56k3_2ZgrxVaWR9_hZAxd",
    name: "Komponenten",
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
    ["CMS_6", CMS_6],
    ["CMS_5", CMS_5],
    ["CMS_3", CMS_3],
    ["komponenten_1", komponenten_1],
    ["CMS_4", CMS_4],
    ["Komponenten_1", Komponenten_1],
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
  return {
    title: "Termine",
    description: "Erfahren Sie mehr über die bevorstehenden Veranstaltungen und Aktivitäten der Sportvereinigung Sozialministerium (SVSM). Bleiben Sie informiert und verpassen Sie keine Termine!",
    excludePageFromSearch: true,
    language: "de-AT",
    socialImageAssetName: undefined,
    socialImageUrl: "",
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
    