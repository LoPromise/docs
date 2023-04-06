"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[1251],{5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>z});var r=t(7462),a=t(7294),i=t(6010),l=t(2466),u=t(6550),s=t(1980),o=t(7392),d=t(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,u.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=p(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[s,o]=h({queryString:t,groupId:r}),[c,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),k=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),g(e)}),[o,g,i]),tabValues:i}}var k=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:u,selectValue:s,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const n=e.currentTarget,t=d.indexOf(n),r=o[t].value;r!==u&&(c(n),s(r))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},o.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":u===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function N(e){const n=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},a.createElement(b,(0,r.Z)({},e,n)),a.createElement(v,(0,r.Z)({},e,n)))}function z(e){const n=(0,k.Z)();return a.createElement(N,(0,r.Z)({key:String(n)},e))}},5059:(e,n,t)=>{t.d(n,{ZP:()=>u});var r=t(7462),a=(t(7294),t(3905));t(5657);const i={toc:[]},l="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Sponsor-Token erforderlich",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Weitere Informationen zum \ud83d\udc9a evcc Sponsorship gibt es ",(0,a.kt)("a",{parentName:"p",href:"/docs/sponsorship"},"hier"),".")))}u.isMDXComponent=!0},7459:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905)),i=(t(5657),t(4866)),l=t(5162);t(5059);const u={sidebar_position:6},s="vehicles",o={unversionedId:"reference/configuration/vehicles",id:"reference/configuration/vehicles",title:"vehicles",description:"Ein Fahrzeug repr\xe4sentiert ein spezifisches elektrisches Fahrzeug (EV) mit seiner Batterie. Wenn ein Fahrzeug konfiguriert und einem Ladepunkt zugewiesen ist, kann in der Benutzeroberfl\xe4che u.a. der Ladestatus, der Ladezustand (Soc) und die verbleibende Ladezeit angezeigt werden sowie weitere Daten automatisch vom Fahrzeug abgerufen und verarbeitet werden.",source:"@site/docs/reference/configuration/vehicles.mdx",sourceDirName:"reference/configuration",slug:"/reference/configuration/vehicles",permalink:"/docs/reference/configuration/vehicles",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/vehicles.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"meters",permalink:"/docs/reference/configuration/meters"},next:{title:"hems",permalink:"/docs/reference/configuration/hems"}},d={},c=[{value:"Erforderliche Parameter",id:"erforderliche-parameter",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"Optionale Parameter",id:"optionale-parameter",level:2},{value:"<code>capacity</code>",id:"capacity",level:3},{value:"<code>phases</code>",id:"phases",level:3},{value:"<code>cache</code>",id:"cache",level:3},{value:"<code>onIdentify</code>",id:"onidentify",level:3},{value:"<code>identifiers</code>",id:"identifiers",level:3},{value:"RFID",id:"rfid",level:4},{value:"Fahrzeugkennung",id:"fahrzeugkennung",level:4},{value:"<code>features: [&quot;coarsecurrent&quot;]</code>",id:"features-coarsecurrent",level:3},{value:"<code>icon</code>",id:"icon",level:3}],p={toc:c},m="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vehicles"},(0,a.kt)("inlineCode",{parentName:"h1"},"vehicles")),(0,a.kt)("p",null,"Ein Fahrzeug repr\xe4sentiert ein spezifisches elektrisches Fahrzeug (EV) mit seiner Batterie. Wenn ein Fahrzeug konfiguriert und einem ",(0,a.kt)("a",{parentName:"p",href:"loadpoints#vehicle--vehicles"},"Ladepunkt")," zugewiesen ist, kann in der Benutzeroberfl\xe4che u.a. der Ladestatus, der Ladezustand (Soc) und die verbleibende Ladezeit angezeigt werden sowie weitere Daten automatisch vom Fahrzeug abgerufen und verarbeitet werden."),(0,a.kt)("p",null,"Ebenfalls ist es damit m\xf6glich die Ladung auf einen bestimmten Ladestand (Soc) zu begrenzen. Da die meisten Wallboxen diesen nicht kennen k\xf6nnen (er wird bislang nur in ganz bestimmten Kombinationen der Wallbox \xfcbermittelt), kann evcc mit dieser Konfiguration direkt mit dem Fahrzeug \xfcber die Online-Schnittstelle (API) des Fahrzeugherstellers kommunizieren."),(0,a.kt)("p",null,"Die ",(0,a.kt)("inlineCode",{parentName:"p"},"vehicles")," Konfiguration ist eine Liste von verschiedenen Fahrzeugen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: Zoe\n    type: ...\n    ...\n")),(0,a.kt)("p",null,"Konfigurationen f\xfcr bekannte Fahrzeuge sind unter ",(0,a.kt)("a",{parentName:"p",href:"/docs/devices/vehicles"},"Ger\xe4te - Fahrzeuge")," zu finden."),(0,a.kt)("p",null,"Im folgenden werden nun alle m\xf6glichen Parameter erkl\xe4rt."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"erforderliche-parameter"},"Erforderliche Parameter"),(0,a.kt)("h3",{id:"name"},(0,a.kt)("inlineCode",{parentName:"h3"},"name")),(0,a.kt)("p",null,"Eine Kurzbezeichnung des hier konfigurierten Fahrzeugs. Der Wert wird in der Referenzierung des Fahrzeugs in der Konfiguration des ",(0,a.kt)("a",{parentName:"p",href:"loadpoints#vehicle--vehicles"},"Ladepunktes")," verwendet."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: zoe\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"title"},(0,a.kt)("inlineCode",{parentName:"h3"},"title")),(0,a.kt)("p",null,"Eine Beschreibung des Fahrzeugs welche auf der Benutzeroberfl\xe4che angezeigt wird."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"title: Zoe\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},(0,a.kt)("inlineCode",{parentName:"h3"},"type")),(0,a.kt)("p",null,"Dies ist der evcc Schnittstellen-Typ, mit Hilfe dessen mit dem Fahrzeug kommuniziert werden kann. Bekannte Fahrzeuge k\xf6nnen \xfcber den Typ ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," eingebunden werden. Den passenden (Template) Typ f\xfcr bekannte Fahrzeuge und Hinweise f\xfcr die manuelle Konfiguration ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," findet man unter ",(0,a.kt)("a",{parentName:"p",href:"/docs/devices/vehicles"},"Ger\xe4te - Fahrzeuge"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"optionale-parameter"},"Optionale Parameter"),(0,a.kt)("h3",{id:"capacity"},(0,a.kt)("inlineCode",{parentName:"h3"},"capacity")),(0,a.kt)("p",null,"Die Kapazit\xe4t der Batterie des Fahrzeugs in kWh."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"capacity: 50 # kWh\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"phases"},(0,a.kt)("inlineCode",{parentName:"h3"},"phases")),(0,a.kt)("p",null,"Die Anzahl der technisch ",(0,a.kt)("em",{parentName:"p"},"maximal")," von diesem Fahrzeug (ggf. inkl. Ladekabel) verwendeten Phasen.\nDer interne Standardwert ist 3. M\xf6gliche Werte sind 1, 2 oder 3."),(0,a.kt)("p",null,"Manche Fahrzeuge, v.a. Plugin-Hybride, nutzen nicht die maximal m\xf6glichen 3 Phasen zur Ladung. W\xe4hrend ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc")," die tats\xe4chlich genutzten Phasen bei Beginn eines Ladevorgangs- sofern ein Ladez\xe4hler eingebaut ist- ermitteln kann, steht die Information vor einem Ladevorgang nicht zur Verf\xfcgung.\nDurch Konfiguration des Parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"phases")," am Fahrzeug kann ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc")," im PV Modus den Ladevorgang bereits bei geringerer verf\xfcgbarer Leistung beginnen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"phases: 2\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cache"},(0,a.kt)("inlineCode",{parentName:"h3"},"cache")),(0,a.kt)("p",null,"Die Vorhaltezeit und Unterdr\xfcckungsdauer von externen Anfragen an die Fahrzeugdatenschnittstelle (API)."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Der Wert muss mit angeh\xe4ngter Zeiteinheit (siehe Beispiel) angegeben werden.\n",(0,a.kt)("inlineCode",{parentName:"p"},"m")," steht dabei f\xfcr Minuten.")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Es wird ",(0,a.kt)("strong",{parentName:"p"},"NICHT")," empfohlen, die Standardeinstellungen zu \xe4ndern, denn dies k\xf6nnte dazu f\xfchren, dass der Fahrzeughersteller aktiv verhindert, das Laden mittels evcc zu steuern. ",(0,a.kt)("strong",{parentName:"p"},"AUF EIGENES RISIKO."))),(0,a.kt)("p",null,"Um aktuelle Zustandsdaten vom Fahrzeug zu ermitteln (z. B. Ladezustand Soc der Traktionsbatterie) werden regelm\xe4\xdfig die Daten der zugeh\xf6rigen Datenschnittstelle beim Hersteller online abgefragt. Damit die Server des Fahrzeugherstellers jedoch nicht st\xe4ndig mit Anfragen \xfcberh\xe4uft werden (das kann zur Sperrung des Accounts f\xfchren) ist ein Zwichenspeicher (Cache) implementiert der diese Anfragen innerhalb von abf\xe4ngt und mit den zuletzt abgerufenen Daten bis zu dem hier angegebebenen maximalen Alter beantwortet.\nDa die meisten Fahrzeuge die Daten ohnehin nur w\xe4hrend eines laufenden Ladevorgangs in sehr gro\xdfen Abst\xe4nden (10 bis 30 Minuten sind \xfcblich) aktualisieren bringen viel h\xe4ufigere Anfragen keinen Mehrwert."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Standardwert:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"15m")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"cache: 5m\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onidentify"},(0,a.kt)("inlineCode",{parentName:"h3"},"onIdentify")),(0,a.kt)("p",null,"Standardwerte die bei Erkennung des Fahrzeuges angewendet werden sollen:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"loadpoints#mode"},(0,a.kt)("inlineCode",{parentName:"a"},"mode"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"loadpoints#mincurrent"},(0,a.kt)("inlineCode",{parentName:"a"},"minCurrent"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"loadpoints#maxcurrent"},(0,a.kt)("inlineCode",{parentName:"a"},"maxCurrent"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"minSoc")," es wird sofort mit h\xf6chstm\xf6glicher Leistung bis zum angegeben F\xfcllstand geladen, wenn der Modus nicht auf ",(0,a.kt)("inlineCode",{parentName:"li"},"off")," steht"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"targetSoc")," bei Erreichen dieses F\xfcllstandes wird die Ladung gestoppt"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.evcc.io/docs/reference/configuration/loadpoints/#priority"},(0,a.kt)("inlineCode",{parentName:"a"},"priority")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)(i.Z,{groupId:"config-type",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Template",label:"Template",default:!0,mdxType:"TabItem"},"Wenn die Fahrzeuge \xfcber den ",(0,a.kt)("i",null,"type=templates")," in die Konfiguration eingebunden werdnen, z.b. bei Verwendung von ",(0,a.kt)("i",null,"evcc configure"),".",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mode: pv\nmincurrent: 8\nmaxcurrent: 20\nminSoc: 40\ntargetSoc: 80\npriority: 5\n"))),(0,a.kt)(l.Z,{value:"Native",label:"Native",mdxType:"TabItem"},"Wenn die Fahrzeuge \xfcber ihren nativen Typ, z.b. ",(0,a.kt)("i",null,"type=audi"),", in die Konfiguration eingebunden werden.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"onIdentify: # set defaults when vehicle is identified\n  mode: pv\n  mincurrent: 8\n  maxcurrent: 20\n  minSoc: 40\n  targetSoc: 80\n  priority: 5\n")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"identifiers"},(0,a.kt)("inlineCode",{parentName:"h3"},"identifiers")),(0,a.kt)("p",null,"Eine Liste mit einer oder mehreren Kennungen um das Fahrzeug zu identifizieren. Soll das Fahrzeug zum Beispiel an unterschiedlichen Wallboxen identifiziert werden k\xf6nnen, m\xfcssen unter Umst\xe4nden mehrere Kennungen verwendet werden. Die Erkennung kann dabei \xfcber folgende Mechanismen erfolgen:"),(0,a.kt)("h4",{id:"rfid"},"RFID"),(0,a.kt)("p",null,"Wenn die Wallbox \xfcber eine RFID Schnittstelle verf\xfcgt, kann eine RFID-Karte einem Fahrzeug zugewiesen werden um es so zu identifizieren. Hierbei wird die ",(0,a.kt)("inlineCode",{parentName:"p"},"RFID Token ID")," ben\xf6tigt."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"identifiers:\n  - 12345ABC # RFID token ID\n")),(0,a.kt)("h4",{id:"fahrzeugkennung"},"Fahrzeugkennung"),(0,a.kt)("p",null,"Wenn die Wallbox es unterst\xfctzt, kann bekommt es vom Fahrzeug eine Fahrzeugkennung \xfcbermittelt. Dies kann entweder die MAC Adresse des On-Board-Ladeger\xe4tes sein, oder eine Kennung eines fest installierten Plug & Charge Zertifikats (ist ein anderes Zertifikat als f\xfcr DC Laden!)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"identifiers:\n  - 01:23:45:67:89:0A # MAC address\n")),(0,a.kt)("p",null,"Manche Fahrzeuge erzeugen jeden Tag eine neue MAC Adresse. F\xfcr diesen Fall kann man Wildcards verwenden, falls die vorhandenen Fahrzeuge sich beim nicht \xe4ndernden Teil der MAC Adresse unterscheiden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"identifiers:\n  - 01:23:45:*\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"features-coarsecurrent"},(0,a.kt)("inlineCode",{parentName:"h3"},'features: ["coarsecurrent"]')),(0,a.kt)("p",null,"Markiert dass ein Fahrzeug nicht mit stufenloser Ladestrombegrenzung geregelt werden kann."),(0,a.kt)("p",null,"Diese Einstellung sollte f\xfcr folgende Kombination genutzt werden:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fahrzeug kann nur in ganzen Ampere-Schritten regeln"),(0,a.kt)("li",{parentName:"ul"},"Wallbox kann feiner aufgel\xf6ste Ladestromvorgaben (z.B. 1 mA) verarbeiten.")),(0,a.kt)("p",null,"In dieser Kombination kann es vorkommen, dass bei \xc4nderungen von wenigen mA der Phasenstrom f\xfcr die Regelung unerwartet um 1A ver\xe4ndert wird. Die Regelung f\xe4ngt dann ggf. an zu schwingen. Dieses Feature beschr\xe4nkt auch die Regelung auf grobe 1A-Stufen."),(0,a.kt)("p",null,"Es kann NICHT in Verbindung mit einem Fahrzeug-Template genutzt werden. Zur Verwendung muss das Fahrzeug als nativer Typ konfiguriert sein."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'features: ["coarsecurrent"]\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"icon"},(0,a.kt)("inlineCode",{parentName:"h3"},"icon")),(0,a.kt)("p",null,"Die Fahrzeuge k\xf6nnen im UI mit verschiedenen Icon angezeigt werden. Zur Verf\xfcgung stehen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"car"),(0,a.kt)("li",{parentName:"ul"},"bike"),(0,a.kt)("li",{parentName:"ul"},"scooter"),(0,a.kt)("li",{parentName:"ul"},"moped"),(0,a.kt)("li",{parentName:"ul"},"motorcycle"),(0,a.kt)("li",{parentName:"ul"},"van"),(0,a.kt)("li",{parentName:"ul"},"bus"),(0,a.kt)("li",{parentName:"ul"},"tractor"),(0,a.kt)("li",{parentName:"ul"},"generic"),(0,a.kt)("li",{parentName:"ul"},"heater"),(0,a.kt)("li",{parentName:"ul"},"cooler"),(0,a.kt)("li",{parentName:"ul"},"waterheater")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"icon: heater\n")),(0,a.kt)("hr",null))}h.isMDXComponent=!0}}]);