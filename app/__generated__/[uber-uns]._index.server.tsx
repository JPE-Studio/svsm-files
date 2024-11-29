/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let baseURL = "https://cms.svsm.at/"
  let baseURL_3 = "https:///cms.svsm.at/"
  let baseURL_4 = "https://cms.svsm.at/"
  let baseURL_1 = "https://cms.svsm.at/"
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
  const faqCMS_1: ResourceRequest = {
    id: "yD6q07lUq5ElXUTeT37za",
    name: "faqCMS",
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
  const ueberunsCMS_1: ResourceRequest = {
    id: "_040al5xQyCJ4gXhf40t8",
    name: "ueberunsCMS",
    url: baseURL_1+"items/ueber_uns/",
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["CMS_3", CMS_3],
    ["CMS_2", CMS_2],
    ["komponenten_1", komponenten_1],
    ["faqCMS_1", faqCMS_1],
    ["sektionCMS", sektionCMS],
    ["ueberunsCMS_1", ueberunsCMS_1],
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
  let ueberunsCMS = resources.ueberunsCMS_1
  let baseURL = "https://cms.svsm.at/"
  return {
    title: "Über Uns",
    description: ueberunsCMS?.data?.data?.body1,
    excludePageFromSearch: true,
    language: "de-AT",
    socialImageAssetName: undefined,
    socialImageUrl: baseURL+"assets/"+ueberunsCMS?.data?.data?.bild1,
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
    