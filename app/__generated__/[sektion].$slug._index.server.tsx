/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let baseURL_1 = "https://cms.svsm.at/"
  const system = _props.system
  let baseURL = "https://cms.svsm.at/"
  let baseURL_3 = "https://cms.svsm.at/"
  let baseURL_4 = "https://cms.svsm.at/"
  let baseURL_5 = "https:///cms.svsm.at/"
  let baseURL_6 = "https://cms.svsm.at/"
  let baseURL_7 = "https://cms.svsm.at/"
  const cms_1: ResourceRequest = {
    id: "K8UZ4w_9YjOkHd7EZwq8S",
    name: "cms",
    url: `${baseURL_1}items/sektionen/?filter[slug][_eq]=${system?.params?.slug}&fields=*,featured_event.*`,
    method: "get",
    headers: [
    ],
  }
  const files: ResourceRequest = {
    id: "HZ9NBzrL-9c5XthPVwLXN",
    name: "files",
    url: baseURL_1+"assets/",
    method: "get",
    headers: [
    ],
  }
  const cms_2: ResourceRequest = {
    id: "kkUL8uGzFvWL_ND7jA5a7",
    name: "cms",
    url: "http://directus-w48sokw84gwss0cgkcc0cc48.116.203.136.39.sslip.io/items/sektionen",
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
  const CMS_4: ResourceRequest = {
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
  const neuigkeitenCMS_1: ResourceRequest = {
    id: "SVeUCqBFMwWw_aRz8Q0jQ",
    name: "neuigkeitenCMS",
    url: baseURL_4+"items/neuigkeiten?filter[status][_eq]=published&limit=3",
    method: "get",
    headers: [
    ],
  }
  const komponentenCMS_3: ResourceRequest = {
    id: "4FU1JM40ZQMHuwX81sq4C",
    name: "komponentenCMS",
    url: baseURL_4+"items/komponenten/",
    method: "get",
    headers: [
    ],
  }
  const funktionreCMS_1: ResourceRequest = {
    id: "-Wn26_Of7txDkj4e4G5bZ",
    name: "funktionäreCMS",
    url: baseURL_1+"items/funktionaere?fields=*,sektion.*&filter[sektion][slug][_eq]="+system?.params?.slug+"&filter[status][_eq]=published",
    method: "get",
    headers: [
    ],
  }
  const komponenten_1: ResourceRequest = {
    id: "r8fqpJNYD5Ny7y320VJCC",
    name: "komponenten",
    url: baseURL_5+"items/komponenten",
    method: "get",
    headers: [
    ],
  }
  const faqCMS_1: ResourceRequest = {
    id: "yD6q07lUq5ElXUTeT37za",
    name: "faqCMS",
    url: baseURL_6+"items/komponenten",
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
  const komponentenCMS_2: ResourceRequest = {
    id: "t77Bdeo6EKFhE6tAZ0a8p",
    name: "komponentenCMS",
    url: baseURL_7+"items/komponenten",
    method: "get",
    headers: [
    ],
  }
  const trainingsplanCMS_1: ResourceRequest = {
    id: "NvktTHmQHE9Fb-GfmrfPP",
    name: "trainingsplanCMS",
    url: baseURL_7+"items/trainingsplan?filter[status][_eq]=published",
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["cms_1", cms_1],
    ["files", files],
    ["cms_2", cms_2],
    ["CMS_5", CMS_5],
    ["CMS_3", CMS_3],
    ["CMS_4", CMS_4],
    ["Komponenten_1", Komponenten_1],
    ["neuigkeitenCMS_1", neuigkeitenCMS_1],
    ["komponentenCMS_3", komponentenCMS_3],
    ["funktionreCMS_1", funktionreCMS_1],
    ["komponenten_1", komponenten_1],
    ["faqCMS_1", faqCMS_1],
    ["sektionCMS", sektionCMS],
    ["komponentenCMS_2", komponentenCMS_2],
    ["trainingsplanCMS_1", trainingsplanCMS_1],
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
  let cms = resources.cms_1
  let baseURL = "https://cms.svsm.at/"
  return {
    title: cms?.data?.data?.[0]?.titel,
    description: cms?.data?.data?.[0]?.["welcome_body"],
    excludePageFromSearch: true,
    language: "de-AT",
    socialImageAssetName: undefined,
    socialImageUrl: baseURL+"assets/"+cms?.data?.data?.[0]?.titelbild,
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
    