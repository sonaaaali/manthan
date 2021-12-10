import React, { useState } from "react";
import { db } from "../firebase";
import "./UserSide.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

function UserSide() {
  const [stateInput, setStateInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [catInput, setCatInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [urgencyInput, setUrgencyInput] = useState("");
  const [questions, setQuestions] = useState({
    tipoffno: (Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1),
    category: catInput,
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
  });
  const handleInputChange = (prop) => (event) => {
    setQuestions({ ...questions, [prop]: event.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    if (
      !stateInput &&
      !cityInput &&
      !catInput &&
      !messageInput &&
      !urgencyInput
    ) {
      alert("Please select");
    } else {
      db.collection("tipoffs")
        .doc(stateInput)
        .set({ state: stateInput })
        .then(() => {
          db.collection("tipoffs")
            .doc(stateInput)
            .collection("tipoff_state")
            .doc(cityInput)
            .set({ city: cityInput })
            .then(() => {
              db.collection("tipoffs")
                .doc(stateInput)
                .collection("tipoff_state")
                .doc(cityInput)
                .collection("tipoff_details")
                .add({
                  state: stateInput,
                  city: cityInput,
                  category: catInput,
                  message: messageInput,
                  urgency: urgencyInput,
                })
                .then(() => {
                  db.collection("Questionnaire")
                    .doc(catInput)
                    .set({ category: catInput })
                    .then(() => {
                      db.collection("Questionnaire")
                        .doc(catInput)
                        .collection("details")
                        .add(questions)
                        .then(
                          alert("Thankyou for not being a silent spectator!")
                        )
                        .catch((err) => {
                          alert(err);
                        });
                    });
                });
            });
        });
    }
  };
  const states = [
    "Andhra Pradesh",
    "Andaman and Nicobar Islands",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadar and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const city = [
    "Adilabad",
    "Anantapur",
    "Chittoor",
    "Kakinada",
    "Guntur",
    "Hyderabad",
    "Karimnagar",
    "Khammam",
    "Krishna",
    "Kurnool",
    "Mahbubnagar",
    "Medak",
    "Nalgonda",
    "Nizamabad",
    "Ongole",
    "Hyderabad",
    "Srikakulam",
    "Nellore",
    "Visakhapatnam",
    "Vizianagaram",
    "Warangal",
    "Eluru",
    "Kadapa",
    "Anjaw",
    "Changlang",
    "East Siang",
    "Kurung Kumey",
    "Lohit",
    "Lower Dibang Valley",
    "Lower Subansiri",
    "Papum Pare",
    "Tawang",
    "Tirap",
    "Dibang Valley",
    "Upper Siang",
    "Upper Subansiri",
    "West Kameng",
    "West Siang",
    "Baksa",
    "Barpeta",
    "Bongaigaon",
    "Cachar",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dima Hasao",
    "Dhubri",
    "Dibrugarh",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Marigaon",
    "Nagaon",
    "Nalbari",
    "Sibsagar",
    "Sonitpur",
    "Tinsukia",
    "Udalguri",
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran",
    "Chandigarh",
    "Bastar",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Jashpur",
    "Janjgir-Champa",
    "Korba",
    "Koriya",
    "Kanker",
    "Kabirdham (Kawardha)",
    "Mahasamund",
    "Narayanpur",
    "Raigarh",
    "Rajnandgaon",
    "Raipur",
    "Surguja",
    "Dadra and Nagar Haveli",
    "Central Delhi",
    "East Delhi",
    "New Delhi",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "South Delhi",
    "South West Delhi",
    "West Delhi",
    "North Goa",
    "South Goa",
    "Ahmedabad",
    "Amreli district",
    "Anand",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Dahod",
    "The Dangs",
    "Gandhinagar",
    "Jamnagar",
    "Junagadh",
    "Kutch",
    "Kheda",
    "Mehsana",
    "Narmada",
    "Navsari",
    "Patan",
    "Panchmahal",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surendranagar",
    "Surat",
    "Vyara",
    "Vadodara",
    "Valsad",
    "Ambala",
    "Bhiwani",
    "Faridabad",
    "Fatehabad",
    "Gurgaon",
    "Hissar",
    "Jhajjar",
    "Jind",
    "Karnal",
    "Kaithal",
    "Kurukshetra",
    "Mahendragarh",
    "Mewat",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamuna Nagar",
    "Ambala",
    "Bhiwani",
    "Faridabad",
    "Fatehabad",
    "Gurgaon",
    "Hissar",
    "Jhajjar",
    "Jind",
    "Karnal",
    "Kaithal",
    "Kurukshetra",
    "Mahendragarh",
    "Mewat",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamuna Nagar",
    "Anantnag",
    "Badgam",
    "Bandipora",
    "Baramulla",
    "Doda",
    "Ganderbal",
    "Jammu",
    "Kargil",
    "Kathua",
    "Kishtwar",
    "Kupwara",
    "Kulgam",
    "Leh",
    "Poonch",
    "Pulwama",
    "Rajauri",
    "Ramban",
    "Reasi",
    "Samba",
    "Shopian",
    "Srinagar",
    "Udhampur",
    "Bokaro",
    "Chatra",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "East Singhbhum",
    "Garhwa",
    "Giridih",
    "Godda",
    "Gumla",
    "Hazaribag",
    "Jamtara",
    "Khunti",
    "Koderma",
    "Latehar",
    "Lohardaga",
    "Pakur",
    "Palamu",
    "Ramgarh",
    "Ranchi",
    "Sahibganj",
    "Seraikela Kharsawan",
    "Simdega",
    "West Singhbhum",
    "Bagalkot",
    "Bangalore Rural",
    "Bangalore Urban",
    "Belgaum",
    "Bellary",
    "Bidar",
    "Bijapur",
    "Chamarajnagar",
    "Chikkamagaluru",
    "Chikkaballapur",
    "Chitradurga",
    "Davanagere",
    "Dharwad",
    "Dakshina Kannada",
    "Gadag",
    "Gulbarga",
    "Hassan",
    "Haveri district",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysore",
    "Raichur",
    "Shimoga",
    "Tumkur",
    "Udupi",
    "Uttara Kannada",
    "Ramanagara",
    "Yadgir",
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thrissur",
    "Thiruvananthapuram",
    "Wayanad",
    "Alirajpur",
    "Anuppur",
    "Ashok Nagar",
    "Balaghat",
    "Barwani",
    "Betul",
    "Bhind",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dindori",
    "Guna",
    "Gwalior",
    "Harda",
    "Hoshangabad",
    "Indore",
    "Jabalpur",
    "Jhabua",
    "Katni",
    "Khandwa (East Nimar)",
    "Khargone (West Nimar)",
    "Mandla",
    "Mandsaur",
    "Morena",
    "Narsinghpur",
    "Neemuch",
    "Panna",
    "Rewa",
    "Rajgarh",
    "Ratlam",
    "Raisen",
    "Sagar",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shajapur",
    "Sheopur",
    "Shivpuri",
    "Sidhi",
    "Singrauli",
    "Tikamgarh",
    "Ujjain",
    "Umaria",
    "Vidisha",
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Bhandara",
    "Beed",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai suburban",
    "Nandurbar",
    "Nanded",
    "Nagpur",
    "Nashik",
    "Osmanabad",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sindhudurg",
    "Sangli",
    "Solapur",
    "Satara",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal",
    "Bishnupur",
    "Churachandpur",
    "Chandel",
    "Imphal East",
    "Senapati",
    "Tamenglong",
    "Thoubal",
    "Ukhrul",
    "Imphal West",
    "East Garo Hills",
    "East Khasi Hills",
    "Jaintia Hills",
    "Ri Bhoi",
    "South Garo Hills",
    "West Garo Hills",
    "West Khasi Hills",
    "Aizawl",
    "Champhai",
    "Kolasib",
    "Lawngtlai",
    "Lunglei",
    "Mamit",
    "Saiha",
    "Serchhip",
    "Dimapur",
    "Kohima",
    "Mokokchung",
    "Mon",
    "Phek",
    "Tuensang",
    "Wokha",
    "Zunheboto",
    "Angul",
    "Boudh (Bauda)",
    "Bhadrak",
    "Balangir",
    "Bargarh (Baragarh)",
    "Balasore",
    "Cuttack",
    "Debagarh (Deogarh)",
    "Dhenkanal",
    "Ganjam",
    "Gajapati",
    "Jharsuguda",
    "Jajpur",
    "Jagatsinghpur",
    "Khordha",
    "Kendujhar (Keonjhar)",
    "Kalahandi",
    "Kandhamal",
    "Koraput",
    "Kendrapara",
    "Malkangiri",
    "Mayurbhanj",
    "Nabarangpur",
    "Nuapada",
    "Nayagarh",
    "Puri",
    "Rayagada",
    "Sambalpur",
    "Subarnapur (Sonepur)",
    "Sundergarh",
    "Karaikal",
    "Mahe",
    "Pondicherry",
    "Yanam",
    "Amritsar",
    "Barnala",
    "Bathinda",
    "Firozpur",
    "Faridkot",
    "Fatehgarh Sahib",
    "Fazilka",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Mansa",
    "Moga",
    "Sri Muktsar Sahib",
    "Pathankot",
    "Patiala",
    "Rupnagar",
    "Ajitgarh (Mohali)",
    "Sangrur",
    "Nawanshahr",
    "Tarn Taran",
    "Ajmer",
    "Alwar",
    "Bikaner",
    "Barmer",
    "Banswara",
    "Bharatpur",
    "Baran",
    "Bundi",
    "Bhilwara",
    "Churu",
    "Chittorgarh",
    "Dausa",
    "Dholpur",
    "Dungapur",
    "Ganganagar",
    "Hanumangarh",
    "Jhunjhunu",
    "Jalore",
    "Jodhpur",
    "Jaipur",
    "Jaisalmer",
    "Jhalawar",
    "Karauli",
    "Kota",
    "Nagaur",
    "Pali",
    "Pratapgarh",
    "Rajsamand",
    "Sikar",
    "Sawai Madhopur",
    "Sirohi",
    "Tonk",
    "Udaipur",
    "East Sikkim",
    "North Sikkim",
    "South Sikkim",
    "West Sikkim",
    "Ariyalur",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Madurai",
    "Nagapattinam",
    "Nilgiris",
    "Namakkal",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Salem",
    "Sivaganga",
    "Tirupur",
    "Tiruchirappalli",
    "Theni",
    "Tirunelveli",
    "Thanjavur",
    "Thoothukudi",
    "Tiruvallur",
    "Tiruvarur",
    "Tiruvannamalai",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
    "Dhalai",
    "North Tripura",
    "South Tripura",
    "Khowai",
    "West Tripura",
    "Agra",
    "Allahabad",
    "Aligarh",
    "Ambedkar Nagar",
    "Auraiya",
    "Azamgarh",
    "Barabanki",
    "Budaun",
    "Bagpat",
    "Bahraich",
    "Bijnor",
    "Ballia",
    "Banda",
    "Balrampur",
    "Bareilly",
    "Basti",
    "Bulandshahr",
    "Chandauli",
    "Chhatrapati Shahuji Maharaj Nagar",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Kanshi Ram Nagar",
    "Etawah",
    "Firozabad",
    "Farrukhabad",
    "Fatehpur",
    "Faizabad",
    "Gautam Buddh Nagar",
    "Gonda",
    "Ghazipur",
    "Gorakhpur",
    "Ghaziabad",
    "Hamirpur",
    "Hardoi",
    "Mahamaya Nagar",
    "Jhansi",
    "Jalaun",
    "Jyotiba Phule Nagar",
    "Jaunpur district",
    "Ramabai Nagar (Kanpur Dehat)",
    "Kannauj",
    "Kanpur",
    "Kaushambi",
    "Kushinagar",
    "Lalitpur",
    "Lakhimpur Kheri",
    "Lucknow",
    "Mau",
    "Meerut",
    "Maharajganj",
    "Mahoba",
    "Mirzapur",
    "Moradabad",
    "Mainpuri",
    "Mathura",
    "Muzaffarnagar",
    "Panchsheel Nagar district (Hapur)",
    "Pilibhit",
    "Shamli",
    "Pratapgarh",
    "Rampur",
    "Raebareli",
    "Saharanpur",
    "Sitapur",
    "Shahjahanpur",
    "Sant Kabir Nagar",
    "Siddharthnagar",
    "Sonbhadra",
    "Sant Ravidas Nagar",
    "Sultanpur",
    "Shravasti",
    "Unnao",
    "Varanasi",
    "Almora",
    "Bageshwar",
    "Chamoli",
    "Champawat",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri Garhwal",
    "Pithoragarh",
    "Rudraprayag",
    "Tehri Garhwal",
    "Udham Singh Nagar",
    "Uttarkashi",
    "Birbhum",
    "Bankura",
    "Bardhaman",
    "Darjeeling",
    "Dakshin Dinajpur",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Cooch Behar",
    "Kolkata",
    "Maldah",
    "Paschim Medinipur",
    "Purba Medinipur",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "South 24 Parganas",
    "Purulia",
    "Uttar Dinajpur",
  ];
  const cat = [
    "Murder",
    "Theft",
    "Assault",
    "Aggravated-Crime",
    "Robbery",
    "Other",
  ];
  const urge = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div id="userAll">
      <h1 id="title">MANTHAN</h1>
      <p id="description">REGISTER YOUR TIP-OFF HERE</p>
      <form id="tip-off">
        <div id="first">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={states}
            // sx={{ width: 800 }}
            onChange={(event, value) => setStateInput(value)}
            renderInput={(params) => <TextField {...params} label="State" />}
          />
          <br />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={city}
            // sx={{ width: 800 }}
            onChange={(event, value) => setCityInput(value)}
            renderInput={(params) => <TextField {...params} label="City" />}
          />
        </div>
        <br />
        <br />
        <br />
        <div id="second">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cat}
            // sx={{ width: 800 }}
            onChange={(event, value) => setCatInput(value)}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
          <br />
          <TextareaAutosize
            minRows={5}
            placeholder="Describe the incident in few words..."
            onChange={({ target }) => setMessageInput(target.value)}
            // style={{ width: 800 }}
          />
          <br />
          <br />
          <label htmlFor="contained-button-file">
            {/* upload */}
            {/* <Button variant="contained" component="span">
              Upload
            </Button> */}
          </label>
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <br />
          <br />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={urge}
            // sx={{ width: 800 }}
            onChange={(event, value) => setUrgencyInput(value)}
            renderInput={(params) => <TextField {...params} label="Urgency" />}
          />
        </div>
        <br />
        <br />
        <br />
        <div id="third">
          <label id="Questionnaire">
            <p>Questionnaire for : {catInput}</p>
            <br />
            {(() => {
              if (catInput === "Murder") {
                return (
                  <>
                    <div>How many people were there with the offender?</div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question1")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>Which Weapon was used?</div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question2")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>Any special features on the offender?</div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question3")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>
                      If they came in a vechile -- vechile number,color,.etc
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question4")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                  </>
                );
              } else if (catInput === "Theft") {
                return (
                  <>
                    <div>
                      If the tipper is in a safe distance from the offender
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question1")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>
                      How many people have been affected/going to be
                      affected(approx.)
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question2")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>Number of offenders involving the crime.</div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question3")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>
                      What kind of vehicles used in the crime? If came in a
                      vehicle, vehicle number
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question4")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>
                      Special symbols, special signs on the offender/s or the
                      offender/s belongings
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question5")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                  </>
                );
              } else if (catInput === "Assault") {
                return (
                  <>
                    <div>
                      If the tipper is in a safe distance from the offender
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question1")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>
                      If offender is a person the tipper knows, mention name.
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question2")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>
                      Describe height, weight and age of the offender (approx.)
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question3")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>
                      If offender’s face is visible mention facial features
                      (like skin color,facial hair,any special moles or skin
                      condtion,tattoos)
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question4")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>If offender/s carried any weapon for the crime.</div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question5")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                  </>
                );
              } else if (catInput === "Aggravated-Crime") {
                return (
                  <>
                    <div>
                      If the tipper is in a safe distance from the offender
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question1")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>How many people(general) are present (approx.)</div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question2")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>Number of offenders present in the Crime.</div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question3")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>What kind of weapons the offender/s is carrying</div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question4")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>
                      Any special marks present on the offender/s (like a
                      tattoo,birthmark)
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question5")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>If offender appears confident or anxious</div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question6")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                  </>
                );
              } else if (catInput === "Robbery") {
                return (
                  <>
                    <div>
                      If the tipper is in a safe distance from the offender
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question1")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>How many people(general) are present (approx.)</div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question2")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>Physique of the person</div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question3")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>What kind of weapons the offender/s is carrying</div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question4")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                  </>
                );
              } else if (catInput === "Other") {
                return (
                  <>
                    <div>
                      If offender used any special software for this crime
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question1")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>
                      Offender’s facial features and any other special symbols
                      on him for easy recognition
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question2")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>
                      If offender uses private computer or does the crime in a
                      cybercafé.
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question3")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                    <div>
                      Type of crime the offender is committing (like phishing,
                      website spoofing, ransomware, malware, iot hacking)
                    </div>
                    <TextareaAutosize
                      minRows={5}
                      placeholder="Answer.."
                      onChange={handleInputChange("question4")}
                      //   style={{ width: 800 }}
                    />
                    <br />
                  </>
                );
              } else {
                return 0;
              }
            })()}
            <br />
            <Button variant="contained" onClick={submit}>
              Submit
            </Button>
          </label>
        </div>
      </form>
    </div>
  );
}
//
export default UserSide;
