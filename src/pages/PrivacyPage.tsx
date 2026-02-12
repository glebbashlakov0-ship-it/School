const privacySections = [
  {
    title: "Privacy Policy",
    body: [
      "The data controller is BB Trade Estonia OÜ, with its registered office in Harju maakond, Tallinn, Lasnamäe linnaosa, Tähesaju tee 9, 13917 ESTONIA (office no. 10, 2nd floor), incorporated under Estonian law and registered in the Register of Entrepreneurs of the Ministry of Justice of the Republic of Estonia with the number 14814864; share capital: EUR 350,000.00, fully paid-up (hereinafter referred to as the “Controller”).",
      "The Controller takes care to ensure a high standard of protection of the users, interested parties and visitors to www.zondacrypto.com. This Privacy Policy (the “Policy”) sets forth the rules for the collection, processing and use of the personal data of the website’s users, interested parties and visitors.",
      "The purpose of this Policy is primarily to inform the users, visitors and interested parties about their rights in relation to the processing of their data by the Controller.",
      "In our activities we commit to comply with this Policy and with the requirements of the provisions of the law in force, such as Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (GDPR) and the Estonian Act on Personal Data Protection of 12 December 2018."
    ]
  },
  {
    title: "I. Definitions",
    body: [
      "Processing – any operation or set of operations performed on personal data, whether or not by automated means.",
      "Personal data – any information relating to an identified or identifiable natural person.",
      "Processor – a natural or legal person, public authority, agency or other body which processes personal data on behalf of the Controller.",
      "Profiling – automated processing of personal data to evaluate personal aspects of a natural person.",
      "Pseudonymisation – processing personal data so it can no longer be attributed to a specific data subject without additional information.",
      "User – a person or entity registered at https://zondacrypto.com and in the process of verification.",
      "Client – a person or entity with whom the Controller entered a business relationship.",
      "Visitor – a person browsing the website https://zondacrypto.com.",
      "Interested party – a person submitting an inquiry/report via www.zondacrypto.com or the contact data on https://zondacrypto.com/en/contact.",
      "Fiat currency – currency recognized by at least one country as official means of payment (e.g., EUR, USD, GBP, PLN).",
      "Cryptocurrency – any virtual currency representing value (e.g., BTC, ETH, USDT, XRP)."
    ]
  },
  {
    title: "II. Categories of data processed",
    body: [
      "User’s data such as: e-mail address, login, full name, safety code, citizenship, residency, country of birth, login history, phone number, national identification number, date of birth, sex, ID/passport data, image (photo/video), residence address, utility bill data, business activity information, purpose of account, source of funds, PEP status, exchange transaction details, transfers to external wallets, fraud prevention data, AML data, payment data, messages concerning services or feedback; and for corporate users: legal organization, company details, Tax ID, company register, website, board members, beneficiaries, equity structure.",
      "Visitor’s data such as: IP address, pages opened, duration of visit, number of page views, number of visits, referral source; device identification data; ISP and subscriber data. Used for statistics, regional services, and website improvement (e.g., Google Analytics).",
      "Data of interested parties such as: e-mail address, title, category, subject, body of the message, image (face photo and ID document) where needed to establish identity.",
      "Personal data of individuals indicated in the Form referred to in § 8a of the Terms and Conditions of Service."
    ]
  },
  {
    title: "III. Legal basis and purpose of processing",
    body: [
      "Consent (Article 6(1)(a) GDPR) for requests submitted via contact form or contact data.",
      "Contract necessity (Article 6(1)(b) GDPR) for accessing and using the website and account.",
      "Legal obligation (Article 6(1)(c) GDPR) including tax and AML obligations.",
      "Legitimate interest (Article 6(1)(f) GDPR) for improving services, adapting to users’ needs, responding to requests, security, newsletter, marketing.",
      "Data collected in accordance with DAC8 and related tax exchange requirements.",
      "Providing personal data is voluntary but required to use the Controller’s services."
    ]
  },
  {
    title: "IV. Automated processing decision",
    body: [
      "Personal data of Users may be subject to partial automated decisioning during verification via Onfido and Authologic solutions. The final decision is not fully automated."
    ]
  },
  {
    title: "Profiling and personalization of offers (Marketing Automation)",
    body: [
      "Personal data may be processed for profiling and segmentation to tailor marketing messages. You can object to profiling at any time."
    ]
  },
  {
    title: "V. Your rights",
    body: [
      "Right to access personal data.",
      "Right to rectification.",
      "Right to erasure (“right to be forgotten”).",
      "Right to restrict processing.",
      "Right to object.",
      "Right to data portability.",
      "Right to lodge an objection with the supervisory body (Estonian Data Protection Inspectorate).",
      "Contact: gdpr@zondacrypto.com or BB Trade Estonia OÜ, Harju maakond, Tallinn, Lasnamäe linnaosa, Tähesaju tee 9, 13917 ESTONIA."
    ]
  },
  {
    title: "VI. Data transfer",
    body: [
      "Data may be transferred to business partners, banks, payment operators, processors (IT providers, auditors, accounting, customer service software, email operators, hosting providers), identity verification providers, and other entities where required by law.",
      "International transfers may occur with appropriate safeguards as required by GDPR.",
      "Analytics tools are used for statistical purposes only.",
      "Personal data may be disclosed to competent public authorities as required by law."
    ]
  },
  {
    title: "VII. Security measures",
    body: [
      "The Controller undertakes appropriate measures to prevent data loss, unauthorized access, use, destruction, modification or disclosure, ensuring confidentiality, integrity, availability and resilience."
    ]
  },
  {
    title: "VIII. Storage period",
    body: [
      "Data is stored no longer than necessary to achieve processing purposes or as required by law.",
      "User and Client data are stored for the duration of the contract and for 5 years after the business relationship ends, unless the law requires longer."
    ]
  },
  {
    title: "IX. Age policy",
    body: [
      "Services are not intended for persons younger than 18 years of age."
    ]
  },
  {
    title: "X. Modifications",
    body: [
      "The Controller may amend this Privacy Policy at any time by publishing an updated version on the website."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="glass-card rounded-3xl p-8 md:p-12">
        <div className="text-sm uppercase tracking-[0.3em] text-white/50">
          Privacy Policy
        </div>
        <h1 className="mt-3 font-display text-4xl">Privacy Policy</h1>
        <div className="mt-8 space-y-8 text-sm text-white/70">
          {privacySections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
