import React from "react";

export default function PrivacyTermsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10 text-gray-800">
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Privacy Policy</h1>
        <p className="text-lg font-semibold">Boora Transport & Logistics Ltd</p>
        <p className="mt-2">Boora Transport & Logistics Ltd ("we," "our," or "us") is committed to respecting and protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you interact with our services and website.</p>

        <h2 className="text-xl font-bold mt-6">1. Information We Collect</h2>
        <ul className="list-disc list-inside">
          <li>Name, phone number, email address</li>
          <li>Pickup and delivery addresses</li>
          <li>Booking and payment information</li>
          <li>Technical information such as IP address, browser type, and cookies</li>
        </ul>

        <h2 className="text-xl font-bold mt-6">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside">
          <li>Manage and process bookings</li>
          <li>Provide customer service and send confirmations</li>
          <li>Improve our website and service experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-bold mt-6">3. Data Security</h2>
        <p>We maintain appropriate security measures including encrypted data transmission, restricted access, and periodic audits.</p>

        <h2 className="text-xl font-bold mt-6">4. Sharing Your Information</h2>
        <p>We do not sell, rent, or share your personal data with third parties for marketing purposes. Data may be shared only with:</p>
        <ul className="list-disc list-inside">
          <li>Trusted service partners (e.g., drivers or subcontractors)</li>
          <li>Legal authorities if required by applicable law</li>
        </ul>

        <h2 className="text-xl font-bold mt-6">5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your data. Contact: <a href="mailto:booratransportlogistics@email.com" className="text-blue-600 underline">booratransportlogistics@email.com</a></p>

        <h2 className="text-xl font-bold mt-6">6. Cookies</h2>
        <p>We use cookies to understand how users interact with our website and improve functionality. You may manage cookies through browser settings.</p>
      </section>

      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Terms of Use</h1>
        <p className="text-lg font-semibold">Boora Transport & Logistics Ltd</p>
        <p className="mt-2">By using our website and services, you agree to these Terms of Use. Please read them carefully. If you do not agree, do not access or use our services.</p>

        <h2 className="text-xl font-bold mt-6">1. Ownership and Intellectual Property</h2>
        <p>All content is our property and protected by law. You may not copy or reuse it without permission.</p>

        <h2 className="text-xl font-bold mt-6">2. Service Use</h2>
        <ul className="list-disc list-inside">
          <li>Bookings are subject to availability and confirmation.</li>
          <li>Provide accurate and truthful information.</li>
          <li>We may cancel bookings suspected of fraud or misuse.</li>
        </ul>

        <h2 className="text-xl font-bold mt-6">3. No Refund Policy</h2>
        <p>Once payment is made, it is non-refundable unless the fault is on our side, in which case rescheduling or alternatives may be offered.</p>

        <h2 className="text-xl font-bold mt-6">4. Prohibited Activities</h2>
        <ul className="list-disc list-inside">
          <li>No misrepresentation or impersonation</li>
          <li>No copying or reverse engineering our website or systems</li>
          <li>No illegal or unauthorized use</li>
        </ul>

        <h2 className="text-xl font-bold mt-6">5. Limitation of Liability</h2>
        <p>We are not liable for delays, site access issues, or indirect damages like loss of business or income.</p>

        <h2 className="text-xl font-bold mt-6">6. Policy Changes</h2>
        <p>We may update these terms anytime. Continued use means you accept the new terms.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-red-700 mt-10">Misuse and Legal Protection Clause</h2>
        <p>We monitor and enforce protection against brand misuse, false representation, and duplication of content. Legal actions will be taken when necessary.</p>
      </section>
    </div>
  );
}
