import{r as y,j as t,w as v,x as P,y as I,m as S,z as O}from"./index-D2g3KFVD.js";const L=({totalPrice:a,cartId:s})=>{const d=localStorage.getItem("delver_address"),r=window.OmiseCard;y.useEffect(()=>{const n=document.createElement("script");return n.src="https://cdn.omise.co/omise.js",n.async=!0,n.onload=i,document.body.appendChild(n),()=>{document.body.removeChild(n)}},[]);const i=()=>{window.OmiseCard&&document.getElementById("checkout-button")&&r.configureButton("#checkout-button",{currency:"thb",frameLabel:"Sabai Shop",submitLabel:"PAY NOW",buttonLabel:"Pay with Omise"})},p=()=>{r.configure({defaultPaymentMethod:"credit_card",otherPaymentMethod:[]}),r.configureButton("#credit-card"),r.attach()},e=async()=>{const n=localStorage.getItem("token"),c=await v();n&&r.open({frameLabel:"DRCBD Store",frameDescription:`Invoice #${String(c.totalOrder+1).padStart(5,"0")}`,amount:Number(a)*100,publicKey:"pkey_5whyumj8qwo472mjrsh",onCreateTokenSuccess:async m=>{const h=await P({token:m,amount:Number(a)*100,cartId:s,userAdd:JSON.parse(d),description:`Invoice #${String(c.totalOrder+1).padStart(5,"0")}`});h.authorizeUri&&(localStorage.setItem("omisePaymentId",h.data.paymentId),window.location.href=h.data.authorizeUri)},onFormClosed:()=>{}})},u=n=>{n.preventDefault(),p(),e()};return t.jsxs("div",{children:[t.jsx("button",{id:"checkout-button",style:{display:"none"}}),t.jsx("form",{children:t.jsx("button",{onClick:n=>u(n),id:"credit-card",children:"Pay With Credit/Debit Card"})})]})},_=({totalPrice:a,cartId:s})=>{const d=window.OmiseCard,r=localStorage.getItem("delver_address");y.useEffect(()=>{const n=document.createElement("script");return n.src="https://cdn.omise.co/omise.js",n.async=!0,n.onload=i,document.body.appendChild(n),()=>{document.body.removeChild(n)}},[]);const i=()=>{window.OmiseCard&&d.configureButton("#internet_banking",{currency:"thb",frameLabel:"DR.CBD Store",submitLabel:"PAY NOW",buttonLabel:"Pay with Omise"})},p=()=>{d.configure({defaultPaymentMethod:"internet_banking",otherPaymentMethod:["bill_payment_tesco_lotus","alipay","credit_card","pay_easy","net_banking","convenience_store"]}),d.configureButton("#internet_banking"),d.attach()},e=async()=>{const n=await v();d.open({frameLabel:"DRCBD Store",frameDescription:`Invoice #${String(n.totalOrder+1).padStart(5,"0")}`,amount:Number(a)*100,publicKey:"pkey_5whyumj8qwo472mjrsh",onCreateTokenSuccess:async c=>{const l=await I({token:c,amount:Number(a)*100,cartId:s,userAdd:JSON.parse(r)});l.data.authorizeUri&&(localStorage.setItem("omisePaymentId",l.paymentId),window.location.href=l.authorizeUri)},onFormClosed:()=>{console.log("close")}})},u=n=>{n.preventDefault(),p(),e()};return t.jsxs("div",{children:[" ",t.jsx("script",{url:"https://cdn.omise.co/omise.js",onLoad:i}),t.jsx("form",{children:t.jsx("button",{onClick:n=>u(n),id:"internet_banking",children:"Pay With internet banking"})})," "]})},D=()=>{var u,n,c,m,l,h,x,f;const{language:a}=S(),[s,d]=y.useState({}),r=["Product","Quantity","Price","Delivery Charge"],[i,p]=y.useState(0),e=O(o=>o.cart);return y.useEffect(()=>{(async()=>{var j;const g=[];let b=0;(j=e==null?void 0:e.cart)==null||j.items.forEach(w=>{var C,k;g.push({deliveryCharge:((C=e==null?void 0:e.cart)==null?void 0:C.totalPrice)<1500?50:0,quantity:w.quantity,productId:w.productId}),b=((k=e==null?void 0:e.cart)==null?void 0:k.totalPrice)<1500?50:0}),d(g),p(b)})()},[(u=e==null?void 0:e.cart)==null?void 0:u.items,(n=e==null?void 0:e.cart)==null?void 0:n.totalPrice]),t.jsx(t.Fragment,{children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingTop:"5rem",height:"100%",paddingBottom:"2rem"},children:[t.jsx("h1",{className:"title-text",style:{paddingBottom:"1rem"},children:"Complete you order"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",maxWidth:"800px",width:"100%",alignItems:"center",justifyContent:"center"},children:t.jsxs("div",{style:{maxWidth:"600px",width:"100%",padding:"1rem"},className:"center",children:[t.jsx("h3",{children:"Order Summery"}),t.jsx("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",border:"1px solid #003735",padding:"5px",background:"#003735",color:"#fff"},children:r==null?void 0:r.map(o=>t.jsx("p",{style:{width:o==="Product"?"55%":"15%",textAlign:o==="Product"?"start":"center",borderLeft:o==="Product"?"0":"1px solid",fontWeight:"bold"},children:o},o))}),t.jsxs("div",{style:{width:"100%",borderLeft:"1px solid",borderRight:"1px solid",borderBottom:"1px solid"},children:[(s==null?void 0:s.length)>0&&(s==null?void 0:s.map((o,g)=>t.jsxs("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",borderBottom:"1px solid",padding:"5px",fontWeight:"bold",height:"4rem"},children:[t.jsx("p",{style:{width:"55%"},children:a==="eng"?o.productId.eng.name:o.productId.thi.name}),t.jsx("p",{style:{width:"15%",textAlign:"center",borderLeft:"1px solid"},children:o==null?void 0:o.quantity}),t.jsxs("p",{style:{width:"15%",textAlign:"center",borderLeft:"1px solid"},children:["฿ ",o==null?void 0:o.productId.price]}),t.jsxs("p",{style:{width:"15%",textAlign:"center",borderLeft:"1px solid"},children:["฿ ",o==null?void 0:o.deliveryCharge]})]},g))),t.jsxs("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",padding:"5px",fontWeight:"bold"},children:[t.jsx("p",{style:{width:"52.5%"},children:"Total"}),t.jsx("p",{style:{width:"10%",textAlign:"center",borderLeft:"1px solid",paddingLeft:"20px"},children:(c=e==null?void 0:e.cart)==null?void 0:c.totalItems}),t.jsx("p",{}),t.jsxs("p",{style:{width:"30%",textAlign:"center",borderLeft:"1px solid"},children:["฿ ",((m=e==null?void 0:e.cart)==null?void 0:m.totalPrice)+i]})]})]})]})}),t.jsx(L,{totalPrice:((l=e==null?void 0:e.cart)==null?void 0:l.totalPrice)+i,cartId:(h=e==null?void 0:e.cart)==null?void 0:h._id}),t.jsx("div",{style:{height:"20px"}}),t.jsx(_,{totalPrice:((x=e==null?void 0:e.cart)==null?void 0:x.totalPrice)+i,cartId:(f=e==null?void 0:e.cart)==null?void 0:f._id})]})})};export{D as default};
