(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[287],{"3vRR":function(e,n,o){var i=o("nKUr"),t=o("n6mq");n.a=({children:e})=>Object(i.jsx)(t.e,{width:"100%",role:"list",children:e})},"6wCo":function(e,n,o){var i=o("nKUr"),t=o("JW66"),r=o("ENn1"),a=o("ynlw"),s=o("Hrat"),c=o("q1tI"),d=o("/MKj"),l=o("Ye/N"),p=o("TgLd"),m=o("GBVV"),b=o("4cpq"),u=o("M1Uz"),h=o("eOdZ");var j=o("U4JR"),w=o("nGHF"),f=o("n6mq");var g=Object(d.connect)(null,e=>({deletePinSponsorship:n=>e(function(e){return async n=>{await h.a.create("SponsoredPinResource",{pinId:e}).callDelete(),n(function(e){return{type:"DELETE_PIN_SPONSORSHIP",payload:{pinId:e}}}(e))}}(n))}))((function({deletePinSponsorship:e,onDeletePinSponsorship:n,onDismiss:o,pinId:t}){const{showOneToast:r}=Object(w.b)(),[a,s]=Object(c.useState)(!1),d=e=>{s(!1),Object(j.b)(101,{view:3,element:12114,component:230,pin_id:t}),r(({onHide:n})=>Object(i.jsx)(u.a,{onHide:n,text:e?l.a._("Something went wrong!","closeup.pinActionDropdown.toastAfterDeletingHasErrors","Pinterest ran into errors while deleting paid sponsorship"):l.a._("Removed!","closeup.pinActionDropdown.toastAfterDeleting","User deleted their paid partnership")}))};return Object(i.jsx)(p.b,{heading:l.a._("Remove paid partnership?","closeup.pinActionDropdown.deletePinSponsorshipModalHeading","Heading for modal that confirms user wants to delete their partnership"),accessibilityModalLabel:l.a._("Remove paid partnership?","closeup.pinActionDropdown.deletePinSponsorshipModalHeadingLabel","Heading for modal that confirms user wants to delete their partnership"),size:"sm",onDismiss:o,footer:Object(i.jsxs)(f.e,{display:"flex",justifyContent:"center",marginStart:-1,marginEnd:-1,children:[Object(i.jsx)(f.e,{paddingX:1,children:Object(i.jsx)(f.f,{onClick:o,text:l.a._("Cancel","closeup.pinActionDropdown.deletePinSponsorshipModalCancel","Button label for closing sponsorship removal modal")})}),Object(i.jsx)(f.e,{paddingX:1,children:Object(i.jsx)(b.a,{id:"confirm-delete-pin-sponsorship",children:Object(i.jsx)(m.b,{color:"red",onClick:()=>{(async()=>{if(!a){s(!0);try{await e(t),n(),d()}catch(o){n(),d(o)}}})()},text:l.a._("Remove","closeup.pinActionDropdown.deletePinSponsorshipModalConfirmButton","Button label for removing sponsorship"),submitting:a})})})]}),children:Object(i.jsx)(f.e,{padding:4,children:Object(i.jsx)(f.U,{align:"center",children:l.a._("This will remove the paid partnership disclosure on this Pin—if you change your mind you’ll have to start again! This won’t delete the Pin or affect who sees it.","closeup.pinActionDropdown.deletePinSponsorshipDescription","Text description for modal that confirms user wants to delete their sponsorship")})})})})),x=o("E/VT"),_=o("7w6Q"),O=o("tkfL");const y=()=>_.a.increment("windows.download.blob.error"),v=(e,n,o)=>{const i=new window.Windows.Storage.Pickers.FileSavePicker;i.suggestedStartLocation=window.Windows.Storage.Pickers.PickerLocationId.picturesLibrary;const{extension:t,extensionName:r,name:a}=(e=>{const n=e.split("/"),o=n[n.length-1],i=o.split(".");if(i.length>1){const e=i.pop();return{extension:"."+e,extensionName:e.toUpperCase(),name:i.join()}}return{extension:".",extensionName:l.a._("Unknown","Label for file picker drop down when the file type is not known","Label for file picker drop down when the file type is not known"),name:o}})(n);i.suggestedFileName=o||a,i.fileTypeChoices.insert(r,[t]),i.pickSaveFileAsync().then(n=>{n&&(window.Windows.Storage.CachedFileManager.deferUpdates(n),n.openAsync(window.Windows.Storage.FileAccessMode.readWrite).then(n=>{const o=e.msDetachStream();window.Windows.Storage.Streams.RandomAccessStream.copyAsync(o,n).then(()=>{n.flushAsync().done(()=>{o.close(),n.close(),_.a.increment("windows.download.blob.success")},y)},y)},y))})};var D=({filename:e,imgSrc:n,category:o})=>{if(!n)return null;return Object(i.jsx)(O.b,{onClick:()=>{((e,n)=>{try{const o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="blob",o.onreadystatechange=()=>{if(4===o.readyState)if(200!==o.status)_.a.increment("windows.download.blob.nodownload",.1,{status:o.status});else{const i=o.response;v(i,e,n)}},o.send(null)}catch(o){_.a.increment("windows.download.blob.xhrexception",.1,{error:o})}})(n,e)},text:l.a._("Download image","Button to download Pin image","Button to download Pin image")})},S=o("ESls"),P=o("kmwA");function C(e){const{onDismiss:n,myPin:o}=e,[t,r]=Object(c.useState)(1),a=[{label:l.a._("Small","pinActionDropdown.GetEmbedCodeModal.small","Label on segmented controller for pin embed code, for small width"),width:236},{label:l.a._("Medium","pinActionDropdown.GetEmbedCodeModal.medium","Label on segmented controller for pin embed code, for medium width"),width:345},{label:l.a._("Large","pinActionDropdown.GetEmbedCodeModal.large","Label on segmented controller for pin embed code, for large width"),width:450},{label:l.a._("Extra Large","pinActionDropdown.GetEmbedCodeModal.extra_large","Label on segmented controller for pin embed code, for extra-large width"),width:600}];return Object(i.jsx)(f.y,{children:Object(i.jsxs)(p.b,{accessibilityModalLabel:l.a._("Get Embed Code","pinActionDropdown.GetEmbedCodeModal.modalLabel","Accessibility label on modal for pin embed code"),heading:l.a._("Get Embed Code","pinActionDropdown.GetEmbedCodeModal.header","Heading on modal for pin embed code"),onDismiss:n,footer:Object(i.jsx)(f.e,{display:"flex",direction:"row",justifyContent:"end",children:Object(i.jsx)(f.f,{size:"sm",text:l.a._("Got it!","pinActionDropdown.GetEmbedCodeModal.dismissButton","Button to dismiss embed code modal"),onClick:n})}),children:[Object(i.jsx)(f.e,{paddingX:6,paddingY:4,children:Object(i.jsx)(f.L,{items:a.map(e=>e.label),selectedItemIndex:t,onChange:({activeIndex:e})=>{r(e)}})}),Object(i.jsx)(f.e,{paddingX:8,paddingY:6,children:Object(i.jsx)("code",{children:`<iframe src="${P.a.settings.ASSETS_SITE_URL}/ext/embed.html?id=${o.id}" height="${Math.ceil(o.height*a[t].width/o.width+100)}" width="${a[t].width}" frameborder="0" scrolling="no" ></iframe>`})})]})})}var A=o("gTC0"),L=o("hFNL"),k=o("LT60"),T=o("IJsR"),R=o("v/Q4"),E=o("CONZ"),M=o("eUcp"),I=o("aOj9");var H=Object(d.connect)(e=>({isFullAuth:e.viewer.isAuth&&!e.viewer.isLimitedLogin}),e=>({deletePinMention:(n,o)=>e(Object(E.b)(n,o))}))((function({bestPinImgSrc:e,deletePinMention:n,embedImg:o,hideDownload:t,showEmbed:r,isFullAuth:a,onDropdownClick:s,onReportPin:d,onToggle:p,pinCategory:m,pinDescription:b,pinId:h,pinImgSrc:_,pinTitle:y,reportPin:v,showRemoveMention:P,showRemoveSponsorship:E,usePortal:H}){const{showOneToast:U}=Object(w.b)(),[B,N]=Object(c.useState)(!1),[G,q]=Object(c.useState)(!1),[F,K]=Object(c.useState)(!1),[z,V]=Object(c.useState)(!1),W=Object(R.a)(),X=Object(I.e)(),Y=Object(c.useRef)(),J=()=>{N(!1)},$=()=>{J(),V(!z)},Q=()=>{J(),K(!F)},Z=()=>{G||Object(j.b)(4439,{view:3,viewParameter:156}),N(!1),q(!G)},ee=()=>{"function"==typeof d&&d(h),v()},ne=l.a._("More options","Accessible label for more options dropdown","Accessible label for more options dropdown");return Object(i.jsxs)(f.e,{flex:"grow",alignItems:"center",display:"flex",children:[Object(i.jsx)(f.e,{ref:Y,children:Object(i.jsx)(A.a,{accessibilityLabel:ne,icon:"ellipsis",onClick:()=>{var e;p&&p(),"function"==typeof s&&s(),N(!B),e=981,Object(j.b)(101,{element:e,component:4,view:3,viewParameter:139})}})}),B&&(()=>{const n=Object(i.jsx)(f.e,{zIndex:M.a,children:Object(i.jsx)(f.r,{anchor:Y.current,idealDirection:"down",onDismiss:J,size:"xs",children:Object(i.jsxs)(O.a,{children:[!t&&"undefined"!=typeof window&&"windows"!==Object(L.b)(window)&&e&&Object(i.jsx)(x.a,{imgSrc:e||"",filename:y||b,category:m,pinId:h,children:e=>Object(i.jsx)(O.b,{onClick:e,text:l.a._("Download image","Button to download Pin image","Button to download Pin image")})}),!t&&"undefined"!=typeof window&&"windows"===Object(L.b)(window)&&(e||_)&&Object(i.jsx)(D,{imgSrc:e||_||"",filename:y||b,category:m}),E&&Object(i.jsx)(O.b,{onClick:Q,text:l.a._("Remove partnership","closeup.pinActionDropDown.removePartnership","Label to allow removing an existing partnership")}),Object(i.jsx)(O.b,{onClick:a?ee:X,text:l.a._("Report Pin","Label for report pin action","Label for report pin action")}),P&&Object(i.jsx)(O.b,{onClick:$,text:l.a._("Remove @mention","closeup.pinActionDropDown.removeMention","Button that allows user to remove their @mention in the pin's")}),r&&Object(i.jsx)(S.a,{name:"closeup_pin_embed_code",children:({anyEnabled:e})=>e&&Object(i.jsx)(O.b,{onClick:Z,text:l.a._("Get Pin embed code","Label for embed pin action","Label for embed pin action")})})]})})});return H?Object(i.jsx)(k.a,{children:Object(i.jsx)(f.y,{children:n})}):n})(),G&&Object(i.jsx)(C,{myPin:{id:h,height:o.height,width:o.width},onDismiss:Z}),F&&Object(i.jsx)(g,{onDeletePinSponsorship:Q,onDismiss:Q,pinId:h}),z&&Object(i.jsx)(T.a,{confirmText:l.a._("Remove","closeup.pinActionDropDown.removeMention.modal","Label for button to confirm removal of the user @mention tag"),dismissText:l.a._("Cancel","closeup.pinActionDropDown.removeMention.modal","Label for button to cancel removal of the user @mention tag"),heading:l.a._("Remove @mention","closeup.pinActionDropDown.removeMention.modal","Heading for confirming user @mention tag removal"),accessibilityLabel:l.a._("Remove @mention tag from Story Pin","closeup.pinActionDropDown.removeMention.modal","Accessibility label for modal removing @mention tag from Story Pin"),onConfirm:()=>{V(!1),W.isAuth&&(n(h,W.id),Object(j.b)(8909,{view:3,viewParameter:157})),J(),U(({onHide:e})=>Object(i.jsx)(u.a,{onHide:e,text:l.a._("@mention removed!","closeup.pinActionDropDown.mentionRemovalToast","Toast that tells user that they have successfully removed the @mention of them in another user's Pin description")}))},onDismiss:$,promptText:l.a._("Tags in this Story Pin will no longer link to your profile.","closeup.pinActionDropDown.removeMention.modal","Description for modal removing @mention tag from Story Pin")})]})})),U=o("OSge"),B=o("QAzJ"),N=o("YxyV"),G=o("7jH2");n.a=({onDropdownClick:e,onReportPin:n,pin:o,viewParameter:c})=>{var d,l;const p=Object(R.a)(),{pinTitle:m,pinDescription:b,pinCategory:u}=Object(s.a)(o),h=Object(G.p)({pin:o}),{video:j}=Object(G.x)(h)||{},w=!!j;let g;o.images&&(g=o.embed&&"gif"===o.embed.type?o.embed.src:o.images["736x"]&&o.images["736x"].url);const x=!!o.story_pin_data_id,_=Object(N.d)(o),{isPromoted:O}=Object(a.a)(o),y=o.board.privacy===t.a.BoardPrivacy.SECRET,v=!O&&!y,{anyEnabled:D}=Object(B.a)("web_story_pin_at_mentions"),S=D&&p.isAuth&&(null===(d=o.story_pin_data)||void 0===d||null===(l=d.pages)||void 0===l?void 0:l.reduce((e,n)=>{var o;return e||(null===(o=n.blocks)||void 0===o?void 0:o.reduce((e,n)=>e||n.type===U.a.MENTION_STICKER&&n.user_id===p.id&&!1===n.is_removed,!1))},!1)),{sponsorship:P}=o,{creator:C,sponsor:A}=P||{},L=p.isAuth&&!!P&&[C.username,A.username].includes(p.username),{anyEnabled:k}=Object(B.a)("mweb_web_sponsored_pins",L);return Object(i.jsx)(f.e,{"data-test-id":"pin-action-bar",children:Object(i.jsx)(H,{embedImg:Object(N.e)(o,"736x"),showEmbed:v,bestPinImgSrc:_,hideDownload:w||x,onDropdownClick:e,onReportPin:n,pinCategory:u,pinDescription:b,pinId:o.id,pinImgSrc:g,pinTitle:m,reportPin:Object(r.a)({pin:o,viewParameter:c,viewType:3}),showRemoveMention:S,showRemoveSponsorship:L&&k,usePortal:!1})})}},Hrat:function(e,n,o){var i=o("yaUg"),t=o("Ye/N");n.a=e=>{const n=e.link_domain||{},o=e.tracked_link||e.link||e.images&&e.images.orig&&e.images.orig.url,r=e.rich_metadata,a=e.domain,s=e.closeup_attribution||e.native_creator||n.official_user||e.pinner||e.origin_pinner,c=!(!(r&&r.recipe&&r.recipe.name&&r.recipe.categorized_ingredients)||r.recipe.from_aggregated_data);let d,l;r&&r.products&&r.products[0]&&(d=!!(r&&r.name&&r.offer_summary));const p=e.buyable_product,m=d||p,b=!(!r||!r.article),u=!(!r||!r.tutorial),h=!(!s||!s.username);let j=t.a._("Saved from ","Closeup pin annotation","Closeup pin annotation"),w=h?t.a._("Saved by"):t.a._("Saved from"),f=t.a._("Visit");r&&r.products&&r.products[0]&&r&&r.products[0].name&&r.products[0].offer_summary&&(j=t.a._("Product sold by ","pin annotation","pin annotation"),l=r.products[0].offer_summary),m?(w=t.a._("Sold by"),f=t.a._("Visit")):u?(j=t.a._("Saved from ","pin annotation","pin annotation"),w=h?t.a._("Saved by"):t.a._("Saved from"),f=t.a._("Visit")):c?(j=t.a._("Recipe from ","pin annotation","pin annotation"),w=h?t.a._("Recipe by"):t.a._("Recipe from"),f=t.a._("Make it")):b&&(j=t.a._("Article from ","pin annotation","pin annotation"),w=h?t.a._("Article by"):t.a._("Article from"),f=t.a._("Read it"));const g=e.rich_summary;if(!l&&g){let e;g&&g.products&&g.products[0]&&(e=!!(g&&g.products[0].name&&g.products[0].offer_summary),e&&(j=t.a._("Product sold by ","pin annotation","pin annotation")))}let x,_;h?(x="/"+s.username+"/",_=s.full_name):(x="/source/"+a,_=r&&r.site_name||a);return{actionButtonText:f,image:s&&(s.image_medium_url||s.image_small_url)||e.board&&e.board.image_thumbnail_url,link:x,pinLink:o,pin:e,pinCreditPrefix:j,prefixText:w,subtitle:_,title:Object(i.a)(t.a._("More from {{ subtitle }}"),{subtitle:_}),pinTitle:e.closeup_unified_title,pinDescription:e.closeup_unified_description,pinCategory:e.category}}},IJsR:function(e,n,o){o.d(n,"a",(function(){return a}));var i=o("nKUr"),t=o("TgLd"),r=o("n6mq");function a({confirmText:e,dismissText:n,heading:o,accessibilityLabel:a,onConfirm:s,onDismiss:c,promptText:d}){return Object(i.jsx)(t.b,{accessibilityModalLabel:a,onDismiss:c,size:414,heading:o,children:Object(i.jsxs)(r.e,{padding:4,children:[Object(i.jsx)(r.U,{align:"center",children:d}),Object(i.jsxs)(r.e,{display:"flex",direction:"row",marginStart:-2,marginEnd:-2,marginTop:12,children:[Object(i.jsx)(r.e,{display:"flex",direction:"row",column:6,paddingX:2,children:Object(i.jsx)(r.f,{color:"gray",text:n,onClick:c})}),Object(i.jsx)(r.e,{column:6,paddingX:2,children:Object(i.jsx)(r.f,{color:"red",text:e,onClick:s})})]})]})})}},OPV1:function(e,n,o){var i=o("nKUr"),t=o("Ye/N"),r=o("gTC0"),a=o("4cpq"),s=o("dtqy");n.a=Object(s.a)(({handlePinEditButtonClick:e})=>Object(i.jsx)(a.a,{id:"closeup-pin-edit-button",children:Object(i.jsx)(r.a,{accessibilityLabel:t.a._("Edit","edit button on pin","edit button on pin"),onClick:n=>e&&e(n),icon:"edit"})}))},Pus6:function(e,n,o){var i=o("nKUr"),t=o("R6wO"),r=o("qD10"),a=o("n6mq");n.a=({bold:e,description:n,descriptionColor:o,external:s,hasDividerAfter:c,icon:d,onClick:l,text:p,url:m})=>{const b=Object(i.jsx)(a.e,{role:"listitem",overflow:"hidden",children:Object(i.jsx)(t.a,{bold:e,description:n,descriptionColor:o,icon:d,text:p})});return Object(i.jsxs)(a.e,{children:[m?Object(i.jsx)(r.a,{to:m,external:s,onClick:l,children:b}):Object(i.jsx)(a.T,{fullWidth:!1,onTap:l,children:b}),c&&Object(i.jsx)(a.o,{})]})}},tkfL:function(e,n,o){var i=o("3vRR");o.d(n,"a",(function(){return i.a}));var t=o("Pus6");o.d(n,"b",(function(){return t.a}))}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/287-5e592cd882169e87f593.mjs.map