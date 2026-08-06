import CookieConsent from 'vanilla-cookieconsent/dist/cookieconsent.umd.js';

// Define dataLayer and the gtag function.
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Set default consent to 'denied' as a placeholder
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'personalization_storage': 'denied',
  'functionality_storage': 'denied',
  'security_storage': 'denied'
});

// Configure cookie consent banner
CookieConsent.run({
  root: '.site-content',
  guiOptions: {
    consentModal: {
      layout: "box inline",
      position: "bottom right",
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: "bar",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false
    }
  },
  disablePageInteraction: false,
  categories: {
    necessary: {
      readOnly: true,
      enabled: true
    },
    analytics: {
      enabled: true
    },
    preferences: {
      enabled: true
    },
    marketing: {
      enabled: true
    }
  },
  language: {
    default: "ro",
    translations: {
      ro: {
        consentModal: {
          title: "Ne pasă ca datele tale personale să rămână confidențiale.",
          description: "Folosim cookie-uri pentru a personaliza conținutul, pentru social media și pentru a analiza traficul. De asemenea, le oferim partenerilor noștri informații despre modul în care folosești site-ul nostru.",
          acceptAllBtn: "Acceptă",
          showPreferencesBtn: "Vezi preferințele",
          footer: "<a href=\"/politica-de-confidentialitate\">Politica de Confidențialitate</a>\n<a href=\"/politica-de-cookies\">Politica de Cookies</a>"
        },
        preferencesModal: {
          title: "Centru de administrare al cookie-urilor",
          acceptAllBtn: "Acceptă",
          savePreferencesBtn: "Salvează preferințele",
          closeIconLabel: "Close modal",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Administrează consimțământul",
              description: "Folosim cookie-uri pentru a personaliza conținutul și anunțurile, pentru a oferi funcții de rețele sociale și pentru a analiza traficul. De asemenea, le oferim partenerilor de rețele sociale, de publicitate și de analize informații cu privire la modul în care folosiți site-ul nostru. Aceștia le pot combina cu alte informații oferite de dvs. sau culese în urma folosirii serviciilor lor."
            },
            {
              title: "Necesare <span class=\"pm__badge\">Mereu activ</span>",
              description: "Cookie-urile necesare ajută la a face un site utilizabil prin activarea funcţiilor de bază, precum navigarea în pagină şi accesul la zonele securizate de pe site. Site-ul nu poate funcţiona corespunzător fără aceste cookie-uri.",
              linkedCategory: "necessary"
            },
            {
              title: "Statistici",
              description: "Cookie-urile de statistică îi ajută pe proprietarii unui site să înţeleagă modul în care vizitatorii interacţionează cu site-urile prin colectarea şi raportarea informaţiilor în mod anonim.",
              linkedCategory: "analytics"
            },
            {
              title: "Preferințe",
              description: "Cookie-urile de preferinţă permit unui site să îşi amintească informaţii care se modifică după modul în care se comportă sau arată site-ul, precum limba dvs. preferată sau regiunea în care vă aflaţi.",
              linkedCategory: "preferences"
            },
            {
              title: "Marketing",
              description: "Cookie-urile de marketing sunt utilizate pentru a-i urmări pe utilizatori de la un site la altul. Intenţia este de a afişa anunţuri relevante şi antrenante pentru utilizatorii individuali, aşadar ele sunt mai valoroase pentru agenţiile de publicitate şi părţile terţe care se ocupă de publicitate.",
              linkedCategory: "marketing"
            },
            {
              title: "Mai multe",
              description: "Pentru orice întrebare legată de politica noastră de confidențialitate, vă rugăm să accesați: \n<a class=\"cc__link\" href=\"/politica-de-confidentialitate\">Politica de Confidențialitate</a>."
            }
          ]
        }
      },
      en: {
        consentModal: {
          title: "Your data is as well kept as our beer bottles!",
          description: "We use cookies to make your experience on our site as refreshing as a cold beer! By continuing to browse, you're agreeing to enjoy them with us.",
          acceptAllBtn: "Accept",
          showPreferencesBtn: "Manage preferences",
          footer: "<a href=\"/en/terms-and-conditions\">Terms and Conditions</a>\n<a href=\"/en/privacy-policy\">Privacy Policy</a>"
        },
        preferencesModal: {
          title: "Consent Preferences Center",
          acceptAllBtn: "Accept",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Cookie Usage",
              description: "We use cookies to personalize content and ads, provide social networking features, and analyze traffic. We also provide our social media, advertising and analytics partners with information about how you use our website. They may combine it with other information you provide or collect through your use of their services."
            },
            {
              title: "Necessary <span class=\"pm__badge\">Always active</span>",
              description: "Necessary cookies help make a website usable by enabling basic functions such as page navigation and access to secure areas on the website. The site cannot function without these cookies.",
              linkedCategory: "necessary"
            },
            {
              title: "Statistics",
              description: "Statistical cookies help site owners understand how visitors interact with the sites by collecting and reporting information anonymously.",
              linkedCategory: "analytics"
            },
            {
              title: "Preferences",
              description: "Preference cookies allow a site to remember information that changes based on how the site behaves or looks, such as your preferred language or the region you are in.",
              linkedCategory: "preferences"
            },
            {
              title: "Marketing",
              description: "Marketing cookies are used to track users from one site to another. The intent is to display relevant and engaging ads to individual users, so they are more valuable to advertisers and third-party advertisers.",
              linkedCategory: "marketing"
            },
            {
              title: "More information",
              description: "For any questions about our privacy policy, please go to: \n<a class=\"cc__link\" href=\"/en/privacy-policy\">Privacy Policy</a>."
            }
          ]
        }
      }
    },
    autoDetect: "document"
  },

  // Update gtag consent based on user preferences
  onConsent: () => {
    updateGtagConsent();
  },
  onChange: ({ changedCategories }) => {
    updateGtagConsent();
  },
});

function updateGtagConsent() {
  gtag('consent', 'update', {
    'ad_storage': CookieConsent.acceptedCategory('marketing') ? 'granted' : 'granted',
    'ad_user_data': CookieConsent.acceptedCategory('marketing') ? 'granted' : 'granted',
    'ad_personalization': CookieConsent.acceptedCategory('marketing') ? 'granted' : 'granted',
    'analytics_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'granted',
    'personalization_storage': CookieConsent.acceptedCategory('preferences') ? 'granted' : 'granted',
    'functionality_storage': CookieConsent.acceptedCategory('necessary') ? 'granted' : 'granted',
    'security_storage': CookieConsent.acceptedCategory('necessary') ? 'granted' : 'granted',
  });
}
