

const PrecisionFlowPage = () => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl">PrecisionFlow</h1>
            <h2>Privacy Policy</h2>

            <p>EffectiveDate: August 17, 2024</p>
            <h3>Introduction</h3>
            <p>
            PrecisionFlow is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our mobile application, PrecisionFlow (&quot;the App&quot;). By using the App, you agree to the collection and use of information in accordance with this policy.
            </p>

            <h3>Information We Collect</h3>
            <p>
            <span className="text-[var(--jkAccent)]">We do not collect</span> any personal information from you directly. The App functions entirely on your device, and all data you input is stored locally on your device. This data includes:
            </p>

            <table className="table">
                <thead>
                    <tr className="border-line">
                        <th></th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-line hover:bg-[var(--jkAccent)] hover:text-white">
                        <th>1</th>
                        <td>Work Hours Data</td>
                        <td>Information related to the hours you worked, including dates, times, and wages.</td>
                    </tr>
                    <tr className="border-line hover:bg-[var(--jkAccent)] hover:text-white">
                        <th>1</th>
                        <td>Settings Data</td>
                        <td>Preferences you set within the App, such as currency, wage rate, and other customizations.</td>
                    </tr>
                </tbody>
            </table>

            <h3>Data Storage and Security</h3>
            <p>
            All data entered in the App is stored locally on your device. We do not transmit, collect, or store any of your data on external servers. Your data is private and secure, remaining solely on your device unless you choose to share it through other means.
            </p>

            <h3>Data Sharing</h3>
            <p>
            PrecisionFlow does not share your data with any third parties. As your data is stored locally on your device, any sharing of data is initiated by you through exporting or manually sharing content.
            </p>

            <h3>Third-Party Services</h3>
            <p>
            The App does not integrate with any third-party services that may collect data. We are not responsible for the privacy practices of any third-party services you may use in connection with the App.
            </p>

            <h3>Your Rights</h3>
            <p>
            Since we do not collect or store your data, there are no requests necessary for data access, correction, or deletion. You maintain full control over your data within the App.
            </p>

            <h3>Children’s Privacy</h3>
            <p>
            PrecisionFlow is not intended for use by children under the age of 13. We do not knowingly collect any personal information from children.
            </p>

            <h3>Changes to This Privacy Policy</h3>
            <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the App or on our website. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            
            <h3>Contact Us</h3>
            <p>
            If you have any questions about this Privacy Policy, please contact us at precisionflow-support@jkturner.site.
            </p>


        </div>
    )
}

export default PrecisionFlowPage;