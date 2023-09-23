import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import Nav from '@/components/Nav/Nav';
import Aside from '@/components/Nav/Aside';
import Swal from 'sweetalert2';

const EditUser = () => {
    const router = useRouter();
    const { id } = router.query;

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        nationality: '',
        companyName: '',
        department: '',
        jobTitle: '',
        genre: ''
    });

    const [message, setMessage] = useState(""); // Added message state


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/user`, { id, ...userData }); // Updated the API endpoint
            setMessage('User updated successfully!');
        } catch (error) {
            console.error("Failed to update user data:", error);
            setMessage('Failed to update user. Please try again.');
        }
    };

    const handleEditConfirmation = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, edit it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // If the user confirms, redirect to the 'visiteur-list' page
                router.push('/visiteur-list');
            }
        });
    };

    const labelMap = {
        // Define your labels here, for instance:
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phoneNumber: 'Phone Number',
        nationality: 'Nationality ',
        companyName: 'Company Name',
        department: 'Department',
        jobTitle: 'Job Title',
        genre: 'Genre'
    };

    const nationalityOptions = [
        { value: 'afghan', label: 'Afghanistan' },
        { value: 'albanian', label: 'Albania' },
        { value: 'algerian', label: 'Algeria' },
        { value: 'american', label: 'United States of America' },
        { value: 'andorran', label: 'Andorra' },
        { value: 'angolan', label: 'Angola' },
        { value: 'antiguan', label: 'Antigua and Barbuda' },
        { value: 'argentinian', label: 'Argentina' },
        { value: 'armenian', label: 'Armenia' },
        { value: 'australian', label: 'Australia' },
        { value: 'austrian', label: 'Austria' },
        { value: 'azerbaijani', label: 'Azerbaijan' },
        { value: 'bahamian', label: 'Bahamas' },
        { value: 'bahraini', label: 'Bahrain' },
        { value: 'bangladeshi', label: 'Bangladesh' },
        { value: 'barbadian', label: 'Barbados' },
        { value: 'belarusian', label: 'Belarus' },
        { value: 'belgian', label: 'Belgium' },
        { value: 'belizean', label: 'Belize' },
        { value: 'beninese', label: 'Benin' },
        { value: 'bhutanese', label: 'Bhutan' },
        { value: 'bolivian', label: 'Bolivia' },
        { value: 'bosnian', label: 'Bosnia and Herzegovina' },
        { value: 'botswanan', label: 'Botswana' },
        { value: 'brazilian', label: 'Brazil' },
        { value: 'british', label: 'United Kingdom' },
        { value: 'bruneian', label: 'Brunei' },
        { value: 'bulgarian', label: 'Bulgaria' },
        { value: 'burkinabe', label: 'Burkina Faso' },
        { value: 'burmese', label: 'Burma' },
        { value: 'burundian', label: 'Burundi' },
        { value: 'cambodian', label: 'Cambodia' },
        { value: 'cameroonian', label: 'Cameroon' },
        { value: 'canadian', label: 'Canada' },
        { value: 'cape verdean', label: 'Cape Verde' },
        { value: 'central african', label: 'Central African Republic' },
        { value: 'chadian', label: 'Chad' },
        { value: 'chilean', label: 'Chile' },
        { value: 'chinese', label: 'China' },
        { value: 'colombian', label: 'Colombia' },
        { value: 'comoran', label: 'Comoros' },
        { value: 'congolese', label: 'Congo' },
        { value: 'costa rican', label: 'Costa Rica' },
        { value: 'croatian', label: 'Croatia' },
        { value: 'cuban', label: 'Cuba' },
        { value: 'cypriot', label: 'Cyprus' },
        { value: 'czech', label: 'Czech Republic' },
        { value: 'danish', label: 'Denmark' },
        { value: 'djibouti', label: 'Djibouti' },
        { value: 'dominican', label: 'Dominica' },
        { value: 'dutch', label: 'Netherlands' },
        { value: 'east timorese', label: 'East Timor' },
        { value: 'ecuadorean', label: 'Ecuador' },
        { value: 'egyptian', label: 'Egypt' },
        { value: 'emirian', label: 'United Arab Emirates' },
        { value: 'equatorial guinean', label: 'Equatorial Guinea' },
        { value: 'eritrean', label: 'Eritrea' },
        { value: 'estonian', label: 'Estonia' },
        { value: 'ethiopian', label: 'Ethiopia' },
        { value: 'fijian', label: 'Fiji' },
        { value: 'finnish', label: 'Finland' },
        { value: 'french', label: 'France' },
        { value: 'gabonese', label: 'Gabon' },
        { value: 'gambian', label: 'Gambia' },
        { value: 'georgian', label: 'Georgia' },
        { value: 'german', label: 'Germany' },
        { value: 'ghanaian', label: 'Ghana' },
        { value: 'greek', label: 'Greece' },
        { value: 'grenadian', label: 'Grenada' },
        { value: 'guatemalan', label: 'Guatemala' },
        { value: 'guinean', label: 'Guinea' },
        { value: 'guyanese', label: 'Guyana' },
        { value: 'haitian', label: 'Haiti' },
        { value: 'herzegovinian', label: 'Bosnia and Herzegovina' },
        { value: 'honduran', label: 'Honduras' },
        { value: 'hungarian', label: 'Hungary' },
        { value: 'icelandic', label: 'Iceland' },
        { value: 'indian', label: 'India' },
        { value: 'indonesian', label: 'Indonesia' },
        { value: 'iranian', label: 'Iran' },
        { value: 'iraqi', label: 'Iraq' },
        { value: 'irish', label: 'Ireland' },
        { value: 'israeli', label: 'Israel' },
        { value: 'italian', label: 'Italy' },
        { value: 'ivorian', label: 'Ivory Coast' },
        { value: 'jamaican', label: 'Jamaica' },
        { value: 'japanese', label: 'Japan' },
        { value: 'jordanian', label: 'Jordan' },
        { value: 'kazakhstani', label: 'Kazakhstan' },
        { value: 'kenyan', label: 'Kenya' },
        { value: 'kiribatian', label: 'Kiribati' },
        { value: 'kosovar', label: 'Kosovo' },
        { value: 'kuwaiti', label: 'Kuwait' },
        { value: 'kyrgyz', label: 'Kyrgyzstan' },
        { value: 'laotian', label: 'Laos' },
        { value: 'latvian', label: 'Latvia' },
        { value: 'lebanese', label: 'Lebanon' },
        { value: 'lesotho', label: 'Lesotho' },
        { value: 'liberian', label: 'Liberia' },
        { value: 'libyan', label: 'Libya' },
        { value: 'liechtensteiner', label: 'Liechtenstein' },
        { value: 'lithuanian', label: 'Lithuania' },
        { value: 'luxembourgish', label: 'Luxembourg' },
        { value: 'macedonian', label: 'North Macedonia' },
        { value: 'malagasy', label: 'Madagascar' },
        { value: 'malawian', label: 'Malawi' },
        { value: 'malaysian', label: 'Malaysia' },
        { value: 'maldivian', label: 'Maldives' },
        { value: 'malian', label: 'Mali' },
        { value: 'maltese', label: 'Malta' },
        { value: 'marshallese', label: 'Marshall Islands' },
        { value: 'mauritanian', label: 'Mauritania' },
        { value: 'mauritian', label: 'Mauritius' },
        { value: 'mexican', label: 'Mexico' },
        { value: 'micronesian', label: 'Micronesia' },
        { value: 'moldovan', label: 'Moldova' },
        { value: 'monacan', label: 'Monaco' },
        { value: 'mongolian', label: 'Mongolia' },
        { value: 'montenegrin', label: 'Montenegro' },
        { value: 'moroccan', label: 'Morocco' },
        { value: 'mozambican', label: 'Mozambique' },
        { value: 'namibian', label: 'Namibia' },
        { value: 'nauruan', label: 'Nauru' },
        { value: 'nepalese', label: 'Nepal' },
        { value: 'new zealander', label: 'New Zealand' },
        { value: 'nicaraguan', label: 'Nicaragua' },
        { value: 'nigerien', label: 'Niger' },
        { value: 'nigerian', label: 'Nigeria' },
        { value: 'ni-vanuatu', label: 'Vanuatu' },
        { value: 'north korean', label: 'North Korea' },
        { value: 'norwegian', label: 'Norway' },
        { value: 'omanian', label: 'Oman' },
        { value: 'pakistani', label: 'Pakistan' },
        { value: 'palauan', label: 'Palau' },
        { value: 'panamanian', label: 'Panama' },
        { value: 'papua new guinean', label: 'Papua New Guinea' },
        { value: 'paraguayan', label: 'Paraguay' },
        { value: 'peruvian', label: 'Peru' },
        { value: 'philippine', label: 'Philippines' },
        { value: 'polish', label: 'Poland' },
        { value: 'portuguese', label: 'Portugal' },
        { value: 'qatari', label: 'Qatar' },
        { value: 'romanian', label: 'Romania' },
        { value: 'russian', label: 'Russia' },
        { value: 'rwandan', label: 'Rwanda' },
        { value: 'saint kitts and nevis', label: 'Saint Kitts and Nevis' },
        { value: 'saint lucian', label: 'Saint Lucia' },
        { value: 'saint vincent and the grenadines', label: 'Saint Vincent and the Grenadines' },
        { value: 'samoan', label: 'Samoa' },
        { value: 'san marinese', label: 'San Marino' },
        { value: 'sao tomean', label: 'Sao Tome and Principe' },
        { value: 'saudi', label: 'Saudi Arabia' },
        { value: 'senegalese', label: 'Senegal' },
        { value: 'serbian', label: 'Serbia' },
        { value: 'seychellois', label: 'Seychelles' },
        { value: 'sierra leonean', label: 'Sierra Leone' },
        { value: 'singaporean', label: 'Singapore' },
        { value: 'slovakian', label: 'Slovakia' },
        { value: 'slovenian', label: 'Slovenia' },
        { value: 'solomon islander', label: 'Solomon Islands' },
        { value: 'somali', label: 'Somalia' },
        { value: 'south african', label: 'South Africa' },
        { value: 'south korean', label: 'South Korea' },
        { value: 'south sudanese', label: 'South Sudan' },
        { value: 'spanish', label: 'Spain' },
        { value: 'sri lankan', label: 'Sri Lanka' },
        { value: 'sudanese', label: 'Sudan' },
        { value: 'surinamese', label: 'Suriname' },
        { value: 'swazi', label: 'Eswatini' },
        { value: 'swedish', label: 'Sweden' },
        { value: 'swiss', label: 'Switzerland' },
        { value: 'syrian', label: 'Syria' },
        { value: 'taiwanese', label: 'Taiwan' },
        { value: 'tajik', label: 'Tajikistan' },
        { value: 'tanzanian', label: 'Tanzania' },
        { value: 'thai', label: 'Thailand' },
        { value: 'togolese', label: 'Togo' },
        { value: 'tongan', label: 'Tonga' },
        { value: 'trinidadian or tobagonian', label: 'Trinidad and Tobago' },
        { value: 'tunisian', label: 'Tunisia' },
        { value: 'turkish', label: 'Turkey' },
        { value: 'turkmen', label: 'Turkmenistan' },
        { value: 'tuvaluan', label: 'Tuvalu' },
        { value: 'ugandan', label: 'Uganda' },
        { value: 'ukrainian', label: 'Ukraine' },
        { value: 'uruguayan', label: 'Uruguay' },
        { value: 'uzbekistani', label: 'Uzbekistan' },
        { value: 'vatican', label: 'Vatican City' },
        { value: 'venezuelan', label: 'Venezuela' },
        { value: 'vietnamese', label: 'Vietnam' },
        { value: 'yemeni', label: 'Yemen' },
        { value: 'zambian', label: 'Zambia' },
        { value: 'zimbabwean', label: 'Zimbabwe' },

    ];

    const departmentOptions = [
        "Agriculture et pêche",
        "Agro-alimentaire",
        "BTP et Infrastructures",
        "Assurances",
        "Banques",
        "Électrique et électronique",
        "Mécanique et Métallurgie",
        "Énergie et environnement",
        "Matériaux de construction",
        "Textiles et cuirs",
        "Mines",
        "Tourisme et loisirs",
        "Commerce et grande distribution",
        "Artisanat",
        "Transport et logistique",
        "Télécommunications",
        "Automobile",
        "Éducation et Enseignement supérieur",
        "Formation professionnelle",
        "TIC",
        "Santé",
        "Industrie Aéronautique",
        "Équipement industriels",
        "Fond d'investissement",
        "Industrie pharmaceutique",
        "Industrie chimique",
        "Sécurité",
        "Audit et conseil",
        "Ingénierie",
        "Mobile",
        "Gouvernement",
        "Organisation internationale",
        "Organisation national",
        "Services divers",
        "Groupe diversifié",
        "Médias"
    ];

    const genreOptions = ["Male", "Female"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({ ...prevData, [name]: value }));
    };

    const handlePhoneChange = (value) => {
        setUserData(prevData => ({ ...prevData, phoneNumber: value }));
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`/api/user?id=${id}`);
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                setUserData(data);
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };

        if (id) {
            fetchUserData();
        }
    }, [id]);

    return (
        <div>
            <div>
                <Nav />
                <Aside />
                <div className="p-4 sm:ml-64">
                    <div className="p-4 border-2 border-gray-200  rounded-lg  mt-14">
                        <h2 className='text-center text-red-600 text-2xl md:text-xl font-bold '>Edit</h2>
                        <div>
                            <div className="p-10">
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap -mx-2">
                                        {Object.keys(userData).map(key => {
                                            if (key !== 'phoneNumber' && key !== 'nationality' && key !== 'department' && key !== 'genre') {
                                                return (
                                                    <div key={key} className="w-full md:w-1/2 px-2 mb-6">
                                                        <div className="relative z-0 group">
                                                            <input
                                                                type="text"
                                                                name={key}
                                                                value={userData[key]}
                                                                onChange={handleChange}
                                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                                                                placeholder=" "
                                                                required
                                                            />
                                                            <label
                                                                htmlFor={key}
                                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                            >
                                                                {labelMap[key]}
                                                            </label>
                                                        </div>
                                                    </div>
                                                );
                                            } else if (key === 'phoneNumber') {
                                                return (
                                                    <div key={key} className="w-full md:w-1/2 px-2 mb-6 ">
                                                        <div className="relative w-full mb-6 group">
                                                            <div className="relative flex flex z-10">
                                                                <PhoneInput
                                                                    country={'tn'}
                                                                    value={userData.phoneNumber}
                                                                    onChange={handlePhoneChange}
                                                                    inputProps={{
                                                                        name: 'phoneNumber',
                                                                        id: 'floating_phone',
                                                                        className: 'block py-2 pl-12 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer ',
                                                                        placeholder: ' ',
                                                                        required: true,
                                                                    }}
                                                                />
                                                            </div>
                                                            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                                Numéro de téléphone
                                                            </label>
                                                        </div>
                                                    </div>
                                                );
                                            } else if (key === 'nationality') {
                                                return (
                                                    <div key={key} className="w-full md:w-1/2 px-2 mb-6">
                                                        <div className="relative z-0 w-full mb-6 group">
                                                            <select
                                                                name={key}
                                                                value={userData[key]}
                                                                onChange={handleChange}
                                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                                                                required
                                                            >
                                                                <option value="" disabled hidden> </option>
                                                                {nationalityOptions.map(option => (
                                                                    <option key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <label
                                                                htmlFor={key}
                                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                            >
                                                                Nationalité
                                                            </label>
                                                        </div>
                                                    </div>
                                                );
                                            } else if (key === 'department') {
                                                return (
                                                    <div key={key} className="w-full md:w-1/2 px-2 mb-6">
                                                        <div className="relative z-0 w-full mb-6 group">
                                                            <select
                                                                name={key}
                                                                value={userData[key]}
                                                                onChange={handleChange}
                                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                                                                required
                                                            >
                                                                <option value="" disabled hidden> </option>
                                                                {departmentOptions.map(option => (
                                                                    <option key={option} value={option}>
                                                                        {option}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <label
                                                                htmlFor={key}
                                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                            >
                                                                Department
                                                            </label>
                                                        </div>
                                                    </div>
                                                );
                                            } else if (key === 'genre') {
                                                return (
                                                    <div key={key} className="w-full md:w-1/2 px-2 mb-6">
                                                        <div className="relative z-0 w-full mb-6 group">
                                                            <select
                                                                name={key}
                                                                value={userData[key]}
                                                                onChange={handleChange}
                                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                                                                required
                                                            >
                                                                <option value="" disabled hidden> </option>
                                                                {genreOptions.map(option => (
                                                                    <option key={option} value={option}>
                                                                        {option}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <label
                                                                htmlFor={key}
                                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                            >
                                                                Genre
                                                            </label>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>
                                    <div className="flex justify-center mt-2">
                                        <button onClick={handleEditConfirmation} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700" type="submit">Edit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
