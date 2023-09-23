'use client'
import React, { useState } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Link from 'next/link';
import Swal from 'sweetalert2';



const UserForm = () => {

    
    const [formData, setFormData] = useState({
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
    const [message, setMessage] = useState('');
    setTimeout(() => {
        setMessage('');
    }, 10000);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const labelMap = {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        jobTitle: 'Poste',
        companyName: 'Nom de la société',
        phoneNumber: 'Numéro de téléphone',
        nationality: 'Nationalité',
        department: 'Secteur',
        genre: 'Genre'

    };

    const [checkboxState, setCheckboxState] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    });


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

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheckboxState(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };


    const handlePhoneChange = (value) => {
        setFormData(prevState => ({ ...prevState, phoneNumber: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if all checkboxes are checked
        if (!checkboxState.checkbox1 || !checkboxState.checkbox2 || !checkboxState.checkbox3) {
            Swal.fire({
                icon: 'warning',
                title: 'Attention!',
                text: 'Veuillez accepter tous les termes et conditions avant de continuer.'
            });
            return;
        }
    
        try {
            const response = await axios.post('/api/user', formData);
            Swal.fire({
                icon: 'success',
                title: 'Succès',
                text: 'Utilisateur inscrit avec succès'
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Échec de la création de l utilisateur'
            });
        }
    };
    

    return (
        <div className="p-10">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-2">
                    {Object.keys(formData).map(key => {
                        if (key !== 'phoneNumber' && key !== 'nationality' && key !== 'department' && key !== 'genre') {
                            return (
                                <div key={key} className="w-full md:w-1/2 px-2 mb-6">
                                    <div className="relative z-0 group">
                                        <input
                                            type="text"
                                            name={key}
                                            value={formData[key]}
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

                            // PhoneNumber component
                        } else if (key === 'phoneNumber') {
                            return (
                                <div key={key} className="w-full md:w-1/2 px-2 mb-6 ">
                                    <div className="relative  w-full mb-6 group">
                                        <div className="relative flex flex z-10">
                                            <PhoneInput
                                                country={'tn'}
                                                value={formData.phoneNumber}
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

                            // Nationality select dropdown component
                        } else if (key === 'nationality') {
                            return (
                                <div key={key} className="w-full md:w-1/2 px-2 mb-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <select
                                            name={key}
                                            value={formData[key]}
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

                            // Department select dropdown component
                        } else if (key === 'department') {
                            return (
                                <div key={key} className="w-full md:w-1/2 px-2 mb-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <select
                                            name={key}
                                            value={formData[key]}
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
                                            Secteur
                                        </label>
                                    </div>
                                </div>
                            );
                        }

                        // Additional genre select dropdown component if needed
                        else if (key === 'genre') {
                            const genreOptions = ["Male", "Female"];
                            return (
                                <div key={key} className="w-full md:w-1/2 px-2 mb-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <select
                                            name={key}
                                            value={formData[key]}
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
                    })}

                    <div style={{ maxWidth: '600px', margin: '0 auto', color: '#888888', fontSize: '14px' }}>
                        <div style={{ marginBottom: '10px' }}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="checkbox1"
                                    checked={checkboxState.checkbox1}
                                    onChange={handleCheckboxChange}
                                />
                                Je reconnais que mon badge n&apos;est pas transférable et que je dois présenter une pièce d&apos;identité valide pour accéder à l&apos;événement.
                                <span className='text-red-600'>*</span>
                            </label>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="checkbox2"
                                    checked={checkboxState.checkbox2}
                                    onChange={handleCheckboxChange}
                                />
                                J&apos;ai lu et j&apos;accepte
                                <Link target="_blank" href="/politique-admission" style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>les conditions d&apos;admission</Link> et  
                                <Link target="_blank" href="/politique-confidentialite" style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}> la politique de confidentialité</Link> 
                                <span className='text-red-600'>*</span>
                            </label>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="checkbox3"
                                    checked={checkboxState.checkbox3}
                                    onChange={handleCheckboxChange}
                                />
                                Je consens à l&apos;utilisation de mes données par l&apos;organisateur, les exposants et les sponsors du DWTC pour la prestation de services et à des fins de marketing. Je sais que je peux m&apos;opposer à l&apos;envoi de newsletters à tout moment.
                                <span className='text-red-600'>*</span>
                            </label>
                        </div>
                    </div>


                </div>
                <div className="flex justify-center mt-2">
                    <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700" type="submit">S&apos;inscrire</button>
                </div>
            </form>
            {message &&
                <p className={`mt-4 text-center p-2 rounded shadow-md 
                        ${message.includes('échec') || message.includes('Veuillez')
                        ? 'text-red-600 bg-red-100 border border-red-400'
                        : 'text-green-600 bg-green-100 border border-green-400'}`}>
                    {message}
                </p>
            }
        </div>
    );
};

export default UserForm;