"use strict";(self.webpackChunkdeveloper_tbd_website=self.webpackChunkdeveloper_tbd_website||[]).push([[8252],{18379:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={slug:"ssi-tbd-web5",title:"Self Sovereign Identity, TBD, and Web5",description:"How TBD is building standards-based open source software towards the goals of SSI and Web5",authors:{name:"Gabe Cohen"},tags:["Self Sovereign Identity","Web5"]},o=void 0,s={permalink:"/blog/ssi-tbd-web5",source:"@site/blog/2022-08-26-ssi-tbd-web5.md",title:"Self Sovereign Identity, TBD, and Web5",description:"How TBD is building standards-based open source software towards the goals of SSI and Web5",date:"2022-08-26T00:00:00.000Z",formattedDate:"August 26, 2022",tags:[{label:"Self Sovereign Identity",permalink:"/blog/tags/self-sovereign-identity"},{label:"Web5",permalink:"/blog/tags/web-5"}],readingTime:17.885,hasTruncateMarker:!0,authors:[{name:"Gabe Cohen"}],frontMatter:{slug:"ssi-tbd-web5",title:"Self Sovereign Identity, TBD, and Web5",description:"How TBD is building standards-based open source software towards the goals of SSI and Web5",authors:{name:"Gabe Cohen"},tags:["Self Sovereign Identity","Web5"]},prevItem:{title:"Announcing the Incubation Program",permalink:"/blog/announcing-the-incubation-program"},nextItem:{title:"What are Verifiable Credentials?",permalink:"/blog/what-are-verifiable-credentials"}},l={authorsImageUrls:[void 0]},d=[{value:"Software Mission",id:"software-mission",level:2},{value:"Open Standards",id:"open-standards",level:3},{value:"The W3C",id:"the-w3c",level:3},{value:"The Decentralized Identity Foundation",id:"the-decentralized-identity-foundation",level:3},{value:"Standards in Use",id:"standards-in-use",level:3},{value:"TBD Community",id:"tbd-community",level:2},{value:"Open Source",id:"open-source",level:2},{value:"Software Vision",id:"software-vision",level:2},{value:"SSI SDK",id:"ssi-sdk",level:2},{value:"SSI Service",id:"ssi-service",level:2},{value:"How Features are Developed",id:"how-features-are-developed",level:2},{value:"The Goal",id:"the-goal",level:2},{value:"Parting Thoughts",id:"parting-thoughts",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Self Sovereign Identity, TBD, and Web5"),(0,i.kt)("meta",{name:"description",content:"How TBD is building standards-based open source software towards the goals of SSI and Web5"}),(0,i.kt)("meta",{property:"og:url",content:"https://developer.tbd.website/blog/ssi-tbd-web5"}),(0,i.kt)("meta",{property:"og:type",content:"website"}),(0,i.kt)("meta",{property:"og:title",content:"Self Sovereign Identity, TBD, and Web5"}),(0,i.kt)("meta",{property:"og:description",content:"How TBD is building standards-based open source software towards the goals of SSI and Web5"}),(0,i.kt)("meta",{property:"og:image",content:"https://developer.tbd.website/assets/images/ssi_tbd_web5-362c244c231552618f4e9abd2d4482c7.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{property:"twitter:domain",content:"developer.tbd.website"}),(0,i.kt)("meta",{property:"twitter:url",content:"https://developer.tbd.website/blog/ssi-tbd-web5"}),(0,i.kt)("meta",{name:"twitter:title",content:"Self Sovereign Identity, TBD, and Web5"}),(0,i.kt)("meta",{name:"twitter:description",content:"How TBD is building standards-based open source software towards the goals of SSI and Web5"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://developer.tbd.website/assets/images/ssi_tbd_web5-362c244c231552618f4e9abd2d4482c7.png"}),(0,i.kt)("link",{rel:"apple-touch-icon",href:"https://developer.tbd.website/img/tbd-fav-icon-main.png"})),(0,i.kt)("h2",{id:""}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Self Sovereign Identity, TBD, and Web5",src:a(91586).Z,width:"1200",height:"630"})),(0,i.kt)("p",null,"Self Sovereign Identity (SSI) is an umbrella term well-detailed by Christopher Allen, and inspired by many in the Identity community before him, in his 2016 blog post: ",(0,i.kt)("a",{parentName:"p",href:"http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html"},(0,i.kt)("em",{parentName:"a"},"The Path to Self-Sovereign Identity")),", which identifies ",(0,i.kt)("em",{parentName:"p"},"Ten Principles of Self-Sovereign Identity:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Existence.")," ",(0,i.kt)("em",{parentName:"li"},"Users must have an independent existence.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Control.")," ",(0,i.kt)("em",{parentName:"li"},"Users must control their identities.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Access.")," ",(0,i.kt)("em",{parentName:"li"},"Users must have access to their own data.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Transparency"),". ",(0,i.kt)("em",{parentName:"li"},"Systems and algorithms must be transparent.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Persistence.")," ",(0,i.kt)("em",{parentName:"li"},"Identities must be long-lived.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Portability.")," ",(0,i.kt)("em",{parentName:"li"},"Information and services about identity must be transportable.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Interoperability.")," ",(0,i.kt)("em",{parentName:"li"},"Identities should be as widely usable as possible.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Consent.")," ",(0,i.kt)("em",{parentName:"li"},"Users must agree to the use of their identity.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Minimalization.")," ",(0,i.kt)("em",{parentName:"li"},"Disclosure of claims must be minimized.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Protection.")," ",(0,i.kt)("em",{parentName:"li"},"The rights of users must be protected."))),(0,i.kt)("p",null,"Since 2016, a lot has happened! There have been a flurry of conventions, discussions, papers, standards, software, and industry wide adoption of technology based on the principles of SSI. The space is at its most mature, and only growing."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://squareup.com/us/en/press/square-changes-name-to-block"},"Block"),"\u2019s mission is economic empowerment. Historically, this has looked like building products and offering services such as ",(0,i.kt)("a",{parentName:"p",href:"https://squareup.com/"},"Square"),", enabling millions of merchants ",(0,i.kt)("em",{parentName:"p"},"to take payments, manage staff, and conduct business in-store and online"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://cash.app/"},"CashApp"),", which enables millions, especially the un and under-banked to send, spend, bank, and invest their money (and Bitcoin!). When ",(0,i.kt)("a",{parentName:"p",href:"https://www.tbd.website/"},"TBD"),", a new business unit at ",(0,i.kt)("a",{parentName:"p",href:"https://block.xyz/"},"Block")," formed in 2021, we expanded on Block\u2019s mission, setting out to help create ",(0,i.kt)("em",{parentName:"p"},"a decentralized future that returns ownership and control over your finances, data, and identity"),". TBD\u2019s mission is strongly aligned with the principles of SSI."),(0,i.kt)("p",null,"To facilitate our mission, TBD launched ",(0,i.kt)("a",{parentName:"p",href:"https://developer.tbd.website/blog/what-is-web5"},"Web5"),": a decentralized platform that provides a new identity layer for the web to enable decentralized apps and protocols. Web5 takes SSI concepts, standards, and software and provides them as an opinionated bundle to enable all that self sovereignty and digital identity has to offer. What TBD is building for Web5 has a number of components today, and more tomorrow. Among those are the Self Sovereign Identity SDK and Self Sovereign Identity Service (SSI SDK, and SSI Service), Decentralized Web Nodes (DWN), and Identity Wallets. At the time of writing, all of these components are under active development. This was an intentional move by the team to adopt an \u2018open-by-default\u2019 model, and include the community in the development of Web5 from the beginning."),(0,i.kt)("p",null,"Here we\u2019ll lay out the vision for a key component of Web5: Self Sovereign Identity. Specifically, how we at TBD are building standards based software in a community towards the goals of SSI and Web5. The two \u201cSSI\u201d named projects \u2014 the SSI Service and SSI SDK \u2014 sit along side Decentralized Web Nodes, Identity Wallets, User Interfaces, and much more \u2014 but focus on a set of standards-based building blocks of the Web5 stack."),(0,i.kt)("h2",{id:"software-mission"},"Software Mission"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TBD is developing open source, standards-based software to facilitate Self Sovereign Identity on Web5.")),(0,i.kt)("h3",{id:"open-standards"},"Open Standards"),(0,i.kt)("p",null,"The vision of SSI is realized via ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open_standard#:~:text=%22Open%20Standards%22%20are%20standards%20made,are%20intended%20for%20widespread%20adoption."},"Open Standards"),". Crucially, these standards are accessible to all: to view and to contribute. You may not be aware of it, but you interact with Open Standards every day: whether via web browsers, hardware you use and their underlying protocols, programming languages, audio files, internet and bluetooth devices, text documents, chat applications, encryption you use and so much more. Open Standards facilitate nearly every aspect of modern computation."),(0,i.kt)("p",null,"In the SSI space there a number of standards bodies that facilitate SSI-standard development. Though we may utilize specifications in multiple organizations such as the ",(0,i.kt)("a",{parentName:"p",href:"https://www.ietf.org/"},"IETF"),", ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/foundation/"},"OpenID Foundation"),", the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/"},"World Wide Web Consortium (W3C)"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/"},"Decentralized Identity Foundation (DIF)"),". TBD\u2019s focus thus far has been primarily with the W3C and ",(0,i.kt)("a",{parentName:"p",href:"http://identity.foundation/"},"DIF")," organizations:"),(0,i.kt)("h3",{id:"the-w3c"},"The W3C"),(0,i.kt)("p",null,"The W3C, founded by ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tim_Berners-Lee"},"Tim Berners-Lee")," in 1994, is one of the most prominent international standards organizations for the web. The W3C has a number of group types. Community Groups are the most open. The ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/community/credentials/"},"Credentials Community Group")," focused on Verifiable Credentials, and often serves as a staging ground for the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/groups/wg/vc"},"Verifiable Credentials Working Group"),", responsible for the ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model"},"Verifiable Credentials Data Model")," (i.e. the Verifiable Credentials specification). The ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/groups/wg/did"},"Decentralized Identifier Working Group")," is responsible for ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"Decentralized Identifiers")," (i.e. the DID specification)."),(0,i.kt)("p",null,"TBD is a member of the W3C, actively utilizes the work items from all three groups, and has made contributions to each group\u2019s corpus."),(0,i.kt)("h3",{id:"the-decentralized-identity-foundation"},"The Decentralized Identity Foundation"),(0,i.kt)("p",null,"The Decentralized Identity Foundation, or DIF, was founded in 2017 to focus on Decentralized Identity. Since then, it\u2019s expanded to house a number of working groups around Identifiers, Claims & Credentials, Sidetree, Secure Data Storage, Wallet Security, Interoperability, and more. DIF produces technical specifications, reference implementations (as in the case of Sidetree and ",(0,i.kt)("a",{parentName:"p",href:"https://identity.foundation/ion"},"ION"),"), and coordinates standards and software implementations for players across the industry."),(0,i.kt)("p",null,"TBD is a member of DIF, regularly attends working groups, contributing to both interoperability projects, specifications, and technical implementations."),(0,i.kt)("h3",{id:"standards-in-use"},"Standards in Use"),(0,i.kt)("p",null,"The set of standards we rely on and use for Web5 is unbound. However, we have a good sense of the standards we begin with. The list below will likely soon be out of date. Consider it as a reference as you orient yourself with what we\u2019re working with."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Specification"),(0,i.kt)("th",{parentName:"tr",align:null},"Standards Body"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/did-core/"},"DID Core")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/groups/wg/did"},"W3C Decentralized Identifier Working Group")),(0,i.kt)("td",{parentName:"tr",align:null},"Decentralized Identifiers v1.0."),(0,i.kt)("td",{parentName:"tr",align:null},"Recommendation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/ion/"},"DID ION")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/working-groups/sidetree.html"},"DIF Sidetree")),(0,i.kt)("td",{parentName:"tr",align:null},"A layer 2 Decentralized Identifier network that runs atop the Bitcion blockchain, built on the Sidetree protocol."),(0,i.kt)("td",{parentName:"tr",align:null},"Ratified Specification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://w3c-ccg.github.io/did-method-key/"},"DID Key")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/community/credentials/"},"W3C CCG")),(0,i.kt)("td",{parentName:"tr",align:null},"A simple method to create a DID using a single cryptographic key."),(0,i.kt)("td",{parentName:"tr",align:null},"Unofficial Draft")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://w3c-ccg.github.io/did-method-web/"},"DID Web")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/community/credentials/"},"W3C CCG")),(0,i.kt)("td",{parentName:"tr",align:null},"A DID method that allows bootstrapping trust using a web domain."),(0,i.kt)("td",{parentName:"tr",align:null},"W3C Internal Document")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/peer-did-method-spec/"},"DID Peer")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/working-groups/identifiers-discovery.html"},"DIF Identifiers & Discovery")),(0,i.kt)("td",{parentName:"tr",align:null},"A DID method that can be used independent of any central source of truth, intended to be \u201ccheap, fast, scalable, and secure.\u201d"),(0,i.kt)("td",{parentName:"tr",align:null},"Draft")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/"},"Verifiable Credentials Data Model")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/groups/wg/vc"},"W3C Verifiable Credentials Working Group")),(0,i.kt)("td",{parentName:"tr",align:null},"The Verifiable Credentials Data Model v1.1."),(0,i.kt)("td",{parentName:"tr",align:null},"Recommendation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/w3c/vc-data-integrity"},"Data Integrity")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/groups/wg/vc"},"W3C Verifiable Credentials Working Group")),(0,i.kt)("td",{parentName:"tr",align:null},"Describes mechanisms for ensuring the authenticity and integrity of structured digital documents\u2026such as digital signatures."),(0,i.kt)("td",{parentName:"tr",align:null},"Editor\u2019s Draft")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://w3c.github.io/vc-jws-2020/"},"JSON Web Signature 2020")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/groups/wg/vc"},"W3C Verifiable Credentials Working Group")),(0,i.kt)("td",{parentName:"tr",align:null},"A cryptographic suite for the purpose of creating and verifying proofs for JSON Web Signatures using Linked Data Proofs."),(0,i.kt)("td",{parentName:"tr",align:null},"Editor\u2019s Draft")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://w3c-ccg.github.io/vc-json-schemas/v2/index.html"},"Verifiable Credentials JSON Schema")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/community/credentials/"},"W3C CCG")),(0,i.kt)("td",{parentName:"tr",align:null},"A mechanism to use JSON schemas to back a Verifiable Credential."),(0,i.kt)("td",{parentName:"tr",align:null},"Draft")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://w3c-ccg.github.io/vc-status-list-2021/"},"Status List 2021")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.w3.org/community/credentials/"},"W3C CCG")),(0,i.kt)("td",{parentName:"tr",align:null},"A privacy-preserving, space-efficient, and high-performance mechanism for publishing status information such as suspension or revocation of Verifiable Credentials."),(0,i.kt)("td",{parentName:"tr",align:null},"Draft Community Group Report")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/JWS-Test-Suite/"},"VC Proof Format Test Suite")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/working-groups/claims-credentials.html"},"DIF Claims & Credentials")),(0,i.kt)("td",{parentName:"tr",align:null},"A test suite providing interoperability testing and reporting for Verifiable Credentials and Presentation for Linked Data and JWT signature types."),(0,i.kt)("td",{parentName:"tr",align:null},"Unofficial Draft")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/presentation-exchange/"},"Presentation Exchange")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/working-groups/claims-credentials.html"},"DIF Claims & Credentials")),(0,i.kt)("td",{parentName:"tr",align:null},"A claim format and transport envelope agnostic format for Verifiers to articulate proof requirements, and for Holders to describe proofs according to those requirements."),(0,i.kt)("td",{parentName:"tr",align:null},"Working Group Draft")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/credential-manifest/"},"Credential Manifest")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/working-groups/claims-credentials.html"},"DIF Claims & Credentials")),(0,i.kt)("td",{parentName:"tr",align:null},"A common data format for describing the inputs a Subject must provide to an Issuer for evaluation and issuance of credentials, a means for a Subject to submit an application against those requirements, and a means for an Issuer to fulfill such an application."),(0,i.kt)("td",{parentName:"tr",align:null},"Pre-Draft")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/trust-establishment/"},"Trust Establishment")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/working-groups/claims-credentials.html"},"DIF Claims & Credentials")),(0,i.kt)("td",{parentName:"tr",align:null},"A means of communicating trust statements and relations between parties in decentralized identity environments."),(0,i.kt)("td",{parentName:"tr",align:null},"Pre-Draft")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/decentralized-web-node/spec/"},"Decentralized Web Node")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://identity.foundation/working-groups/secure-data-storage.html"},"DIF Secure Data Storage")),(0,i.kt)("td",{parentName:"tr",align:null},"A DWN is a data storage and message relay mechanism entities can use to locate public or private permissioned data related to a given DID. DWNs provide multi-node sync, enabling the owning entity to secure, manage, and transact their data with others without centralizing factors."),(0,i.kt)("td",{parentName:"tr",align:null},"Draft")))),(0,i.kt)("p",null,"For brevity, I only included fifteen of the most prominent specifications comprising the foundations of the SSI stack in Web5. There are at least another half dozen either included or planned to be included in our software."),(0,i.kt)("h2",{id:"tbd-community"},"TBD Community"),(0,i.kt)("p",null,"TBD is interested in building a space for community-driven projects, community members gaining merge and moderation access to community resources, and growing a diverse set of contributors interested in a broad set of use cases to be built on Web5. "),(0,i.kt)("p",null,"We are not interested in becoming a standards body itself. Instead, we are focused on fostering a self-sustaining community focused on building and building on Web5. To facilitate this, we can expand our existing tools like adding sections of our ",(0,i.kt)("a",{parentName:"p",href:"https://forums.tbd.website/"},"Forums"),", creating new ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/tbd"},"Discord")," channels, creating new purpose-specific ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TBD54566975"},"GitHub repositories")," and investing in new tools for collaboration like an ideas board, job listing page, or a Web5 wiki. I\u2019d love to see a Web5 incubator similar to ",(0,i.kt)("a",{parentName:"p",href:"https://www.ycombinator.com/"},"Y Combinator")," that facilitates those building on Web5. The future\u2019s possibilities are endless, and we are eager to adapt to the evolving needs of the community."),(0,i.kt)("p",null,"Sometimes, we may need more rigorous structure. As such, we are interested in forming working groups in the Web5 community where it makes sense. The output of these groups could be industry coordination, use-case building, software development, or even standards-related work that can be contributed to existing standards bodies. TBD has kicked off one such group to date around Credentials, first focused on creating a path for Know Your Customer (KYC) Credentials. This group already follows such a pattern: having built out ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TBD54566975/credentials-working-group"},"use-case documentation in GitHub"),", having a purpose-specific ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/channels/937858703112155166/969682739005624412"},"Discord channel"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://forums.tbd.website/c/self-sovereign-identity-users/credentials-working-group/6"},"forum category"),". Soon we\u2019ll adapt this group to a more \u201coffice hours\u201d-style format, allowing anyone in the community to show off their work, ask for assistance, and help shape our project development roadmaps. "),(0,i.kt)("p",null,"Today we have one ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TBD54566975"},"GitHub org"),", run by the TBD team. We will open up roles for community management. Creating light processes for community-driven moderation and maintenance (e.g. managing pull requests, issues, labels, and milestones), in addition to having projects and repositories started and managed entirely by members of the community. One such idea we are considering is for a new GitHub organization for the \u201cWeb5 Community\u201d to foster and highlight community-driven efforts. We\u2019re additionally looking to launch an Incubation program that gives a formal path towards recognizing and promoting the work that begins in a grassroots manner in our community. We plan on making the rest of our tooling community-driven as well: today this means Discord and the Forums, tomorrow it will be a lot more!"),(0,i.kt)("p",null,"While this is something we are focused on internally, it is crucial that you as community members are able to make suggestions, plans, and directly influence change. Reach out on Discord, our Forums, gain mindshare for your ideas, and we will help make them a reality."),(0,i.kt)("h2",{id:"open-source"},"Open Source"),(0,i.kt)("p",null,"The foundations of Web5 are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TBD54566975"},"open source"),". This means that its source code is publicly available and, as stewards, we rely on external contribution\u2014Web5 is only successful with the full innovation of a global community. Certainly there are cases where code cannot be open source for various reasons: this applies to the TBD business as well as members of our community. We do not mandate open source, but it is a guiding principle. We believe in the power of open, and all that comes with it. The more open Web5 can be, the better it will be."),(0,i.kt)("p",null,"Projects in the TBD GitHub may originate at TBD, or through the community (on our Discord, Forums). Today, the TBD team is acting as the primary steward and maintainer of all projects. As the community matures, we expect it to take the lead and for TBD to assume a higher-level maintainer role. We imagine this ends up looking like more community-driven projects, community members gaining merge and moderation access, and growing a diverse set of contributors interested in a broad set of use cases to be built on Web5. More broadly, we want to push forward to a world where TBD does not have the only, or final say on any Web5 decision: ",(0,i.kt)("strong",{parentName:"p"},"decentralization is a strength in the development of Web5"),"."),(0,i.kt)("p",null,"This transition is only made possible by active engagement from the community. It is the reason our code is open, and we have set up avenues for engagement. We look towards the community to engage with TBD and others, and push for the future we wish to see built."),(0,i.kt)("h2",{id:"software-vision"},"Software Vision"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TBD is fostering a set of community-driven, open source, standards-based software to facilitate Self Sovereign Identity on Web5.")),(0,i.kt)("p",null,"We want to realize the vision of the Web5 community: ",(0,i.kt)("em",{parentName:"p"},"to build pragmatic standards-based software that serves a wide variety of needs"),". The software shall not be tied to any specific entity, nor, without good reason, exclude possibilities within the SSI space. Balancing both feature-richness and complexity we must work closely with our users to design software that meets the needs of all who wish to be on Web5. We think in terms of toolkits, composed of the purpose-specific tools in them. These toolkits exist in a hierarchy of abstractions from which powerful, intuitive, and human-centric software can be built."),(0,i.kt)("p",null,"The software must be designed in a flexible, modular manner. This means interfaces that feature a default implementation or two, but can be extended to facilitate integration into many systems (e.g. swapping out databases, encryption methods, credential formats as needed). The software is intended to be built on open standards in the SSI space. The standards space is fast-changing and there may be cases where we use ill-defined and ill-supported standards; we must be able to favor practicality and working implementations over robust standards with a commitment to see the standards through. There may be cases where we use our software to innovate past the current state of these standards and open the opportunity to contribute back to existing standards and standards bodies."),(0,i.kt)("p",null,"We recognize that the SSI ecosystem is full of competing and developing standards. Often this can feel like developing against a set of moving targets and promises of feature sets. There\u2019s a lot of information to grok and everyone has an opinion\u2014this is a good thing! It can be difficult to pick winners, and even more difficult to choose between multiple standards that appear to do the same thing: we do not want to create a Swiss Army knife that contains five different types of scissors, we\u2019d rather it contain one (or maybe two) scissors that get the job done well 99% of the time. We favor evaluating the addition of features and standards on a case-by-case basis, and looking towards implementations of standards and features that are well-reasoned, with committed developers. Bonus points if there is already demonstrated usage and interoperability."),(0,i.kt)("p",null,"We also recognize that the SSI ecosystem uses a wide set of tools, languages, and technologies: working across web browsers, mobile applications, backend servers, ledgers, and more. For languages we\u2019ve started with ",(0,i.kt)("a",{parentName:"p",href:"https://go.dev/"},"Go")," (for the SSI SDK and SSI Service) because of its robust cryptographic support, speed, ability to be compiled to ",(0,i.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WASM"),", and, above all else, simplicity. It is crucial that the code we write is approachable to encourage contribution. Simple and clear is always preferred over clever. The future is multi-language, and multi-platform. We welcome initiatives for improving multi-language and multi-platform support, and are open to fostering them into our GitHub organization."),(0,i.kt)("h2",{id:"ssi-sdk"},"SSI SDK"),(0,i.kt)("p",null,"Named ",(0,i.kt)("inlineCode",{parentName:"p"},"ssi-sdk"),", this SDK encapsulates a set of standards related to ",(0,i.kt)("a",{parentName:"p",href:"http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html"},"Self Sovereign Identity"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"ssi-sdk")," intends to provide flexible functionality based on a set of standards-based primitives for building decentralized identity applications in a modular manner: with limited dependencies between components."),(0,i.kt)("p",null,"Primarily, the SDK serves to support Decentralized Identifiers and Verifiable Credentials and their associated standards. Interacting with Decentralized Identifiers: resolving identifiers, signing, verifying, encrypting, and decrypting data using cryptographic keys found in DID Documents. Interacting with Verifiable Credentials: creating and using data schemas, facilitating credential application, issuance, and exchange."),(0,i.kt)("p",null,"The SDK is an active work in progress, and can be found on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TBD54566975/ssi-sdk"},"TBD GitHub"),"."),(0,i.kt)("h2",{id:"ssi-service"},"SSI Service"),(0,i.kt)("p",null,"The Self Sovereign Identity Service (SSIS) facilitates all things relating to ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"DIDs")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model"},"Verifiable Credentials")," \u2014 in a box! The service is a part of a larger ",(0,i.kt)("a",{parentName:"p",href:"https://developer.tbd.website/projects/web5"},"Decentralized Web Platform")," architecture. The SSI Service is a JSON-API web service that wraps the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TBD54566975/ssi-sdk"},"ssi-sdk")," to facilitate user-focused interactions on Web5. The service is intended to interact with user interfaces, wallets, decentralized web nodes, and other web infrastructure. "),(0,i.kt)("p",null,"By taking the lower-level building blocks exposed by the SDK, the service is intended to drastically lower the barrier to entry for any individual or organization interesting in building on the Web5 stack. Like the SDK, it is agnostic to any specific business or use case, and design to be pluggable into external infrastructure whether existing or new. "),(0,i.kt)("p",null,"The service is assumed to be run by a single organization and assumes external authentication and authorization. The service assumes no infrastructure requirements and is flexible to multiple deployment models, databases, key management solutions, and user interfaces. We expect that a wide array of users and use cases will use and build on top of the service, creating layers of abstraction and intermediation for processing business logic, handling user accounts, and so on."),(0,i.kt)("p",null,"The service is an active work in progress, and can be found on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TBD54566975/ssi-service"},"TBD GitHub"),"."),(0,i.kt)("h2",{id:"how-features-are-developed"},"How Features are Developed"),(0,i.kt)("p",null,"We are in the early days of Web5. By intention, we\u2019ve announced our ideas and projects way before they are ready for an alpha release, let alone inclusion in a production-ready application. Transparency is an asset in sharing our thinking and gaining mindshare for what we are building. As such, there are many forks in the road fast-approaching. To move past these forks, and the forks after those I introduce some light process to guide principled decision making:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Features shall be developed using the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Socratic_method"},"Socratic method"),": making statements, interrogating them, asking ",(0,i.kt)("em",{parentName:"li"},"whys")," and ",(0,i.kt)("em",{parentName:"li"},"hows"),", being intellectually honest with risk, uncertainty, consider second, third and n-order effects."),(0,i.kt)("li",{parentName:"ol"},"All new feature proposals shall include a light design document outlining desired functionality, end-user utility, prior art, room for improvement and next steps, risks and mitigations, considerations, and open questions."),(0,i.kt)("li",{parentName:"ol"},"A quorum of project maintainers shall review and progress feature proposals in a timely manner.")),(0,i.kt)("p",null,"Templates for the aforementioned process have been created on each GitHub repository. I encourage you to create GitHub issues and Forum discussions to explore thinking, and revise designs before going forth with a contribution."),(0,i.kt)("p",null,"For templates on feature development, philosophies on versioning and releases, and more information view our GitHub documentation: "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/TBD54566975/ssi-service"},"SSI Service GitHub Docs")," | ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TBD54566975/ssi-sdk"},"SSI SDK GitHub Docs")),(0,i.kt)("h2",{id:"the-goal"},"The Goal"),(0,i.kt)("p",null,"I believe in setting public and ambitious ",(0,i.kt)("em",{parentName:"p"},"measurable")," goals. This serves as a powerful self-discipline mechanism, as well as a call to action for forward progress. Officially the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.tbd.website/blog/web5-roadmap"},"timeline for Web5 can be found on our site"),". Unofficially, here is my ambition:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"By January 1st 2023 the following shall be true:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first beta release of the SSI SDK and SSI Service (0.1.0) will be released."),(0,i.kt)("li",{parentName:"ul"},"Each SSI project will have >75% test coverage."),(0,i.kt)("li",{parentName:"ul"},"Each project will have robust user and developer documentation with clear examples."),(0,i.kt)("li",{parentName:"ul"},"The SSI SDK will have feature complete specification implementations for at least all fifteen standards identified above."),(0,i.kt)("li",{parentName:"ul"},"The SSI Service will be deployable in an infrastructure-agnostic manner, demonstrated on \u2265 2 platforms."),(0,i.kt)("li",{parentName:"ul"},"The SSI Service will facilitate practical end-user flows facilitating:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Creating and managing DIDs using \u2265 2 DID methods"),(0,i.kt)("li",{parentName:"ul"},"Creating and issuing Verifiable Credentials backed by JSON schemas"),(0,i.kt)("li",{parentName:"ul"},"Creating Credential Manifests, accepting Credential Applications, and fulfilling Credential Applications"),(0,i.kt)("li",{parentName:"ul"},"Creating Presentation Definitions, sending Presentation Requests, and accepting Presentation Submissions"),(0,i.kt)("li",{parentName:"ul"},"Creating Credential Revocations and checking Credentials against them"),(0,i.kt)("li",{parentName:"ul"},"Creating and processing Trust Establishment documents"))),(0,i.kt)("li",{parentName:"ul"},"The SSI SDK and Service will support the Decentralized Web Node specification and the Service will work with at least one DWN.")),(0,i.kt)("h2",{id:"parting-thoughts"},"Parting Thoughts"),(0,i.kt)("p",null,"You should now have a pretty good sense of how we conceive of SSI software on Web5, and how its journey will unfold. Most importantly the mission is not TBD\u2019s alone, it is that of the community. We build real software for real people and favor pragmatism above all else. What I\u2019ve written here is ",(0,i.kt)("em",{parentName:"p"},"current thinking")," and is always subject to evolution\u2014with your help. I\u2019m looking forward to you joining us in pushing SSI and Web5 forward, gaining new perspectives, solving new use-cases, and building some cool shit."))}u.isMDXComponent=!0},91586:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ssi_tbd_web5-362c244c231552618f4e9abd2d4482c7.png"}}]);