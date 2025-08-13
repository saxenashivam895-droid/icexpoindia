'use client';
import axiosInstance from "@/utility/axiosInstance";
import { useState } from "react";
export default function Pbds()
{
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    jobTitle: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await axiosInstance.post('/submit', {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        company: formData.company,
        job_title: formData.jobTitle,
      });

      setMessage('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        company: '',
        jobTitle: '',
      });
      console.log(response);
    } catch (error: unknown) {
      console.error(error);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
    return (
        <div>
<section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 container mx-auto h-full flex items-center px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Left Side Heading */}
          <div className="flex items-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-14">
              Pharma Bulk Drug Manufacturing Summit 2025, Hyderabad
            </h1>
          </div>

          {/* Right Side Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-600"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              {message && (
                <p className="text-sm text-center mt-2 text-green-600">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>


    <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-4">
            Pharma Bulk Drug Manufacturing Summit 2025
        </h2>

        <p className="mb-4">
            India&#34;s role as the &#34;Pharmacy of the World&#34; is closely tied to its robust bulk drug (API) manufacturing sector. With the Government of India&#34;s focus on API self-reliance through schemes like the PLI and Bulk Drug Parks, the landscape is rapidly evolving. However, to truly achieve global leadership, there&#34;s a need to address key areas like process innovation, supply chain resilience, quality standards, sustainability, and regulatory harmonization.
        </p>

        <p className="mb-4">
            The Pharma Bulk Drug Manufacturing Summit 2025 aims to bring together top industry leaders, technocrats, regulatory authorities, and innovators to share insights, explore challenges, and unlock new opportunities for sustainable and globally competitive API manufacturing.
        </p>

        <h3 className="font-semibold text-gray-800 text-xl mb-4">Who Should Attend</h3>

        <ul className="list-inside list-disc mb-4">
            <li>CXOs & Founders of API & Bulk Drug Manufacturing Companies</li>
            <li>Heads of Manufacturing & Operations</li>
            <li>R&D and Process Development Heads</li>
            <li>Heads of Regulatory Affairs & QA/QC Teams</li>
            <li>Government Officials & Policymakers (CDSCO, DCGI, DoP)</li>
            <li>Machinery, Equipment, and Technology Providers</li>
            <li>Investors & Consultants in Pharma Manufacturing</li>
            <li>Academicians & Researchers in Pharmaceutical Sciences</li>
        </ul>

        <h3 className="font-semibold text-gray-800 text-xl mb-4">Why Attend</h3>
        <ul className="list-inside list-disc mb-4">
            <li>CXOs & Founders of API & Bulk Drug Manufacturing Companies</li>
            <li>Heads of Manufacturing & Operations</li>
            <li>R&D and Process Development Heads</li>
            <li>Heads of Regulatory Affairs & QA/QC Teams</li>
            <li>Government Officials & Policymakers (CDSCO, DCGI, DoP)</li>
            <li>Machinery, Equipment, and Technology Providers</li>
            <li>Investors & Consultants in Pharma Manufacturing</li>
            <li>Academicians & Researchers in Pharmaceutical Sciences</li>
        </ul>

    </section>


    <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-4">
            Agenda
        </h2>

        <h3 className="font-semibold text-gray-800 text-xl mb-4">Driving Self-Reliance in API Manufacturing: Policy, Potential & Progress</h3>

        <p className="mb-4">Panel Discussion: Future-Proofing Indias API Supply Chain</p>
            <ul className="list-inside list-disc mb-4">
                <li>Reducing dependence on Chinese imports</li>
                <li>Bulk Drug Parks & PLI Scheme: Updates & Opportunities</li>
                <li>Infrastructure & logistics as enablers</li>
            </ul>
        
        <h3 className="font-semibold text-gray-800 text-xl mb-4">Presentation:  Innovations in Process Chemistry for API Manufacturing</h3>

        <ul className="list-inside list-disc mb-4">
                <li>Flow chemistry, enzymatic synthesis</li>
                <li>Continuous vs batch processing</li>
                <li>Energy and cost efficiencies</li>
            </ul>

        <h3 className="font-semibold text-gray-800 text-xl mb-4">Panel Discussion: Process Innovation in API Manufacturing</h3>

        <ul className="list-inside list-disc mb-4">
            <li>Continuous Manufacturing vs. Batch: What’s the Future?</li>
            <li>Adopting Process Intensification and PAT (Process Analytical Technology)</li>
            <li>Cost Optimization Without Compromising Quality</li>
        </ul>

        <h3 className="font-semibold text-gray-800 text-xl mb-4">Panel Discussion: Sustainable Manufacturing & EHS Compliance</h3>
        <ul className="list-inside list-disc mb-4">
            <li>Green Chemistry Practices in Bulk Drug Manufacturing</li>
            <li>Effluent Treatment & Zero Liquid Discharge: Regulatory Outlook</li>
            <li>How ESG is Impacting CDMO Partnerships and Licensing</li>
        </ul>

        <h3 className="font-semibold text-gray-800 text-xl mb-4">Panel Discussion: Regulatory Compliance & Global Market Access</h3>
        <ul className="list-inside list-disc mb-4">
            <li>Meeting USFDA, EU-GMP, and WHO-GMP Requirements</li>
            <li>Addressing Regulatory Gaps in Exporting APIs</li>
            <li>Audit Readiness for Global Markets</li>
        </ul>

        <h3 className="font-semibold text-gray-800 text-xl mb-4">Closing Panel: What&#34;s Next for Indian Bulk Drugs – The Road to 2030</h3>
        <ul className="list-inside list-disc mb-4">
            <li>Global positioning & export competitiveness</li>
            <li>Technology partnerships & talent building</li>
            <li>Integrating ESG goals into manufacturing</li>
        </ul>







    </section>


        </div>
    )
}