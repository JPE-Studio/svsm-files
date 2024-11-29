/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let BaseURL = "https://cms.svsm.at/"
  let baseURL = "https://cms.svsm.at/"
  let baseURL_2 = "https://cms.svsm.at/"
  let baseURL_3 = "https://cms.svsm.at/"
  let baseURL_4 = "https:///cms.svsm.at/"
  let baseURL_5 = "https://cms.svsm.at/"
  let baseURL_6 = "https://cms.svsm.at/"
  const pageCMS_1: ResourceRequest = {
    id: "S0REr6SlNdZTyhEgprC_d",
    name: "pageCMS",
    url: BaseURL+"items/startseite",
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
    url: baseURL_2+"items/termine?filter[status][_eq]=published&filter[datum][_gte]=$NOW&sort=datum&limit=3",
    method: "get",
    headers: [
    ],
  }
  const Komponenten_1: ResourceRequest = {
    id: "EATCackXJchWXwK-jqZXT",
    name: "Komponenten",
    url: baseURL_2+"items/komponenten",
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
  const komponentenCMS_3: ResourceRequest = {
    id: "4FU1JM40ZQMHuwX81sq4C",
    name: "komponentenCMS",
    url: baseURL_3+"items/komponenten/",
    method: "get",
    headers: [
    ],
  }
  const featuredEvent_1: ResourceRequest = {
    id: "27b4fzIV5xg9921tybCRA",
    name: "featuredEvent",
    url: "https://cms.svsm.at/items/startseite?fields=*,highlight_termin.*",
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
  const faqCMS_1: ResourceRequest = {
    id: "yD6q07lUq5ElXUTeT37za",
    name: "faqCMS",
    url: baseURL_5+"items/komponenten",
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
    url: baseURL_6+"items/komponenten",
    method: "get",
    headers: [
    ],
  }
  const trainingsplanCMS_1: ResourceRequest = {
    id: "NvktTHmQHE9Fb-GfmrfPP",
    name: "trainingsplanCMS",
    url: baseURL_6+"items/trainingsplan?filter[status][_eq]=published",
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["pageCMS_1", pageCMS_1],
    ["CMS_5", CMS_5],
    ["CMS_3", CMS_3],
    ["CMS_4", CMS_4],
    ["Komponenten_1", Komponenten_1],
    ["neuigkeitenCMS_1", neuigkeitenCMS_1],
    ["komponentenCMS_3", komponentenCMS_3],
    ["featuredEvent_1", featuredEvent_1],
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
  let pageCMS = resources.pageCMS_1
  let BaseURL = "https://cms.svsm.at/"
  return {
    title: pageCMS?.data?.data?.["welcome_headline"],
    description: pageCMS?.data?.data?.["welcome_body"],
    excludePageFromSearch: undefined,
    language: "de-AT",
    socialImageAssetName: undefined,
    socialImageUrl: BaseURL+"assets/"+pageCMS?.data?.data?.["hero_image"],
    status: undefined,
    redirect: undefined,
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
    