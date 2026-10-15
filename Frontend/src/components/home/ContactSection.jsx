import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { supabase } from '../../lib/supabaseClient';

// ✅ Fix default marker icons (Leaflet + bundler issue)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// ✅ Custom blue marker icon
const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// ✅ Component to fly map to selected location
const FlyToLocation = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo([position.lat, position.lng], 12, { duration: 1.2 });
    }
  }, [position, map]);
  return null;
};

const ContactSection = () => {
  // ===== LOCATIONS DATA =====
  const locations = [
    {
      id: 1,
      city: "Bengaluru",
      country: "India",
      address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068",
      position: { lat: 12.9166, lng: 77.6101 },
    },
    {
      id: 2,
      city: "Navi Mumbai",
      country: "India",
      address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703",
      position: { lat: 19.0771, lng: 73.0009 },
    },
    {
      id: 3,
      city: "Noida",
      country: "India",
      address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309",
      position: { lat: 28.6084, lng: 77.3649 },
    },
    {
      id: 4,
      city: "Hyderabad",
      country: "India",
      address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081",
      position: { lat: 17.4483, lng: 78.3915 },
    },
    {
      id: 5,
      city: "Dubai",
      country: "UAE",
      address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates",
      position: { lat: 25.1022, lng: 55.1665 },
    },
  ];

  const defaultCenter = [22.5, 67.5]; // India center
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  // ===== FORM STATE =====
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ===== HANDLE INPUT CHANGE =====
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: digitsOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // ===== VALIDATION =====
  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '', service: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
      isValid = false;
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // ===== HANDLE SUBMIT =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLoading) return;
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setErrors({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error) {
      console.error('Supabase Error:', error);
      setErrors(prev => ({
        ...prev,
        message: 'Failed to send message. Please try again later.'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-white overflow-hidden">

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
         <motion.div
          className="absolute -top-40 -right-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#008df1]/5 blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-[#005b8f]/5 blur-3xl"
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10 w-full">

        {/* ===== HEADER ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.span
            className="sec-badge inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Let's Talk!
          </motion.span>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Contact <span style={{ color: '#008df1' }}>Us</span>
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Benefit of the society where we operate. A success website obviously needs great.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 w-full items-stretch">

          {/* ===== LEFT SIDE — LOCATIONS + MAP ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-8 flex flex-col gap-4 w-full"
          >
            {/* LOCATION CARDS */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pb-2 justify-center lg:justify-start">
              {locations.map((location) => {
                const isActive = selectedLocation?.id === location.id;
                return (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location)}
                    className={`rounded-xl sm:rounded-2xl p-3 text-left transition-all duration-300 w-auto ${
                      isActive
                        ? "bg-[#008df1] text-white shadow-lg shadow-[#008df1]/30"
                        : "bg-gray-50 text-slate-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <div
                        className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold ${
                          isActive
                            ? "bg-white text-[#008df1]"
                            : "bg-gray-200 text-[#008df1]"
                        }`}
                      >
                        {String(location.id).padStart(2, "0")}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-xs sm:text-sm truncate">{location.city}</h3>
                        <p className={`mt-0.5 text-[10px] sm:text-xs ${isActive ? "text-blue-100" : "text-slate-500"}`}>
                          {location.country}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ✅ LEAFLET MAP — No API key needed, 100% free */}
            <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-xl overflow-hidden shadow-lg border border-gray-200 relative z-0">
              <MapContainer
                center={defaultCenter}
                zoom={4}
                scrollWheelZoom={true}
                style={{ width: '100%', height: '100%', zIndex: 0 }}
              >
                {/* OpenStreetMap tiles — free, no key */}
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Auto fly to selected location */}
                <FlyToLocation position={selectedLocation?.position} />

                {/* Markers */}
                {locations.map((location) => (
                  <Marker
                    key={location.id}
                    position={[location.position.lat, location.position.lng]}
                    icon={blueIcon}
                    eventHandlers={{
                      click: () => setSelectedLocation(location),
                    }}
                  >
                    <Popup>
                      <div className="max-w-[200px] sm:max-w-[240px] p-1">
                        <h3 className="font-semibold text-sm sm:text-base text-slate-900">
                          {location.city}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600">
                          {location.address}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </motion.div>

          {/* ===== RIGHT SIDE — FORM ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white rounded-xl p-5 sm:p-6 md:p-7 shadow-xl border border-gray-100 flex flex-col"
          >
            <div className="mb-5 sm:mb-6 text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                We'll get back to you as soon as possible
              </p>
            </div>

            {/* SUCCESS MESSAGE */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-emerald-900">
                        Message Sent Successfully!
                      </p>
                      <p className="text-[11px] sm:text-xs text-emerald-700 mt-0.5">
                        Thank you! We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-3 sm:space-y-3.5 flex-1 flex flex-col"
            >
              {/* Name */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
                    errors.name
                      ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent'
                      : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
                  }`}
                  placeholder="Enter your name"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
                        <AlertCircle className="h-3 w-3 flex-shrink-0" />
                        {errors.name}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
                    errors.email
                      ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent'
                      : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
                  }`}
                  placeholder="Enter your email"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
                        <AlertCircle className="h-3 w-3 flex-shrink-0" />
                        {errors.email}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                    <Phone className={`h-3.5 w-3.5 ${errors.phone ? 'text-red-400' : 'text-gray-400'}`} />
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    inputMode="numeric"
                    className={`w-full pl-16 sm:pl-[72px] pr-3.5 sm:pr-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 text-sm ${
                      errors.phone
                        ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent'
                        : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
                    }`}
                    placeholder="98765 43210"
                  />
                </div>
                <AnimatePresence>
                  {errors.phone && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
                        <AlertCircle className="h-3 w-3 flex-shrink-0" />
                        {errors.phone}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Your Services
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 text-sm cursor-pointer ${
                    errors.service
                      ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent'
                      : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
                  }`}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Cognitive Services">Cognitive Services</option>
                  <option value="Digital Services">Digital Services</option>
                  <option value="Information Technology Services">Information Technology Services</option>
                  <option value="Infrastructure Management & Cybersecurity">Infrastructure Management & Cybersecurity</option>
                  <option value="NOC Services">NOC Services</option>
                  <option value="Cybersecurity Services">Cybersecurity Services</option>
                </select>
                <AnimatePresence>
                  {errors.service && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
                        <AlertCircle className="h-3 w-3 flex-shrink-0" />
                        {errors.service}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Message */}
              <div className="flex-1 flex flex-col">
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full flex-1 px-3.5 sm:px-4 py-2.5 rounded-lg bg-gray-50 border outline-none transition-all text-gray-900 placeholder-gray-400 resize-none text-sm min-h-[90px] ${
                    errors.message
                      ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-transparent'
                      : 'border-gray-200 focus:ring-2 focus:ring-[#008df1] focus:border-transparent'
                  }`}
                  placeholder="Write your message..."
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="flex items-center gap-1 text-[11px] sm:text-xs text-red-500 font-medium">
                        <AlertCircle className="h-3 w-3 flex-shrink-0" />
                        {errors.message}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-lg text-sm mt-2 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed shadow-gray-400/30'
                    : 'bg-[#008df1] hover:bg-[#006fa6] shadow-[#008df1]/30'
                } text-white`}
              >
                <span>{isLoading ? 'Sending...' : 'Submit Now'}</span>
                {!isLoading && <Send className="h-4 w-4" />}
              </motion.button>
            </form>

            {/* Trust Badges */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
                Secure
              </span>
              <span className="w-px h-3 bg-gray-200"></span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
                Encrypted
              </span>
              <span className="w-px h-3 bg-gray-200"></span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#008df1]" />
                Private
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;