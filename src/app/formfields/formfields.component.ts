import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {ignoreElements} from 'rxjs/operators';

@Component({
  selector: 'app-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.css']
})
export class FormfieldsComponent implements OnInit {
  formFields = {
    appFields: [
      {
        name: 'first_name',
        type: 'text',
        required: true,
        selected: true,
        title: 'First Name',
        options: [],
        display: 'selected'
      },
      {
        name: 'state',
        type: 'select',
        required: false,
        selected: true,
        title: 'State/Province',
        options: [],
        display: 'selected'
      },
      {
        name: 'last_name',
        type: 'text',
        required: true,
        selected: true,
        title: 'Last Name',
        options: [],
        display: 'selected'
      },
      {
        name: 'company',
        type: 'text',
        required: false,
        selected: true,
        title: 'Company',
        options: [],
        display: 'selected'
      },
      {
        name: 'email',
        type: 'text',
        required: true,
        selected: true,
        title: 'Email',
        options: [],
        display: 'selected'
      },
      {
        name: 'mobile_phone',
        type: 'text',
        required: false,
        selected: false,
        title: 'Mobile Phone',
        options: [],
        display: 'selected'
      },
      {
        name: 'industry',
        type: 'select',
        required: true,
        selected: true,
        title: 'Industry',
        options: [
          {
            key: 'Agriculture',
            value: 'Agriculture'
          },
          {
            key: 'Forestry & Fishing Banking',
            value: 'Forestry & Fishing Banking'
          },
          {
            key: 'Finance & Insurance',
            value: 'Finance & Insurance'
          },
          {
            key: 'Business Services',
            value: 'Business Services'
          },
          {
            key: 'Communications',
            value: 'Communications'
          },
          {
            key: 'Construction',
            value: 'Construction'
          },
          {
            key: 'Education - Higher Education',
            value: 'Education - Higher Education'
          },
          {
            key: 'Education - Primary & Secondary',
            value: 'Education - Primary & Secondary'
          },
          {
            key: 'Government - Federal / National',
            value: 'Government - Federal / National'
          },
          {
            key: 'Government - State / Provincial',
            value: 'Government - State / Provincial'
          },
          {
            key: 'Government - Local',
            value: 'Government - Local'
          },
          {
            key: 'Healthcare',
            value: 'Healthcare'
          },
          {
            key: 'High Tech',
            value: 'High Tech'
          },
          {
            key: 'Life Sciences',
            value: 'Life Sciences'
          },
          {
            key: 'Manufacturing - Discrete',
            value: 'Manufacturing - Discrete'
          },
          {
            key: 'Manufacturing - Process',
            value: 'Manufacturing - Process'
          },
          {
            key: 'Media & Entertainment',
            value: 'Media & Entertainment'
          },
          {
            key: 'Oil & Gas',
            value: 'Oil & Gas'
          },
          {
            key: 'Pharmaceutical',
            value: 'Pharmaceutical'
          },
          {
            key: 'Retail & Wholesale',
            value: 'Retail & Wholesale'
          },
          {
            key: 'Services',
            value: 'Services'
          },
          {
            key: 'Transportation',
            value: 'Transportation'
          },
          {
            key: 'Utilities',
            value: 'Utilities'
          }
        ],
        display: 'selected'
      },
      {
        name: 'middle_name',
        type: 'text',
        required: false,
        selected: true,
        title: 'Middle Name',
        options: [],
        display: 'selected'
      },
      {
        name: 'category',
        type: 'checkbox',
        required: true,
        selected: true,
        title: 'Category',
        options: [
          {
            key: '1',
            value: '1',
            default: false
          },
          {
            key: '2',
            value: '2',
            default: false
          },
          {
            key: '3',
            value: '3',
            default: false
          }
        ],
        display: 'selected'
      },
      {
        name: 'ready',
        type: 'checkbox',
        required: false,
        selected: true,
        title: 'Test',
        options: [
          {
            key: '321312',
            value: '4353453',
            default: false
          },
          {
            key: '32131231',
            value: '5664',
            default: false
          },
          {
            key: '6757567',
            value: '97898797',
            default: false
          }
        ],
        display: 'selected'
      },
      {
        name: 'notes',
        type: 'textarea',
        required: true,
        selected: true,
        title: 'Notes',
        options: [],
        display: 'selected'
      },
      {
        name: 'address1',
        type: 'text',
        required: false,
        selected: true,
        title: 'Address',
        options: [],
        display: 'selected'
      },
      {
        name: 'country',
        type: 'text',
        required: true,
        selected: true,
        title: 'Country',
        options: [],
        display: 'selected'
      },
      {
        name: 'Are you a public employee',
        type: 'radio',
        required: true,
        selected: true,
        title: 'Are you a public employee',
        options: [
          {
            key: 'I am a public employee',
            value: 'I am a public employee'
          },
          {
            key: 'I am not a public employee',
            value: 'I am not a public employee'
          }
        ],
        display: 'selected'
      },
      {
        name: 'Would you like to be contacted by a representative to discuss our solutions?',
        type: 'radio',
        required: false,
        selected: true,
        title: 'Would you like to be contacted by a representative to discuss our solutions?',
        options: [
          {
            key: 'Yes',
            value: 'Yes'
          },
          {
            key: 'No',
            value: 'No'
          }
        ],
        display: 'selected'
      },
      {
        name: 'Who is your sales representative?',
        type: 'text',
        required: false,
        selected: true,
        title: 'Who is your sales representative?',
        options: [],
        display: 'selected'
      },
      {
        name: 'multi',
        type: 'multi-select',
        required: false,
        selected: true,
        title: 'Multi',
        options: [
          {
            key: 'a',
            value: 'a',
            default: false
          },
          {
            key: 'b',
            value: 'b',
            default: false
          },
          {
            key: 'c',
            value: 'c',
            default: false
          },
          {
            key: 'd',
            value: 'd',
            default: false
          },
          {
            key: 'e',
            value: 'e',
            default: false
          }
        ],
        display: 'selected'
      }
    ],
    compName: 'Hacktech',
    countries: [
      {
        id: 3,
        code: 'AF',
        name: 'Afghanistan',
        sort_order: 0
      },
      {
        id: 15,
        code: 'AX',
        name: 'Åland',
        sort_order: 0
      },
      {
        id: 6,
        code: 'AL',
        name: 'Albania',
        sort_order: 0
      },
      {
        id: 62,
        code: 'DZ',
        name: 'Algeria',
        sort_order: 0
      },
      {
        id: 11,
        code: 'AS',
        name: 'American Samoa',
        sort_order: 0
      },
      {
        id: 1,
        code: 'AD',
        name: 'Andorra',
        sort_order: 0
      },
      {
        id: 8,
        code: 'AO',
        name: 'Angola',
        sort_order: 0
      },
      {
        id: 5,
        code: 'AI',
        name: 'Anguilla',
        sort_order: 0
      },
      {
        id: 9,
        code: 'AQ',
        name: 'Antarctica',
        sort_order: 0
      },
      {
        id: 4,
        code: 'AG',
        name: 'Antigua and Barbuda',
        sort_order: 0
      },
      {
        id: 10,
        code: 'AR',
        name: 'Argentina',
        sort_order: 0
      },
      {
        id: 7,
        code: 'AM',
        name: 'Armenia',
        sort_order: 0
      },
      {
        id: 14,
        code: 'AW',
        name: 'Aruba',
        sort_order: 0
      },
      {
        id: 13,
        code: 'AU',
        name: 'Australia',
        sort_order: 0
      },
      {
        id: 12,
        code: 'AT',
        name: 'Austria',
        sort_order: 0
      },
      {
        id: 16,
        code: 'AZ',
        name: 'Azerbaijan',
        sort_order: 0
      },
      {
        id: 32,
        code: 'BS',
        name: 'Bahamas',
        sort_order: 0
      },
      {
        id: 23,
        code: 'BH',
        name: 'Bahrain',
        sort_order: 0
      },
      {
        id: 19,
        code: 'BD',
        name: 'Bangladesh',
        sort_order: 0
      },
      {
        id: 18,
        code: 'BB',
        name: 'Barbados',
        sort_order: 0
      },
      {
        id: 36,
        code: 'BY',
        name: 'Belarus',
        sort_order: 0
      },
      {
        id: 20,
        code: 'BE',
        name: 'Belgium',
        sort_order: 0
      },
      {
        id: 37,
        code: 'BZ',
        name: 'Belize',
        sort_order: 0
      },
      {
        id: 25,
        code: 'BJ',
        name: 'Benin',
        sort_order: 0
      },
      {
        id: 27,
        code: 'BM',
        name: 'Bermuda',
        sort_order: 0
      },
      {
        id: 33,
        code: 'BT',
        name: 'Bhutan',
        sort_order: 0
      },
      {
        id: 29,
        code: 'BO',
        name: 'Bolivia',
        sort_order: 0
      },
      {
        id: 30,
        code: 'BQ',
        name: 'Bonaire',
        sort_order: 0
      },
      {
        id: 17,
        code: 'BA',
        name: 'Bosnia and Herzegovina',
        sort_order: 0
      },
      {
        id: 35,
        code: 'BW',
        name: 'Botswana',
        sort_order: 0
      },
      {
        id: 34,
        code: 'BV',
        name: 'Bouvet Island',
        sort_order: 0
      },
      {
        id: 31,
        code: 'BR',
        name: 'Brazil',
        sort_order: 0
      },
      {
        id: 106,
        code: 'IO',
        name: 'British Indian Ocean Territory',
        sort_order: 0
      },
      {
        id: 239,
        code: 'VG',
        name: 'British Virgin Islands',
        sort_order: 0
      },
      {
        id: 28,
        code: 'BN',
        name: 'Brunei',
        sort_order: 0
      },
      {
        id: 22,
        code: 'BG',
        name: 'Bulgaria',
        sort_order: 0
      },
      {
        id: 21,
        code: 'BF',
        name: 'Burkina Faso',
        sort_order: 0
      },
      {
        id: 24,
        code: 'BI',
        name: 'Burundi',
        sort_order: 0
      },
      {
        id: 117,
        code: 'KH',
        name: 'Cambodia',
        sort_order: 0
      },
      {
        id: 47,
        code: 'CM',
        name: 'Cameroon',
        sort_order: 0
      },
      {
        id: 38,
        code: 'CA',
        name: 'Canada',
        sort_order: 0
      },
      {
        id: 52,
        code: 'CV',
        name: 'Cape Verde',
        sort_order: 0
      },
      {
        id: 124,
        code: 'KY',
        name: 'Cayman Islands',
        sort_order: 0
      },
      {
        id: 41,
        code: 'CF',
        name: 'Central African Republic',
        sort_order: 0
      },
      {
        id: 215,
        code: 'TD',
        name: 'Chad',
        sort_order: 0
      },
      {
        id: 46,
        code: 'CL',
        name: 'Chile',
        sort_order: 0
      },
      {
        id: 48,
        code: 'CN',
        name: 'China',
        sort_order: 0
      },
      {
        id: 54,
        code: 'CX',
        name: 'Christmas Island',
        sort_order: 0
      },
      {
        id: 39,
        code: 'CC',
        name: 'Cocos [Keeling] Islands',
        sort_order: 0
      },
      {
        id: 49,
        code: 'CO',
        name: 'Colombia',
        sort_order: 0
      },
      {
        id: 119,
        code: 'KM',
        name: 'Comoros',
        sort_order: 0
      },
      {
        id: 45,
        code: 'CK',
        name: 'Cook Islands',
        sort_order: 0
      },
      {
        id: 50,
        code: 'CR',
        name: 'Costa Rica',
        sort_order: 0
      },
      {
        id: 98,
        code: 'HR',
        name: 'Croatia',
        sort_order: 0
      },
      {
        id: 51,
        code: 'CU',
        name: 'Cuba',
        sort_order: 0
      },
      {
        id: 53,
        code: 'CW',
        name: 'Curacao',
        sort_order: 0
      },
      {
        id: 55,
        code: 'CY',
        name: 'Cyprus',
        sort_order: 0
      },
      {
        id: 56,
        code: 'CZ',
        name: 'Czechia',
        sort_order: 0
      },
      {
        id: 40,
        code: 'CD',
        name: 'Democratic Republic of the Congo',
        sort_order: 0
      },
      {
        id: 59,
        code: 'DK',
        name: 'Denmark',
        sort_order: 0
      },
      {
        id: 58,
        code: 'DJ',
        name: 'Djibouti',
        sort_order: 0
      },
      {
        id: 60,
        code: 'DM',
        name: 'Dominica',
        sort_order: 0
      },
      {
        id: 61,
        code: 'DO',
        name: 'Dominican Republic',
        sort_order: 0
      },
      {
        id: 221,
        code: 'TL',
        name: 'East Timor',
        sort_order: 0
      },
      {
        id: 63,
        code: 'EC',
        name: 'Ecuador',
        sort_order: 0
      },
      {
        id: 65,
        code: 'EG',
        name: 'Egypt',
        sort_order: 0
      },
      {
        id: 210,
        code: 'SV',
        name: 'El Salvador',
        sort_order: 0
      },
      {
        id: 88,
        code: 'GQ',
        name: 'Equatorial Guinea',
        sort_order: 0
      },
      {
        id: 67,
        code: 'ER',
        name: 'Eritrea',
        sort_order: 0
      },
      {
        id: 64,
        code: 'EE',
        name: 'Estonia',
        sort_order: 0
      },
      {
        id: 69,
        code: 'ET',
        name: 'Ethiopia',
        sort_order: 0
      },
      {
        id: 72,
        code: 'FK',
        name: 'Falkland Islands',
        sort_order: 0
      },
      {
        id: 74,
        code: 'FO',
        name: 'Faroe Islands',
        sort_order: 0
      },
      {
        id: 71,
        code: 'FJ',
        name: 'Fiji',
        sort_order: 0
      },
      {
        id: 70,
        code: 'FI',
        name: 'Finland',
        sort_order: 0
      },
      {
        id: 75,
        code: 'FR',
        name: 'France',
        sort_order: 0
      },
      {
        id: 80,
        code: 'GF',
        name: 'French Guiana',
        sort_order: 0
      },
      {
        id: 175,
        code: 'PF',
        name: 'French Polynesia',
        sort_order: 0
      },
      {
        id: 216,
        code: 'TF',
        name: 'French Southern Territories',
        sort_order: 0
      },
      {
        id: 76,
        code: 'GA',
        name: 'Gabon',
        sort_order: 0
      },
      {
        id: 85,
        code: 'GM',
        name: 'Gambia',
        sort_order: 0
      },
      {
        id: 79,
        code: 'GE',
        name: 'Georgia',
        sort_order: 0
      },
      {
        id: 57,
        code: 'DE',
        name: 'Germany',
        sort_order: 0
      },
      {
        id: 82,
        code: 'GH',
        name: 'Ghana',
        sort_order: 0
      },
      {
        id: 83,
        code: 'GI',
        name: 'Gibraltar',
        sort_order: 0
      },
      {
        id: 89,
        code: 'GR',
        name: 'Greece',
        sort_order: 0
      },
      {
        id: 84,
        code: 'GL',
        name: 'Greenland',
        sort_order: 0
      },
      {
        id: 78,
        code: 'GD',
        name: 'Grenada',
        sort_order: 0
      },
      {
        id: 87,
        code: 'GP',
        name: 'Guadeloupe',
        sort_order: 0
      },
      {
        id: 92,
        code: 'GU',
        name: 'Guam',
        sort_order: 0
      },
      {
        id: 91,
        code: 'GT',
        name: 'Guatemala',
        sort_order: 0
      },
      {
        id: 81,
        code: 'GG',
        name: 'Guernsey',
        sort_order: 0
      },
      {
        id: 86,
        code: 'GN',
        name: 'Guinea',
        sort_order: 0
      },
      {
        id: 93,
        code: 'GW',
        name: 'Guinea-Bissau',
        sort_order: 0
      },
      {
        id: 94,
        code: 'GY',
        name: 'Guyana',
        sort_order: 0
      },
      {
        id: 99,
        code: 'HT',
        name: 'Haiti',
        sort_order: 0
      },
      {
        id: 96,
        code: 'HM',
        name: 'Heard Island and McDonald Islands',
        sort_order: 0
      },
      {
        id: 97,
        code: 'HN',
        name: 'Honduras',
        sort_order: 0
      },
      {
        id: 95,
        code: 'HK',
        name: 'Hong Kong',
        sort_order: 0
      },
      {
        id: 100,
        code: 'HU',
        name: 'Hungary',
        sort_order: 0
      },
      {
        id: 109,
        code: 'IS',
        name: 'Iceland',
        sort_order: 0
      },
      {
        id: 105,
        code: 'IN',
        name: 'India',
        sort_order: 0
      },
      {
        id: 101,
        code: 'ID',
        name: 'Indonesia',
        sort_order: 0
      },
      {
        id: 108,
        code: 'IR',
        name: 'Iran',
        sort_order: 0
      },
      {
        id: 107,
        code: 'IQ',
        name: 'Iraq',
        sort_order: 0
      },
      {
        id: 102,
        code: 'IE',
        name: 'Ireland',
        sort_order: 0
      },
      {
        id: 104,
        code: 'IM',
        name: 'Isle of Man',
        sort_order: 0
      },
      {
        id: 103,
        code: 'IL',
        name: 'Israel',
        sort_order: 0
      },
      {
        id: 110,
        code: 'IT',
        name: 'Italy',
        sort_order: 0
      },
      {
        id: 44,
        code: 'CI',
        name: 'Ivory Coast',
        sort_order: 0
      },
      {
        id: 112,
        code: 'JM',
        name: 'Jamaica',
        sort_order: 0
      },
      {
        id: 114,
        code: 'JP',
        name: 'Japan',
        sort_order: 0
      },
      {
        id: 111,
        code: 'JE',
        name: 'Jersey',
        sort_order: 0
      },
      {
        id: 113,
        code: 'JO',
        name: 'Jordan',
        sort_order: 0
      },
      {
        id: 125,
        code: 'KZ',
        name: 'Kazakhstan',
        sort_order: 0
      },
      {
        id: 115,
        code: 'KE',
        name: 'Kenya',
        sort_order: 0
      },
      {
        id: 118,
        code: 'KI',
        name: 'Kiribati',
        sort_order: 0
      },
      {
        id: 245,
        code: 'XK',
        name: 'Kosovo',
        sort_order: 0
      },
      {
        id: 123,
        code: 'KW',
        name: 'Kuwait',
        sort_order: 0
      },
      {
        id: 116,
        code: 'KG',
        name: 'Kyrgyzstan',
        sort_order: 0
      },
      {
        id: 126,
        code: 'LA',
        name: 'Laos',
        sort_order: 0
      },
      {
        id: 135,
        code: 'LV',
        name: 'Latvia',
        sort_order: 0
      },
      {
        id: 127,
        code: 'LB',
        name: 'Lebanon',
        sort_order: 0
      },
      {
        id: 132,
        code: 'LS',
        name: 'Lesotho',
        sort_order: 0
      },
      {
        id: 131,
        code: 'LR',
        name: 'Liberia',
        sort_order: 0
      },
      {
        id: 136,
        code: 'LY',
        name: 'Libya',
        sort_order: 0
      },
      {
        id: 129,
        code: 'LI',
        name: 'Liechtenstein',
        sort_order: 0
      },
      {
        id: 133,
        code: 'LT',
        name: 'Lithuania',
        sort_order: 0
      },
      {
        id: 134,
        code: 'LU',
        name: 'Luxembourg',
        sort_order: 0
      },
      {
        id: 148,
        code: 'MO',
        name: 'Macao',
        sort_order: 0
      },
      {
        id: 144,
        code: 'MK',
        name: 'Macedonia',
        sort_order: 0
      },
      {
        id: 142,
        code: 'MG',
        name: 'Madagascar',
        sort_order: 0
      },
      {
        id: 156,
        code: 'MW',
        name: 'Malawi',
        sort_order: 0
      },
      {
        id: 158,
        code: 'MY',
        name: 'Malaysia',
        sort_order: 0
      },
      {
        id: 155,
        code: 'MV',
        name: 'Maldives',
        sort_order: 0
      },
      {
        id: 145,
        code: 'ML',
        name: 'Mali',
        sort_order: 0
      },
      {
        id: 153,
        code: 'MT',
        name: 'Malta',
        sort_order: 0
      },
      {
        id: 143,
        code: 'MH',
        name: 'Marshall Islands',
        sort_order: 0
      },
      {
        id: 150,
        code: 'MQ',
        name: 'Martinique',
        sort_order: 0
      },
      {
        id: 151,
        code: 'MR',
        name: 'Mauritania',
        sort_order: 0
      },
      {
        id: 154,
        code: 'MU',
        name: 'Mauritius',
        sort_order: 0
      },
      {
        id: 247,
        code: 'YT',
        name: 'Mayotte',
        sort_order: 0
      },
      {
        id: 157,
        code: 'MX',
        name: 'Mexico',
        sort_order: 0
      },
      {
        id: 73,
        code: 'FM',
        name: 'Micronesia',
        sort_order: 0
      },
      {
        id: 139,
        code: 'MD',
        name: 'Moldova',
        sort_order: 0
      },
      {
        id: 138,
        code: 'MC',
        name: 'Monaco',
        sort_order: 0
      },
      {
        id: 147,
        code: 'MN',
        name: 'Mongolia',
        sort_order: 0
      },
      {
        id: 140,
        code: 'ME',
        name: 'Montenegro',
        sort_order: 0
      },
      {
        id: 152,
        code: 'MS',
        name: 'Montserrat',
        sort_order: 0
      },
      {
        id: 137,
        code: 'MA',
        name: 'Morocco',
        sort_order: 0
      },
      {
        id: 159,
        code: 'MZ',
        name: 'Mozambique',
        sort_order: 0
      },
      {
        id: 146,
        code: 'MM',
        name: 'Myanmar [Burma]',
        sort_order: 0
      },
      {
        id: 160,
        code: 'NA',
        name: 'Namibia',
        sort_order: 0
      },
      {
        id: 169,
        code: 'NR',
        name: 'Nauru',
        sort_order: 0
      },
      {
        id: 168,
        code: 'NP',
        name: 'Nepal',
        sort_order: 0
      },
      {
        id: 166,
        code: 'NL',
        name: 'Netherlands',
        sort_order: 0
      },
      {
        id: 161,
        code: 'NC',
        name: 'New Caledonia',
        sort_order: 0
      },
      {
        id: 171,
        code: 'NZ',
        name: 'New Zealand',
        sort_order: 0
      },
      {
        id: 165,
        code: 'NI',
        name: 'Nicaragua',
        sort_order: 0
      },
      {
        id: 162,
        code: 'NE',
        name: 'Niger',
        sort_order: 0
      },
      {
        id: 164,
        code: 'NG',
        name: 'Nigeria',
        sort_order: 0
      },
      {
        id: 170,
        code: 'NU',
        name: 'Niue',
        sort_order: 0
      },
      {
        id: 163,
        code: 'NF',
        name: 'Norfolk Island',
        sort_order: 0
      },
      {
        id: 121,
        code: 'KP',
        name: 'North Korea',
        sort_order: 0
      },
      {
        id: 149,
        code: 'MP',
        name: 'Northern Mariana Islands',
        sort_order: 0
      },
      {
        id: 167,
        code: 'NO',
        name: 'Norway',
        sort_order: 0
      },
      {
        id: 172,
        code: 'OM',
        name: 'Oman',
        sort_order: 0
      },
      {
        id: 178,
        code: 'PK',
        name: 'Pakistan',
        sort_order: 0
      },
      {
        id: 185,
        code: 'PW',
        name: 'Palau',
        sort_order: 0
      },
      {
        id: 183,
        code: 'PS',
        name: 'Palestine',
        sort_order: 0
      },
      {
        id: 173,
        code: 'PA',
        name: 'Panama',
        sort_order: 0
      },
      {
        id: 176,
        code: 'PG',
        name: 'Papua New Guinea',
        sort_order: 0
      },
      {
        id: 186,
        code: 'PY',
        name: 'Paraguay',
        sort_order: 0
      },
      {
        id: 174,
        code: 'PE',
        name: 'Peru',
        sort_order: 0
      },
      {
        id: 177,
        code: 'PH',
        name: 'Philippines',
        sort_order: 0
      },
      {
        id: 181,
        code: 'PN',
        name: 'Pitcairn Islands',
        sort_order: 0
      },
      {
        id: 179,
        code: 'PL',
        name: 'Poland',
        sort_order: 0
      },
      {
        id: 184,
        code: 'PT',
        name: 'Portugal',
        sort_order: 0
      },
      {
        id: 182,
        code: 'PR',
        name: 'Puerto Rico',
        sort_order: 0
      },
      {
        id: 187,
        code: 'QA',
        name: 'Qatar',
        sort_order: 0
      },
      {
        id: 42,
        code: 'CG',
        name: 'Republic of the Congo',
        sort_order: 0
      },
      {
        id: 188,
        code: 'RE',
        name: 'Réunion',
        sort_order: 0
      },
      {
        id: 189,
        code: 'RO',
        name: 'Romania',
        sort_order: 0
      },
      {
        id: 191,
        code: 'RU',
        name: 'Russia',
        sort_order: 0
      },
      {
        id: 192,
        code: 'RW',
        name: 'Rwanda',
        sort_order: 0
      },
      {
        id: 26,
        code: 'BL',
        name: 'Saint Barthélemy',
        sort_order: 0
      },
      {
        id: 199,
        code: 'SH',
        name: 'Saint Helena',
        sort_order: 0
      },
      {
        id: 120,
        code: 'KN',
        name: 'Saint Kitts and Nevis',
        sort_order: 0
      },
      {
        id: 128,
        code: 'LC',
        name: 'Saint Lucia',
        sort_order: 0
      },
      {
        id: 141,
        code: 'MF',
        name: 'Saint Martin',
        sort_order: 0
      },
      {
        id: 180,
        code: 'PM',
        name: 'Saint Pierre and Miquelon',
        sort_order: 0
      },
      {
        id: 237,
        code: 'VC',
        name: 'Saint Vincent and the Grenadines',
        sort_order: 0
      },
      {
        id: 244,
        code: 'WS',
        name: 'Samoa',
        sort_order: 0
      },
      {
        id: 204,
        code: 'SM',
        name: 'San Marino',
        sort_order: 0
      },
      {
        id: 209,
        code: 'ST',
        name: 'São Tomé and Príncipe',
        sort_order: 0
      },
      {
        id: 193,
        code: 'SA',
        name: 'Saudi Arabia',
        sort_order: 0
      },
      {
        id: 205,
        code: 'SN',
        name: 'Senegal',
        sort_order: 0
      },
      {
        id: 190,
        code: 'RS',
        name: 'Serbia',
        sort_order: 0
      },
      {
        id: 195,
        code: 'SC',
        name: 'Seychelles',
        sort_order: 0
      },
      {
        id: 203,
        code: 'SL',
        name: 'Sierra Leone',
        sort_order: 0
      },
      {
        id: 198,
        code: 'SG',
        name: 'Singapore',
        sort_order: 0
      },
      {
        id: 211,
        code: 'SX',
        name: 'Sint Maarten',
        sort_order: 0
      },
      {
        id: 202,
        code: 'SK',
        name: 'Slovakia',
        sort_order: 0
      },
      {
        id: 200,
        code: 'SI',
        name: 'Slovenia',
        sort_order: 0
      },
      {
        id: 194,
        code: 'SB',
        name: 'Solomon Islands',
        sort_order: 0
      },
      {
        id: 206,
        code: 'SO',
        name: 'Somalia',
        sort_order: 0
      },
      {
        id: 248,
        code: 'ZA',
        name: 'South Africa',
        sort_order: 0
      },
      {
        id: 90,
        code: 'GS',
        name: 'South Georgia and the South Sandwich Islands',
        sort_order: 0
      },
      {
        id: 122,
        code: 'KR',
        name: 'South Korea',
        sort_order: 0
      },
      {
        id: 208,
        code: 'SS',
        name: 'South Sudan',
        sort_order: 0
      },
      {
        id: 68,
        code: 'ES',
        name: 'Spain',
        sort_order: 0
      },
      {
        id: 130,
        code: 'LK',
        name: 'Sri Lanka',
        sort_order: 0
      },
      {
        id: 196,
        code: 'SD',
        name: 'Sudan',
        sort_order: 0
      },
      {
        id: 207,
        code: 'SR',
        name: 'Suriname',
        sort_order: 0
      },
      {
        id: 201,
        code: 'SJ',
        name: 'Svalbard and Jan Mayen',
        sort_order: 0
      },
      {
        id: 213,
        code: 'SZ',
        name: 'Swaziland',
        sort_order: 0
      },
      {
        id: 197,
        code: 'SE',
        name: 'Sweden',
        sort_order: 0
      },
      {
        id: 43,
        code: 'CH',
        name: 'Switzerland',
        sort_order: 0
      },
      {
        id: 212,
        code: 'SY',
        name: 'Syria',
        sort_order: 0
      },
      {
        id: 228,
        code: 'TW',
        name: 'Taiwan',
        sort_order: 0
      },
      {
        id: 219,
        code: 'TJ',
        name: 'Tajikistan',
        sort_order: 0
      },
      {
        id: 229,
        code: 'TZ',
        name: 'Tanzania',
        sort_order: 0
      },
      {
        id: 218,
        code: 'TH',
        name: 'Thailand',
        sort_order: 0
      },
      {
        id: 217,
        code: 'TG',
        name: 'Togo',
        sort_order: 0
      },
      {
        id: 220,
        code: 'TK',
        name: 'Tokelau',
        sort_order: 0
      },
      {
        id: 224,
        code: 'TO',
        name: 'Tonga',
        sort_order: 0
      },
      {
        id: 226,
        code: 'TT',
        name: 'Trinidad and Tobago',
        sort_order: 0
      },
      {
        id: 223,
        code: 'TN',
        name: 'Tunisia',
        sort_order: 0
      },
      {
        id: 225,
        code: 'TR',
        name: 'Turkey',
        sort_order: 0
      },
      {
        id: 222,
        code: 'TM',
        name: 'Turkmenistan',
        sort_order: 0
      },
      {
        id: 214,
        code: 'TC',
        name: 'Turks and Caicos Islands',
        sort_order: 0
      },
      {
        id: 227,
        code: 'TV',
        name: 'Tuvalu',
        sort_order: 0
      },
      {
        id: 232,
        code: 'UM',
        name: 'U.S. Minor Outlying Islands',
        sort_order: 0
      },
      {
        id: 240,
        code: 'VI',
        name: 'U.S. Virgin Islands',
        sort_order: 0
      },
      {
        id: 231,
        code: 'UG',
        name: 'Uganda',
        sort_order: 0
      },
      {
        id: 230,
        code: 'UA',
        name: 'Ukraine',
        sort_order: 0
      },
      {
        id: 2,
        code: 'AE',
        name: 'United Arab Emirates',
        sort_order: 0
      },
      {
        id: 77,
        code: 'GB',
        name: 'United Kingdom',
        sort_order: 0
      },
      {
        id: 233,
        code: 'US',
        name: 'United States',
        sort_order: 0
      },
      {
        id: 234,
        code: 'UY',
        name: 'Uruguay',
        sort_order: 0
      },
      {
        id: 235,
        code: 'UZ',
        name: 'Uzbekistan',
        sort_order: 0
      },
      {
        id: 242,
        code: 'VU',
        name: 'Vanuatu',
        sort_order: 0
      },
      {
        id: 236,
        code: 'VA',
        name: 'Vatican City',
        sort_order: 0
      },
      {
        id: 238,
        code: 'VE',
        name: 'Venezuela',
        sort_order: 0
      },
      {
        id: 241,
        code: 'VN',
        name: 'Vietnam',
        sort_order: 0
      },
      {
        id: 243,
        code: 'WF',
        name: 'Wallis and Futuna',
        sort_order: 0
      },
      {
        id: 66,
        code: 'EH',
        name: 'Western Sahara',
        sort_order: 0
      },
      {
        id: 246,
        code: 'YE',
        name: 'Yemen',
        sort_order: 0
      },
      {
        id: 249,
        code: 'ZM',
        name: 'Zambia',
        sort_order: 0
      },
      {
        id: 250,
        code: 'ZW',
        name: 'Zimbabwe',
        sort_order: 0
      }
    ],
    states: [
      {
        code: 'AL',
        name: 'Alabama'
      },
      {
        code: 'AK',
        name: 'Alaska'
      },
      {
        code: 'AZ',
        name: 'Arizona'
      },
      {
        code: 'AR',
        name: 'Arkansas'
      },
      {
        code: 'CA',
        name: 'California'
      },
      {
        code: 'CO',
        name: 'Colorado'
      },
      {
        code: 'CT',
        name: 'Connecticut'
      },
      {
        code: 'DE',
        name: 'Delaware'
      },
      {
        code: 'DC',
        name: 'District of Columbia'
      },
      {
        code: 'FL',
        name: 'Florida'
      },
      {
        code: 'GA',
        name: 'Georgia'
      },
      {
        code: 'HI',
        name: 'Hawaii'
      },
      {
        code: 'ID',
        name: 'Idaho'
      },
      {
        code: 'IL',
        name: 'Illinois'
      },
      {
        code: 'IN',
        name: 'Indiana'
      },
      {
        code: 'IA',
        name: 'Iowa'
      },
      {
        code: 'KS',
        name: 'Kansas'
      },
      {
        code: 'KY',
        name: 'Kentucky'
      },
      {
        code: 'LA',
        name: 'Louisiana'
      },
      {
        code: 'ME',
        name: 'Maine'
      },
      {
        code: 'MD',
        name: 'Maryland'
      },
      {
        code: 'MA',
        name: 'Massachusetts'
      },
      {
        code: 'MI',
        name: 'Michigan'
      },
      {
        code: 'MN',
        name: 'Minnesota'
      },
      {
        code: 'MS',
        name: 'Mississippi'
      },
      {
        code: 'MO',
        name: 'Missouri'
      },
      {
        code: 'MT',
        name: 'Montana'
      },
      {
        code: 'NE',
        name: 'Nebraska'
      },
      {
        code: 'NV',
        name: 'Nevada'
      },
      {
        code: 'NH',
        name: 'New Hampshire'
      },
      {
        code: 'NJ',
        name: 'New Jersey'
      },
      {
        code: 'NM',
        name: 'New Mexico'
      },
      {
        code: 'NY',
        name: 'New York'
      },
      {
        code: 'NC',
        name: 'North Carolina'
      },
      {
        code: 'ND',
        name: 'North Dakota'
      },
      {
        code: 'OH',
        name: 'Ohio'
      },
      {
        code: 'OK',
        name: 'Oklahoma'
      },
      {
        code: 'OR',
        name: 'Oregon'
      },
      {
        code: 'PA',
        name: 'Pennsylvania'
      },
      {
        code: 'RI',
        name: 'Rhode Island'
      },
      {
        code: 'SC',
        name: 'South Carolina'
      },
      {
        code: 'SD',
        name: 'South Dakota'
      },
      {
        code: 'TN',
        name: 'Tennessee'
      },
      {
        code: 'TX',
        name: 'Texas'
      },
      {
        code: 'UT',
        name: 'Utah'
      },
      {
        code: 'VT',
        name: 'Vermont'
      },
      {
        code: 'VA',
        name: 'Virginia'
      },
      {
        code: 'WA',
        name: 'Washington'
      },
      {
        code: 'WV',
        name: 'West Virginia'
      },
      {
        code: 'WI',
        name: 'Wisconsin'
      },
      {
        code: 'WY',
        name: 'Wyoming'
      }
    ],
    appName: 'DCB Naira',
  };
  fields = {};
  checkBoxes = [];
  form = [];

