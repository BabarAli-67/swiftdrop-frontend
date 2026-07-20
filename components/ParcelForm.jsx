'use client';

import { useRef, useState } from 'react';
import { parcelSchema } from '@/lib/parcelSchema';

export default function ParcelForm() {
  const senderRef = useRef(null);
  const recipientRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const weightRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      senderName: senderRef.current.value,
      recipientName: recipientRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      weight: weightRef.current.value,
    };

    const result = parcelSchema.safeParse(formData);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      setMessage('Please fix the errors.');
      return;
    }

    setErrors({});
    setMessage('Sending...');

    setTimeout(() => {
      console.log('Sent to API:', result.data);
      setMessage('Parcel booked successfully.');
      e.target.reset();
    }, 500);
  }

  return (
    <div className="border rounded-lg p-4 bg-white mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Book a Parcel</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            ref={senderRef}
            type="text"
            placeholder="Sender name"
            className="border rounded px-2 py-1 text-gray-900 w-full"
          />
          {errors.senderName && (
            <p className="text-red-600 text-sm">{errors.senderName[0]}</p>
          )}
        </div>

        <div className="mb-3">
          <input
            ref={recipientRef}
            type="text"
            placeholder="Recipient name"
            className="border rounded px-2 py-1 text-gray-900 w-full"
          />
          {errors.recipientName && (
            <p className="text-red-600 text-sm">{errors.recipientName[0]}</p>
          )}
        </div>

        <div className="mb-3">
          <input
            ref={phoneRef}
            type="text"
            placeholder="Phone"
            className="border rounded px-2 py-1 text-gray-900 w-full"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone[0]}</p>
          )}
        </div>

        <div className="mb-3">
          <input
            ref={addressRef}
            type="text"
            placeholder="Address"
            className="border rounded px-2 py-1 text-gray-900 w-full"
          />
          {errors.address && (
            <p className="text-red-600 text-sm">{errors.address[0]}</p>
          )}
        </div>

        <div className="mb-3">
          <input
            ref={weightRef}
            type="text"
            placeholder="Weight"
            className="border rounded px-2 py-1 text-gray-900 w-full"
          />
          {errors.weight && (
            <p className="text-red-600 text-sm">{errors.weight[0]}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Submit
        </button>

        {message && <p className="mt-3 text-gray-900 text-sm">{message}</p>}
      </form>
    </div>
  );
}
