(this.webpackJsonpmanthan=this.webpackJsonpmanthan||[]).push([[0],{125:function(a,e,r){},130:function(a,e,r){},144:function(a,e,r){},145:function(a,e,r){},146:function(a,e,r){"use strict";r.r(e);var n=r(1),i=r.n(n),t=r(49),h=r.n(t),o=(r(125),r(13)),s=r(57),c=(r(130),r(195)),l=r(197),d=r(107),u=r.n(d),j=r(21),b=r(3);var p=function(){var a=Object(j.f)(),e=Object(n.useState)(""),r=Object(o.a)(e,2),i=r[0],t=r[1],h=Object(n.useState)(!1),d=Object(o.a)(h,2),p=d[0],g=d[1];return console.log(i),Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)("span",{className:"title",children:"MANTHAN"}),Object(b.jsx)("p",{className:"desc",children:"THANK YOU FOR NOT BEING A SILENT SPECTATOR"}),Object(b.jsx)("div",{className:"form",children:Object(b.jsxs)("div",{className:"elements",children:[Object(b.jsx)("span",{className:"desc2",children:"Enter the Details"}),Object(b.jsx)("br",{}),Object(b.jsx)(c.a,{id:"input",label:"Phone No",variant:"outlined",defaultValue:"+91",onChange:function(a){return t(a.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{id:"recaptcha-container"}),Object(b.jsx)(l.a,{onClick:function(){g(!0),Window.recaptchaVerifier=new s.a.auth.RecaptchaVerifier("recaptcha-container"),s.a.auth().signInWithPhoneNumber(i,Window.recaptchaVerifier).then((function(e){var r=prompt("Enter your otp","");null!=r&&e.confirm(r).then((function(e){a.push("/form"),console.log(e.user,"user verified")})).catch((function(a){return console.log(a)}),window.location.reload)}))},endIcon:Object(b.jsx)(u.a,{}),loading:p,loadingPosition:"end",variant:"contained",children:"Send OTP"})]})})]})},g=r(89),m=(r(144),r(5)),O=r(36),f=s.a.initializeApp({apiKey:"AIzaSyDyi17-pGGUo9fSYtBGJtWuKPIXx7Bnmh8",authDomain:"manthan-a910d.firebaseapp.com",projectId:"manthan-a910d",storageBucket:"manthan-a910d.appspot.com",messagingSenderId:"295647304329",appId:"1:295647304329:web:ef1409e07ead6ce3a6c458"}),x=(s.a.auth(),f.firestore()),w=(s.a.storage(),r(145),r(194)),k=r(190),S=r(198),K=r(186);var v=function(){var a=Object(n.useState)(""),e=Object(o.a)(a,2),r=e[0],i=e[1],t=Object(n.useState)(""),h=Object(o.a)(t,2),s=h[0],l=h[1],d=Object(n.useState)(""),u=Object(o.a)(d,2),j=u[0],p=u[1],g=Object(n.useState)(""),f=Object(o.a)(g,2),v=f[0],A=f[1],C=Object(n.useState)(""),B=Object(o.a)(C,2),N=B[0],R=B[1],y=Object(n.useState)({tipoffno:(Math.floor(1e4*Math.random())+1e4).toString().substring(1),category:j,question1:"",question2:"",question3:"",question4:"",question5:"",question6:""}),D=Object(o.a)(y,2),P=D[0],M=D[1],T=function(a){return function(e){M(Object(O.a)(Object(O.a)({},P),{},Object(m.a)({},a,e.target.value)))}};return Object(b.jsxs)("div",{id:"userAll",children:[Object(b.jsx)("h1",{id:"title",children:"MANTHAN"}),Object(b.jsx)("p",{id:"description",children:"REGISTER YOUR TIP-OFF HERE"}),Object(b.jsxs)("form",{id:"tip-off",children:[Object(b.jsxs)("div",{id:"first",children:[Object(b.jsx)(w.a,{disablePortal:!0,id:"combo-box-demo",options:["Andhra Pradesh","Andaman and Nicobar Islands","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadar and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],onChange:function(a,e){return i(e)},renderInput:function(a){return Object(b.jsx)(c.a,Object(O.a)(Object(O.a)({},a),{},{label:"State"}))}}),Object(b.jsx)("br",{}),Object(b.jsx)(w.a,{disablePortal:!0,id:"combo-box-demo",options:["Adilabad","Anantapur","Chittoor","Kakinada","Guntur","Hyderabad","Karimnagar","Khammam","Krishna","Kurnool","Mahbubnagar","Medak","Nalgonda","Nizamabad","Ongole","Hyderabad","Srikakulam","Nellore","Visakhapatnam","Vizianagaram","Warangal","Eluru","Kadapa","Anjaw","Changlang","East Siang","Kurung Kumey","Lohit","Lower Dibang Valley","Lower Subansiri","Papum Pare","Tawang","Tirap","Dibang Valley","Upper Siang","Upper Subansiri","West Kameng","West Siang","Baksa","Barpeta","Bongaigaon","Cachar","Chirang","Darrang","Dhemaji","Dima Hasao","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Jorhat","Kamrup","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Marigaon","Nagaon","Nalbari","Sibsagar","Sonitpur","Tinsukia","Udalguri","Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran","Chandigarh","Bastar","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Jashpur","Janjgir-Champa","Korba","Koriya","Kanker","Kabirdham (Kawardha)","Mahasamund","Narayanpur","Raigarh","Rajnandgaon","Raipur","Surguja","Dadra and Nagar Haveli","Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","South Delhi","South West Delhi","West Delhi","North Goa","South Goa","Ahmedabad","Amreli district","Anand","Banaskantha","Bharuch","Bhavnagar","Dahod","The Dangs","Gandhinagar","Jamnagar","Junagadh","Kutch","Kheda","Mehsana","Narmada","Navsari","Patan","Panchmahal","Porbandar","Rajkot","Sabarkantha","Surendranagar","Surat","Vyara","Vadodara","Valsad","Ambala","Bhiwani","Faridabad","Fatehabad","Gurgaon","Hissar","Jhajjar","Jind","Karnal","Kaithal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamuna Nagar","Ambala","Bhiwani","Faridabad","Fatehabad","Gurgaon","Hissar","Jhajjar","Jind","Karnal","Kaithal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamuna Nagar","Anantnag","Badgam","Bandipora","Baramulla","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kupwara","Kulgam","Leh","Poonch","Pulwama","Rajauri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur","Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela Kharsawan","Simdega","West Singhbhum","Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Bijapur","Chamarajnagar","Chikkamagaluru","Chikkaballapur","Chitradurga","Davanagere","Dharwad","Dakshina Kannada","Gadag","Gulbarga","Hassan","Haveri district","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Shimoga","Tumkur","Udupi","Uttara Kannada","Ramanagara","Yadgir","Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thrissur","Thiruvananthapuram","Wayanad","Alirajpur","Anuppur","Ashok Nagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa (East Nimar)","Khargone (West Nimar)","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Rewa","Rajgarh","Ratlam","Raisen","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha","Ahmednagar","Akola","Amravati","Aurangabad","Bhandara","Beed","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai suburban","Nandurbar","Nanded","Nagpur","Nashik","Osmanabad","Parbhani","Pune","Raigad","Ratnagiri","Sindhudurg","Sangli","Solapur","Satara","Thane","Wardha","Washim","Yavatmal","Bishnupur","Churachandpur","Chandel","Imphal East","Senapati","Tamenglong","Thoubal","Ukhrul","Imphal West","East Garo Hills","East Khasi Hills","Jaintia Hills","Ri Bhoi","South Garo Hills","West Garo Hills","West Khasi Hills","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Dimapur","Kohima","Mokokchung","Mon","Phek","Tuensang","Wokha","Zunheboto","Angul","Boudh (Bauda)","Bhadrak","Balangir","Bargarh (Baragarh)","Balasore","Cuttack","Debagarh (Deogarh)","Dhenkanal","Ganjam","Gajapati","Jharsuguda","Jajpur","Jagatsinghpur","Khordha","Kendujhar (Keonjhar)","Kalahandi","Kandhamal","Koraput","Kendrapara","Malkangiri","Mayurbhanj","Nabarangpur","Nuapada","Nayagarh","Puri","Rayagada","Sambalpur","Subarnapur (Sonepur)","Sundergarh","Karaikal","Mahe","Pondicherry","Yanam","Amritsar","Barnala","Bathinda","Firozpur","Faridkot","Fatehgarh Sahib","Fazilka","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Sri Muktsar Sahib","Pathankot","Patiala","Rupnagar","Ajitgarh (Mohali)","Sangrur","Nawanshahr","Tarn Taran","Ajmer","Alwar","Bikaner","Barmer","Banswara","Bharatpur","Baran","Bundi","Bhilwara","Churu","Chittorgarh","Dausa","Dholpur","Dungapur","Ganganagar","Hanumangarh","Jhunjhunu","Jalore","Jodhpur","Jaipur","Jaisalmer","Jhalawar","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sikar","Sawai Madhopur","Sirohi","Tonk","Udaipur","East Sikkim","North Sikkim","South Sikkim","West Sikkim","Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Madurai","Nagapattinam","Nilgiris","Namakkal","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Tirupur","Tiruchirappalli","Theni","Tirunelveli","Thanjavur","Thoothukudi","Tiruvallur","Tiruvarur","Tiruvannamalai","Vellore","Viluppuram","Virudhunagar","Dhalai","North Tripura","South Tripura","Khowai","West Tripura","Agra","Allahabad","Aligarh","Ambedkar Nagar","Auraiya","Azamgarh","Barabanki","Budaun","Bagpat","Bahraich","Bijnor","Ballia","Banda","Balrampur","Bareilly","Basti","Bulandshahr","Chandauli","Chhatrapati Shahuji Maharaj Nagar","Chitrakoot","Deoria","Etah","Kanshi Ram Nagar","Etawah","Firozabad","Farrukhabad","Fatehpur","Faizabad","Gautam Buddh Nagar","Gonda","Ghazipur","Gorakhpur","Ghaziabad","Hamirpur","Hardoi","Mahamaya Nagar","Jhansi","Jalaun","Jyotiba Phule Nagar","Jaunpur district","Ramabai Nagar (Kanpur Dehat)","Kannauj","Kanpur","Kaushambi","Kushinagar","Lalitpur","Lakhimpur Kheri","Lucknow","Mau","Meerut","Maharajganj","Mahoba","Mirzapur","Moradabad","Mainpuri","Mathura","Muzaffarnagar","Panchsheel Nagar district (Hapur)","Pilibhit","Shamli","Pratapgarh","Rampur","Raebareli","Saharanpur","Sitapur","Shahjahanpur","Sant Kabir Nagar","Siddharthnagar","Sonbhadra","Sant Ravidas Nagar","Sultanpur","Shravasti","Unnao","Varanasi","Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi","Birbhum","Bankura","Bardhaman","Darjeeling","Dakshin Dinajpur","Hooghly","Howrah","Jalpaiguri","Cooch Behar","Kolkata","Maldah","Paschim Medinipur","Purba Medinipur","Murshidabad","Nadia","North 24 Parganas","South 24 Parganas","Purulia","Uttar Dinajpur"],onChange:function(a,e){return l(e)},renderInput:function(a){return Object(b.jsx)(c.a,Object(O.a)(Object(O.a)({},a),{},{label:"City"}))}})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{id:"second",children:[Object(b.jsx)(w.a,{disablePortal:!0,id:"combo-box-demo",options:["Murder","Theft","Assault","Aggravated-Crime","Robbery","Other"],onChange:function(a,e){return p(e)},renderInput:function(a){return Object(b.jsx)(c.a,Object(O.a)(Object(O.a)({},a),{},{label:"Category"}))}}),Object(b.jsx)("br",{}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Describe the incident in few words...",onChange:function(a){var e=a.target;return A(e.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"contained-button-file"}),Object(b.jsx)(K.a,{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(w.a,{disablePortal:!0,id:"combo-box-demo",options:["1","2","3","4","5","6","7","8","9","10"],onChange:function(a,e){return R(e)},renderInput:function(a){return Object(b.jsx)(c.a,Object(O.a)(Object(O.a)({},a),{},{label:"Urgency"}))}})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{id:"third",children:Object(b.jsxs)("label",{id:"Questionnaire",children:[Object(b.jsxs)("p",{children:["Questionnaire for : ",j]}),Object(b.jsx)("br",{}),"Murder"===j?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:"How many people were there with the offender?"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question1")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"Which Weapon was used?"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question2")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"Any special features on the offender?"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question3")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"If they came in a vechile -- vechile number,color,.etc"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question4")}),Object(b.jsx)("br",{})]}):"Theft"===j?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:"If the tipper is in a safe distance from the offender"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question1")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"How many people have been affected/going to be affected(approx.)"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question2")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"Number of offenders involving the crime."}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question3")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"What kind of vehicles used in the crime? If came in a vehicle, vehicle number"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question4")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"Special symbols, special signs on the offender/s or the offender/s belongings"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question5")}),Object(b.jsx)("br",{})]}):"Assault"===j?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:"If the tipper is in a safe distance from the offender"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question1")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"If offender is a person the tipper knows, mention name."}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question2")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"Describe height, weight and age of the offender (approx.)"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question3")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"If offender\u2019s face is visible mention facial features (like skin color,facial hair,any special moles or skin condtion,tattoos)"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question4")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"If offender/s carried any weapon for the crime."}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question5")}),Object(b.jsx)("br",{})]}):"Aggravated-Crime"===j?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:"If the tipper is in a safe distance from the offender"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question1")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"How many people(general) are present (approx.)"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question2")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"Number of offenders present in the Crime."}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question3")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"What kind of weapons the offender/s is carrying"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question4")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"Any special marks present on the offender/s (like a tattoo,birthmark)"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question5")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"If offender appears confident or anxious"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question6")}),Object(b.jsx)("br",{})]}):"Robbery"===j?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:"If the tipper is in a safe distance from the offender"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question1")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"How many people(general) are present (approx.)"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question2")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"Physique of the person"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question3")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"What kind of weapons the offender/s is carrying"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question4")}),Object(b.jsx)("br",{})]}):"Other"===j?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:"If offender used any special software for this crime"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question1")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"Offender\u2019s facial features and any other special symbols on him for easy recognition"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question2")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"If offender uses private computer or does the crime in a cybercaf\xe9."}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question3")}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:"Type of crime the offender is committing (like phishing, website spoofing, ransomware, malware, iot hacking)"}),Object(b.jsx)(k.a,{minRows:5,placeholder:"Answer..",onChange:T("question4")}),Object(b.jsx)("br",{})]}):0,Object(b.jsx)("br",{}),Object(b.jsx)(S.a,{variant:"contained",onClick:function(a){a.preventDefault(),r||s||j||v||N?x.collection("tipoffs").doc(r).set({state:r}).then((function(){x.collection("tipoffs").doc(r).collection("tipoff_state").doc(s).set({city:s}).then((function(){x.collection("tipoffs").doc(r).collection("tipoff_state").doc(s).collection("tipoff_details").add({state:r,city:s,category:j,message:v,urgency:N}).then((function(){x.collection("Questionnaire").doc(j).set({category:j}).then((function(){x.collection("Questionnaire").doc(j).collection("details").add(P).then(alert("Thankyou for not being a silent spectator!")).catch((function(a){alert(a)}))}))}))}))})):alert("Please select")},children:"Submit"})]})})]})]})};var A=function(){return Object(b.jsx)(g.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:Object(b.jsx)(p,{})}),Object(b.jsx)(j.a,{path:"/form",children:Object(b.jsx)(v,{})})]})})})},C=function(a){a&&a instanceof Function&&r.e(3).then(r.bind(null,200)).then((function(e){var r=e.getCLS,n=e.getFID,i=e.getFCP,t=e.getLCP,h=e.getTTFB;r(a),n(a),i(a),t(a),h(a)}))};h.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root")),C()}},[[146,1,2]]]);
//# sourceMappingURL=main.6281d145.chunk.js.map