  constructor(private appComponent: AppComponent) {
  }

  ngOnInit() {
    // Separate Fields
    this.formFields.appFields.forEach(one => {
      if (one.selected) {
        if (one.type === 'select' && one.name === 'state') {
          this.fields.stateInput = one;
        } else if (this.fields[one.type] !== undefined) {
          this.fields[one.type].push(one);
        } else {
          this.fields[one.type] = [one];
        }
      }
    });
  }

  findOnJson(data, value) {
    return data.findIndex((item, i) => {
      return item.name === value;
    });
  }

  onSubmit(formElement) {
    if (formElement.valid) {
      const fields = JSON.parse(JSON.stringify(formElement.value));
      this.form = [];
      Object.keys(fields).forEach((key) => {
        if (key.indexOf('checkboxfield-') === -1) {
          this.form.push({
            name: key,
            value: formElement.value[key],
          });
        }
      });
      this.form = this.form.concat(this.checkBoxes);
      // console.log(this.form);
      this.appComponent.isCompletedFields = true;
    }
  }

  getCheckBoxes(inputName, inputValue, isChecked) {
    const index = this.findOnJson(this.checkBoxes, inputName);
    if (index === -1) {
      this.checkBoxes.push({
        name: inputName,
        value: [inputValue]
      });
    } else if (index !== -1 && isChecked) {
      this.checkBoxes[index].value.push(inputValue);
    } else if (index !== -1 && !isChecked) {
      const valueInd = this.checkBoxes[index].value.indexOf(inputValue);
      this.checkBoxes[index].value.splice(valueInd, 1);
    }
  }
}
