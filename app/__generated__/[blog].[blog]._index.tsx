/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import type { FontAsset, ImageAsset } from "@webstudio-is/sdk";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, Box as Box, Text as Text, Image as Image, Separator as Separator, HtmlEmbed as HtmlEmbed, Slot as Slot, Button as Button, Heading as Heading, Paragraph as Paragraph } from "@webstudio-is/sdk-components-react";
import { Link as Link, Body as Body } from "@webstudio-is/sdk-components-react-remix";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";


      export const siteName = undefined;

      export const favIconAsset: ImageAsset | undefined =
        {"id":"17238f7c4e0b90f01f145713049ec815f094bac250029c6fcebaa92daf724168","name":"Logo_HeFjiWeI7M6t_nZWBLYLO.svg","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":4132,"type":"image","format":"svg","createdAt":"2024-11-29T08:30:57.958+00:00","meta":{"width":168,"height":178}};

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: FontAsset[] =
        [{"id":"0de679de4d3d236c4a60e13bd2cd16d0f93368e9f6ba848385a8023c2e53c202","name":"Roboto-Medium_I33kFTqQrmUpymf8kH2pq.ttf","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":168644,"type":"font","createdAt":"2024-11-21T12:55:11.587+00:00","format":"ttf","meta":{"family":"Roboto","style":"normal","weight":500}},{"id":"476970f07abee8dd2117f22009075d04725fb561727ea0f4fdad9004783db201","name":"Roboto-Light_Fxtfiv4UHi6f0RLRrRzii.ttf","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":167000,"type":"font","createdAt":"2024-11-21T12:55:35.141+00:00","format":"ttf","meta":{"family":"Roboto","style":"normal","weight":300}},{"id":"4b453a2dea3efe2b751251e33698fb3c9861b7d6669c90eef632ec8fd133d9ed","name":"Roboto-BoldItalic_8HoCX0-nit7lXNutwQdAJ.ttf","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":171508,"type":"font","createdAt":"2024-11-21T12:55:03.099+00:00","format":"ttf","meta":{"family":"Roboto","style":"italic","weight":700}},{"id":"5f3055c29a3e4842189d2622f5b7d4ed22b2465450d9d8df227a2493c81a7ac1","name":"Roboto-Thin_ow2gyXlJ_7t72QX8JByku.ttf","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":168488,"type":"font","createdAt":"2024-11-21T12:55:16.397+00:00","format":"ttf","meta":{"family":"Roboto","style":"normal","weight":100}},{"id":"7a7392b506ad70e4f20ec9cb87ffbdedf18232e56a1f0131a000c250984f2355","name":"Roboto-LightItalic_iUAKy112uq3DQGVFFcHCn.ttf","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":173172,"type":"font","createdAt":"2024-11-21T12:55:06.764+00:00","format":"ttf","meta":{"family":"Roboto","style":"italic","weight":300}},{"id":"80fa6b213337799be5c7184fa9cfd37f7cf72c3313cc9ddc4c41124c00af9c19","name":"Roboto-Italic_lhz-aL3g_rzeG3FnNaPO-.ttf","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":170504,"type":"font","createdAt":"2024-11-21T12:55:30.46+00:00","format":"ttf","meta":{"family":"Roboto","style":"italic","weight":900}},{"id":"8e8cb127554bdd9c8685788dce557e2725a9b62e183d9151fb506b3007ca6a07","name":"Roboto-Bold_N5YfmcGYBCx8Nvj_sUuqr.ttf","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":167336,"type":"font","createdAt":"2024-11-21T12:54:49.957+00:00","format":"ttf","meta":{"family":"Roboto","style":"normal","weight":700}},{"id":"92a62766331140ca5bc8bba52028422d276061ad5717c1ac508a118b619c6aec","name":"Roboto-Regular_2od_gipXdo-n0CMMiKEQ0.ttf","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":168260,"type":"font","createdAt":"2024-11-21T12:54:32.734+00:00","format":"ttf","meta":{"family":"Roboto","style":"normal","weight":400}},{"id":"ab69af994d811a1fd416574cb56c33b38948b5b9c4906ea8b52e4fbdfa9bfe6e","name":"Roboto-MediumItalic_3AKCUusx746rRxgJgADMR.ttf","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":173416,"type":"font","createdAt":"2024-11-21T12:55:22.15+00:00","format":"ttf","meta":{"family":"Roboto","style":"italic","weight":500}},{"id":"c1dfe9f7348b1fdf3359bf43a69172abda23597c4d62a27420c00fdba6350f61","name":"Roboto-BlackItalic_vs_H7OvzrbST2_S_GonNo.ttf","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":174108,"type":"font","createdAt":"2024-11-21T12:54:58.682+00:00","format":"ttf","meta":{"family":"Roboto","style":"italic","weight":900}},{"id":"e5e006d25ac554e43e6820bb5ba0721e9236cc262c4f230716ec7f398afbb217","name":"Roboto-Black_DxPRXG8gk33UwqTSonzTA.ttf","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":168060,"type":"font","createdAt":"2024-11-21T12:54:54.21+00:00","format":"ttf","meta":{"family":"Roboto","style":"normal","weight":900}},{"id":"f00d1fbba839cade861efcb87bc9a84bd1141fa8e7855d75de203eeabfd498de","name":"Roboto-ThinItalic_3NTHpUSMEtnNWpaw4Xn3c.ttf","description":null,"projectId":"54b1339a-c28b-4888-a0ea-7f6f755539f4","size":172860,"type":"font","createdAt":"2024-11-21T12:55:26.656+00:00","format":"ttf","meta":{"family":"Roboto","style":"italic","weight":100}}]

      export const pageBackgroundImageAssets: ImageAsset[] =
        []

      

      

      const Page = ({ }: { system: any; }) => {
let [baseURL, set$baseURL] = useVariableState<any>("https://cms.svsm.at/")
let CMS = useResource("CMS_2")
let komponentenCMS = useResource("komponentenCMS_1")
let neuigkeitenCMS = useResource("neuigkeitenCMS_1")
let komponenten = useResource("komponenten_1")
let [baseURL_1, set$baseURL_1] = useVariableState<any>("https://cms.svsm.at/")
let CMS_1 = useResource("CMS_3")
return <Body
className={"w-body"}>
<Box
className={"w-box w-page-wrapper-3"}>
<Slot>
<Fragment_1>
<Box
tag={"nav"}
className={"w-box w-nav"}>
<Box
className={"w-box w-nav-top"}>
<Box
className={"w-box w-box-12"}>
<Link
href={"/"}
id={"HomepageLink"}
className={"w-link"}>
<Image
loading={"eager"}
src={baseURL+"assets/"+CMS?.data?.data?.["logo_navbar"]}
width={50}
height={72}
className={"w-image"} />
</Link>
<Box
className={"w-box w-box-13"}>
<Link
href={"/"}
className={"w-link w-link-47"}>
{"Startseite"}
</Link>
<Link
href={"/termine/kalender"}
className={"w-link w-link-48"}>
{"Termine"}
</Link>
<Link
href={"/blog/blog"}
className={"w-link w-link-49"}>
{"Aktuelles"}
</Link>
<Link
href={"/uber-uns"}
className={"w-link w-link-50"}>
{"Über uns"}
</Link>
</Box>
</Box>
<Box
className={"w-box w-menu-wrapper"}>
<Dialog>
<DialogTrigger>
<Button
className={"w-button w-button-6"}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"}
className={"w-html-embed"} />
</Button>
</DialogTrigger>
<DialogOverlay
className={"w-dialog-overlay w-sheet-overlay"}>
<DialogContent
className={"w-dialog-content w-sheet-content"}>
<Box
className={"w-box w-sheet-header"}>
<Link
href={"/"}
id={"HomepageLink"}
className={"w-link"}>
<Image
loading={"eager"}
src={baseURL+"assets/"+CMS?.data?.data?.["logo_navbar"]}
width={50}
height={72}
className={"w-image"} />
</Link>
</Box>
<Box
tag={"nav"}
role={"navigation"}
className={"w-box"}>
<Box
className={"w-box w-box-24"}>
<Link
href={"/"}
className={"w-link w-link-67"}>
{"Startseite"}
</Link>
<Link
href={"/termine/kalender"}
className={"w-link w-link-68"}>
{"Termine"}
</Link>
<Link
href={"/blog/blog"}
className={"w-link w-link-69"}>
{"Aktuelles"}
</Link>
<Link
href={"/uber-uns"}
className={"w-link w-link-70"}>
{"Über uns"}
</Link>
</Box>
</Box>
<DialogClose
className={"w-close-button w-close-button-1"}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={"w-html-embed"} />
</DialogClose>
<Box
className={"w-box w-section-link-wrapper-4"}>
<Link
href={"/sektion/laufen"}
className={"w-link w-link-71"}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_12743_18517)\">\n<path d=\"M7.97681 31.359C7.43481 31.359 6.90181 31.171 6.47081 30.819C5.59081 30.1 5.38181 28.771 5.98581 27.726L10.6818 19.592L11.3058 19.951L6.60981 28.086C6.18081 28.828 6.31681 29.763 6.92681 30.26C7.31281 30.575 7.78781 30.7 8.27181 30.613C8.74581 30.526 9.15581 30.237 9.39681 29.82L14.1478 21.592L14.7708 21.951L10.0208 30.179C9.6748 30.78 9.08481 31.196 8.40181 31.321C8.25881 31.347 8.11681 31.359 7.97681 31.359ZM18.0008 31.357C17.4588 31.357 16.9268 31.169 16.4948 30.815C15.6158 30.097 15.4068 28.768 16.0098 27.724L18.7758 22.932L13.4588 19.862C12.1648 19.115 11.4268 17.688 11.5398 16.222C10.7308 16.02 10.1308 15.287 10.1308 14.417V8.91699C10.1308 7.61599 11.1898 6.55699 12.4908 6.55699H18.6618C18.1398 5.55299 18.1488 4.32499 18.7288 3.32099C19.6558 1.71699 21.7138 1.16399 23.3188 2.09099C24.0958 2.53999 24.6518 3.26499 24.8838 4.13199C25.1158 4.99899 24.9968 5.90399 24.5478 6.68199C24.0418 7.55799 23.1898 8.14499 22.2228 8.31499C22.4358 8.61299 22.6008 8.92799 22.7198 9.25199L25.8198 11.042L27.8898 7.45599C28.4018 6.56799 29.5418 6.26199 30.4298 6.77499C31.3188 7.28799 31.6228 8.42799 31.1108 9.31599L28.3608 14.079C27.7108 15.204 26.2618 15.592 25.1368 14.943L21.9848 13.123L20.1648 16.275L19.5418 15.915L21.7918 12.018C22.5238 10.749 22.3148 9.34299 21.2338 8.25499C21.1288 8.14999 21.0988 7.98999 21.1598 7.85499C21.2218 7.71999 21.3438 7.62999 21.5078 7.64199C22.4918 7.68699 23.4268 7.18599 23.9258 6.32299C24.2788 5.71199 24.3718 5.00099 24.1898 4.31999C24.0078 3.63899 23.5708 3.06999 22.9608 2.71599C21.6988 1.98799 20.0828 2.42199 19.3538 3.68299C18.8048 4.63499 18.9068 5.84399 19.6088 6.68899C19.6628 6.75399 19.6918 6.83499 19.6918 6.91899C19.6918 7.27899 19.6918 7.27899 12.4918 7.27899C11.5878 7.27899 10.8518 8.01499 10.8518 8.91899V14.419C10.8518 15.047 11.3638 15.559 11.9918 15.559C12.6198 15.559 13.1318 15.047 13.1318 14.419V9.98599C13.1318 9.78699 13.2928 9.62599 13.4918 9.62599H17.0128V10.346H13.8498V14.417C13.8498 15.352 13.1578 16.127 12.2588 16.258C12.1588 17.458 12.7598 18.628 13.8198 19.239L19.4478 22.489C19.6208 22.589 19.6788 22.808 19.5798 22.98L16.6338 28.084C16.2048 28.826 16.3418 29.761 16.9508 30.258C17.3368 30.573 17.8098 30.699 18.2948 30.611C18.7698 30.524 19.1798 30.235 19.4208 29.818L23.4208 22.89C23.6398 22.51 23.6978 22.068 23.5848 21.645C23.4718 21.221 23.1998 20.868 22.8208 20.649L16.7578 17.149L17.1178 16.525L23.1798 20.025C23.7258 20.339 24.1168 20.848 24.2798 21.458C24.4428 22.068 24.3588 22.703 24.0438 23.249L20.0438 30.177C19.6968 30.778 19.1058 31.195 18.4238 31.319C18.2828 31.345 18.1418 31.357 18.0008 31.357ZM22.3448 12.498L25.4958 14.318C26.2788 14.77 27.2838 14.501 27.7368 13.717L30.4868 8.95399C30.7998 8.40999 30.6138 7.71099 30.0698 7.39699C29.5238 7.08399 28.8278 7.27099 28.5118 7.81399L26.2618 11.711C26.1618 11.884 25.9418 11.943 25.7708 11.843L22.9278 10.202C22.9858 10.931 22.8178 11.677 22.4128 12.376L22.3448 12.498Z\" fill=\"currentColor\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_12743_18517\">\n<rect width=\"32\" height=\"32\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={"w-html-embed w-html-embed-9"} />
</Fragment_1>
</Slot>
<Text
tag={"span"}
className={"w-text w-text-65"}>
{"Laufen"}
</Text>
</Link>
<Link
href={"/sektion/bewegung"}
className={"w-link w-link-72"}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_12742_18416)\">\n<path d=\"M29.095 30.6399C29.146 30.5749 29.193 30.5039 29.236 30.4299C29.485 29.9989 29.55 29.4979 29.423 29.0189C29.295 28.5419 28.989 28.1419 28.561 27.8939C28.559 27.8929 28.559 27.8909 28.557 27.8899L18.307 21.9369C17.646 21.4129 17.353 20.8859 17.358 20.2299V14.0029C17.358 12.8009 16.811 11.6909 15.946 10.9739C16.6 10.8169 17.202 10.4559 17.652 9.92089C18.792 8.56589 18.618 6.53589 17.263 5.39589C16.428 4.69289 15.306 4.46389 14.262 4.77889C14.072 4.83689 13.964 5.03789 14.022 5.22789C14.08 5.41789 14.284 5.52489 14.471 5.46789C15.281 5.21989 16.15 5.39989 16.798 5.94589C17.848 6.83089 17.983 8.40489 17.099 9.45689C16.496 10.1749 15.542 10.4889 14.632 10.2789C14.583 10.2649 14.534 10.2519 14.485 10.2409C14.299 10.1949 14.104 10.3099 14.054 10.4999C14.004 10.6889 14.115 10.8829 14.303 10.9369C14.352 10.9519 14.402 10.9639 14.452 10.9769C15.725 11.3449 16.637 12.5959 16.637 14.0039V20.2279C16.631 21.1129 17.018 21.8349 17.902 22.5319L28.195 28.5139C28.458 28.6659 28.648 28.9119 28.727 29.2059C28.805 29.4999 28.765 29.8069 28.613 30.0709C28.299 30.6149 27.6 30.7999 27.047 30.4829L13.906 23.3959C13.761 23.3209 10.361 21.4939 10.361 17.2139V2.49989C10.361 1.87189 10.873 1.35989 11.501 1.35989C12.129 1.35989 12.641 1.87189 12.641 2.49989V10.9999H13.361V2.49989C13.361 1.47489 12.527 0.639893 11.501 0.639893C10.475 0.639893 9.64 1.47489 9.64 2.49989V17.2139C9.64 21.9409 13.413 23.9509 13.568 24.0309L25.822 30.6389H6.969C7.214 30.3249 7.36 29.9279 7.36 29.4989V22.3589H10V21.6399H7C6.801 21.6399 6.64 21.8009 6.64 21.9999V29.4999C6.64 30.1289 6.128 30.6399 5.5 30.6399C4.872 30.6399 4.36 30.1289 4.36 29.4999V20.9999C4.36 20.2029 5.203 19.3599 6 19.3599H9V18.6399H6C4.809 18.6399 3.64 19.8089 3.64 20.9999V29.4999C3.64 29.9289 3.786 30.3249 4.031 30.6399H1V31.3609H31V30.6399H29.095Z\" fill=\"currentColor\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_12742_18416\">\n<rect width=\"32\" height=\"32\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={"w-html-embed w-html-embed-3"} />
</Fragment_1>
</Slot>
<Text
tag={"span"}
className={"w-text w-text-66"}>
{"Bewegung"}
</Text>
</Link>
<Link
href={"/sektion/reisen-kultur"}
className={"w-link w-link-73"}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_12742_18473)\">\n<mask id=\"mask0_12742_18473\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"32\" height=\"32\">\n<path d=\"M32 0H0V32H32V0Z\" fill=\"white\"></path>\n</mask>\n<g mask=\"url(#mask0_12742_18473)\">\n<path d=\"M30.0525 6.96158C30.0525 6.96158 32.1151 3.80229 30.157 1.84405C28.1987 -0.114185 25.0394 1.94849 25.0394 1.94849L18.512 8.47594L4.48229 4.01987L1.00098 7.50118L12.4197 14.5683L8.93836 18.0495L2.53275 18.6065L1.22727 19.912L7.9636 24.0374L12.1412 30.8259L13.4467 29.5204L13.9514 23.0626L17.4327 19.5814L24.4997 31L27.981 27.5187L23.5251 13.4891L30.0525 6.96158Z\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linejoin=\"round\"></path>\n</g>\n</g>\n<defs>\n<clipPath id=\"clip0_12742_18473\">\n<rect width=\"32\" height=\"32\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={"w-html-embed w-html-embed-4"} />
</Fragment_1>
</Slot>
<Text
tag={"span"}
className={"w-text w-text-67"}>
{"Reisen/Kultur"}
</Text>
</Link>
<Link
href={"/sektion/tischtennis"}
className={"w-link w-link-74"}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\n  \" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15.1405 17.8085C13.2983 15.1702 13.2983 11.5426 13.2983 11.2128C13.2983 7.32361 15.0013 3.9422 17.5071 2.2174M15.1405 17.8085C16.9826 20.4468 19.2822 21.2233 19.7458 24.4043C20.0265 26.3297 19.1021 31 19.2243 31C19.3465 31 23.2585 31 23.3724 31C23.4864 31 22.5702 26.3297 22.8509 24.4043C23.3145 21.2233 25.6141 20.4468 27.4562 17.8085M15.1405 17.8085H27.4562M27.4562 17.8085C29.2983 15.1702 29.2983 11.5426 29.2983 11.2128C29.2983 5.57241 25.7166 1 21.2983 1C19.9266 1 18.6354 1.44076 17.5071 2.2174M6.0617 14.4872C5.78551 11.2813 7.59934 8.13964 7.76423 7.85404C10.0552 3.88595 14.0408 1.71001 17.5071 2.2174M6.0617 14.4872C6.33789 17.6931 7.94111 19.5153 6.75218 22.5019C6.0325 24.3098 2.89679 27.8921 3.00262 27.9532L6.59502 30.0273C6.69369 30.0843 8.23539 25.5816 9.4412 24.0545C11.4333 21.5315 13.8129 22.0088 16.7274 20.645L6.0617 14.4872ZM16.7274 27C16.7274 28.1046 15.832 29 14.7274 29C13.6229 29 12.7274 28.1046 12.7274 27C12.7274 25.8954 13.6229 25 14.7274 25C15.832 25 16.7274 25.8954 16.7274 27Z\" stroke=\"currentColor\" stroke-width=\"0.8\"></path>\n</svg>\n"}
className={"w-html-embed w-html-embed-5"} />
</Fragment_1>
</Slot>
<Text
tag={"span"}
className={"w-text w-text-68"}>
{"Tischtennis"}
</Text>
</Link>
<Link
href={"/sektion/fussball"}
className={"w-link w-link-75"}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M16 29C23.18 29 29 23.18 29 16C29 8.82 23.18 3 16 3C8.82 3 3 8.82 3 16C3 23.18 8.82 29 16 29Z\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n  <path d=\"M16 11L10 15.2L12.3 22H19.7L22 15.2L16 11Z\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n  <path d=\"M22 15L26 13L27 9.1\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n  <path d=\"M12 4L16 6V11\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n  <path d=\"M20 4L16 6\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n  <path d=\"M26 13L28.9 14.8\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n  <path d=\"M9.9 15L5.9 13L4.9 9.2\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n  <path d=\"M5.9 13L3.1 14.7\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n  <path d=\"M5.3 23.4L10 24L12 22\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n  <path d=\"M12 28L10 24\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n  <path d=\"M26.6 23.5L22 24L20 22\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n  <path d=\"M20 28L22 24\" stroke=\"currentColor\" stroke-width=\"0.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n"}
className={"w-html-embed w-html-embed-6"} />
</Fragment_1>
</Slot>
<Text
tag={"span"}
className={"w-text w-text-69"}>
{"Fußball"}
</Text>
</Link>
<Link
href={"/sektion/velo"}
className={"w-link w-link-76"}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<svg width=\"100%\n  \" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_12743_18523)\">\n<path d=\"M25.9996 15.6401C25.1526 15.6401 24.3506 15.8371 23.6376 16.1891L21.3216 12.1771C21.3156 12.1651 21.3086 12.1541 21.3016 12.1421L18.5406 7.36009H22.9996C23.9036 7.36009 24.6396 8.09609 24.6396 9.00009C24.6396 9.90409 23.9046 10.6401 22.9996 10.6401V11.3601C24.3016 11.3601 25.3596 10.3011 25.3596 9.00009C25.3596 7.69909 24.3016 6.64009 22.9996 6.64009H17.9226C17.8596 6.64009 17.7956 6.65409 17.7366 6.68809C17.5636 6.78809 17.5056 7.00809 17.6046 7.18009L20.3756 11.9791H11.2076L8.54065 7.36009H9.99965C10.1986 7.36009 10.3596 7.19909 10.3596 7.00009C10.3596 6.80109 10.1986 6.64009 9.99965 6.64009H7.92265C7.91865 6.64009 7.91265 6.63909 7.90965 6.64009H5.99965C5.80065 6.64009 5.63965 6.80109 5.63965 7.00009C5.63965 7.19909 5.80065 7.36009 5.99965 7.36009H7.70865L10.5836 12.3401L8.36065 16.1891C7.64865 15.8371 6.84665 15.6401 5.99965 15.6401C3.04365 15.6401 0.639648 18.0451 0.639648 21.0001C0.639648 23.9551 3.04365 26.3601 5.99965 26.3601C8.83365 26.3601 11.1616 24.1481 11.3476 21.3601H13.6666C13.8406 22.4911 14.8206 23.3601 15.9996 23.3601C17.3016 23.3601 18.3596 22.3011 18.3596 21.0001C18.3596 20.2581 18.0146 19.5941 17.4766 19.1611L20.9996 13.0601L23.0146 16.5501C21.5836 17.5141 20.6396 19.1491 20.6396 21.0001C20.6396 23.9551 23.0446 26.3601 25.9996 26.3601C28.9546 26.3601 31.3596 23.9551 31.3596 21.0001C31.3596 18.0451 28.9546 15.6401 25.9996 15.6401ZM5.99965 25.6401C3.44065 25.6401 1.35965 23.5591 1.35965 21.0001C1.35965 18.4411 3.44065 16.3601 5.99965 16.3601C6.71565 16.3601 7.39465 16.5231 8.00065 16.8141L5.69065 20.8141C5.67365 20.8421 5.66065 20.8731 5.65165 20.9051C5.63965 20.9491 5.63665 20.9931 5.64065 21.0361C5.64565 21.0881 5.66165 21.1361 5.68665 21.1791C5.71165 21.2231 5.74665 21.2621 5.78965 21.2931C5.82365 21.3171 5.86265 21.3361 5.90465 21.3481C5.93765 21.3561 5.96665 21.3591 6.00565 21.3611H10.6256C10.4416 23.7511 8.43765 25.6401 5.99965 25.6401ZM6.62365 20.6401L8.62365 17.1751C9.74765 17.9481 10.5156 19.2041 10.6256 20.6401H6.62365ZM13.6666 20.6401H11.3476C11.2336 18.9381 10.3226 17.4511 8.98465 16.5501L10.9996 13.0601L14.5216 19.1621C14.0726 19.5221 13.7586 20.0451 13.6666 20.6401ZM17.6396 21.0001C17.6396 21.9041 16.9046 22.6401 15.9996 22.6401C15.0946 22.6401 14.3596 21.9051 14.3596 21.0001C14.3596 20.0951 15.0956 19.3601 15.9996 19.3601C16.9036 19.3601 17.6396 20.0961 17.6396 21.0001ZM16.8536 18.8001C16.5886 18.6961 16.3006 18.6401 15.9996 18.6401C15.6986 18.6401 15.4106 18.6971 15.1456 18.8001L11.6236 12.6991H20.3776L16.8536 18.8001ZM25.9996 25.6401C23.4406 25.6401 21.3596 23.5591 21.3596 21.0001C21.3596 19.4151 22.1586 18.0131 23.3756 17.1751L25.6876 21.1801C25.7876 21.3541 26.0086 21.4131 26.1786 21.3121C26.3516 21.2121 26.4096 20.9931 26.3106 20.8211L23.9986 16.8151C24.6046 16.5241 25.2836 16.3611 25.9996 16.3611C28.5586 16.3611 30.6396 18.4431 30.6396 21.0011C30.6396 23.5591 28.5586 25.6401 25.9996 25.6401Z\" fill=\"currentColor\"></path>\n</g>\n<defs>\n<clipPath id=\"clip0_12743_18523\">\n<rect width=\"32\" height=\"32\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={"w-html-embed w-html-embed-7"} />
</Fragment_1>
</Slot>
<Text
tag={"span"}
className={"w-text w-text-70"}>
{"Velo"}
</Text>
</Link>
</Box>
<Link
href={CMS?.data?.data?.["nav_button_url"]}
className={"w-link w-button-7"}>
{CMS?.data?.data?.["nav_button_text"]}
</Link>
</DialogContent>
</DialogOverlay>
</Dialog>
</Box>
<Link
href={CMS?.data?.data?.["nav_button_url"]}
className={"w-link w-button-3"}>
{CMS?.data?.data?.["nav_button_text"]}
</Link>
</Box>
<HtmlEmbed
code={"<style>\np{\n  margin-top:0;\n}\n  \n  .laufenBG {\n    background-color: #21254C;\n  }\n  .bewegungBG {\n    background-color: #6A338A;\n  }\n  .kulturBG {\n    background-color: #A00046;\n  }\n  .tischtennisBG {\n    background-color: #004A7C;\n  }\n  .fussballBG {\n    background-color: #005DAA;\n  }\n  .veloBG {\n    background-color: #007A3C;\n  }\n</style>\n"}
className={"w-html-embed"} />
<HtmlEmbed
code={"<script>\n\n  \n</script> "}
className={"w-html-embed"} />
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={"w-box"}>
<Box
tag={"section"}
className={"w-box w-neuigkeiten"}>
<Box
className={"w-box w-container-21"}>
<Box
className={"w-box w-content-top-1"}>
<Box
className={"w-box"}>
<Heading
tag={"h2"}
className={"w-heading w-heading-32"}>
{komponentenCMS?.data?.data?.["neuigkeiten_section_headline"]}
</Heading>
<Paragraph
className={"w-paragraph"}>
{komponentenCMS?.data?.data?.["neuigkeiten_subheadline"]}
</Paragraph>
</Box>
</Box>
<Box
className={"w-box w-3-col-grid-1"}>
{neuigkeitenCMS?.data?.data?.map((CollectionItem: any, index: number) =>
<Fragment key={index}>
<Box
className={"w-box w-card-2"}>
<Image
src={"https://cms.svsm.at/assets/"+CollectionItem?.titelbild}
className={"w-image w-card-image-2"} />
<Box
className={"w-box w-heading-33"}>
{(CollectionItem?.sektion==1) &&
<Link
className={"w-link w-link-83"}>
<Text
tag={"span"}
className={"w-text w-text-77"}>
{"Laufen"}
</Text>
</Link>
}
{(CollectionItem?.sektion==2) &&
<Link
className={"w-link w-link-84"}>
<Text
tag={"span"}
className={"w-text w-text-78"}>
{"Bewegung"}
</Text>
</Link>
}
{(CollectionItem?.sektion==3) &&
<Link
className={"w-link w-link-85"}>
<Text
tag={"span"}
className={"w-text w-text-79"}>
{"Reisen/Kultur"}
</Text>
</Link>
}
{(CollectionItem?.sektion==4) &&
<Link
className={"w-link w-link-86"}>
<Text
tag={"span"}
className={"w-text w-text-80"}>
{"Tischtennis"}
</Text>
</Link>
}
{(CollectionItem?.sektion==5) &&
<Link
className={"w-link w-link-87"}>
<Text
tag={"span"}
className={"w-text w-text-81"}>
{"Fußball"}
</Text>
</Link>
}
{(CollectionItem?.sektion==6) &&
<Link
className={"w-link w-link-88"}>
<Text
tag={"span"}
className={"w-text w-text-82"}>
{"Velo"}
</Text>
</Link>
}
</Box>
<Box
className={"w-box w-body-6"}>
<Heading
tag={"h3"}
className={"w-heading w-heading-34"}>
{CollectionItem?.headline}
</Heading>
<Paragraph
className={"w-paragraph w-paragraph-14"}>
{CollectionItem?.beschreibung}
</Paragraph>
</Box>
<Box
className={"w-box"}>
<Link
href={"/blog/"+CollectionItem?.slug}
className={"w-link w-link-89"}>
<Text
tag={"span"}
className={"w-text"}>
{"mehr info"}
</Text>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9.70697 17.5432L15.414 11.8362L9.70697 6.12915L8.29297 7.54315L12.586 11.8362L8.29297 16.1291L9.70697 17.5432Z\" fill=\"currentColor\"></path>\n</svg>\n"}
className={"w-html-embed w-html-embed-10"} />
</Link>
</Box>
</Box>
</Fragment>
)}
</Box>
</Box>
</Box>
<Box
tag={"section"}
className={"w-box w-cta-2"}>
<Slot>
<Fragment_1>
<Box
tag={"div"}
className={"w-box w-container-19"}>
<Box
className={"w-box w-content"}>
<Heading
tag={"h2"}
className={"w-heading w-heading-50"}>
{komponenten?.data?.data?.["cta_headline"]}
</Heading>
<Paragraph
className={"w-paragraph"}>
<Text
tag={"span"}
className={"w-text"}>
{komponenten?.data?.data?.["cta_tagline"]}
</Text>
</Paragraph>
<Link
href={komponenten?.data?.data?.["cta_button_url"]}
className={"w-link w-button-13"}>
{komponenten?.data?.data?.["cta_button_text"]}
</Link>
</Box>
</Box>
</Fragment_1>
</Slot>
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={"w-box w-footer"}>
<Box
className={"w-box w-container"}>
<Box
className={"w-box w-2col-grid-2"}>
<Box
className={"w-box w-col-4"}>
<Image
src={baseURL_1+"assets/"+CMS_1?.data?.data?.["logo_footer"]}
width={50}
height={72}
className={"w-image"} />
<Box
className={"w-box"}>
<Text
className={"w-text w-text-21"}>
{"Adresse"}
</Text>
<Text
className={"w-text w-text-23"}>
{CMS_1?.data?.data?.["footer_adresse"]}
</Text>
</Box>
<Box
className={"w-box"}>
<Text
className={"w-text w-text-22"}>
{"Kontakt"}
</Text>
<Text
className={"w-text w-text-24"}>
{CMS_1?.data?.data?.["footer_contact_line1"]}
</Text>
<Text
className={"w-text w-text-25"}>
{CMS_1?.data?.data?.["footer_contact_line2"]}
</Text>
<Link
href={"mailto:"+CMS_1?.data?.data?.["footer_contact_line3"]}
className={"w-link w-link-60"}>
{CMS_1?.data?.data?.["footer_contact_line3"]}
</Link>
</Box>
</Box>
<Box
className={"w-box w-col-5"}>
<Box
className={"w-box w-2col-grid-3"}>
<Box
className={"w-box w-col-3"}>
<Link
className={"w-link w-link-12"}>
<Text
tag={"span"}
className={"w-text w-text-15"}>
{"Laufen"}
</Text>
</Link>
<Link
className={"w-link w-link-15"}>
<Text
tag={"span"}
className={"w-text w-text-16"}>
{"Bewegung"}
</Text>
</Link>
<Link
className={"w-link w-link-16"}>
<Text
tag={"span"}
className={"w-text w-text-17"}>
{"Reisen/Kultur"}
</Text>
</Link>
<Link
className={"w-link w-link-17"}>
<Text
tag={"span"}
className={"w-text w-text-18"}>
{"Tischtennis"}
</Text>
</Link>
<Link
className={"w-link w-link-18"}>
<Text
tag={"span"}
className={"w-text w-text-19"}>
{"Fußball"}
</Text>
</Link>
<Link
className={"w-link w-link-19"}>
<Text
tag={"span"}
className={"w-text w-text-20"}>
{"Velo"}
</Text>
</Link>
</Box>
<Box
className={"w-box w-col-2"}>
<Link
href={"/blog/blog"}
className={"w-link w-link-13"}>
{"Aktuelles"}
</Link>
<Link
href={"/termine/kalender"}
className={"w-link w-link-14"}>
{"Veranstaltungen"}
</Link>
<Link
href={"/uber-uns"}
className={"w-link w-link-20"}>
{"Über uns"}
</Link>
<Link
className={"w-link w-link-21"}>
{"Mitglied werden"}
</Link>
</Box>
</Box>
</Box>
</Box>
<Separator
className={"w-separator w-separator-2"} />
<Box
className={"w-box w-2col-grid-4"}>
<Box
className={"w-box"}>
<Text
className={"w-text"}>
{"© 2024 SVSM. All rights reserved."}
</Text>
</Box>
<Box
className={"w-box w-box-10"}>
<Link
href={"/datenschutzerklarung"}
className={"w-link w-link-22"}>
{"Datenschutzerklärung"}
</Link>
<Link
href={"/impressum"}
className={"w-link w-link-23"}>
{"Impressum"}
</Link>
<Link
className={"w-link w-link-24"}>
{"Cookie Settings"}
</Link>
</Box>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    