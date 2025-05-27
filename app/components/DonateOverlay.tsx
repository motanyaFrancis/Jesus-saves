'use client';

import { useState, useEffect } from 'react'; // Import useEffect
import { useDonateOverlay } from './DonateOverlayProvider';

export default function DonateOverlay() {
    const { isOpen, close } = useDonateOverlay();
    const [currentStep, setCurrentStep] = useState<'amount' | 'details' | 'payment'>('amount');
    const [customAmount, setCustomAmount] = useState('5000'); // Default to 5000 as in the picture
    const [selectedAmount, setSelectedAmount] = useState<number | null>(5000); // Default to 5000
    const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');
    const [currency, setCurrency] = useState('KES'); // Default currency

    // State for the 'details' step
    const [donorName, setDonorName] = useState('');
    const [donorEmail, setDonorEmail] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    // State for the 'payment' step (selected payment method)
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

    // --- Effect to lock/unlock body scroll ---
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset'; // Or 'auto' or ''
        }

        // Cleanup function to ensure scroll is re-enabled when component unmounts or isOpen changes
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]); // Re-run this effect whenever isOpen changes
    // ----------------------------------------


    const handleAmountSelect = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount(amount.toString()); // Update custom amount input when a button is selected
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(e.target.value);
        setSelectedAmount(null); // Deselect any preset amount if custom is typed
    };

    const handleProceedToDetails = () => {
        const parsed = parseFloat(customAmount);
        if (!isNaN(parsed) && parsed > 0) {
            setSelectedAmount(parsed);
            setCurrentStep('details');
        } else {
            alert('Please enter a valid donation amount.');
        }
    };

    const handleProceedToPayment = () => {
        // Here you might add validation for name/email if not anonymous
        setCurrentStep('payment');
    };

    const handleFinalizeDonation = () => {
        if (!selectedPaymentMethod) {
            alert('Please select a payment method.');
            return;
        }
        // This is where you'd integrate with your payment gateway
        console.log({
            amount: selectedAmount || parseFloat(customAmount),
            currency,
            donationType,
            donorName: isAnonymous ? 'Anonymous' : donorName,
            donorEmail: isAnonymous ? 'N/A' : donorEmail,
            selectedPaymentMethod,
            // Add other form data like dedication, comment if implemented
        });
        alert('Donation process initiated!');
        close(); // Close the overlay after initiation
    };

    if (!isOpen) return null;

    const predefinedAmounts = [90000, 50000, 25000, 10000, 6000, 5000];

    return (
        <div className="fixed inset-0 bg-black/70 z-[1000] flex items-center justify-center p-4">
            <div className="w-full max-w-5xl flex flex-col"> {/* Adjusted max-w for overall slimmer look */}
                <button
                    onClick={close}
                    className="absolute top-4 right-4 px-2 py-1 rounded-full bg-white text-gray-500 hover:text-gray-800 transition z-10 cursor-pointer"
                >
                    ✕
                </button>
                <div className="flex flex-col md:flex-row gap-0 md:gap-8 flex-grow"> {/* Changed from md:gap-8 to gap-0 md:gap-8 */}
                    {/* Left Card - 20% slimmer (approx. md:w-[40%] or md:w-2/5) */}
                    {/* On small screens, this will be rounded-t-xl, on medium and up, rounded-l-xl */}
                    <div className="hidden md:block md:w-[60%] bg-gray-50 p-0 flex-col rounded-xl  shadow-lg overflow-hidden">
                        <img
                            src="/images/jesus-saves.jpg"
                            alt="Support Illustration"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 flex flex-col items-start text-left">
                            <img
                                src="/images/logo.png"
                                alt="Organization Logo"
                                className="w-24 h-auto mb-4"
                            />
                            <h2 className="text-xl font-bold text-gray-800">Support Our Mission</h2>
                            <p className="text-gray-600 mt-2 text-sm">
                                Did you know 3.4 billion people have yet to be reached with a message of Eternal Hope? With over 7,000 unreached people groups, our mission isn't just about numbers; it’s about reaching hearts across diverse cultures and languages. At Hope Channel, we are committed to sharing the message of hope in over 100 languages across more than 80 countries. Our tailored content meets the unique spiritual needs of each community, but there is still so much more to do. Give Hope today, and join us in reaching 1 billion souls with Eternal Hope.
                            </p>
                        </div>
                    </div>

                    {/* Right Card - 20% wider (approx. md:w-[60%] or md:w-3/5) */}
                    {/* On small screens, this will be rounded-b-xl, on medium and up, rounded-r-xl */}
                    <div className="w-full md:w-[40%] bg-white p-6 rounded-xl md:rounded-r-xl md:rounded-bl-none shadow-lg overflow-y-auto max-h-full">
                        {/* Secure donation header */}
                        <div className="flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-gray-700">Secure donation</span>
                        </div>

                        {currentStep === 'amount' && (
                            <>
                                {/* Give once / Monthly tabs */}
                                <div className="flex mb-6 border border-gray-300 rounded-md overflow-hidden">
                                    <button
                                        onClick={() => setDonationType('once')}
                                        className={`flex-1 py-2 text-center text-sm font-medium ${
                                            donationType === 'once'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white text-gray-700'
                                        }`}
                                    >
                                        Give once
                                    </button>
                                    <button
                                        onClick={() => setDonationType('monthly')}
                                        className={`flex-1 py-2 text-center text-sm font-medium ${
                                            donationType === 'monthly'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white text-gray-700'
                                        } flex items-center justify-center`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                        Monthly
                                    </button>
                                </div>

                                {/* Donation amount buttons */}
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    {predefinedAmounts.map(amount => (
                                        <button
                                            key={amount}
                                            onClick={() => handleAmountSelect(amount)}
                                            className={`py-3 rounded-md border text-sm font-medium transition
                                                ${selectedAmount === amount
                                                    ? 'border-blue-600 bg-blue-50 text-blue-800 ring-1 ring-blue-600'
                                                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                                                }`}
                                        >
                                            {amount >= 1000 ? `${amount / 1000}K` : amount.toString()}
                                        </button>
                                    ))}
                                </div>

                                {/* Custom amount input with currency selector */}
                                <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-blue-600 focus-within:border-blue-600 mb-4">
                                    <input
                                        type="number"
                                        placeholder="Other amount"
                                        value={customAmount}
                                        onChange={handleCustomAmountChange}
                                        className="flex-1 px-3 py-2 outline-none rounded-l-md"
                                    />
                                    <div className="relative">
                                        <select
                                            value={currency}
                                            onChange={(e) => setCurrency(e.target.value)}
                                            className="appearance-none bg-white border-l border-gray-300 pl-3 pr-8 py-2 rounded-r-md cursor-pointer outline-none"
                                        >
                                            <option value="KES">KES</option>
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Dedicate this donation checkbox */}
                                <div className="flex items-center mb-6">
                                    <input
                                        id="dedicate-donation"
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-blue-600 rounded"
                                    />
                                    <label htmlFor="dedicate-donation" className="ml-2 text-gray-700 text-sm">
                                        Dedicate this donation
                                    </label>
                                </div>

                                {/* Designate to and Add comment */}
                                <div className="text-sm mb-6">
                                    <div className="flex items-center mb-2">
                                        <span className="text-gray-700 mr-1">Designate to</span>
                                        <a href="#" className="text-blue-600 hover:underline flex items-center">
                                            Where needed most
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                    <a href="#" className="text-blue-600 hover:underline">
                                        Add comment
                                    </a>
                                </div>

                                {/* Next button */}
                                <button
                                    onClick={handleProceedToDetails}
                                    className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                                >
                                    Next
                                </button>
                            </>
                        )}

                        {currentStep === 'details' && (
                            <>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Your Details</h3>
                                <div className="mb-4">
                                    <label htmlFor="donorName" className="block text-gray-700 text-sm font-bold mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="donorName"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-blue-600"
                                        value={donorName}
                                        onChange={(e) => setDonorName(e.target.value)}
                                        disabled={isAnonymous}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="donorEmail" className="block text-gray-700 text-sm font-bold mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="donorEmail"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-blue-600"
                                        value={donorEmail}
                                        onChange={(e) => setDonorEmail(e.target.checked ? '' : e.target.value)} // Clear email if anonymous
                                        disabled={isAnonymous}
                                    />
                                </div>
                                <div className="flex items-center mb-6">
                                    <input
                                        id="anonymous-donation"
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-blue-600 rounded"
                                        checked={isAnonymous}
                                        onChange={(e) => {
                                            setIsAnonymous(e.target.checked);
                                            if (e.target.checked) {
                                                setDonorName(''); // Clear name if anonymous
                                                setDonorEmail(''); // Clear email if anonymous
                                            }
                                        }}
                                    />
                                    <label htmlFor="anonymous-donation" className="ml-2 text-gray-700 text-sm">
                                        Donate Anonymously
                                    </label>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <button
                                        onClick={() => setCurrentStep('amount')}
                                        className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-400 transition"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handleProceedToPayment}
                                        className="flex-1 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        )}

                        {currentStep === 'payment' && (
                            <>
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Choose Payment Option</h3>
                                <div className="flex flex-col space-y-4 mb-6">
                                    <button
                                        onClick={() => setSelectedPaymentMethod('M-Pesa')}
                                        className={`py-3 rounded-md font-semibold transition ${
                                            selectedPaymentMethod === 'M-Pesa'
                                                ? 'bg-red-700 text-white ring-2 ring-red-500'
                                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                        }`}
                                    >
                                        M-Pesa
                                    </button>
                                    <button
                                        onClick={() => setSelectedPaymentMethod('Visa / MasterCard')}
                                        className={`py-3 rounded-md font-semibold transition ${
                                            selectedPaymentMethod === 'Visa / MasterCard'
                                                ? 'bg-gray-800 text-white ring-2 ring-gray-600'
                                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                        }`}
                                    >
                                        Visa / MasterCard
                                    </button>
                                    <button
                                        onClick={() => setSelectedPaymentMethod('PayPal')}
                                        className={`py-3 rounded-md font-semibold transition ${
                                            selectedPaymentMethod === 'PayPal'
                                                ? 'bg-blue-600 text-white ring-2 ring-blue-500'
                                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                        }`}
                                    >
                                        PayPal
                                    </button>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <button
                                        onClick={() => setCurrentStep('details')}
                                        className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-md font-semibold hover:bg-gray-400 transition"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handleFinalizeDonation}
                                        className="flex-1 bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
                                    >
                                        Complete/Finalize
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}